import { Close as CloseIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, ReactElement } from "react";
import { Image } from "./Image";

export type ImageDialogProps = {
  image: Image;
  open: boolean;
  onClose(): void;
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ImageDialog = ({ image, open, onClose }: ImageDialogProps) => (
  <Dialog
    fullScreen
    open={open}
    onClose={onClose}
    TransitionComponent={Transition}
    onClick={onClose}
  >
    <AppBar sx={{ position: "relative" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {image.author}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
    <Box
      display="flex"
      alignItems="center"
      height={"100%"}
      justifyContent="center"
    >
      <img
        src={image.download_url}
        alt={image.author}
        style={{ width: 1024, height: 768 }}
      />
    </Box>
  </Dialog>
);
