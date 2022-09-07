import { useController } from "react-hook-form"

import { Box } from "components/Box"

import ErrorDescription from "./ErrorDescription"
import { InputLabel } from "./InputLabel"
import { RHFControl, RHFValidationRules } from "./types"

type TextInputProps = {
  control: RHFControl
  name: string
  rules?: RHFValidationRules
  label?: string
  type?: string
}

export function TextInput({
  control,
  name,
  type = "text",
  rules = {},
  label,
}: TextInputProps): JSX.Element {
  const {
    field: { ref, onChange, onBlur },
    fieldState: { error },
  } = useController({
    control,
    name,
    defaultValue: "",
    rules,
  })

  const errorMessage = error?.message

  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative",
      }}
    >
      {label && <InputLabel label={label} htmlFor={name} />}
      <Box
        as="input"
        css={{
          border: "none",
          borderBottom: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "$grey",
          outline: "none",
        }}
        ref={ref}
        name={name}
        id={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errorMessage && <ErrorDescription text={errorMessage} />}
    </Box>
  )
}
