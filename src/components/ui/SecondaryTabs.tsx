import {
  TabList,
  Typography,
  TabPanel,
  Tabs,
  Stack,
  tabClasses,
  Tab,
} from "@mui/joy";
import React from "react";
import DemoCanvasBase from "../DemoCanvasBase.tsx";
import JoyUsageDemo from "../JoyUsageDemo.tsx";

const TabListWithToolbar = (props) => {
  const {
    children,
    defaultIndex,
    tabs = [
      { label: "test1", content: () => <div>Test content 1</div> },
      { label: "test2", content: () => <div>Test content 2</div> },
    ],
  } = props;

  return (
    <Tabs defaultValue={0}>
      <TabList
        aria-label="tabs"
        disableUnderline
        sx={{
          my: 2,
        }}
        {...props}
      >
        {tabs.map(({ disabled, icon, label }, index) => (
          <Tab
            {...props}
            disabled={!!disabled}
            indicatorInset
            key={index}
            value={index}
          >
            <Typography fontWeight={"xl"} level="body-lg">
              {label}
            </Typography>
          </Tab>
        ))}
      </TabList>
      {/* <Divider /> */}
      {tabs.map(({ content: Content, ...props }, index) => (
        <TabPanel key={index} sx={{ height: "100%" }} value={index}>
          <Content {...props} />
        </TabPanel>
      ))}
    </Tabs>
  );
};

const SecondaryTabs = ({ elemId }) => (
  <DemoCanvasBase elemId={elemId}>
    <JoyUsageDemo
      componentName="Chip"
      data={[
        {
          propName: "variant",
          knob: "radio",
          defaultValue: "soft",
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
        { propName: "onClick", defaultValue: () => {} },
      ]}
      renderDemo={(props) => <TabListWithToolbar {...props} />}
    />
  </DemoCanvasBase>
);

export default SecondaryTabs;
