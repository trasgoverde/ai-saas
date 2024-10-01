import React, { ChangeEvent } from "react";
import MuiTextField from "@mui/material/TextField";
import MuiMenuItem from "@mui/material/MenuItem";
import { ClassNameMap } from "@mui/material";

export type InputType<T extends string, S> = {
  className?: string;
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  label: string;
  name?: string;
  outlined?: boolean;
  styles?: ClassNameMap<T>;
  value: S;
  onChange: (value: S) => void;
  readOnly?: boolean;
};

type Option = {
  id: string;
  label: string;
};

export type Props<TValue extends Option = Option> = InputType<
  "root",
  TValue | undefined
> & {
  color?: string;
  options: Option[];
  renderValue?: (v: TValue) => React.ReactNode;
};

const Select = ({
  className,
  disabled = false,
  error,
  label,
  name,
  options,
  outlined = false,
  styles,
  value,
  onChange,
  renderValue,
}: Props<Option>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = options.find(({ id }) => id === event.target.value);
    if (selected) onChange(selected);
  };

  return (
    <MuiTextField
      className={className}
      classes={styles}
      disabled={disabled}
      error={error !== undefined}
      fullWidth
      helperText={error}
      id={name}
      label={label}
      name={name}
      onChange={handleChange}
      select
      value={value ? value.id : ""}
      variant={outlined ? "outlined" : "standard"}
      SelectProps={{
        renderValue:
          renderValue && value ? () => renderValue(value) : undefined,
      }}
      InputProps={{
        style: {
          borderColor: "#cccccc",
          height: "48px",
        },
      }}
    >
      {options.map(({ id, label }) => (
        <MuiMenuItem key={id} value={id}>
          <div style={{ display: "flex", gap: 8 }}>{label}</div>
        </MuiMenuItem>
      ))}
    </MuiTextField>
  );
};

export default Select;
