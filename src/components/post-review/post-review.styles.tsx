import styled from "styled-components";

export const ReviewContainer = styled.div`
  background-color: var(--white);
  border: 1px solid var(--grey);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 13px;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 15px;
`;

export const ReviewTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--text-color);
  margin-top: 12px;
  margin-bottom: 3px;
`;

export const ReviewText = styled.p`
  color: var(--light-text-color);
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
`;

export const TagList = styled.ul`
  display: flex;
  gap: 8px;
  list-style-type: none;
  margin-top: 31px;
  padding-left: 0;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  & > li {
    min-width: 79px;
    background-color: var(--blue);
    border-radius: 30px;
    padding: 4px 8px;
    color: var(--white);
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;
    text-align: center;
  }
`;
