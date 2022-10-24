import { ButtonContainer } from "./button.styles";

import { ReactComponent as RightArrow } from "../../assets/chevronRight.svg";

const Button = () => {
  return (
    <ButtonContainer href="/">
      <span>Tìm hiểu thêm</span>
      <RightArrow />
    </ButtonContainer>
  );
};

export default Button;
