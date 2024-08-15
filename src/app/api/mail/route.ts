import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
  const { email } = await request.json();

  const { data, error } = await resend.emails.send({
    from: `rafael@catalogoplace.com.br`,
    to: [email],
    subject: "Hello",
    html: `
            <html>
                <body>
                    <h1>Hello</h1>
                    <p>World</p>
                </body>
            </html>
        `,
  });

  if (error) {
    return Response.json(error);
  }

  return Response.json({ message: "Email enviado com sucesso" });
}
