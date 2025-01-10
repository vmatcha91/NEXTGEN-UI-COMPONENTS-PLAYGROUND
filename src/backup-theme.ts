import { extendTheme } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface PaletteTextOverrides {
    custom: true;
  }
}

const paletteConfig = (paletteType) => ({
  outlinedActiveBg: `var(--joy-palette-${paletteType}-200)`,
  outlinedBorder: `var(--joy-palette-${paletteType}-300)`,
  outlinedColor: `var(--joy-palette-${paletteType}-500, #FFFFFF)`,
  outlinedDisabledBorder: `var(--joy-palette-neutral-200)`,
  outlinedDisabledColor: `var(--joy-palette-neutral-400)`,
  outlinedHoverBg: `var(--joy-palette-neutral-200)`,
  //Revist
  outlinedHoverBorder: `var(--joy-palette-${paletteType}-500)`,
  //Revisit

  plainActiveBg: `var(--joy-palette-${paletteType}-200)`,
  plainColor: `var(--joy-palette-${paletteType}-500, #FFFFFF)`,
  plainDisabledColor: `var(--joy-palette-neutral-400)`,
  plainHoverBg: `var(--joy-palette-${paletteType}-100)`,

  softActiveBg: `var(--joy-palette-${paletteType}-300)`,
  softBg: `var(--joy-palette-${paletteType}-100)`,
  softColor: `var(--joy-palette-${paletteType}-700, #000000)`,
  softDisabledBg: `var(--joy-palette-neutral-50)`,
  softDisabledColor: "var(--joy-palette-neutral-400)",
  softHoverBg: `var(--joy-palette-${paletteType}-200)`,

  solidActiveBg: `var(--joy-palette-${paletteType}-700)`,
  solidBg: `var(--joy-palette-${paletteType}-500)`,
  solidColor: "var(--joy-palette-common-white, #FFF)",
  solidDisabledBg: "var(--joy-palette-neutral-100)",
  solidDisabledColor: "var(--joy-palette-neutral-400)",
  solidHoverBg: `var(--joy-palette-${paletteType}-600)`,
});

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: "#f5f5f5",
          surface: "#fff",
        },
        common: {
          black: "#000000",
          white: "#FFFFFF",
        },
        danger: {
          100: "#FFCCCC",
          200: "#FF9999",
          300: "#FF6666",
          400: "#FF3333",
          50: "#FFE5E5",
          500: "#FF0000",
          600: "#CC0000",
          700: "#990000",
          800: "#660000",
          900: "#330000",
          ...paletteConfig("danger"),
        },
        primary: {
          100: "#BDF9FF",
          200: "#80F4FF",
          300: "#3DEFFF",
          400: "#00E5FA",
          50: "#E0FCFF",
          500: "#00AABB",
          600: "#008894",
          700: "#006770",
          800: "#00464D",
          900: "#002124",
          ...paletteConfig("primary"),
        },
        secondary: {
          100: "#D2D7EF",
          200: "#A5AEDF",
          300: "#7B89D0",
          400: "#4E61C0",
          50: "#E8EBF7",
          500: "#37489B",
          600: "#2C397C",
          700: "#212C5E",
          800: "#151C3C",
          900: "#0B0E1E",
          ...paletteConfig("secondary"),
        },
        success: {
          100: "#D3F8EC",
          200: "#A2F1D8",
          300: "#76EAC5",
          400: "#4AE3B3",
          50: "#E9FCF6",
          500: "#21D59B",
          600: "#1BAC7E",
          700: "#14805E",
          800: "#0D543D",
          900: "#072C20",
          ...paletteConfig("success"),
        },
        text: {
          icon: "var(--joy-palette-neutral-900)",
          primary: "var(--joy-palette-neutral-900)",
          secondary: "var(--joy-palette-neutral-900)",
          tertiary: "var(--joy-palette-neutral-900)",
        },
        warning: {
          100: "#FFF4CC",
          200: "#FFE999",
          300: "#FFDE66",
          400: "#FFD333",
          50: "#FFF9E5",
          500: "#FFC700",
          600: "#CCA000",
          700: "#997800",
          800: "#665000",
          900: "#332800",
          ...paletteConfig("warning"),
        },
        warning2: {
          100: "#FDE8D3",
          200: "#FCD4AB",
          300: "#FABD7F",
          400: "#F9A653",
          50: "#FEF5EB",
          500: "#F79028",
          600: "#DD7308",
          700: "#A75706",
          800: "#713B04",
          900: "#361C02",
          ...paletteConfig("warning2"),
        },
      },
    },
    dark: {
      palette: {},
    },
  },
});

export default theme;
