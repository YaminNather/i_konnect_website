import nodemailer from "nodemailer";

export class MailSender {
    public async sendMail(): Promise<void> {
        const transporter = nodemailer.createTransport({
            host: "mail.itkonnect.in",
            port: 25,
            auth: {
                user: "noreply@itkonnect.in",
                pass: "W;L?MCAk%B3m"
            }
        });

        await transporter.sendMail({
            from: "noreply@itkonnect.in",
            to: [
                "sridevi@micsys.in",
                "vadivel@it-world.in"
            ],
        });
    }
}