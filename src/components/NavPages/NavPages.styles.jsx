import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavPages = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 50px;
  width: 50%;
  
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 45px;
    border-radius: 5px;
  }

  div:hover {
    background-color: ${(props) => props.theme.secondary};
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
`;
