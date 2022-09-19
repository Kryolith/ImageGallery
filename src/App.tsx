import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Image } from "./Image";
import { ImageDialog } from "./ImageDialog";
import { ImageGrid } from "./ImageGrid";
import { Layout } from "./Layout";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<Image | undefined>(
    undefined
  );
  const [open, setOpen] = useState(false);

  const fetchImages = async () => {
    console.log("fetch images");
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=30`
    );

    const data = await response.json();
    const fixed = data.map((image: Image) => ({
      ...image,
      download_url: `https://picsum.photos/id/${image.id}/1024/768`,
      thumb: `https://picsum.photos/id/${image.id}/200`,
    }));
    setImages((images) => [...images, ...fixed]);
    setPage((page) => page + 1);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleImageClick = (image: Image) => {
    console.log("show image");
    setSelectedImage(image);
    setOpen(true);
  };

  return (
    <Layout>
      <ImageGrid images={images} onImageClick={handleImageClick} />
      <Button
        onClick={fetchImages}
        fullWidth
        color="primary"
        variant="contained"
        disableElevation
        sx={{ my: 1, py: 1 }}
      >
        Load more
      </Button>
      {selectedImage && (
        <ImageDialog
          image={selectedImage}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </Layout>
  );
}

export default App;
