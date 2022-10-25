import { ButtonContainer } from "./button.styles";

import { ReactComponent as RightArrow } from "../../assets/chevronRight.svg";
import { PostItemProps } from "../post-item/post-item.component";

const Button = ({ props }: PostItemProps) => {
  return (
    <ButtonContainer href={props.pageUrl} target="_blank">
      <span>Tìm hiểu thêm</span>
      <RightArrow />
    </ButtonContainer>
  );
};

export default Button;
