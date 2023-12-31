import styled from 'styled-components';

import { HamburgerIcon } from '../Icon/HamburgerIcon';

export const HamburgerButton = ({
  onClick,
}: {
  onClick: (e: Event) => void;
}) => (
  <StyledButton onClick={onClick}>
    <HamburgerIcon />
  </StyledButton>
);

const StyledButton = styled.button`
  border: none;
  background: transparent;
`;
