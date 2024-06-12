// THIRD-PARTY IMPORTS
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { IPlatform } from "../hooks/usePlatforms";

// INTERFACES
interface Props {
  onPlatformSelected: (platform: IPlatform) => void;
}

// COMPONENT
const PlatformSelector = ({ onPlatformSelected }: Props) => {
  // Access platform list
  const { data, error } = usePlatforms();

  // Don't render if error
  if (error) return null;

  // Output
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id} value={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

// EXPORT
export default PlatformSelector;
