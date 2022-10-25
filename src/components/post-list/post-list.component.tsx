import PostItem from "../post-item/post-item.component";
import { PostListContainer } from "./post-list.styles";
import { information } from "../../data/information";

const PostList = () => {
  return (
    <PostListContainer>
      {information.map((item) => (
        <PostItem key={item.teacherId} props={item} />
      ))}
    </PostListContainer>
  );
};

export default PostList;
