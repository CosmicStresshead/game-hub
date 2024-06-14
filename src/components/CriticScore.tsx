// THIRD-PARTY COMPONENTS
import { Badge } from "@chakra-ui/react";

// INTERFACES
interface Props {
  score: number;
}

// COMPONENT
const CriticScore = ({ score }: Props) => {
  let color = score >= 75 ? "green" : score >= 60 ? "yellow" : "";

  return (
    <Badge
      title="Metacritic score"
      colorScheme={color}
      fontSize="14px"
      paddingY={1}
      paddingX={3}
      borderRadius={6}
    >
      {score}
    </Badge>
  );
};

// EXPORT COMPONENT
export default CriticScore;
