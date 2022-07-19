import "reflect-metadata";
import { userMock } from "../../../../mocks/user";
import { UsersRepositoryInMemory } from "@modules/users/infra/typeorm/repositories/inMemory/UsersRepostioryInMemory"
import { GetUsersBySiglaUseCase } from "./GetUsersbyStoreUseCase"
import { GetUserServicesByStoreUseCase } from "../GetUserServicesByStore/GetUserServicesByStoreUseCase";

let getUsersBySiglsUseCase: GetUsersBySiglaUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory
let getUserServicesByStoreUseCase: GetUserServicesByStoreUseCase

describe('Get Users By Sigla Test', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    getUserServicesByStoreUseCase = new GetUserServicesByStoreUseCase(usersRepositoryInMemory)
    getUsersBySiglsUseCase = new GetUsersBySiglaUseCase(usersRepositoryInMemory)
  })
  it('Should Return all Users from store if not pass universe Id', async () => {
    const user = userMock
    const users = await getUsersBySiglsUseCase.execute({ sigla: 'PR-MARIN' })

    expect(users).toEqual(user)
  });

  it('Should Return all users from store if pass universo Id', async () => {
    const user = userMock
    const users = await getUsersBySiglsUseCase.execute({ sigla: 'PR-MARIN', universe: 3 })
    expect(users).toHaveLength(1)
  });

  it('Should Return all users with type Terceiro', async() => {
    const user = Object.create(userMock)
    user.Tipo = 'Terceiro'
    const users = await getUserServicesByStoreUseCase.execute('PR-MARIN')
    

    expect(users).toHaveLength(1)
  })
})