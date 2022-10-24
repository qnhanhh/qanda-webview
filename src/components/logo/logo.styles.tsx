import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/QANDA study logo.svg";

export const LogoContainer = styled.div`
  background-color: var(--white);
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 98px;
  top: 0;
  margin-bottom: 26px;
`;

export const LogoIcon = styled(Logo)`
  position: absolute;
  background-color: var(--white);
  width: 148.88px;
  height: 23.89px;
  left: 13px;
  top: 71px;
`;
