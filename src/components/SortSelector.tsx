import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { IGameQuery } from "../App";

const orderTags = ["Name", "Released", "Rating"];

interface Props {
  gameQuery: IGameQuery;
  onSelectSort: (sortBy: string) => void;
}

const SortSelector = ({ gameQuery, onSelectSort }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {"Sort by: " + (gameQuery.sortBy || "None")}
      </MenuButton>
      <MenuList>
        {orderTags.map((tag, index) => (
          <MenuItem key={index} onClick={() => onSelectSort(tag.toLowerCase())}>
            {tag}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
