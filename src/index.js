const template = require("@babel/template").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const serialize = require('serialize-javascript');
const fs = require('fs');

function deserialize(serializedJavascript){
  return eval('(' + serializedJavascript + ')');
}

const ts = require("typescript");

function delint(sourceFile) {
    delintNode(sourceFile);

    function delintNode(node) {
        switch (node.kind) {
            case ts.SyntaxKind.InterfaceDeclaration:
                console.log(node.name.escapedText)
        }

        ts.forEachChild(node, delintNode);
    }
}

const src = fs.readFileSync('./src/babel-types.d.ts')
let sourceFile = ts.createSourceFile("ff", src.toString(), ts.ScriptTarget.ES2015, /*setParentNodes */ true);
delint(sourceFile);


// const graphqlScalar = require('./graphql/scalar');
//
//
// let scalars = []
// for (var property in t) {
//
//     if(typeof(t[property]) === "function" && property[0].toUpperCase() === property[0]) {
//       scalars.push(graphqlScalar({
//         SCALAR_IDENTIFIER: t.identifier(property),
//         SCALAR_NAME: t.stringLiteral(property),
//         SCALAR_DESCRIPTION: t.stringLiteral("Some descriptor"),
//       }))
//     }
// }
//
// const ast = t.program([
//   template(`let {GraphQLScalarType} = require("graphql")`)(),
//   ...scalars
// ]);
// const astr = serialize(ast);
// nast = deserialize(astr);
//
// console.log(generate(ast).code);
