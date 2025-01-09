import { Sheet } from "@mui/joy";
import React from "react";

const DemoCanvasBase = ({ children, elemId }) => {
  return (
    <Sheet
      sx={{
        height: 500,
        minWidth: 600,
        // position: "relative",
        // top: 50,
        borderRadius: "lg",
        ml: 10,
        mt: 10,
      }}
      id={elemId}
    >
      {children}
    </Sheet>
  );
};

export default DemoCanvasBase;
