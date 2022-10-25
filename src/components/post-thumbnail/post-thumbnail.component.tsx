import { PostItemProps } from "../post-item/post-item.component";
import { ThumbnailContainer } from "./post-thumbnail.styles";

const PostThumbnail = ({ props }: PostItemProps) => {
  const { teacherName, imageUrl } = props;
  return (
    <ThumbnailContainer>
      <img src={`${imageUrl}`} alt={teacherName}></img>
    </ThumbnailContainer>
  );
};

export default PostThumbnail;
