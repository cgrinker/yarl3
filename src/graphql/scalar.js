const template = require("@babel/template").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const serialize = require('serialize-javascript');

const _graphqlScalar = template(`
const SCALAR_IDENTIFIER = new GraphQLScalarType({
  name: SCALAR_NAME,
  description: SCALAR_DESCRIPTION,
  serialize: SCALAR_SERIALIZE,
  parseValue: SCALAR_PARSEVALUE,
  parseLiteral: SCALAR_PARSELITERAL
});
`);


let _defaultConfig = {
  SCALAR_SERIALIZE: template(`(val)=> {return JSON.stringify(val)}`)({JSON: t.identifier("JSON")}).expression,
  SCALAR_PARSEVALUE: template(`(val)=> {return JSON.parse(val)}`)({JSON: t.identifier("JSON")}).expression,
  SCALAR_PARSELITERAL: template(`(ast)=> {return JSON.parse(ast.value)}`)({JSON: t.identifier("JSON")}).expression,
}
function graphqlScalar(config) {
  let conf = Object.assign({}, _defaultConfig, config);
  return _graphqlScalar(conf);
}

module.exports = graphqlScalar;
