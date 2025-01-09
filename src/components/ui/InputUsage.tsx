import * as React from "react";
import Input from "@mui/joy/Input";
import JoyUsageDemo from "../JoyUsageDemo.tsx";
import DemoCanvasBase from "../DemoCanvasBase.tsx";

export default function InputUsage({ elemId }) {
  return (
    <DemoCanvasBase elemId={elemId}>
      <JoyUsageDemo
        componentName="Input"
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
            propName: "placeholder",
            knob: "input",
            defaultValue: "Type something…",
          },
          {
            propName: "disabled",
            knob: "switch",
            defaultValue: false,
          },
        ]}
        renderDemo={(props) => <Input {...props} />}
      />
    </DemoCanvasBase>
  );
}
