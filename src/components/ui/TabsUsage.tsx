import * as React from "react";

import JoyUsageDemo, { prependLinesSpace } from "../JoyUsageDemo.tsx";

import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { Popper } from "@mui/base/Popper";
import Apps from "@mui/icons-material/Apps";
import BookmarkAdd from "@mui/icons-material/BookmarkAdd";
import FactCheck from "@mui/icons-material/FactCheck";
import HomeRounded from "@mui/icons-material/HomeRounded";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Person from "@mui/icons-material/Person";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import DemoCanvasBase from "../DemoCanvasBase.tsx";
import { Box } from "@mui/joy";

export default function TabsUsage({ elemId }) {
  return (
    <DemoCanvasBase elemId={elemId}>
      <JoyUsageDemo
        componentName="Tab list"
        data={[
          {
            propName: "variant",
            knob: "radio",
            options: ["plain", "outlined", "soft", "solid"],
            defaultValue: "plain",
          },
          {
            propName: "color",
            knob: "color",
            defaultValue: "neutral",
          },
          {
            propName: "selected",
            knob: "switch",
            defaultValue: false,
          },
          {
            propName: "disabled",
            knob: "switch",
            defaultValue: false,
          },
        ]}
        getCodeBlock={(code) => `<List>
  <ListItem>
${prependLinesSpace(code, 3)}
  </ListItem>
</List>`}
        renderDemo={ExampleNavigationMenu}
      />
    </DemoCanvasBase>
  );
}

const useRovingIndex = (options) => {
  const {
    initialActiveIndex = 0,
    vertical = false,
    handlers = {
      onKeyDown: () => {},
    },
  } = options || {};
  const [activeIndex, setActiveIndex] = React.useState(initialActiveIndex);
  const targetRefs = React.useRef([]);
  const targets = targetRefs.current;
  const focusNext = () => {
    let newIndex = activeIndex + 1;
    if (newIndex >= targets.length) {
      newIndex = 0;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const focusPrevious = () => {
    let newIndex = activeIndex - 1;
    if (newIndex < 0) {
      newIndex = targets.length - 1;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const getTargetProps = (index) => ({
    ref: (ref) => {
      if (ref) {
        targets[index] = ref;
      }
    },
    tabIndex: activeIndex === index ? 0 : -1,
    onKeyDown: (event) => {
      console.log("getTargetProps>>>", activeIndex);

      if (Number.isInteger(activeIndex)) {
        if (event.key === (vertical ? "ArrowDown" : "ArrowRight")) {
          focusNext();
        }
        if (event.key === (vertical ? "ArrowUp" : "ArrowLeft")) {
          focusPrevious();
        }
        handlers.onKeyDown?.(event, { setActiveIndex });
      }
    },
    onClick: () => {
      setActiveIndex(index);
    },
  });
  return {
    activeIndex,
    setActiveIndex,
    targets,
    getTargetProps,
    focusNext,
    focusPrevious,
  };
};

const AboutMenu = React.forwardRef(
  ({ focusNext, focusPrevious, ...props }, ref) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
      initialActiveIndex: null,
      vertical: true,
      handlers: {
        onKeyDown: (event, fns) => {
          if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
            event.preventDefault();
          }
          if (event.key === "Tab") {
            setAnchorEl(null);
            fns.setActiveIndex(null);
          }
          if (event.key === "ArrowLeft") {
            setAnchorEl(null);
            focusPrevious();
          }
          if (event.key === "ArrowRight") {
            setAnchorEl(null);
            focusNext();
          }
        },
      },
    });

    const open = Boolean(anchorEl);
    const id = open ? "about-popper" : undefined;
    return (
      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
        <Box {...props} onMouseLeave={() => setAnchorEl(null)}>
          <ListItemButton
            aria-haspopup
            aria-expanded={open ? "true" : "false"}
            ref={ref}
            {...props}
            role="menuitem"
            onKeyDown={(event) => {
              props.onKeyDown?.(event);
              if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
                setAnchorEl(null);
              }
              if (event.key === "ArrowDown") {
                event.preventDefault();
                targets[0]?.focus();
                setActiveIndex(0);
              }
            }}
            onFocus={(event) => setAnchorEl(event.currentTarget)}
            onMouseEnter={(event) => {
              props.onMouseEnter?.(event);
              setAnchorEl(event.currentTarget);
            }}
            sx={[open && ((theme) => theme.variants.plainHover.neutral)]}
          >
            About <KeyboardArrowDown />
          </ListItemButton>
          <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            disablePortal
            keepMounted
          >
            <List
              role="menu"
              aria-label="About"
              variant="outlined"
              sx={{
                my: 2,
                boxTabs: "md",
                borderRadius: "sm",
                "--List-radius": "8px",
                "--List-padding": "4px",
                "--ListDivider-gap": "4px",
                "--ListItemDecorator-size": "32px",
              }}
            >
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(0)}>
                  <ListItemDecorator>
                    <Apps />
                  </ListItemDecorator>
                  Overview
                </ListItemButton>
              </ListItem>
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(1)}>
                  <ListItemDecorator>
                    <Person />
                  </ListItemDecorator>
                  Administration
                </ListItemButton>
              </ListItem>
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(2)}>
                  <ListItemDecorator>
                    <FactCheck />
                  </ListItemDecorator>
                  Facts
                </ListItemButton>
              </ListItem>
            </List>
          </Popper>
        </Box>
      </ClickAwayListener>
    );
  }
);

const AdmissionsMenu = React.forwardRef(
  ({ focusNext, focusPrevious, ...props }, ref) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
      initialActiveIndex: null,
      vertical: true,
      handlers: {
        onKeyDown: (event, fns) => {
          if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
            event.preventDefault();
          }
          if (event.key === "Tab") {
            setAnchorEl(null);
            fns.setActiveIndex(null);
          }
          if (event.key === "ArrowLeft") {
            setAnchorEl(null);
            focusPrevious();
          }
          if (event.key === "ArrowRight") {
            setAnchorEl(null);
            focusNext();
          }
        },
      },
    });

    const open = Boolean(anchorEl);
    const id = open ? "admissions-popper" : undefined;
    return (
      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
        <Box {...props} onMouseLeave={() => setAnchorEl(null)}>
          <ListItemButton
            aria-haspopup
            aria-expanded={open ? "true" : "false"}
            ref={ref}
            {...props}
            role="menuitem"
            onKeyDown={(event) => {
              props.onKeyDown?.(event);
              if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
                setAnchorEl(null);
              }
              if (event.key === "ArrowDown") {
                event.preventDefault();
                targets[0]?.focus();
                setActiveIndex(0);
              }
            }}
            onFocus={(event) => setAnchorEl(event.currentTarget)}
            onMouseEnter={(event) => {
              props.onMouseEnter?.(event);
              setAnchorEl(event.currentTarget);
            }}
            sx={[open && ((theme) => theme.variants.plainHover.neutral)]}
          >
            Admissions <KeyboardArrowDown />
          </ListItemButton>
          <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            disablePortal
            keepMounted
          >
            <List
              role="menu"
              aria-label="About"
              variant="outlined"
              sx={{
                my: 2,
                boxTabs: "md",
                borderRadius: "sm",
                minWidth: 180,
                "--List-radius": "8px",
                "--List-padding": "4px",
                "--ListDivider-gap": "4px",
              }}
            >
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(0)}>
                  <ListItemContent>Apply</ListItemContent>
                  <Chip size="sm" variant="soft" color="danger">
                    Last 2 days!
                  </Chip>
                </ListItemButton>
              </ListItem>
              <ListDivider />
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(1)}>
                  Visit
                </ListItemButton>
              </ListItem>
              <ListItem
                role="none"
                endAction={
                  <IconButton variant="outlined" color="neutral" size="sm">
                    <BookmarkAdd />
                  </IconButton>
                }
              >
                <ListItemButton role="menuitem" {...getTargetProps(2)}>
                  Photo tour
                </ListItemButton>
              </ListItem>
            </List>
          </Popper>
        </Box>
      </ClickAwayListener>
    );
  }
);

function ExampleNavigationMenu(props) {
  const { targets, getTargetProps, setActiveIndex, focusNext, focusPrevious } =
    useRovingIndex();
  return (
    <Box sx={{ minHeight: 190 }}>
      <List
        role="menubar"
        orientation="horizontal"
        sx={{
          "--List-radius": "8px",
          "--List-padding": "4px",
          "--List-gap": "8px",
          "--ListItem-gap": "0px",
        }}
      >
        <ListItem {...props} role="none">
          <ListItemButton
            {...props}
            role="menuitem"
            {...getTargetProps(0)}
            component="a"
            href="#navigation-menu"
          >
            <ListItemDecorator>
              <HomeRounded />
            </ListItemDecorator>
            Home
          </ListItemButton>
        </ListItem>
        <ListItem {...props} role="none">
          <AboutMenu
            {...props}
            onMouseEnter={() => {
              setActiveIndex(1);
              targets[1].focus();
            }}
            focusNext={focusNext}
            focusPrevious={focusPrevious}
            {...getTargetProps(1)}
          />
        </ListItem>
        <ListItem {...props} role="none">
          <AdmissionsMenu
            {...props}
            onMouseEnter={() => {
              setActiveIndex(2);
              targets[2].focus();
            }}
            focusNext={focusNext}
            focusPrevious={focusPrevious}
            {...getTargetProps(2)}
          />
        </ListItem>
      </List>
    </Box>
  );
}
