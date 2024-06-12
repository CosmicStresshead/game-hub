import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { IGameQuery } from "../App";

interface Props {
  gameQuery: IGameQuery;
  onSelectSort: (sortBy: ISortingOption) => void;
}

export interface ISortingOption {
  label: string;
  value: string;
}

const SortSelector = ({ gameQuery, onSelectSort }: Props) => {
  // Sorting options
  const sortingOptions = [
    { label: "Relevance", value: "" },
    { label: "Title", value: "name" },
    { label: "Date added", value: "-added" },
    { label: "Release date", value: "-released" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Average rating", value: "-rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {gameQuery.sortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortingOptions.map((option, index) => (
          <MenuItem key={index} onClick={() => onSelectSort(option)}>
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
