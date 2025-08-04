exports.contactUsTemplate = (name, email, phone, message) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Contact Confirmation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f7f9fc;
        margin: 0;
        padding: 0;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 30px auto;
        padding: 20px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      }
      .logo {
        text-align: center;
        margin-bottom: 20px;
      }
      .logo img {
        max-width: 140px;
      }
      .title {
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        color: #1e40af;
        margin-bottom: 10px;
      }
      .body-content {
        font-size: 16px;
        line-height: 1.6;
      }
      .highlight {
        font-weight: 600;
        color: #111827;
      }
      .footer {
        margin-top: 30px;
        font-size: 14px;
        color: #888;
        text-align: center;
      }
      a {
        color: #1e40af;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo">
        <a href="https://autoconsult.com">
          <img src="https://i.ibb.co/0ZL7K7g/autoconsult-logo.png" alt="AutoConsult Logo" />
        </a>
      </div>
      <div class="title">Thanks for reaching out!</div>
      <div class="body-content">
        <p>Hi <span class="highlight">${name}</span>,</p>
        <p>We’ve received your message and our team will get back to you soon.</p>
        <p>Here’s what you submitted:</p>
        <ul>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Message:</strong><br/> ${message}</li>
        </ul>
        <p>We appreciate your interest in AutoConsult!</p>
      </div>
      <div class="footer">
        Need urgent help? Email us at 
        <a href="mailto:support@autoconsult.com">support@autoconsult.com</a>
      </div>
    </div>
  </body>
  </html>`;
};
