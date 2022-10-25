import {
  ReviewContainer,
  TagList,
  UserContainer,
  UserInfo,
  ReviewTitle,
  ReviewText,
} from "./post-review.styles";
import { ReactComponent as UserAvatar } from "../../assets/avatar.svg";
import { ReactComponent as Dot } from "../../assets/dot.svg";
import { PostItemProps } from "../post-item/post-item.component";

const PostReview = ({ props }: PostItemProps) => {
  const {
    studentName,
    studentGrade,
    studyPeriod,
    reviewTitle,
    reviewBody,
    hashtags,
  } = props;
  return (
    <ReviewContainer>
      <UserContainer>
        <UserInfo>
          <UserAvatar />
          <span>{studentName}</span>
          <Dot />
          <span>{studentGrade}</span>
        </UserInfo>
        <ReviewText>{studyPeriod}</ReviewText>
      </UserContainer>
      <div>
        <ReviewTitle>{reviewTitle}</ReviewTitle>
        <ReviewText>{reviewBody}</ReviewText>
        <TagList>
          {hashtags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </TagList>
      </div>
    </ReviewContainer>
  );
};

export default PostReview;
