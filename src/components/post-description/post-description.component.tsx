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
import { PostItemProps } from "../post-item/post-item.component";

const PostDescription = ({ props }: PostItemProps) => {
  const {
    studentName,
    studentGrade,
    studyPeriod,
    reviewTitle,
    reviewBody,
    hashtags,
  } = props;
  return (
    <DescriptionContainer>
      <UserDescription>
        <UserInfo>
          <UserAvatar />
          <span>{studentName}</span>
          <Dot />
          <span>{studentGrade}</span>
        </UserInfo>
        <DescriptionText>{studyPeriod}</DescriptionText>
      </UserDescription>
      <div>
        <DescriptionTitle>{reviewTitle}</DescriptionTitle>
        <DescriptionText>{reviewBody}</DescriptionText>
        <TagList>
          {hashtags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </TagList>
      </div>
    </DescriptionContainer>
  );
};

export default PostDescription;
