import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Fragment } from "react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selecetedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selecetedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <SkeletonText></SkeletonText>;
  return (
    <Fragment>
      <Heading fontSize="2xl" marginBottom={3}>
        {" "}
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                fontWeight={genre.id === selecetedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
};

export default GenreList;
