import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  grid-column: header-left / header-right;
  background: var(--secondaryColor);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

const LektionHeader = styled.div`
  padding-right: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  position: fixed;
  top: 24px;
  right: 15px;
`;

export const NavigationTop = () => {
  const lesson = window.location.pathname.replace('/', '');
  return (
    <StyledContainer>
      {lesson && <LektionHeader>Lektion {lesson}</LektionHeader>}
    </StyledContainer>
  );
};
