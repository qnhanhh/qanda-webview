import { InfoType } from "../../data/information";
import Button from "../button/button.component";
import PostDescription from "../post-description/post-description.component";
import PostThumbnail from "../post-thumbnail/post-thumbnail.component";

import { PostItemContainer } from "./post-item.styles";

export type PostItemProps = {
  props: InfoType;
};

const PostItem = ({ props }: PostItemProps) => {
  return (
    <PostItemContainer>
      <PostThumbnail props={props} />
      <PostDescription props={props} />
      <Button props={props} />
    </PostItemContainer>
  );
};

export default PostItem;
