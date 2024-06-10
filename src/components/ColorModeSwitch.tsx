// THIRD-PARTY IMPORTS
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

// COMPONENT
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme={"green"}
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

// EXPORT COMPONENT
export default ColorModeSwitch;
