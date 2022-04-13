import { resolve } from 'path';

import { VisitorsRepositoryInMemory } from "@modules/users/infra/typeorm/repositories/inMemory/VisitorsRepositoryInMeory";


const mocks = {
  validVisitor: '../../../../../Database/mocks/validVisitor.json',
}

const visitantorsDataBase = resolve('Database', 'Visitantes.json');

let visitorsRepository: VisitorsRepositoryInMemory;
describe('List Visitors', () => {
  beforeEach(() => {

    visitorsRepository = new VisitorsRepositoryInMemory();
  })
  it('should return a list of visitors filtered By Store', async () => {
    // retornar um array de visitantes
    const visitors = await visitorsRepository.listAllBySigla('PR-MARIN');
  })
})