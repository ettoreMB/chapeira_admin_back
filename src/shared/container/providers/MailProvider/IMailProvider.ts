interface IMailProvider {
  sendEmail(to: string, subject: string, variables: any, path: string, filePath: string): Promise<void>
}

export { IMailProvider }