import { Box } from "@mui/material";
import mainImage from "./images/banner.png";

const BannerImage = () => (
  <Box
    component="img"
    src={mainImage}
    alt="Banner"
    sx={{
      width: "70%",
      height: "auto",
      display: "block",
      margin: "0 auto"
    }}
  />
);

export default BannerImage;