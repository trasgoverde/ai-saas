import { TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  color: string;
  onChange: (e: any) => void;
  options: string[];
  removeValue: () => void;
};
const AutoComplete = ({
  label,
  name,
  value,
  color,
  onChange,
  options,
  removeValue,
}: Props) => {
  const optionsList = useMemo(() => options, [options]);
  const [state, setState] = useState(false);
  const [item, setItem] = useState("");

  useEffect(() => {
    const handleRemoveItem = (value?: string) => {
      for (let i = 0; i < options.length; i++) {
        if (options[i] === value) {
          options.splice(i, 1);
          setState(false);
          setItem("");
          break;
        }
      }
    };
    if (state) return handleRemoveItem(item);
  }, [state, item, options, removeValue]);

  return (
    <div
      style={{
        marginTop: "-10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          width: "100%",
          maxWidth: "98%",
          height: "fit-content",
          overflowX: "scroll",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {optionsList.map((item, i) => (
            <div
              style={{
                display: "flex",
                width: "fit-content",
                flexDirection: "row",
                borderRadius: "2rem",
                height: "30px",
                objectPosition: "center",
                alignItems: "center",
                gap: "30px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop: "6px",
                paddingBottom: "6px",
                backgroundColor: "#e4eaf5",
                justifyContent: "space-between",
              }}
              key={i}
            >
              <p
                style={{
                  padding: "0px",
                  fontSize: "0.875rem",
                }}
              >
                {item}
              </p>
              <button
                style={{
                  backgroundColor: "#073191",
                  width: "16px",
                  color: "white",
                  height: "16px",
                  padding: "2px",
                  borderRadius: "3rem",
                  objectPosition: "center",
                  alignItems: "center",
                  fontSize: "14px",
                  paddingTop: "0px",
                }}
                onClick={() => {
                  setItem(item);
                  setState(true);
                }}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        <TextField
          value={value}
          onChange={onChange}
          label={label}
          name={name}
          InputProps={{
            style: {
              borderColor: "#cccccc",
              height: "48px",
              fontSize: "0.875rem",
            },
          }}
          sx={{ width: "100%" }}
        />
        <button
          style={{
            backgroundColor: color,
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            color: "white",
            fontSize: "0.875rem",
          }}
          onClick={() => {
            if (value.length === 0) return;
            options.push(value);
            removeValue();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AutoComplete;
