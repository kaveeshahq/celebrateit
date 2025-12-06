import transporter from "../configs/mailer.js";

export const contactFormHandler = async (req, res) => {
  const { firstName, lastName, address, contactNumber, email, comments } = req.body;

  if (!firstName || !email || !comments) {
    return res.status(400).json({ error: "Required fields missing." });
  }

  const mailOptions = {
    from: email,
    to: process.env.ADMIN_EMAIL,
    subject: "New Contact Us Submission",
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${contactNumber}
      Address: ${address}
      Comments:
      ${comments}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
};
