import { InfoType } from "../../data/information";
import Button from "../button/button.component";
import PostReview from "../post-review/post-review.component";
import PostBanner from "../post-banner/post-banner.component";

import { PostItemContainer } from "./post-item.styles";

export type PostItemProps = {
  props: InfoType;
};

const PostItem = ({ props }: PostItemProps) => {
  return (
    <PostItemContainer>
      <PostBanner props={props} />
      <PostReview props={props} />
      <Button props={props} />
    </PostItemContainer>
  );
};

export default PostItem;
