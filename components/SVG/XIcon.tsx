type XIconProps = {
  color?: string
}

export function XIcon({ color = "currentColor" }: XIconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="none"
      viewBox="0 0 17 17"
    >
      <path
        fill={color}
        d="M0 15.206L15.206 0l1.53 1.529L1.528 16.735 0 15.206z"
      />
      <path
        fill={color}
        d="M1.529 0l15.206 15.206-1.529 1.53L0 1.528 1.529 0z"
      />
    </svg>
  )
}
