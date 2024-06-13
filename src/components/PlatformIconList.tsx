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
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IPlatform } from "../hooks/usePlatforms";
import { IconType } from "react-icons";

// INTERFACES
interface Props {
  platforms: IPlatform[];
}

// COMPONENT
const PlatformIconList = ({ platforms }: Props) => {
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
    <HStack>
      {platforms.slice(0, 6).map((platform) => (
        <Icon
          title={platform.name}
          boxSize={6}
          key={platform.id}
          as={iconMap[platform.slug]}
          color={"gray.500"}
          onClick={() => console.log(platform.slug)}
        />
      ))}
      {platforms.length > 6 && (
        <Text marginLeft={2} color="gray.400" fontSize="lg" fontWeight="bold">
          (+{platforms.length - 6})
        </Text>
      )}
    </HStack>
  );
};

// EXPORT COMPONENT
export default PlatformIconList;
