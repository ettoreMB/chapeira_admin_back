import { injectable, inject } from "tsyringe";

class AuthenticateUserUseCase {
  // @injectable()
  constructor(
    // @inject('AuthenticateUser')
    // private authenticateUser: IAuthenticateUser;
  ) { }

  async execute({ email, password }) {

    return { email, password }
  }
}

export { AuthenticateUserUseCase }