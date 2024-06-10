import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// create config object
const config: ThemeConfig = {
  initialColorMode: 'dark',
}

// initialise a theme object with config object
const theme = extendTheme({ config })

export default theme;