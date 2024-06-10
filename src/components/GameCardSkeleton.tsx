// TODO: find more elegant solution to appropriately sizing skeleton cards

// THIRD-PARTY IMPORTS
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

// COMPONENT
const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

// EXPORT COMPONENT
export default GameCardSkeleton;
