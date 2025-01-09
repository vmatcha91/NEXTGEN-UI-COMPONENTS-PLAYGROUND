import { CssVarsThemeOptions, extendTheme } from "@mui/material/styles";

// type Themes = 'dark' |'light';

// const sharedTheme = {
//   palette: {
//     background: {
//       default: '#f5f5f5',
//       paper: '#fff',
//     },
//   },
//   components: {
//     MuiButtonBase: {
//       defaultProps: {
//         disableRipple: true,
//       },
//     },
//     MuiDivider: {
//       styleOverrides: {
//         vertical: {
//           marginRight: 10,
//           marginLeft: 10,
//         },
//         // TODO: open issue for missing "horizontal" CSS rule
//         // in Divider API - https://mui.com/material-ui/api/divider/#css
//         middle: {
//           marginTop: 10,
//           marginBottom: 10,
//           width: '80%',
//         },
//       },
//     },
//   },
// } as ThemeOptions; // the reason for this casting is deepmerge return type

const materialTheme: CssVarsThemeOptions = {
  shape: {
    borderRadius: 8,
  },
  typography: {
    // fontFamily: "Avenir",
  },
};

const appMaterialTheme = extendTheme(materialTheme);

export default appMaterialTheme;
