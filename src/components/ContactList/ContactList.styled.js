import styled from 'styled-components';

export const List = styled.ul`
  max-width: 75%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  flex-direction: column;
  border: 6px solid rgba(50, 57, 65, 1);
  border-radius: 6px;
  padding: 5px;
  width: 75%;
  padding: 5px;
  margin: 10px 0px;
`;
export const Item = styled.li`
  max-width: 100%;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;
export const Text = styled.span`
  max-width: 85%;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  align-content: flex-start;
  text-decoration: none;
  @media screen and (max-width: 1023px) {
    font-size: 16px;
  }
  @media screen and (max-width: 767px) {
    font-size: 10px;
    padding: 3px;
  }
  @media screen and (max-width: 567px) {
    max-width: 65%;
    font-size: 8px;
    padding: 2px;
  }
`;
export const DeleteBtn = styled.button`
  max-width: 100%;
  display: flex;
  font-size: 12px;
  font-weight: 600;
  color: rgba(50, 57, 65, 1);
  border: 1px solid rgba(50, 57, 65, 1);
  border-radius: 4px;
  margin-left: 15px;
  justify-content: center;
  align-items: center;
  background: #2196f3;
  letter-spacing: 1.2px;
  margin: 0px 0px;
  height: 35px;
  &:hover {
    color: #ffff;
    border: 1px solid rgba(50, 57, 65, 1);
    background: #188ce8;
    font-weight: 700;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    height: 30px;
  }

  @media screen and (max-width: 567px) {
    font-size: 8px;
    height: 25px;
    margin: 0px 0px;
    padding: 2px;
  }
`;
export const Default = styled.li`
  display: block;
  font-size: 22px;
  font-weight: 400;
  padding: 0;
  justify-content: space-between;
  margin-bottom: 5px;
`;
