/**
 * @api {get} /realties Lista todos os imóveis
 * @apiName RealtiesList
 * @apiGroup Realties
 * @apiVersion  1.0.0
 */

/**
 * @api {get} /realties/:id Lista um imóveis
 * @apiName RealtyList
 * @apiParam {String} id Id do imóvel
 * @apiGroup Realties
 * @apiVersion  1.0.0
 */

/**
 * @api {post} /realties Cria um imóveis
 *
 * @apiParam{String}   code                  Codigo do imóvel.
 * @apiParam{String}   name                  Nome do imóvel.
 * @apiParam{String}   price                 Preço.
 * @apiParam{Object}   address               Endereço.
 * @apiParam{String}   address.cep           CEP.
 * @apiParam{String}   address.publicPlace   Logradouro.
 * @apiParam{String}   address.number        Número.
 * @apiParam{String}   address.city          Cidade.
 * @apiParam{String}   address.uf            Estado.
 * @apiParam{String}   address.complement    Complemento.
 * @apiParam{String}   quantBedrom           Quantidade de Quartos.
 * @apiParam{String}   usefulArea            Area construida .
 * @apiParam{String}   quantBathroom         Quantidade de Banheiros.
 * @apiParam{String}   quantGarages          Quantidade de Garagens.
 * @apiParam{String}   quantSuite            Quantidade de Suites.
 *
 * @apiName RealtyCreate
 * @apiGroup Realties
 * @apiVersion  1.0.0
 */
