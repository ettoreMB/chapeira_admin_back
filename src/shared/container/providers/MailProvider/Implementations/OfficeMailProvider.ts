import nodemailer, { Transporter } from "nodemailer";
import { IMailProvider } from "../IMailProvider";
import handlebars from 'handlebars';
import fs from 'fs';

class OfficeMailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: 'suporte@chapeira.com.br',
        pass: '@Mepm2412',
      }
    });
    this.client = transporter
  }
  async sendEmail(to: string, subject: string, variables: any, path: string, filePath?: string): Promise<void> {
    const templateFileContent = fs.readFileSync(path).toString("utf-8");
    const templateParse = handlebars.compile(templateFileContent);

    const templateHtml = templateParse(variables);
    if (filePath) {
      const message = await this.client.sendMail({
        to,
        from: 'suporte@chapeira.com.br',
        subject,
        html: templateHtml,
        attachments: [
          { path: filePath }
        ]
      })

      return message
    }
    const message = await this.client.sendMail({
      to,
      from: 'suporte@chapeira.com.br',
      subject,
      html: templateHtml,
    })

    console.log('Message sent: %s', message.messageId);
  }

}
export { OfficeMailProvider }