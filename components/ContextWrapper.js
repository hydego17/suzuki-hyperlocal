import { useState } from "react"
import HeaderContext from "../Contexts/HeaderContext"

export default function ContextWrapper({ children }) {
  // Responsive navbar state
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <HeaderContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </HeaderContext.Provider>
  )
}
