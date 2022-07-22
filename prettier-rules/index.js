module.exports = {
    "$schema": "http://json.schemastore.org/prettierrc",
    "printWidth": 120, // 每一行的最大长度
    "tabWidth": 2, // 缩进空格级别
    "useTabs": true,
    "semi": true, // 末尾添加分号
    "singleQuote": false, // 使用双引号
    "quoteProps": "consistent", // 如果对象中的至少一个属性需要引号，请引用所有属性。
    "jsxSingleQuote": false, //在jsx中使用双引号
    "trailingComma": "es5", // 在 ES5 中有效的尾随逗号（对象、数组等）。TypeScript 中的类型参数中没有尾随逗号。
    "bracketSpacing": true, // 在对象文字中的括号之间打印空格
    "bracketSameLine": false, // 多行元素的 ">" 结尾括号放在最后一行，而不是尾随
    "arrowParens": "avoid", // 箭头函数中尽量不添加括号
    "proseWrap": "preserve",
    "vueIndentScriptAndStyle": false, //在 Vue 文件中不缩进脚本和样式标签
    "endOfLine":"lf", // 使用lf结尾
}