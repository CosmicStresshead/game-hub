import { Image, ImageProps } from "@chakra-ui/react";
import bullseye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const RatingEmoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: {
      src: meh,
      alt: "meh",
      title: "Meh.",
      boxSize: "32px",
    },
    4: {
      src: thumbsUp,
      alt: "recommended",
      title: "Recommended",
      boxSize: "32px",
    },
    5: {
      src: bullseye,
      alt: "exceptional",
      title: "Exceptional",
      boxSize: "32px",
    },
  };

  return <Image {...emojiMap[rating]} />;
};

export default RatingEmoji;
