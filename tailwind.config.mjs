/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.50"),
            h2: theme("colors.gray.50"),
            a: {
              color: theme("colors.indigo.500"),
              "&:hover": {
                color: theme("colors.indigo.700"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/typography")],
};
