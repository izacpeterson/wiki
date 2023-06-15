/** @type {import('tailwindcss').Config} */
import tailwindcss from "@catppuccin/tailwindcss";
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
      alpha: "lower-alpha",
    },
  },
  plugins: [
    tailwindcss({
      // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
      // default is `false`, which means no prefix
      prefix: false,
      // which flavour of colours to use by default, in the `:root`
      // defaultFlavour: "macchiato",
      // defaultFlavour: "mocha",
    }),
  ],
};
