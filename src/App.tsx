import * as React from "react";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";

import {
  useTheme as useMaterialTheme,
  useColorScheme as useMaterialColorScheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
} from "@mui/material/styles";
import {
  extendTheme as extendJoyTheme,
  useColorScheme,
  CssVarsProvider,
  THEME_ID,
} from "@mui/joy/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Sidebar from "./components/Sidebar.tsx";
import Header from "./components/Header.tsx";
import joyTheme from "./theme.ts";
import CheckboxUsage from "./components/ui/CheckBoxUsage.tsx";
import CardUsage from "./components/ui/CardUsageDemo.tsx";
import SelectUsage from "./components/ui/SelectUsage.tsx";
import ChipUsage from "./components/ui/ChipUsage.tsx";
import TooltipUsage from "./components/ui/TooltipUsage.tsx";
import ButtonUsage from "./components/ui/ButtonUsage.tsx";
import InputUsage from "./components/ui/InputUsage.tsx";
import ModalUsage from "./components/ui/ModalUsage.tsx";
import MenuUsage from "./components/ui/MenuUsage.tsx";
import ListUsage from "./components/ui/ListUsage.tsx";
import ShadowUsage from "./components/ui/ShadowUsage.tsx";
import TabsUsage from "./components/ui/TabsUsage.tsx";
import TableUsage from "./components/ui/TableUsage.tsx";
import CalendarUsage from "./components/ui/CalendarUsage.tsx";
import appMaterialTheme from "./material-theme.ts";

export default function JoyOrderDashboardTemplate() {
  return (
    <MaterialCssVarsProvider theme={appMaterialTheme}>
      <CssVarsProvider disableNestedContext theme={{ [THEME_ID]: joyTheme }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <Box sx={{ display: "flex", minHeight: "100dvh" }}>
            <Header />
            <Sidebar />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <ButtonUsage elemId={"button-id"} />
              <CheckboxUsage elemId="checkbox-id" />
              <CardUsage elemId="card-id" />
              <ChipUsage elemId={"chip-id"} />
              <InputUsage elemId={"input-id"} />
              <ModalUsage elemId="modal-id" />
              <SelectUsage elemId="select-id" />
              <TooltipUsage elemId={"tooltip-id"} />
              <MenuUsage elemId={"menu-id"} />
              <ListUsage elemId={"list-id"} />
              <ShadowUsage elemId={"shadow-id"} />
              <TabsUsage elemId={"tab-id"} />
              <TableUsage elemId={"table-id"} />
              <CalendarUsage elemId={"calendar-id"} />
            </Box>
          </Box>
        </LocalizationProvider>
      </CssVarsProvider>
    </MaterialCssVarsProvider>
  );
}
