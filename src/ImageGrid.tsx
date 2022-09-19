import { ImageList } from "@mui/material";
import { Image } from "./Image";
import { ImageItem } from "./ImageItem";

export type ImageGridProps = {
  images: Image[];
  onImageClick(image: Image): void;
};

export const ImageGrid = ({ images, onImageClick }: ImageGridProps) => (
  <ImageList variant="quilted" rowHeight={200} cols={6} gap={8}>
    {images.map((image) => (
      <ImageItem
        key={image.id}
        image={image}
        onClick={() => onImageClick(image)}
      />
    ))}
  </ImageList>
);
