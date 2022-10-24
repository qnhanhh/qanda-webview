import thumbnail from "../../assets/postThumbnail.png";
import { ThumbnailContainer } from "./post-thumbnail.styles";

const PostThumbnail = () => {
  return (
    <ThumbnailContainer>
      <img src={thumbnail} alt=""></img>
    </ThumbnailContainer>
  );
};

export default PostThumbnail;
