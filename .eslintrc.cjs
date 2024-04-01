module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true, // Se o seu projeto é um aplicativo Node.js
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended", // Se estiver usando React
    "plugin:prettier/recommended", // Adiciona o plugin do Prettier
  ],
  ignorePatterns: ["dist", ".eslintrc.js", "node_modules/"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11, // ou 2020
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // Se estiver usando JSX
    },
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier", // Adiciona o plugin do Prettier
  ],
  settings: {
    react: {
      version: "detect", // Detecta automaticamente a versão do React
    },
  },
  rules: {
    // Regras do ESLint
    "no-unused-vars": "warn",
    "no-console": "off",
    // Regras do TypeScript
    "@typescript-eslint/explicit-function-return-type": "off",
    // Regras do React
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    // Regras do Prettier
    "prettier/prettier": "error",
  },
};
