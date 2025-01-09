import * as React from "react";
import { Dayjs } from "dayjs";
import { useColorScheme as useMaterialColorScheme } from "@mui/material/styles";
import { extendTheme as extendJoyTheme, useColorScheme } from "@mui/joy/styles";
import Input, { InputProps } from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import {
  unstable_useDateField as useDateField,
  UseDateFieldProps,
} from "@mui/x-date-pickers/DateField";
import { useClearableField } from "@mui/x-date-pickers/hooks";
import {
  BaseSingleInputFieldProps,
  DateValidationError,
  FieldSection,
} from "@mui/x-date-pickers/models";
import JoyUsageDemo from "../JoyUsageDemo";
import DemoCanvasBase from "../DemoCanvasBase";

interface JoyFieldProps extends InputProps {
  label?: React.ReactNode;
  inputRef?: React.Ref<HTMLInputElement>;
  enableAccessibleFieldDOMStructure?: boolean;
  InputProps?: {
    ref?: React.Ref<any>;
    endAdornment?: React.ReactNode;
    startAdornment?: React.ReactNode;
  };
  formControlSx?: InputProps["sx"];
}

type JoyFieldComponent = ((
  props: JoyFieldProps & React.RefAttributes<HTMLDivElement>
) => React.JSX.Element) & { propTypes?: any };

const JoyField = React.forwardRef(
  (props: JoyFieldProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      // Should be ignored
      enableAccessibleFieldDOMStructure,

      disabled,
      id,
      label,
      InputProps: {
        ref: containerRef,
        startAdornment,
        endAdornment,
        ...restInputProps
      } = {},
      formControlSx,
      endDecorator,
      startDecorator,
      slotProps,
      inputRef,
      ...other
    } = props;

    console.log({ disabled });
    return (
      <FormControl
        disabled={disabled}
        id={id}
        sx={[
          ...(Array.isArray(formControlSx) ? formControlSx : [formControlSx]),
        ]}
        ref={ref}
      >
        <FormLabel>{label}</FormLabel>
        <Input
          ref={ref}
          disabled={disabled}
          startDecorator={
            <React.Fragment>
              {startAdornment}
              {startDecorator}
            </React.Fragment>
          }
          endDecorator={
            <React.Fragment>
              {endAdornment}
              {endDecorator}
            </React.Fragment>
          }
          slotProps={{
            ...slotProps,
            root: { ...slotProps?.root, ref: containerRef },
            input: { ...slotProps?.input, ref: inputRef },
          }}
          {...other}
        />
      </FormControl>
    );
  }
) as JoyFieldComponent;

interface JoyDateFieldProps
  extends UseDateFieldProps<Dayjs, false>,
    BaseSingleInputFieldProps<
      Dayjs | null,
      Dayjs,
      FieldSection,
      false,
      DateValidationError
    > {}

const JoyDateField = React.forwardRef(
  (props: JoyDateFieldProps, ref: React.Ref<HTMLDivElement>) => {
    const { slots, slotProps, ...textFieldProps } = props;

    const fieldResponse = useDateField<Dayjs, false, typeof textFieldProps>({
      ...textFieldProps,
      enableAccessibleFieldDOMStructure: false,
    });

    /* If you don't need a clear button, you can skip the use of this hook */
    const processedFieldProps = useClearableField({
      ...fieldResponse,
      slots,
      slotProps,
    });

    console.log({ textFieldProps, slotProps, processedFieldProps });
    return <JoyField ref={ref} {...slotProps} {...processedFieldProps} />;
  }
);

const JoyDatePicker = React.forwardRef(
  (props: DatePickerProps<Dayjs, false>, ref: React.Ref<HTMLDivElement>) => {
    console.log({ props });

    return (
      <DatePicker
        ref={ref}
        {...props}
        slots={{ ...props.slots, field: JoyDateField }}
        slotProps={{
          ...props.slotProps,
          field: {
            ...props.slotProps?.field,
            formControlSx: {
              flexDirection: "row",
            },
          } as any,
        }}
      />
    );
  }
);

/**
 * This component is for syncing the theme mode of this demo with the MUI docs mode.
 * You might not need this component in your project.
 */
function SyncThemeMode({ mode }: { mode: "light" | "dark" }) {
  const { setMode } = useColorScheme();
  const { setMode: setMaterialMode } = useMaterialColorScheme();
  React.useEffect(() => {
    setMode(mode);
    setMaterialMode(mode);
  }, [mode, setMode, setMaterialMode]);
  return null;
}

const JoyDatePickerSingle = (props) => {
  return (
    <JoyDatePicker
      slotProps={{
        field: { clearable: true },
        ...props,
      }}
    />
  );
};

export default function CalendarUsage({ elemId }) {
  return (
    <DemoCanvasBase elemId={elemId}>
      <JoyUsageDemo
        componentName="Select"
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
          },
        ]}
        renderDemo={JoyDatePickerSingle}
      />
    </DemoCanvasBase>
  );
}
