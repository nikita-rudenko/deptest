type PointIconProps = {
  color?: string
}

export const PointIcon = ({
  color = "currentColor",
}: PointIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
    >
      <circle cx="6" cy="6" r="5.7" stroke={color} strokeWidth="0.6" />
      <circle
        cx="6"
        cy="6"
        r="1.7"
        fill={color}
        stroke={color}
        strokeWidth="0.6"
      />
    </svg>
  )
}
