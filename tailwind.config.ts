/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hwb(var(--border))",
        input: "hwb(var(--input))",
        ring: "hwb(var(--ring))",
        background: "hwb(var(--background))",
        foreground: "hwb(var(--foreground))",
        primary: {
          DEFAULT: "hwb(var(--primary))",
          foreground: "hwb(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hwb(var(--secondary))",
          foreground: "hwb(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hwb(var(--destructive))",
          foreground: "hwb(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hwb(var(--muted))",
          foreground: "hwb(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hwb(var(--accent))",
          foreground: "hwb(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hwb(var(--popover))",
          foreground: "hwb(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hwb(var(--card))",
          foreground: "hwb(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
