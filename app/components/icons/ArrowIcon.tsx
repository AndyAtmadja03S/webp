import * as React from "react"
const Arrow = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#1f1f1f"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
  </svg>
)
export default Arrow