const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const code = process.argv[2];

const imports = new Set();


try {
    const ast = parser.parse(code, {
        sourceType: 'module', // Corrected typo here
        plugins: ['jsx', 'typescript']
    });

    traverse(ast, {
        ImportDeclaration({ node }) {
            node?.specifiers?.forEach(specifier => {
                imports?.add(specifier.local.name);
            });
        }
    });
    console.log(JSON.stringify([...imports]));
} catch (error) {
    console.error('Error parsing code:', error.message);
    process.exit(1);
}
