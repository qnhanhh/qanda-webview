import PostItem from "../post-item/post-item.component";
import { PostListContainer } from "./post-list.styles";

const PostList = () => {
  return (
    <PostListContainer>
      <PostItem />
      <PostItem />
      <PostItem />
    </PostListContainer>
  );
};

export default PostList;
