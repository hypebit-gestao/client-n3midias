// import { EmailTemplate } from "../../app/components/EmailTemplate";
// import { Resend } from "resend";

// const resend = new Resend("re_UCQN9DJ9_NcxqJbHqZBtyATXKv6QhAMZt");

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { fullName, email, subject, phone, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: false, //ssl
      auth: {
        user: "comercial@n3midias.com.br",
        pass: "6EbARfC6TLH2",
        // pass: "svpe ttpq iokn psfs",
      },
    });

    const mailOption = {
      from: email,
      to: "comercial@n3midias.com.br",
      subject: subject,
      phone: phone,
      html: `
      <div> 
      <h2>Nome completo: ${fullName}</h2>
      <h2>Telefone: ${phone}</h2>
      <p> ${message} </p>
      </div>
        
          `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json({ message: "Email enviado" }, { status: 200 });
  } catch (error) {
    console.log("Error: ", error);
    return NextResponse.json(
      { message: "Erro ao enviar email" },
      { status: 400 }
    );
  }
}

// export default async (req, res) => {
//   const { data, error } = await resend.emails.send({
//     from: "Acme <catalogoplace@gmail.com>",
//     to: ["rafacesar0070@gmail.com"],
//     subject: "Hello world",
//     text: "Hello world",
//     react: EmailTemplate({ firstName: "John" }),
//   });

//   if (error) {
//     console.log("Error", error);
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
// };
