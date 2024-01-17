/ @typedef  {import("prettier").Config} PrettierConfig */
/ @type { PrettierConfig | SortImportsConfig } /
const config = {
    bracketSpacing: true,
    jsxBracketSameLine: true,
    plugins: ["prettier-plugin-tailwindcss"],
}

module.exports = config
