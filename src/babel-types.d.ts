export interface Comment {
    value: string;
    start: number;
    end: number;
    loc: SourceLocation;
}

export interface CommentBlock extends Comment {
    type: "CommentBlock";
}

export interface CommentLine extends Comment {
    type: "CommentLine";
}

export interface SourceLocation {
    start: {
        line: number;
        column: number;
    };

    end: {
        line: number;
        column: number;
    };
}

export interface Node {
    type: string;
    leadingComments?: Comment[];
    innerComments?: Comment[];
    trailingComments?: Comment[];
    start: number;
    end: number;
    loc: SourceLocation;
}

export interface ArrayExpression extends Node {
    type: "ArrayExpression";
    elements: Array<null | Expression | SpreadElement>;
}

export interface AssignmentExpression extends Node {
    type: "AssignmentExpression";
    operator: "=" | "+=" | "-=" | "*=" | "/=" | "%=" | "<<=" | ">>=" | ">>>=" | "|=" | "^=" | "&=";
    left: LVal;
    right: Expression;
}

export interface BinaryExpression extends Node {
    type: "BinaryExpression";
    operator: "+" | "-" | "/" | "%" | "*" | "**" | "&" | "|" | ">>" | ">>>" | "<<" | "^" | "==" | "===" | "!=" | "!==" | "in" | "instanceof" | ">" | "<" | ">=" | "<=";
    left: Expression;
    right: Expression;
}

export interface Directive extends Node {
    type: "Directive";
    value: DirectiveLiteral;
}

export interface DirectiveLiteral extends Node {
    type: "DirectiveLiteral";
    value: string;
}

export interface BlockStatement extends Node {
    type: "BlockStatement";
    directives?: Directive[];
    body: Statement[];
}

export interface BreakStatement extends Node {
    type: "BreakStatement";
    label: Identifier;
}

export interface CallExpression extends Node {
    type: "CallExpression";
    callee: Expression | Super;
    arguments: Array<Expression | SpreadElement>;
}

export interface CatchClause extends Node {
    type: "CatchClause";
    param: Identifier;
    body: BlockStatement;
}

export interface ConditionalExpression extends Node {
    type: "ConditionalExpression";
    test: Expression;
    consequent: Expression;
    alternate: Expression;
}

export interface ContinueStatement extends Node {
    type: "ContinueStatement";
    label: Identifier;
}

export interface DebuggerStatement extends Node {
    type: "DebuggerStatement";
}

export interface DoWhileStatement extends Node {
    type: "DoWhileStatement";
    test: Expression;
    body: Statement;
}

export interface EmptyStatement extends Node {
    type: "EmptyStatement";
}

export interface ExpressionStatement extends Node {
    type: "ExpressionStatement";
    expression: Expression;
}

export interface File extends Node {
    type: "File";
    program: Program;
    comments: Comment[];
    tokens: any[];
}

export interface ForInStatement extends Node {
    type: "ForInStatement";
    left: VariableDeclaration | LVal;
    right: Expression;
    body: Statement;
}

export interface ForStatement extends Node {
    type: "ForStatement";
    init: VariableDeclaration | Expression;
    test: Expression;
    update: Expression;
    body: Statement;
}

export interface FunctionDeclaration extends Node {
    type: "FunctionDeclaration";
    id: Identifier;
    params: LVal[];
    body: BlockStatement;
    generator: boolean;
    async: boolean;
    returnType?: TypeAnnotation;
    typeParameters?: TypeParameterDeclaration;
}

export interface FunctionExpression extends Node {
    type: "FunctionExpression";
    id: Identifier;
    params: LVal[];
    body: BlockStatement;
    generator: boolean;
    async: boolean;
    returnType?: TypeAnnotation;
    typeParameters?: TypeParameterDeclaration;
}

export interface Identifier extends Node {
    type: "Identifier";
    name: string;
    typeAnnotation?: TypeAnnotation;
}

export interface IfStatement extends Node {
    type: "IfStatement";
    test: Expression;
    consequent: Statement;
    alternate: Statement;
}

export interface LabeledStatement extends Node {
    type: "LabeledStatement";
    label: Identifier;
    body: Statement;
}

export interface StringLiteral extends Node {
    type: "StringLiteral";
    value: string;
}

export interface NumericLiteral extends Node {
    type: "NumericLiteral";
    value: number;
}

export interface NullLiteral extends Node {
    type: "NullLiteral";
}

export interface BooleanLiteral extends Node {
    type: "BooleanLiteral";
    value: boolean;
}

export interface RegExpLiteral extends Node {
    type: "RegExpLiteral";
    pattern: string;
    flags?: string;
}

export interface LogicalExpression extends Node {
    type: "LogicalExpression";
    operator: "||" | "&&";
    left: Expression;
    right: Expression;
}

export interface MemberExpression extends Node {
    type: "MemberExpression";
    object: Expression | Super;
    property: Expression;
    computed: boolean;
}

export interface NewExpression extends Node {
    type: "NewExpression";
    callee: Expression | Super;
    arguments: Array<Expression | SpreadElement>;
}

export interface Program extends Node {
    type: "Program";
    sourceType: "script" | "module";
    directives?: Directive[];
    body: Array<Statement | ModuleDeclaration>;
}

export interface ObjectExpression extends Node {
    type: "ObjectExpression";
    properties: Array<ObjectProperty | ObjectMethod | SpreadProperty>;
}

export interface ObjectMethod extends Node {
    type: "ObjectMethod";
    key: Expression;
    kind: "get" | "set" | "method";
    shorthand: boolean;
    computed: boolean;
    value: Expression;
    decorators?: Decorator[];
    id: Identifier;
    params: LVal[];
    body: BlockStatement;
    generator: boolean;
    async: boolean;
    returnType?: TypeAnnotation;
    typeParameters?: TypeParameterDeclaration;
}

export interface ObjectProperty extends Node {
    type: "ObjectProperty";
    key: Expression;
    computed: boolean;
    value: Expression;
    decorators?: Decorator[];
    shorthand: boolean;
}

export interface RestElement extends Node {
    type: "RestElement";
    argument: LVal;
    typeAnnotation?: TypeAnnotation;
}

export interface ReturnStatement extends Node {
    type: "ReturnStatement";
    argument: Expression;
}

export interface SequenceExpression extends Node {
    type: "SequenceExpression";
    expressions: Expression[];
}

export interface SwitchCase extends Node {
    type: "SwitchCase";
    test: Expression;
    consequent: Statement[];
}

export interface SwitchStatement extends Node {
    type: "SwitchStatement";
    discriminant: Expression;
    cases: SwitchCase[];
}

export interface ThisExpression extends Node {
    type: "ThisExpression";
}

export interface ThrowStatement extends Node {
    type: "ThrowStatement";
    argument: Expression;
}

export interface TryStatement extends Node {
    type: "TryStatement";
    block: BlockStatement;
    handler: CatchClause;
    finalizer: BlockStatement;
}

export interface UnaryExpression extends Node {
    type: "UnaryExpression";
    operator: "-" | "+" | "!" | "~" | "typeof" | "void" | "delete";
    prefix: boolean;
    argument: Expression;
}

export interface UpdateExpression extends Node {
    type: "UpdateExpression";
    operator: "++" | "--";
    prefix: boolean;
    argument: Expression;
}

export interface VariableDeclaration extends Node {
    type: "VariableDeclaration";
    declarations: VariableDeclarator[];
    kind: "var" | "let" | "const";
}

export interface VariableDeclarator extends Node {
    type: "VariableDeclarator";
    id: LVal;
    init: Expression;
}

export interface WhileStatement extends Node {
    type: "WhileStatement";
    test: Expression;
    body: Statement;
}

export interface WithStatement extends Node {
    type: "WithStatement";
    object: Expression;
    body: BlockStatement | Statement;
}

export interface AssignmentPattern extends Node {
    type: "AssignmentPattern";
    left: Identifier;
    right: Expression;
}

export interface ArrayPattern extends Node {
    type: "ArrayPattern";
    elements: Expression[];
    typeAnnotation?: TypeAnnotation;
}

export interface ArrowFunctionExpression extends Node {
    type: "ArrowFunctionExpression";
    id: Identifier;
    params: LVal[];
    body: BlockStatement | Expression;
    generator: boolean;
    async: boolean;
    expression: boolean;
    returnType?: TypeAnnotation;
    typeParameters?: TypeParameterDeclaration;
}

export interface ClassBody extends Node {
    type: "ClassBody";
    body: Array<ClassMethod | ClassProperty>;
}

export interface ClassDeclaration extends Node {
    type: "ClassDeclaration";
    id: Identifier;
    superClass: Expression;
    body: ClassBody;
    decorators?: Decorator[];
    implements?: ClassImplements[];
    mixins?: any[];
    typeParameters?: TypeParameterDeclaration;
    superTypeParameters?: TypeParameterInstantiation;
}

export interface ClassExpression extends Node {
    type: "ClassExpression";
    id: Identifier;
    superClass: Expression;
    body: ClassBody;
    decorators?: Decorator[];
    implements?: ClassImplements[];
    mixins?: any[];
    typeParameters?: TypeParameterDeclaration;
    superTypeParameters?: TypeParameterInstantiation;
}

export interface ExportAllDeclaration extends Node {
    type: "ExportAllDeclaration";
    source: StringLiteral;
}

export interface ExportDefaultDeclaration extends Node {
    type: "ExportDefaultDeclaration";
    declaration: Declaration | Expression;
}

export interface ExportNamedDeclaration extends Node {
    type: "ExportNamedDeclaration";
    declaration: Declaration;
    specifiers: ExportSpecifier[];
    source: StringLiteral | null;
}

export interface ExportSpecifier extends Node {
    type: "ExportSpecifier";
    local: Identifier;
    imported: Identifier;
    exported: Identifier;
}

export interface ForOfStatement extends Node {
    type: "ForOfStatement";
    left: VariableDeclaration | LVal;
    right: Expression;
    body: Statement;
}

export interface ImportDeclaration extends Node {
    type: "ImportDeclaration";
    specifiers: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>;
    source: StringLiteral;
}

export interface ImportDefaultSpecifier extends Node {
    type: "ImportDefaultSpecifier";
    local: Identifier;
}

export interface ImportNamespaceSpecifier extends Node {
    type: "ImportNamespaceSpecifier";
    local: Identifier;
}

export interface ImportSpecifier extends Node {
    type: "ImportSpecifier";
    local: Identifier;
    imported: Identifier;
}

export interface MetaProperty extends Node {
    type: "MetaProperty";
    meta: Identifier;
    property: Identifier;
}

export interface ClassMethod extends Node {
    type: "ClassMethod";
    key: Expression;
    value?: FunctionExpression;
    kind: "constructor" | "method" | "get" | "set";
    computed: boolean;
    static: boolean;
    decorators?: Decorator[];
    id: Identifier;
    params: LVal[];
    body: BlockStatement;
    generator: boolean;
    async: boolean;
    expression: boolean;
    returnType?: TypeAnnotation;
    typeParameters?: TypeParameterDeclaration;
}

// See: https://github.com/babel/babel/blob/master/doc/ast/spec.md#objectpattern
export interface AssignmentProperty extends Node {
    type: "ObjectProperty";
    key: Expression;
    computed: boolean;
    value: Pattern;
    decorators?: Decorator[];
    shorthand: boolean;
}

export interface ObjectPattern extends Node {
    type: "ObjectPattern";
    properties: Array<AssignmentProperty | RestProperty>;
    typeAnnotation?: TypeAnnotation;
}

export interface SpreadElement extends Node {
    type: "SpreadElement";
    argument: Expression;
}

export interface Super extends Node {
    type: "Super";
}

export interface TaggedTemplateExpression extends Node {
    type: "TaggedTemplateExpression";
    tag: Expression;
    quasi: TemplateLiteral;
}

export interface TemplateElement extends Node {
    type: "TemplateElement";
    tail: boolean;
    value: {
        cooked: string;
        raw: string;
    };
}

export interface TemplateLiteral extends Node {
    type: "TemplateLiteral";
    quasis: TemplateElement[];
    expressions: Expression[];
}

export interface YieldExpression extends Node {
    type: "YieldExpression";
    argument: Expression;
    delegate: boolean;
}

export interface AnyTypeAnnotation extends Node {
    type: "AnyTypeAnnotation";
}

export interface ArrayTypeAnnotation extends Node {
    type: "ArrayTypeAnnotation";
    elementType: FlowTypeAnnotation;
}

export interface BooleanTypeAnnotation extends Node {
    type: "BooleanTypeAnnotation";
}

export interface BooleanLiteralTypeAnnotation extends Node {
    type: "BooleanLiteralTypeAnnotation";
}

export interface NullLiteralTypeAnnotation extends Node {
    type: "NullLiteralTypeAnnotation";
}

export interface ClassImplements extends Node {
    type: "ClassImplements";
    id: Identifier;
    typeParameters: TypeParameterInstantiation;
}

export interface ClassProperty extends Node {
    type: "ClassProperty";
    key: Identifier;
    value: Expression;
    decorators?: Decorator[];
    typeAnnotation?: TypeAnnotation;
}

export interface DeclareClass extends Node {
    type: "DeclareClass";
    id: Identifier;
    typeParameters: TypeParameterDeclaration;
    extends: InterfaceExtends[];
    body: ObjectTypeAnnotation;
}

export interface DeclareFunction extends Node {
    type: "DeclareFunction";
    id: Identifier;
}

export interface DeclareInterface extends Node {
    type: "DeclareInterface";
    id: Identifier;
    typeParameters: TypeParameterDeclaration;
    extends: InterfaceExtends[];
    body: ObjectTypeAnnotation;
}

export interface DeclareModule extends Node {
    type: "DeclareModule";
    id: StringLiteral | Identifier;
    body: BlockStatement;
}

export interface DeclareTypeAlias extends Node {
    type: "DeclareTypeAlias";
    id: Identifier;
    typeParameters: TypeParameterDeclaration;
    right: FlowTypeAnnotation;
}

export interface DeclareVariable extends Node {
    type: "DeclareVariable";
    id: Identifier;
}

export interface ExistentialTypeParam extends Node {
    type: "ExistentialTypeParam";
}

export interface FunctionTypeAnnotation extends Node {
    type: "FunctionTypeAnnotation";
    typeParameters: TypeParameterDeclaration;
    params: FunctionTypeParam[];
    rest: FunctionTypeParam;
    returnType: FlowTypeAnnotation;
}

export interface FunctionTypeParam extends Node {
    type: "FunctionTypeParam";
    name: Identifier;
    typeAnnotation: FlowTypeAnnotation;
}

export interface GenericTypeAnnotation extends Node {
    type: "GenericTypeAnnotation";
    id: Identifier;
    typeParameters: TypeParameterInstantiation;
}

export interface InterfaceExtends extends Node {
    type: "InterfaceExtends";
    id: Identifier;
    typeParameters: TypeParameterInstantiation;
}

export interface InterfaceDeclaration extends Node {
    type: "InterfaceDeclaration";
    id: Identifier;
    typeParameters: TypeParameterDeclaration;
    extends: InterfaceExtends[];
    mixins?: any[];
    body: ObjectTypeAnnotation;
}

export interface IntersectionTypeAnnotation extends Node {
    type: "IntersectionTypeAnnotation";
    types: FlowTypeAnnotation[];
}

export interface MixedTypeAnnotation extends Node {
    type: "MixedTypeAnnotation";
}

export interface NullableTypeAnnotation extends Node {
    type: "NullableTypeAnnotation";
    typeAnnotation: FlowTypeAnnotation;
}

export interface NumericLiteralTypeAnnotation extends Node {
    type: "NumericLiteralTypeAnnotation";
}

export interface NumberTypeAnnotation extends Node {
    type: "NumberTypeAnnotation";
}

export interface StringLiteralTypeAnnotation extends Node {
    type: "StringLiteralTypeAnnotation";
}

export interface StringTypeAnnotation extends Node {
    type: "StringTypeAnnotation";
}

export interface ThisTypeAnnotation extends Node {
    type: "ThisTypeAnnotation";
}

export interface TupleTypeAnnotation extends Node {
    type: "TupleTypeAnnotation";
    types: FlowTypeAnnotation[];
}

export interface TypeofTypeAnnotation extends Node {
    type: "TypeofTypeAnnotation";
    argument: FlowTypeAnnotation;
}

export interface TypeAlias extends Node {
    type: "TypeAlias";
    id: Identifier;
    typeParameters: TypeParameterDeclaration;
    right: FlowTypeAnnotation;
}

export interface TypeAnnotation extends Node {
    type: "TypeAnnotation";
    typeAnnotation: FlowTypeAnnotation;
}

export interface TypeCastExpression extends Node {
    type: "TypeCastExpression";
    expression: Expression;
    typeAnnotation: FlowTypeAnnotation;
}

export interface TypeParameter extends Node {
    type: "TypeParameterDeclaration";
    bound: TypeAnnotation | null;
    default: Flow | null;
    name: string | null;
}

export interface TypeParameterDeclaration extends Node {
    type: "TypeParameterDeclaration";
    params: Identifier[];
}

export interface TypeParameterInstantiation extends Node {
    type: "TypeParameterInstantiation";
    params: FlowTypeAnnotation[];
}

export interface ObjectTypeAnnotation extends Node {
    type: "ObjectTypeAnnotation";
    properties: ObjectTypeProperty[];
    indexers: ObjectTypeIndexer[];
    callProperties: ObjectTypeCallProperty[];
}

export interface ObjectTypeCallProperty extends Node {
    type: "ObjectTypeCallProperty";
    value: FlowTypeAnnotation;
}

export interface ObjectTypeIndexer extends Node {
    type: "ObjectTypeIndexer";
    id: Expression;
    key: FlowTypeAnnotation;
    value: FlowTypeAnnotation;
}

export interface ObjectTypeProperty extends Node {
    type: "ObjectTypeProperty";
    key: Expression;
    value: FlowTypeAnnotation;
}

export interface QualifiedTypeIdentifier extends Node {
    type: "QualifiedTypeIdentifier";
    id: Identifier;
    qualification: Identifier | QualifiedTypeIdentifier;
}

export interface UnionTypeAnnotation extends Node {
    type: "UnionTypeAnnotation";
    types: FlowTypeAnnotation[];
}

export interface VoidTypeAnnotation extends Node {
    type: "VoidTypeAnnotation";
}

export interface JSXAttribute extends Node {
    type: "JSXAttribute";
    name: JSXIdentifier | JSXNamespacedName;
    value: JSXElement | StringLiteral | JSXExpressionContainer | null;
}

export interface JSXClosingElement extends Node {
    type: "JSXClosingElement";
    name: JSXIdentifier | JSXMemberExpression;
}

export interface JSXElement extends Node {
    type: "JSXElement";
    openingElement: JSXOpeningElement;
    closingElement: JSXClosingElement;
    children: Array<JSXElement | JSXExpressionContainer | JSXText>;
    selfClosing?: boolean;
}

export interface JSXEmptyExpression extends Node {
    type: "JSXEmptyExpression";
}

export interface JSXExpressionContainer extends Node {
    type: "JSXExpressionContainer";
    expression: Expression;
}

export interface JSXIdentifier extends Node {
    type: "JSXIdentifier";
    name: string;
}

export interface JSXMemberExpression extends Node {
    type: "JSXMemberExpression";
    object: JSXMemberExpression | JSXIdentifier;
    property: JSXIdentifier;
}

export interface JSXNamespacedName extends Node {
    type: "JSXNamespacedName";
    namespace: JSXIdentifier;
    name: JSXIdentifier;
}

export interface JSXOpeningElement extends Node {
    type: "JSXOpeningElement";
    name: JSXIdentifier | JSXMemberExpression;
    selfClosing: boolean;
    attributes: JSXAttribute[];
}

export interface JSXSpreadAttribute extends Node {
    type: "JSXSpreadAttribute";
    argument: Expression;
}

export interface JSXText extends Node {
    type: "JSXText";
    value: string;
}

export interface Noop extends Node {
    type: "Noop";
}

export interface ParenthesizedExpression extends Node {
    type: "ParenthesizedExpression";
    expression: Expression;
}

export interface AwaitExpression extends Node {
    type: "AwaitExpression";
    argument: Expression;
}

export interface BindExpression extends Node {
    type: "BindExpression";
    object: Expression;
    callee: Expression;
}

export interface Decorator extends Node {
    type: "Decorator";
    expression: Expression;
}

export interface DoExpression extends Node {
    type: "DoExpression";
    body: BlockStatement;
}

export interface ExportDefaultSpecifier extends Node {
    type: "ExportDefaultSpecifier";
    exported: Identifier;
}

export interface ExportNamespaceSpecifier extends Node {
    type: "ExportNamespaceSpecifier";
    exported: Identifier;
}

export interface RestProperty extends Node {
    type: "RestProperty";
    argument: LVal;
}

export interface SpreadProperty extends Node {
    type: "SpreadProperty";
    argument: Expression;
}

export interface TSAnyKeyword extends Node {
    type: "TSAnyKeyword";
}

export interface TSArrayType extends Node {
    type: "TSArrayType";
    elementType: TSType;
}

export interface TSAsExpression extends Node {
    type: "TSAsExpression";
    expression: Expression;
    typeAnnotation: TSType;
}

export interface TSBooleanKeyword extends Node {
    type: "TSBooleanKeyword";
}

export interface TSCallSignatureDeclaration extends Node {
    type: "TSCallSignatureDeclaration";
    typeParameters: TypeParameterDeclaration | null;
    parameters: Array<Identifier | RestElement> | null;
    typeAnnotation: TSTypeAnnotation | null;
}

export interface TSConstructSignatureDeclaration extends Node {
    type: "TSConstructSignatureDeclaration";
    typeParameters: TypeParameterDeclaration | null;
    parameters: Array<Identifier | RestElement> | null;
    typeAnnotation: TSTypeAnnotation | null;
}

export interface TSConstructorType extends Node {
    type: "TSConstructorType";
    typeParameters: TypeParameterDeclaration | null;
    typeAnnotation: TSTypeAnnotation | null;
    parameters: Array<Identifier | RestElement> | null;
}

export interface TSDeclareFunction extends Node {
    type: "TSDeclareFunction";
    id: Identifier | null;
    typeParameters: TypeParameterDeclaration | Noop | null;
    params: LVal[];
    returnType: TypeAnnotation | TSTypeAnnotation | Noop | null;
    async: boolean;
    declare: boolean | null;
    generator: boolean;
}

export interface TSDeclareMethod extends Node {
    type: "TSDeclareMethod";
    decorators: Decorator[] | null;
    key: Expression;
    typeParameters: TypeParameterDeclaration | Noop | null;
    params: LVal[];
    returnType: TypeAnnotation | TSTypeAnnotation | Noop | null;
    abstract: boolean | null;
    access: "public" | "private" | "protected" | null;
    accessibility: "public" | "private" | "protected" | null;
    async: boolean;
    computed: boolean;
    generator: boolean;
    kind: "get" | "set" | "method" | "constructor";
    optional: boolean | null;
    static: boolean | null;
}

export interface TSEnumDeclaration extends Node {
    type: "TSEnumDeclaration";
    id: Identifier;
    members: TSEnumMember[];
    const: boolean | null;
    declare: boolean | null;
    initializer: Expression | null;
}

export interface TSEnumMember extends Node {
    type: "TSEnumMember";
    id: Identifier | StringLiteral;
    initializer: Expression | null;
}

export interface TSExportAssignment extends Node {
    type: "TSExportAssignment";
    expression: Expression;
}

export interface TSExpressionWithTypeArguments extends Node {
    type: "TSExpressionWithTypeArguments";
    expression: TSEntityName;
    typeParameters: TypeParameterInstantiation | null;
}

export interface TSExternalModuleReference extends Node {
    type: "TSExternalModuleReference";
    expression: StringLiteral;
}

export interface TSFunctionType extends Node {
    type: "TSFunctionType";
    typeParameters: TypeParameterDeclaration | null;
    typeAnnotation: TSTypeAnnotation | null;
    parameters: Array<Identifier | RestElement> | null;
}

export interface TSImportEqualsDeclaration extends Node {
    type: "TSImportEqualsDeclaration";
    id: Identifier;
    moduleReference: TSEntityName | TSExternalModuleReference;
    isExport: boolean | null;
}

export interface TSIndexSignature extends Node {
    type: "TSIndexSignature";
    parameters: Identifier[];
    typeAnnotation: TSTypeAnnotation | null;
    readonly: boolean | null;
}

export interface TSIndexedAccessType extends Node {
    type: "TSIndexedAccessType";
    objectType: TSType;
    indexType: TSType;
}

export interface TSInterfaceBody extends Node {
    type: "TSInterfaceBody";
    body: TSTypeElement[];
}

export interface TSInterfaceDeclaration extends Node {
    type: "TSInterfaceDeclaration";
    id: Identifier;
    typeParameters: TypeParameterDeclaration | null;
    extends: TSExpressionWithTypeArguments[] | null;
    body: TSInterfaceBody;
    declare: boolean | null;
}

export interface TSIntersectionType extends Node {
    type: "TSIntersectionType";
    types: TSType[];
}

export interface TSLiteralType extends Node {
    type: "TSLiteralType";
    literal: NumericLiteral | StringLiteral | BooleanLiteral;
}

export interface TSMappedType extends Node {
    type: "TSMappedType";
    typeParameter: TypeParameter;
    typeAnnotation: TSType | null;
    optional: boolean | null;
    readonly: boolean | null;
}

export interface TSMethodSignature extends Node {
    type: "TSMethodSignature";
    key: Expression;
    typeParameters: TypeParameterDeclaration | null;
    parameters: Array<Identifier | RestElement> | null;
    typeAnnotation: TSTypeAnnotation | null;
    computed: boolean | null;
    optional: boolean | null;
}

export interface TSModuleBlock extends Node {
    type: "TSModuleBlock";
    body: Statement[];
}

export interface TSModuleDeclaration extends Node {
    type: "TSModuleDeclaration";
    id: Identifier | StringLiteral;
    body: TSModuleBlock | TSModuleDeclaration;
    declare: boolean | null;
    global: boolean | null;
}

export interface TSNamespaceExportDeclaration extends Node {
    type: "TSNamespaceExportDeclaration";
    id: Identifier;
}

export interface TSNeverKeyword extends Node {
    type: "TSNeverKeyword";
}

export interface TSNonNullExpression extends Node {
    type: "TSNonNullExpression";
    expression: Expression;
}

export interface TSNullKeyword extends Node {
    type: "TSNullKeyword";
}

export interface TSNumberKeyword extends Node {
    type: "TSNumberKeyword";
}

export interface TSObjectKeyword extends Node {
    type: "TSObjectKeyword";
}

export interface TSParameterProperty extends Node {
    type: "TSParameterProperty";
    parameter: Identifier | AssignmentPattern;
    accessibility: 'public' | 'private' | 'protected' | null;
    readonly: boolean | null;
}

export interface TSParenthesizedType extends Node {
    type: "TSParenthesizedType";
    typeAnnotation: TSType;
}

export interface TSPropertySignature extends Node {
    type: "TSPropertySignature";
    key: Expression;
    typeAnnotation: TSTypeAnnotation | null;
    initializer: Expression | null;
    computed: boolean | null;
    optional: boolean | null;
    readonly: boolean | null;
}

export interface TSQualifiedName extends Node {
    type: "TSQualifiedName";
    left: TSEntityName;
    right: Identifier;
}

export interface TSStringKeyword extends Node {
    type: "TSStringKeyword";
}

export interface TSSymbolKeyword extends Node {
    type: "TSSymbolKeyword";
}

export interface TSThisType extends Node {
    type: "TSThisType";
}

export interface TSTupleType extends Node {
    type: "TSTupleType";
    elementTypes: TSType[];
}

export interface TSTypeAliasDeclaration extends Node {
    type: "TSTypeAliasDeclaration";
    id: Identifier;
    typeParameters: TypeParameterDeclaration | null;
    typeAnnotation: TSType;
    declare: boolean | null;
}

export interface TSTypeAnnotation extends Node {
    type: "TSTypeAnnotation";
    typeAnnotation: TSType;
}

export interface TSTypeAssertion extends Node {
    type: "TSTypeAssertion";
    typeAnnotation: TSType;
    expression: Expression;
}

export interface TSTypeLiteral extends Node {
    type: "TSTypeLiteral";
    members: TSTypeElement[];
}

export interface TSTypeOperator extends Node {
    type: "TSTypeOperator";
    typeAnnotation: TSType;
    operator: string | null;
}

export interface TSTypeParameter extends Node {
    type: "TSTypeParameter";
    constraint: TSType | null;
    default: TSType | null;
    name: string | null;
}

export interface TSTypeParameterDeclaration extends Node {
    type: "TSTypeParameterDeclaration";
    params: TSTypeParameter[];
}

export interface TSTypeParameterInstantiation extends Node {
    type: "TSTypeParameterInstantiation";
    params: TSType[];
}

export interface TSTypePredicate extends Node {
    type: "TSTypePredicate";
    parameterName: Identifier | TSThisType;
    typeAnnotation: TSTypeAnnotation;
}

export interface TSTypeQuery extends Node {
    type: "TSTypeQuery";
    exprName: TSEntityName;
}

export interface TSTypeReference extends Node {
    type: "TSTypeReference";
    typeName: TSEntityName;
    typeParameters: TypeParameterInstantiation | null;
}

export interface TSUndefinedKeyword extends Node {
    type: "TSUndefinedKeyword";
}

export interface TSUnionType extends Node {
    type: "TSUnionType";
    types: TSType[];
}

export interface TSVoidKeyword extends Node {
    type: "TSVoidKeyword";
}

export type Expression = ArrayExpression | AssignmentExpression | BinaryExpression | CallExpression
    | ConditionalExpression | FunctionExpression | Identifier | StringLiteral | NumericLiteral | BooleanLiteral
    | NullLiteral | RegExpLiteral | LogicalExpression | MemberExpression | NewExpression | ObjectExpression
    | SequenceExpression | ThisExpression | UnaryExpression | UpdateExpression | ArrowFunctionExpression
    | ClassExpression | MetaProperty | Super | TaggedTemplateExpression | TemplateLiteral | YieldExpression
    | TypeCastExpression | JSXElement | JSXEmptyExpression | JSXIdentifier | JSXMemberExpression
    | ParenthesizedExpression | AwaitExpression | BindExpression | DoExpression | TSAsExpression
    | TSNonNullExpression | TSTypeAssertion;

export type Binary = BinaryExpression | LogicalExpression;

export type Scopable = BlockStatement | CatchClause | DoWhileStatement | ForInStatement | ForStatement
    | FunctionDeclaration | FunctionExpression | Program | ObjectMethod | SwitchStatement | WhileStatement
    | ArrowFunctionExpression | ClassDeclaration | ClassExpression | ForOfStatement | ClassMethod;

export type BlockParent = BlockStatement | DoWhileStatement | ForInStatement | ForStatement | FunctionDeclaration
    | FunctionExpression | Program | ObjectMethod | SwitchStatement | WhileStatement | ArrowFunctionExpression
    | ForOfStatement | ClassMethod;

export type Block = BlockStatement | Program;

export type Statement = BlockStatement | BreakStatement | ContinueStatement | DebuggerStatement | DoWhileStatement
    | EmptyStatement | ExpressionStatement | ForInStatement | ForStatement | FunctionDeclaration | IfStatement
    | LabeledStatement | ReturnStatement | SwitchStatement | ThrowStatement | TryStatement | VariableDeclaration
    | WhileStatement | WithStatement | ClassDeclaration | ExportAllDeclaration | ExportDefaultDeclaration
    | ExportNamedDeclaration | ForOfStatement | ImportDeclaration | DeclareClass | DeclareFunction | DeclareInterface
    | DeclareModule | DeclareTypeAlias | DeclareVariable | InterfaceDeclaration | TypeAlias | TSDeclareFunction
    | TSEnumDeclaration | TSExportAssignment | TSImportEqualsDeclaration | TSInterfaceDeclaration
    | TSModuleDeclaration | TSNamespaceExportDeclaration | TSTypeAliasDeclaration;

export type Terminatorless = BreakStatement | ContinueStatement | ReturnStatement | ThrowStatement | YieldExpression | AwaitExpression;
export type CompletionStatement = BreakStatement | ContinueStatement | ReturnStatement | ThrowStatement;
export type Conditional = ConditionalExpression | IfStatement;
export type Loop = DoWhileStatement | ForInStatement | ForStatement | WhileStatement | ForOfStatement;
export type While = DoWhileStatement | WhileStatement;
export type ExpressionWrapper = ExpressionStatement | TypeCastExpression | ParenthesizedExpression;
export type For = ForInStatement | ForStatement | ForOfStatement;
export type ForXStatement = ForInStatement | ForOfStatement;
export type Function = FunctionDeclaration | FunctionExpression | ObjectMethod | ArrowFunctionExpression | ClassMethod;
export type FunctionParent = FunctionDeclaration | FunctionExpression | Program | ObjectMethod | ArrowFunctionExpression | ClassMethod;
export type Pureish = FunctionDeclaration | FunctionExpression | StringLiteral | NumericLiteral | BooleanLiteral | NullLiteral | ArrowFunctionExpression | ClassDeclaration | ClassExpression;

export type Declaration = FunctionDeclaration | VariableDeclaration | ClassDeclaration | ExportAllDeclaration
    | ExportDefaultDeclaration | ExportNamedDeclaration | ImportDeclaration | DeclareClass | DeclareFunction
    | DeclareInterface | DeclareModule | DeclareTypeAlias | DeclareVariable | InterfaceDeclaration | TypeAlias
    | TSDeclareFunction | TSEnumDeclaration | TSInterfaceDeclaration | TSModuleDeclaration | TSTypeAliasDeclaration;

export type LVal = Identifier | MemberExpression | RestElement | AssignmentPattern | ArrayPattern | ObjectPattern
    | TSParameterProperty;
export type Literal = StringLiteral | NumericLiteral | BooleanLiteral | NullLiteral | RegExpLiteral | TemplateLiteral;
export type Immutable = StringLiteral | NumericLiteral | BooleanLiteral | NullLiteral | JSXAttribute | JSXClosingElement | JSXElement | JSXExpressionContainer | JSXOpeningElement;
export type UserWhitespacable = ObjectMethod | ObjectProperty | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeProperty;
export type Method = ObjectMethod | ClassMethod;
export type ObjectMember = ObjectMethod | ObjectProperty;
export type Property = ObjectProperty | ClassProperty;
export type UnaryLike = UnaryExpression | SpreadElement | RestProperty | SpreadProperty;
export type Pattern = AssignmentPattern | ArrayPattern | ObjectPattern;
export type Class = ClassDeclaration | ClassExpression;
export type ModuleDeclaration = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ImportDeclaration;
export type ExportDeclaration = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration;
export type ModuleSpecifier = ExportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportSpecifier | ExportDefaultSpecifier | ExportNamespaceSpecifier;

export type Flow = AnyTypeAnnotation | ArrayTypeAnnotation | BooleanTypeAnnotation | BooleanLiteralTypeAnnotation
    | ClassImplements | ClassProperty | DeclareClass | DeclareFunction | DeclareInterface | DeclareModule
    | DeclareTypeAlias | DeclareVariable | ExistentialTypeParam | FunctionTypeAnnotation | FunctionTypeParam
    | GenericTypeAnnotation | InterfaceExtends | InterfaceDeclaration | IntersectionTypeAnnotation
    | MixedTypeAnnotation | NullableTypeAnnotation | NumericLiteralTypeAnnotation | NumberTypeAnnotation
    | StringLiteralTypeAnnotation | StringTypeAnnotation | ThisTypeAnnotation | TupleTypeAnnotation
    | TypeofTypeAnnotation | TypeAlias | TypeAnnotation | TypeCastExpression | TypeParameterDeclaration
    | TypeParameterInstantiation | ObjectTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer
    | ObjectTypeProperty | QualifiedTypeIdentifier | UnionTypeAnnotation | VoidTypeAnnotation;

export type FlowTypeAnnotation = AnyTypeAnnotation | ArrayTypeAnnotation | BooleanTypeAnnotation
    | BooleanLiteralTypeAnnotation | FunctionTypeAnnotation | GenericTypeAnnotation | IntersectionTypeAnnotation
    | MixedTypeAnnotation | NullableTypeAnnotation | NumericLiteralTypeAnnotation | NumberTypeAnnotation
    | StringLiteralTypeAnnotation | StringTypeAnnotation | ThisTypeAnnotation | TupleTypeAnnotation
    | TypeofTypeAnnotation | TypeAnnotation | ObjectTypeAnnotation | UnionTypeAnnotation | VoidTypeAnnotation;

export type FlowBaseAnnotation = AnyTypeAnnotation | BooleanTypeAnnotation | MixedTypeAnnotation | NumberTypeAnnotation | StringTypeAnnotation | ThisTypeAnnotation | VoidTypeAnnotation;
export type FlowDeclaration = DeclareClass | DeclareFunction | DeclareInterface | DeclareModule | DeclareTypeAlias | DeclareVariable | InterfaceDeclaration | TypeAlias;

export type JSX = JSXAttribute | JSXClosingElement | JSXElement | JSXEmptyExpression | JSXExpressionContainer
    | JSXIdentifier | JSXMemberExpression | JSXNamespacedName | JSXOpeningElement | JSXSpreadAttribute | JSXText;

export type TSType = TSAnyKeyword | TSArrayType | TSBooleanKeyword | TSConstructorType | TSExpressionWithTypeArguments
    | TSFunctionType | TSIndexedAccessType | TSIntersectionType | TSLiteralType | TSMappedType | TSNeverKeyword
    | TSNullKeyword | TSNumberKeyword | TSObjectKeyword | TSParenthesizedType | TSStringKeyword | TSSymbolKeyword
    | TSThisType | TSTupleType | TSTypeLiteral | TSTypeOperator | TSTypePredicate | TSTypeQuery | TSTypeReference
    | TSUndefinedKeyword | TSUnionType | TSVoidKeyword;

export type TSEntityName = Identifier | TSQualifiedName;

export type TSTypeElement = TSCallSignatureDeclaration | TSConstructSignatureDeclaration | TSIndexSignature
    | TSMethodSignature | TSPropertySignature;
