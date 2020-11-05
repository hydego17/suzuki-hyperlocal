import { ThemeProvider } from "emotion-theming"
import GlobalStyles from "../components/GlobalStyles"
import ContextWrapper from "components/ContextWrapper"

import Header from "components/Header"
import Footer from "components/Footer"

import { AnimatePresence, motion } from "framer-motion"

const theme = {
  colors: {
    primary: "#163C80",
    light_gray: "#F1F5F6",
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <ContextWrapper>
            <Header />
          </ContextWrapper>

          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </AnimatePresence>
    </>
  )
}

export default MyApp
