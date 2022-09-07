import { useController } from "react-hook-form"

import { Box } from "components/Box"

import ErrorDescription from "./ErrorDescription"
import { InputLabel } from "./InputLabel"
import type { RHFControl, RHFValidationRules } from "./types"

type TextareaInputProps = {
  control: RHFControl
  name: string
  label?: string
  rules?: RHFValidationRules
  rows?: number
  maxLength?: number
}

export function TextareaInput({
  control,
  name,
  rows,
  label,
  maxLength,
  rules,
}: TextareaInputProps): JSX.Element {
  const {
    field: { onBlur, onChange, ref, value },
    fieldState: { error },
  } = useController({
    control,
    name,
    defaultValue: "",
    rules,
  })

  return (
    <Box
      css={{ display: "flex", flexDirection: "column", position: "relative" }}
    >
      {label && <InputLabel label={label} htmlFor={name} />}
      <Box
        as="textarea"
        css={{
          border: "none",
          borderBottom: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "$grey",
          resize: "none",
          outline: "none",
        }}
        ref={ref}
        name={name}
        id={name}
        rows={rows}
        value={value ?? ""}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={maxLength}
      />
      {error?.message && <ErrorDescription text={error.message} />}
    </Box>
  )
}
