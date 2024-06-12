const { ESLint } = require('eslint')

;(async function main() {
    const eslint = new ESLint({ fix: true })

    const results = await eslint.lintFiles([
        'src/**/*.js',
        'src/**/*.ts',
        'src/**/*.jsx',
        'src/**/*.tsx'
    ])

    await ESLint.outputFixes(results)

    const formatter = await eslint.loadFormatter('stylish')
    const resultText = formatter.format(results)

    console.log(resultText)
})().catch((error) => {
    process.exitCode = 1
    console.error(error)
})
