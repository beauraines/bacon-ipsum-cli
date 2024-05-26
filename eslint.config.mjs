import globals from "globals";
import pluginJs from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs", globals: globals.nodeBuiltin}
  },
  { languageOptions: { ...jestPlugin.environments.globals } },
  pluginJs.configs.recommended,
  {
    plugins: {
      jest: jestPlugin
    },
    rules: {
      ...jestPlugin.configs.recommended.rules, // Use recommended rules from eslint-plugin-jest
    }
  }
];