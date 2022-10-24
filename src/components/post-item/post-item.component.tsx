import Button from "../button/button.component";
import PostDescription from "../post-description/post-description.component";
import PostThumbnail from "../post-thumbnail/post-thumbnail.component";

import { PostItemContainer } from "./post-item.styles";

const PostItem = () => {
  return (
    <PostItemContainer>
      <PostThumbnail />
      <PostDescription />
      <Button />
    </PostItemContainer>
  );
};

export default PostItem;
