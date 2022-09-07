import { Typography } from "components/Typography"

type ErrorDescriptionProps = {
  text: string
}

export function ErrorDescription({ text }: ErrorDescriptionProps): JSX.Element {
  return (
    <Typography
      css={{ color: "red", position: "absolute", bottom: "-1.4em" }}
      variant="2xs"
    >
      {text}
    </Typography>
  )
}

export default ErrorDescription
