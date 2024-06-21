import globals from "globals";
import pluginJs from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/"], // Ignore node_modules
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
      globals: globals.nodeBuiltin
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.test.js", "**/__tests__/**/*.js"], // Apply Jest configurations to test files
    ignores: ["node_modules/"], // Ignore node_modules
    languageOptions: {
      globals: {
        ...globals.jest, // Merging Jest globals
      },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules, // Use recommended rules from eslint-plugin-jest
    }
  }
];

