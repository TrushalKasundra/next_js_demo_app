import { SMTPClient } from "emailjs";

export async function POST(request: Request) {
    const data = await request.json();

      const client = new SMTPClient({
            user: 'calendarpdf1401@gmail.com',  // Your Gmail address
            password: 'cmdi vjxo obfl ycta', // Use the App Password created for your account
            host: 'smtp.gmail.com',             // Correct SMTP server for Gmail
            ssl: true,
            port: 465 // Use 587 for TLS, 465 for SSL
        });

        try {
            const message = await client.sendAsync({
                text: data.message ? data.message : "" ,
                from: 'calendarpdf1401@gmail.com',
                to: data.email,
                subject: data.subject,
            });
            console.log("hello",message);
        } catch (err) {
            console.error("error",err);
        }

    return new Response(JSON.stringify({message: "message sent Succussfully "}), {
      headers: {
        "content-Type": "application/json",
      },
      status: 201,
    });
  }
  