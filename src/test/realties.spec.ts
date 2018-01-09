import * as request from 'supertest';

import server from '../';
import { Realty } from '../modules/realties/realtyModel';

describe('Realties', () => {
  const realty = new Realty({
    code: Date.now().toString(),
    name: 'string',
    contact: 'string',
    address: {
      cep: 'string',
      publicPlace: 'string',
      number: 'string',
      neighborhood: 'string',
      city: 'string',
      uf: 'ST',
      complement: 'string'
    },
    quantBedroom: 1,
    usefulArea: 1,
    quantBathroom: 1,
    quantGarages: 1,
    quantSuite: 1
  });

  it('should create a Realty', done => {
    request(server)
      .post('/api/v1/realties')
      .send(realty)
      .expect(201)
      .expect({
        status: 201,
        message: 'Realty successfully created!'
      })
      .end(done);
  });

  it('should return a Realty', done => {
    request(server)
      .get(`/api/v1/realties/${realty._id}`)
      .expect(200)
      .end(done);
  });

  it('should return all Realties', done => {
    request(server)
      .get(`/api/v1/realties`)
      .expect(200)
      .end(done);
  });
});
