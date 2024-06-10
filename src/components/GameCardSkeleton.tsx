import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

// TODO: find more elegant solution to appropriately sizing skeleton cards

const GameCardSkeleton = () => {
  return (
    <Card width="lg: 300px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
