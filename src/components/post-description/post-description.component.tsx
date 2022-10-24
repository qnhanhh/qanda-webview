import {
  DescriptionContainer,
  TagList,
  UserDescription,
  UserInfo,
  DescriptionTitle,
  DescriptionText,
} from "./post-description.styles";
import { ReactComponent as UserAvatar } from "../../assets/avatar.svg";
import { ReactComponent as Dot } from "../../assets/dot.svg";

const PostDescription = () => {
  return (
    <DescriptionContainer>
      <UserDescription>
        <UserInfo>
          <UserAvatar />
          <span>Mai Anh</span>
          <Dot />
          <span>12</span>
        </UserInfo>
        <DescriptionText>3 tháng</DescriptionText>
      </UserDescription>
      <div>
        <DescriptionTitle>Vật Lý thầy Biên dễ hiểu nhất</DescriptionTitle>
        <DescriptionText>
          Bài tập phân chia theo từng cấp độ. Dù mất gốc hay khá giỏi đều có thể
          học dễ dàng.
        </DescriptionText>
        <TagList>
          <li>Phong cách</li>
          <li>Chuyên sâu</li>
          <li>Chất lượng</li>
        </TagList>
      </div>
    </DescriptionContainer>
  );
};

export default PostDescription;
