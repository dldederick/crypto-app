import styled from 'styled-components';

export const StyledTimePeriodSelect = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.text};
  justify-content: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 500px;
  height: 40px;
  line-height: 40px;
  gap: 20px;
  margin-top: 20px;
  align-items: center;

  @media (max-width:1000px) {
    width: 80%;
    padding: 0 10px 0 10px;
  }
`;

export const Circle = styled.div`
  width: 12px;
  height: 12px;
  border: 1px solid green;
  border-radius: 50%;
  background-color: ${(props) =>
    props.item === props.isSelected ? "#00ff5f" : "none"};
`;

export const Period = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
`;