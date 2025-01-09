import * as React from "react";
import Checkbox from "@mui/joy/Checkbox";
import Sheet from "@mui/joy/Sheet";

import JoyUsageDemo from "../JoyUsageDemo";
import DemoCanvasBase from "../DemoCanvasBase";

export default function CheckboxUsage({ elemId }) {
  return (
    <DemoCanvasBase elemId={elemId}>
      <JoyUsageDemo
        componentName="Checkbox"
        data={[
          {
            propName: "variant",
            knob: "radio",
            defaultValue: "outlined",
            options: ["plain", "outlined", "soft", "solid"],
          },
          {
            propName: "color",
            knob: "color",
            defaultValue: "neutral",
          },
          {
            propName: "size",
            knob: "radio",
            options: ["sm", "md", "lg"],
            defaultValue: "md",
          },
          {
            propName: "disabled",
            knob: "switch",
            defaultValue: false,
          },
          {
            propName: "label",
            knob: "input",
            defaultValue: "Label",
          },
        ]}
        renderDemo={(props) => <Checkbox {...props} />}
      />
    </DemoCanvasBase>
  );
}
