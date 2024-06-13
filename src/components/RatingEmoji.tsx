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
    3: { src: meh, alt: "meh", title: "Meh." },
    4: { src: thumbsUp, alt: "recommended", title: "Recommended" },
    5: { src: bullseye, alt: "exceptional", title: "Exceptional" },
  };

  return <Image boxSize="28px" {...emojiMap[rating]} />;
};

export default RatingEmoji;
