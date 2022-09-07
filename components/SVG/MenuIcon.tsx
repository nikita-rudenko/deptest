type MenuIconProps = {
  color?: string
}

export function MenuIcon({
  color = "currentColor",
}: MenuIconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="9"
      fill="none"
      viewBox="0 0 31 9"
    >
      <path
        fill={color}
        d="M8.32 4.5a4 4 0 11-8 0 4 4 0 018 0zM19.52 4.5a4 4 0 11-8 0 4 4 0 018 0zM30.72 4.5a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  )
}
