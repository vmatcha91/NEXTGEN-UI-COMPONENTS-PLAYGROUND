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

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import joyTheme from "./theme";
import CheckboxUsage from "./components/ui/CheckBoxUsage";
import CardUsage from "./components/ui/CardUsageDemo";
import SelectUsage from "./components/ui/SelectUsage";
import ChipUsage from "./components/ui/ChipUsage";
import TooltipUsage from "./components/ui/TooltipUsage";
import ButtonUsage from "./components/ui/ButtonUsage";
import InputUsage from "./components/ui/InputUsage";
import ModalUsage from "./components/ui/ModalUsage";
import MenuUsage from "./components/ui/MenuUsage";
import ListUsage from "./components/ui/ListUsage";
import ShadowUsage from "./components/ui/ShadowUsage";
import TabsUsage from "./components/ui/TabsUsage";
import TableUsage from "./components/ui/TableUsage";
import CalendarUsage from "./components/ui/CalendarUsage";
import appMaterialTheme from "./material-theme";

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
