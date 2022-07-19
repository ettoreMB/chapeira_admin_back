import "reflect-metadata";
import mocks from '../../../../mocks/validStore.json'
import { GetStoreBySiglaUseCase } from "./GetStoreBySiglaUseCase";
import { StoreRepositoryInMemory } from "@modules/stores/infra/typeorm/repositories/inMemory/StoresRepositoryInMemory";

let storesUseCase: GetStoreBySiglaUseCase;
let storesRespositoryInMemory: StoreRepositoryInMemory;

const storeMocks = {
  store: mocks
}

describe('List Stores', () => {
  beforeEach(() => {
    storesRespositoryInMemory = new StoreRepositoryInMemory();
    storesUseCase = new GetStoreBySiglaUseCase(storesRespositoryInMemory)
  })

  it('Should Be able to list all stores if not pass any reference', async () => {
    const storesLenght = 2

    const stores = await storesUseCase.execute({});

    expect(stores).toHaveLength(storesLenght)

  });

  it('Should return one store passing Loja_Sigla', async () => {
    const store = storeMocks.store
    const loja_sigla = 'PR-MARIN'
    const stores = await storesUseCase.execute({ Loja_Sigla: loja_sigla })
    expect(JSON.stringify(store)).toEqual(JSON.stringify(stores))
  });

  it('Should return one store passing Loja_name', async () => {
    const store = storeMocks.store
    const loja_nome = 'pr-marin'
    const stores = await storesUseCase.execute({ Loja_Nome: loja_nome })
    expect(JSON.stringify(store)).toEqual(JSON.stringify(stores))
  })
})