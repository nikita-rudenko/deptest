import { useForm } from "react-hook-form"

import { Box } from "components/Box"
import { Button } from "components/Button"
import { TextareaInput, TextInput } from "components/InputComponents"
import { Typography } from "components/Typography"

import * as Styled from "./FormSection.styled"

type FormValues = {
  name: string
  email: string
  message: string
}

export function FormSection(): JSX.Element {
  const { control, handleSubmit } = useForm<FormValues>()

  const submit = () => {
    return
  }

  return (
    <Styled.Container>
      <Box css={{ maxWidth: "380px" }}>
        <Typography
          variant={{ "@initial": "sm", "@lg": "lg" }}
          css={{ lineHeight: "1.4em" }}
        >
          QUESTION? WE ARE HERE TO HELP!
        </Typography>
      </Box>

      <Styled.ContactForm onSubmit={handleSubmit(submit)}>
        <TextInput
          control={control}
          type="text"
          name="name"
          label="Name"
          rules={{ required: "This field is required" }}
        />
        <TextInput
          control={control}
          name="email"
          label="Email"
          type="email"
          rules={{ required: "This field is required" }}
        />
        <TextareaInput
          control={control}
          name="message"
          label="Message"
          rows={6}
          rules={{ required: "This field is required" }}
        />

        <Box />

        <Button type="submit" css={{ width: "100%", maxWidth: "175px" }}>
          Send
        </Button>
      </Styled.ContactForm>
    </Styled.Container>
  )
}
