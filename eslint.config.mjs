import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      sourceType: "module", 
      globals: globals.browser,
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script", 
    },
  },
  {
    files: ["**/*.{js,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
