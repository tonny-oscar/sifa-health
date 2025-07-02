const functions = require("firebase-functions");
const { google } = require("googleapis");
const cors = require("cors")({ origin: true });

const oauth2Client = new google.auth.OAuth2(
  "YOUR_CLIENT_ID",
  "YOUR_CLIENT_SECRET",
  "YOUR_REDIRECT_URI"
);

oauth2Client.setCredentials({
  refresh_token: "YOUR_REFRESH_TOKEN", // get this manually one-time
});

exports.createBooking = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const { name, email, phone, reason, startTime, endTime } = req.body;

    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    // Optional: check availability
    const freebusy = await calendar.freebusy.query({
      requestBody: {
        timeMin: startTime,
        timeMax: endTime,
        timeZone: "Africa/Nairobi",
        items: [{ id: "primary" }],
      },
    });

    const isBusy = freebusy.data.calendars.primary.busy.length > 0;

    if (isBusy) {
      return res.status(400).send({ message: "This time is already booked." });
    }

    const event = {
      summary: `Appointment with ${name}`,
      description: `Phone: ${phone}\nReason: ${reason}`,
      start: { dateTime: startTime, timeZone: "Africa/Nairobi" },
      end: { dateTime: endTime, timeZone: "Africa/Nairobi" },
      attendees: [{ email }],
    };

    try {
      const response = await calendar.events.insert({
        calendarId: "primary",
        requestBody: event,
      });

      return res.status(200).send({ message: "Booking created!", eventId: response.data.id });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Calendar API error", error });
    }
  });
});
