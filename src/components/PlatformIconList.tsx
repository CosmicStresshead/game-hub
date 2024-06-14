// THIRD-PARTY COMPONENTS
import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaKeyboard,
} from "react-icons/fa";
import { GiGameConsole } from "react-icons/gi";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiAtari, SiApplearcade, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { IPlatform } from "../hooks/usePlatforms";
import { IconType } from "react-icons";

// INTERFACES
interface Props {
  platforms: IPlatform[];
  maxIcons?: number;
}

// COMPONENT
const PlatformIconList = ({ platforms, maxIcons = 3 }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    mac: FaApple,
    xbox: FaXbox,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
    atari: SiAtari,
    sega: SiSega,
    "3do": GiGameConsole,
    "neo-geo": SiApplearcade,
    "commodore-amiga": FaKeyboard,
  };

  return (
    <VStack alignItems="left">
      <HStack maxHeight={6} flexFlow="column-wrap" overflowY="hidden">
        {platforms.slice(0, maxIcons).map((platform) => (
          <Icon
            title={platform.name}
            boxSize={6}
            key={platform.id}
            as={iconMap[platform.slug]}
            color={"gray.500"}
          />
        ))}
        {platforms.length > maxIcons && (
          <Text boxSize={6} color="gray.400" fontSize="sm" fontWeight="bold">
            +{platforms.length - maxIcons}
          </Text>
        )}
      </HStack>
    </VStack>
  );
};

// EXPORT COMPONENT
export default PlatformIconList;
