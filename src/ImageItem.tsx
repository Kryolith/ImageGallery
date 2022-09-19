import {
  Avatar,
  Box,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { Image } from "./Image";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShowChartSharpIcon from "@mui/icons-material/ShowChartSharp";
import { green } from "@mui/material/colors";
import SentimentSatisfiedAltSharpIcon from "@mui/icons-material/SentimentSatisfiedAltSharp";

export type ImageItemProps = {
  image: Image;
  onClick(): void;
};

export const ImageItem = ({ image, onClick }: ImageItemProps) => (
  <ImageListItem
    cols={+image.id % 17 === 9 ? 2 : 1}
    rows={+image.id % 17 === 9 ? 2 : 1}
    component="a"
    sx={{ cursor: "pointer" }}
    onClick={onClick}
  >
    <img
      src={image.thumb}
      alt={image.author}
      loading="lazy"
      style={{ maxHeight: "100%" }}
    />
    <ImageListItemBar
      sx={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, " +
          "rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)",
      }}
      title={
        <Typography textAlign="right" sx={{ fontSize: 12 }}>
          {image.author}
        </Typography>
      }
      subtitle={
        <Box sx={{ textAlign: "right" }}>
          <span style={{ fontSize: 12, marginRight: 8 }}>
            <ShowChartSharpIcon sx={{ fontSize: 10 }} />{" "}
            {Math.floor(Math.random() * 100 - 5)}
          </span>
          <span style={{ fontSize: 12 }}>
            <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 10 }} />{" "}
            {Math.floor(Math.random() * 200)}
          </span>
        </Box>
      }
      position="top"
      actionIcon={
        <Avatar
          sx={{ width: 16, height: 16, ml: 2, backgroundColor: green[400] }}
        >
          <SentimentSatisfiedAltSharpIcon sx={{ fontSize: 10 }} />
        </Avatar>
      }
      actionPosition="left"
    />
    <ImageListItemBar
      sx={{
        "& .MuiImageListItemBar-titleWrap": { py: 0.5, px: 1 },
      }}
      subtitle={
        <Box sx={{ textAlign: "right" }}>
          <span style={{ fontSize: 12 }}>{toTimeString(+image.id)}</span>
        </Box>
      }
    />
  </ImageListItem>
);

function toTimeString(minutes: number) {
  if (minutes <= 1) return "Just now";
  if (minutes < 60) return `${minutes} minutes ago`;
  if (minutes >= 60 && minutes < 120) return `1 hour ago`;
  if (minutes >= 120) return `${Math.floor(minutes / 60)} hours ago`;
}
