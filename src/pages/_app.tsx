import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "@/theme/theme"
import { LoginUserProvider } from "@/providers/LoginUserProvider"

type AppProps = {
  Component: React.ComponentType
  pageProps: Record<string, unknown>
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoginUserProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </LoginUserProvider>
  )
}

export default MyApp
