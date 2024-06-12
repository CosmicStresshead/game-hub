// THIRD-PARTY IMPORTS
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { IPlatform } from "../hooks/usePlatforms";

// INTERFACES
interface Props {
  selectedPlatform: IPlatform | null;
  onSelectPlatform: (platform: IPlatform | null) => void;
}

// COMPONENT
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  // Access platform list
  const { data, error } = usePlatforms();

  // Don't render if error
  if (error) return null;

  const nullPlatform = null;

  // Output
  return (
    <VStack alignItems="left" gap={1}>
      <Menu id="platformMenu">
        <MenuButton marginBottom={2} as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "All Platforms"}
        </MenuButton>

        <MenuList>
          <MenuItem key={-1} onClick={() => onSelectPlatform(null)}>
            All Platforms
          </MenuItem>

          {data.map((platform) => (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
              value={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </VStack>
  );
};

// EXPORT
export default PlatformSelector;
