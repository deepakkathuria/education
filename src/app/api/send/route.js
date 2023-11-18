// // // import { EmailTemplate } from '../../../components/EmailTemplate';
// // import { NextResponse } from "next/server";
// // import { Resend } from "resend";

// // const resend = new Resend(process.env.RESEND_API_KEY);
// // const fromEmail = process.env.FROM_EMAIL;

// // export async function POST(req, res) {
// //   const { email, subject, message } = await req.json();
// //   console.log(email, subject, message);
// //   try {
// //     const data = await resend.emails.send({
// //       from: fromEmail,
// //       to: [fromEmail, email],
// //       subject: subject,
// //       react: (
// //         <>
// //           <h1>{subject}</h1>
// //           <p>Thank you for contacting us!</p>
// //           <p>New message submitted:</p>
// //           <p>{message}</p>
// //         </>
// //       ),
// //     });
// //     return NextResponse.json(data);
// //   } catch (error) {
// //     return NextResponse.json({ error });
// //   }
// // }









// import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";

// export async function POST(request) {
//   //   const { email, name, message } = await request.json();
//   const { email, name, message } = {
//     email: "gaurav.tanwar@proton.me",
//     name: "gaurav",
//     message: "hi from mars",
//   };

//   const transport = nodemailer.createTransport({
//     service: "gmail",
//     /* 
//       setting service as 'gmail' is same as providing these setings:
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true
//       If you want to use a different email provider other than gmail, you need to provide these manually.
//       Or you can go use these well known services and their settings at
//       https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
//   */
//     auth: {
//       user: process.env.NODEMAILER_EMAIL,
//       pass: process.env.NODEMAILER_PW,
//     },
//   });

//   const mailOptions = {
//     from: process.env.MY_EMAIL,
//     to: process.env.MY_EMAIL,
//     bcc: email, //(uncomment this line if you want to send a copy to the sender)
//     subject: `Message from ${name} (${email})`,
//     text: message,
//   };

//   const sendMailPromise = () =>
//     new Promise<string>((resolve, reject) => {
//       transport.sendMail(mailOptions, function (err) {
//         if (!err) {
//           resolve("Email sent");
//         } else {
//           reject(err.message);
//         }
//       });
//     });

//   try {
//     await sendMailPromise();
//     return NextResponse.json({ message: "Email sent" });
//   } catch (err) {
//     return NextResponse.json({ error: err }, { status: 500 });
//   }
// }