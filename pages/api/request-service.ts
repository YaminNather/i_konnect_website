import type { NextApiRequest, NextApiResponse } from "next";

import nodemailer from "nodemailer";

export type Service = "Repair" | "Data Recovery";

export interface RequestServiceRequestBody {
    phoneNumber: string;
    name: string;
    email: string;
    service: Service | undefined;
}

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    if(request.method != "POST") {
       response.status(405).send("Method not allowed");
       return;
    }

    const requestBody: RequestServiceRequestBody = request.body;
    
    const mailBody: string = JSON.stringify(requestBody, null, 2);

    try {
        const transporter = nodemailer.createTransport({
            host: "mail.itkonnect.in",
            port: 465,
            auth: {
                user: "noreply@itkonnect.in",
                pass: "W;L?MCAk%B3m"
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        await transporter.sendMail({
            from: "noreply@itkonnect.in",
            to: [
                "yamin@cynfas.com"
            ],
            subject: "Requesting Service",
            text: mailBody
        });
    }
    catch(exception) {
        response.status(500).send(`Error sending mail:\n${JSON.stringify(exception, null, 2)}`);
        return;
    }

    response.status(200).send("Sent mail successfully");
}