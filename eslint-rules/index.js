module.exports = {
	// https://cn.eslint.org/docs/rules/ eslint规则地址
	extends: ["eslint:recommended", "prettier", "plugin:markdown/recommended"],
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	parserOptions: {
		// 设置为 "script" (默认) 或 "module"（ES6)。
		sourceType: "module",
		ecmaFeatures: {
			// 这是个对象，表示你想使用的额外的语言特性:
			// 启用 JSX
			jsx: true,
		},
	},
	// 允许识别html,vue,prettier,import,react
	plugins: ["html", "vue", "prettier", "import", "react"],
	rules: {
		//循环中使用await时出现警告
		"no-await-in-loop": "warn",
		"no-console": ["error", { allow: ["log"] }],
		"block-scoped-var": "error",
		complexity: ["warn", { max: 5 }],
	},
};
