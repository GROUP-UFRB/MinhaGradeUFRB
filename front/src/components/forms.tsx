import { Controller } from "react-hook-form";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

export type FormInputProps = {
  name: string;
  control: any;
  setValue?: any;
} & TextFieldProps;

export const FormInputText = ({
  name,
  control,
  children,
  ...rest
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          {...rest}
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
};
