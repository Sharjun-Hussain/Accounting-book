const nodemailer = require('nodemailer')

const mail = async (subject, to, message) =>{

    const trasporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "mrjoon005@gmail.com",
            pass: "rndrmdrlbkqgedar",
        },
    })
    
    const messages = message
    
        const options = {
            from: "mail@Masjidhulhaadhi.com <mail@Masjidhulhaadhi.com>",
            to: to,
            subject: subject,
            text: messages,
            html: `
            <h1 style="color:red; font-size:50px; text-align:center;"> Verify your Email - Accounting Book Masjidhul Haadhi - Saainthamaruthu </h1>
            <div style="color:black; font-size:16px; text-align:justify;" ><p> ${messages}</p></div>`
        }
    
        const SENDMAIL = async (mailDetails, callback) => {
            try {
                const info = await trasporter.sendMail(mailDetails)
                callback(info);
            } catch (error) {
                console.log(error);
            }
        };
    
        SENDMAIL(options, (info) => {
            console.log("Email sent successfully");
            console.log("MESSAGE ID: ", info.messageId);
        });

}


    module.exports = mail 