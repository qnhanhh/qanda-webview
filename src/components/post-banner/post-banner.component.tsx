import { PostItemProps } from "../post-item/post-item.component";
import { BannerContainer } from "./post-banner.styles";

const PostBanner = ({ props }: PostItemProps) => {
  const { teacherName, imageUrl } = props;
  return (
    <BannerContainer>
      <img src={`${imageUrl}`} alt={teacherName}></img>
    </BannerContainer>
  );
};

export default PostBanner;
