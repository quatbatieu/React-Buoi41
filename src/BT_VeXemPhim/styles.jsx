import styled, { css } from "styled-components";

export const Button = styled.button`

  ${({ variant }) =>
    variant === "primary" &&
    css`
      padding: 10px 50px;
      border-radius: 8px;
      color: black;
      border: 1px solid transparent;
      font-size: 20px;
      font-weight: 600;
    `}
`;
