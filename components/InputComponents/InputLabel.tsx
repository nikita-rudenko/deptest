import { Typography } from "components/Typography"

type InputLabelProps = {
  label: string
  htmlFor?: string
}

export function InputLabel({ label, htmlFor }: InputLabelProps): JSX.Element {
  return (
    <Typography
      as="label"
      htmlFor={htmlFor}
      variant="2xs"
      css={{ textTransform: "uppercase" }}
    >
      {label}
    </Typography>
  )
}
