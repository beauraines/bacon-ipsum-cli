import globals from "globals";
import pluginJs from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.js"],
<<<<<<< HEAD
    languageOptions: { sourceType: "commonjs", globals: globals.nodeBuiltin}
  },
  { languageOptions: { ...jestPlugin.environments.globals } },
=======
    languageOptions: { sourceType: "commonjs" }
  },
  { languageOptions: { globals: globals.browser,  ...jestPlugin.environments.globals } },
>>>>>>> ec732ac2838a23ef13bb006d6bf566923f669249
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