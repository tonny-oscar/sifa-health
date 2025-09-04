import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI!;
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN!;
const SENDER_EMAIL = process.env.SENDER_EMAIL!;
const SMTP_PASS = process.env.SMTP_PASS!;

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  try {
    const { name, email, phone, reason, startTime, endTime } = req.body;
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // Check if time slot is free
    const busy = await calendar.freebusy.query({
      requestBody: {
        timeMin: startTime,
        timeMax: endTime,
        timeZone: 'Africa/Nairobi',
        items: [{ id: 'primary' }],
      },
    });

    const isBusy = busy?.data?.calendars?.primary?.busy?.length ?? 0;
    if (isBusy > 0) {
      return res.status(409).json({ message: 'Time slot already booked.' });
    }

    // Create calendar event with Google Meet
    const response = await calendar.events.insert({
      calendarId: 'primary',
      conferenceDataVersion: 1,
      requestBody: {
        summary: `Sifa Health Appointment - ${name}`,
        description: `Phone: ${phone}\nReason: ${reason}`,
        start: { dateTime: startTime, timeZone: 'Africa/Nairobi' },
        end: { dateTime: endTime, timeZone: 'Africa/Nairobi' },
        attendees: [{ email }],
        conferenceData: {
          createRequest: {
            requestId: `meet-${Date.now()}`,
            conferenceSolutionKey: { type: 'hangoutsMeet' },
          },
        },
      },
    });

    const eventLink = response.data.htmlLink || 'https://calendar.google.com/';
    const meetLink = response.data.conferenceData?.entryPoints?.[0]?.uri || '';

    // Send confirmation email to client
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SENDER_EMAIL,
        pass: SMTP_PASS,
      },
    });

    await transport.sendMail({
      from: `Sifa Health <${SENDER_EMAIL}>`,
      to: email,
      subject: 'Sifa Health Appointment Confirmation',
      html: `
        <h2>Hello ${name},</h2>
        <p>Your appointment has been confirmed:</p>
        <ul>
          <li><strong>Date:</strong> ${new Date(startTime).toLocaleString('en-KE')}</li>
          <li><strong>Meet Link:</strong> <a href="${meetLink}">${meetLink}</a></li>
        </ul>
        <p>We look forward to seeing you!</p>
        <br/><em>- Sifa Health Team</em>
      `,
    });

    return res.status(200).json({ message: 'Booking successful!', meetLink });
  } catch (error: any) {
    console.error('Booking error:', error);
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
}
