import { inputClasses, tabClasses, textareaClasses } from "@mui/joy";
import { extendTheme, PaletteRange } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface PaletteTextOverrides {
    custom: true;
  }
}

declare module "@mui/joy/styles" {
  interface ColorPalettePropOverrides {
    secondary: true;
    warning2: true;
  }

  interface Palette {
    secondary: PaletteRange;
    warning2: PaletteRange;
  }
}

const paletteConfig = (paletteType) => ({
  //Outline
  outlinedActiveBg: `var(--joy-palette-${paletteType}-500)`,
  outlinedBorder: `var(--joy-palette-${paletteType}-500)`,
  outlinedColor: `var(--joy-palette-common-black)`,
  outlinedDisabledBorder: "var(--joy-palette-neutral-400)",
  outlinedDisabledColor: "var(--joy-palette-neutral-50)",
  outlinedHoverBg: "var(--joy-palette-neutral-200)",
  outlineHoverBorder: `var(--joy-palette-${paletteType}-500)`,
  //plain
  plainActiveBg: `var(--joy-palette-${paletteType}-100)`,
  plainColor: `var(--joy-palette-common-black)`,
  plainDisabledColor: "var(--joy-palette-neutral-400)",
  plainHoverBg: `var(--joy-palette-${paletteType}-50)`,
  //soft
  softActiveBg: `var(--joy-palette-${paletteType}-300)`,
  // softActiveColor: `var(--joy-palette-${paletteType}-800)`,
  softBg: `var(--joy-palette-${paletteType}-50)`,
  softColor: `var(--joy-palette-common-black)`,
  softDisabledBg: "var(--joy-palette-neutral-400)",
  softDisabledColor: "var(--joy-palette-neutral-600)",
  softHoverBg: `var(--joy-palette-${paletteType}-200)`,
  //solid
  solidActiveBg: `var(--joy-palette-${paletteType}-700)`,
  solidBg: `var(--joy-palette-${paletteType}-500)`,
  solidColor: "var(--joy-palette-common-white, #FFF)",
  solidDisabledBg: "var(--joy-palette-neutral-400)",
  solidDisabledColor: "var(--joy-palette-neutral-600)",
  solidHoverBg: `var(--joy-palette-${paletteType}-300)`,
});

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: "#EBEBEB",
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

        neutral: {
          100: "#E3E3E3",
          200: "#C9C9C9",
          300: "#ADADAD",
          400: "#919191",
          50: "#F2F2F2",
          500: "#767676",
          600: "#5E5E5E",
          700: "#474747",
          800: "#303030",
          900: "#171717",
          ...paletteConfig("neutral"),
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
  components: {
    JoyAutocomplete: {
      defaultProps: {
        size: "md",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          // '--_Chip-paddingBlock': '0.5rem',
          "--Autocomplete-wrapperGap": "0.375rem",
        }),
      },
    },
    JoyInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          "--Input-minHeight": "2.5rem",
          [`&.${inputClasses.disabled}`]: {
            color: "var(--joy-palette-neutral-200)",
          },
          ...(ownerState.type === "color" && {
            [`& input[type="color"]`]: {
              maxWidth: "2.5rem",
              width: "2.5rem",
            },
            display: "flex",
            justifyContent: "flex-end",
          }),
        }),
      },
    },
    JoyList: {
      styleOverrides: {
        root: ({ theme }) => ({
          "--ListItem-minHeight": "2.5rem",
        }),
      },
    },
    JoySelect: {
      styleOverrides: {
        root: ({ theme }) => ({
          "--Select-minHeight": "2.5rem",
        }),
      },
    },
    JoySkeleton: {
      defaultProps: {
        variant: "circular",
      },
    },
    JoyTab: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const colorVariant = ownerState.color;
          return {
            "--Tab-indicatorRadius": "2px",
            "--Tab-indicatorThickness": "4px",
            /* @ts-ignore */
            color: `${theme.vars.palette?.[colorVariant]?.[500]}`,
          };
        },
      },
    },
    JoyTabList: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          [`& .${tabClasses.root}`]: {
            backgroundColor: "transparent",
            borderRadius: theme.vars.radius.md,
          },
        }),
      },
    },
    JoyTable: {
      styleOverrides: {
        root: ({ theme }) => ({
          "--Table-headerUnderlineThickness": "1px",
          "--TableCell-footBackground": `${theme.palette.background.surface}`,
          "--TableCell-height": "4.5rem",
          "--TableCell-paddingX": "1.5rem",
          fontSize: "1rem",
          maxHeight: "5rem",
          backgroundColor: "transparent",
        }),
      },
    },
    JoyTabs: {
      styleOverrides: {
        root: ({ theme }) => ({
          "--Tab-minHeight": "2.5rem",
        }),
      },
    },
    JoyTextarea: {
      styleOverrides: {
        root: ({ theme }) => ({
          [`&.${textareaClasses.disabled}`]: {
            color: "var(--joy-palette-neutral-200)",
          },
        }),
      },
    },
    JoyTypography: {
      defaultProps: {
        color: "neutral",
        fontWeight: "normal",
        level: "body-md",
        variant: "plain",
      },
    },
  },
  fontFamily: {
    body: "Avenir, var(--joy-fontFamily-fallback)",
    display: "Avenir, var(--joy-fontFamily-fallback)",
  },
  fontWeight: {
    lg: 600,
    md: 400,
    sm: 300,
    xl: 700,
  },

  radius: {
    lg: "8px",
    md: "5px",
    sm: "4px",
  },

  shadow: {
    lg: "0px 12px 16px rgba(0, 0, 0, 0.15)",
    md: "0px 6px 12px rgba(0, 0, 0, 0.15)",
    sm: "0px 2px 4px rgba(0, 0, 0, 0.15)",
    xl: "0px 20px 24px rgba(0, 0, 0, 0.15)",
  },
});

export default theme;
