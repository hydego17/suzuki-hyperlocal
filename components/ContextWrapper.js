import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import HeaderContext from "../Contexts/HeaderContext"
import data from "../data/db.json"

export default function ContextWrapper({ children }) {
  // check current route to set nav state
  const router = useRouter()
  const checkRouter = router.pathname

  // Set state for navigation links (for home and outlet page)
  const { navsHome, navsOutlet } = data
  const [homeNavs, setHomeNavs] = useState(navsHome)

  // Apply custom hooks
  useEffect(() => {
    setHomeNavs(checkRouter === "/" ? navsHome : navsOutlet)
  }, [checkRouter])

  // Responsive navbar state
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <HeaderContext.Provider
      value={{ openMenu, setOpenMenu, homeNavs, setHomeNavs }}
    >
      {children}
    </HeaderContext.Provider>
  )
}
