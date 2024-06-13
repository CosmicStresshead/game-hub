// THIRD-PARTY IMPORTS
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

// PROJECT IMPORTS
import { IGameObject } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";

// INTERFACES
interface Props {
  game: IGameObject;
}

// COMPONENT
const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={2}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="3xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

// EXPORT COMPONENT
export default GameCard;
