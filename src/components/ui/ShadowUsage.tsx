import { Box, Grid } from "@mui/joy";
import * as React from "react";
import DemoCanvasBase from "../DemoCanvasBase.tsx";
import JoyUsageDemo, { prependLinesSpace } from "../JoyUsageDemo.tsx";

export default function ShadowUsage({ elemId }) {
  return (
    <DemoCanvasBase elemId={elemId}>
      <JoyUsageDemo
        componentName="Shadow list"
        data={[]}
        getCodeBlock={(code) => `<List>
  <ListItem>
${prependLinesSpace(code, 3)}
  </ListItem>
</List>`}
        renderDemo={ShadowsDemo}
      />
    </DemoCanvasBase>
  );
}

function ShadowsDemo() {
  return (
    <Grid container>
      <Box
        sx={(theme) => {
          return {
            boxShadow: theme.shadow.sm,
            width: "8rem",
            height: "5rem",
            bgcolor: "#fff",
            color: "grey.800",
            p: 1,
            m: 1,
            borderRadius: 2,
            textAlign: "center",
            fontSize: "0.875rem",
            fontWeight: "700",
            ...theme.applyStyles("dark", {
              bgcolor: "#101010",
              color: "grey.300",
            }),
          };
        }}
      >
        boxShadow: 0
      </Box>
      <Box
        sx={(theme) => ({
          boxShadow: theme.shadow.md,
          width: "8rem",
          height: "5rem",
          bgcolor: "#fff",
          color: "grey.800",
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "700",
          ...theme.applyStyles("dark", {
            bgcolor: "#101010",
            color: "grey.300",
          }),
        })}
      >
        boxShadow: 1
      </Box>
      <Box
        sx={(theme) => ({
          boxShadow: theme.shadow.lg,

          width: "8rem",
          height: "5rem",
          bgcolor: "#fff",
          color: "grey.800",
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "700",
          ...theme.applyStyles("dark", {
            bgcolor: "#101010",
            color: "grey.300",
          }),
        })}
      >
        boxShadow: 2
      </Box>
    </Grid>
  );
}
