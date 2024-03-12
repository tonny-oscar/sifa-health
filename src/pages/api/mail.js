const nodemailer = require('nodemailer');

export default function mail(req, res) {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAILER_EMAIL,
      pass: process.env.MAILER_PASS,
    },
  });

  const createEmail = (headerImg, message) => {
    return `<html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
      <style>
        * {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          color: black;
        }
        
        body {
          margin: 20px;
          padding: 20px;
        }
  
        h1 {
          color: #AC7D63;
          text-align: center;
          font-size: 30px;
        }
  
        p {
          margin: 10px 0;
        }
  
        .message {
          background-color: #FFFCF8;
          padding: 15px;  
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
  
        .header-image {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }
        
        .flex-center {
          display: flex;
          justify-content: center;
        }
      </style>
    </head>
    <body>
      <div class='flex-center'>
        <img src="${headerImg}" alt="Header Image" class="header-image">
      </div>
      <div class="message">${message}</div>
    </body> 
  </html>
  `;
  };

  const adminMailOptions = {
    from: process.env.MAILER_EMAIL,
    to: process.env.MAILER_EMAIL,
    subject,
    text: `New message from ${name} \n Subject: ${subject} \n Message: ${message} \n Email Address: ${email}`,
    html: createEmail(
      'https://i.imgur.com/CL0cfQb.png',
      `<h1>New Inquiry from ${name}</h1>
      <p>Here's a message from the client:</p>
      <p>${message}</p>
      <p>Client Email: ${email}</p>`
    ),
    replyTo: email,
  };

  const patientMailOptions = {
    from: process.env.MAILER_EMAIL,
    to: email,
    subject: 'Thank You For Your Inquiry',
    text: `Thank You For Your Inquiry! \nDear ${name}, \nI appreciate you taking the time to contact me with your inquiry. Your message is important to me, and I want to ensure you receive the attention it deserves. \nPlease be advised that this email address is not monitored on a constant basis and is not an emergency hotline. If you are experiencing a mental health emergency or need immediate assistance, please contact your local emergency services. \nI strive to provide the best possible care to each individual, and I understand the importance of timely responses. Rest assured that I have received your message, and I will make every effort to get back to you within 48-72 hours. \nIn the meantime, if your matter requires urgent attention, I strongly recommend reaching out to the appropriate emergency services in your area. Thank you for your understanding and patience. I look forward to assisting you. \nBest regards, \nRoxanne Flaherty \nDNP, PMHNP-BC, FNP-C \nTel: 323-433-9935 \nEmail: admin@roxanneflaherty.com`,
    html: createEmail(
      'https://i.imgur.com/CL0cfQb.png',
      `<h1>Thank You For Your Inquiry!</h1>
      <p>Dear ${name}, <br></br>I appreciate you taking the time to contact me with your inquiry. Your message is important to me, and I want to ensure you receive the attention it deserves.</p>
      <p>Please be advised that this email address is not monitored on a constant basis and is not an emergency hotline. If you are experiencing a mental health emergency or need immediate assistance, please contact your local emergency services.</p>
      <p>I strive to provide the best possible care to each individual, and I understand the importance of timely responses. Rest assured that I have received your message, and I will make every effort to get back to you within 48-72 hours.</p>
      <p>In the meantime, if your matter requires urgent attention, I strongly recommend reaching out to the appropriate emergency services in your area. Thank you for your understanding and patience. I look forward to assisting you.</p>
      <p>Best regards,<br>Katie Sanger<br/>
      Tel: 858-357-7023<br/>
      Email: support@katiesanger.com</p>`
    ),
    replyTo: process.env.MAILER_EMAIL,
  };

  transporter.sendMail(adminMailOptions, (error) => {
    if (error) {
      res.status(500).json(error);
    } else {
      transporter.sendMail(patientMailOptions, (err, info) => {
        if (err) {
          res.status(500).json(err);
        } else {
          res.status(200).json({ message: info.response });
        }
      });
    }
  });
}
