import type { Control, RegisterOptions } from "react-hook-form"

export type RHFControl = Control<any>

export type RHFValidationRules = Omit<
  RegisterOptions,
  "valueAsNumber" | "valueAsDate" | "setValueAs"
>
