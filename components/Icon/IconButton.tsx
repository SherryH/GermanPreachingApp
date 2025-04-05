import React from 'react';
import type { PropsWithChildren, ButtonHTMLAttributes } from 'react';
import type { BaseIconProps } from './BaseIconProps';

import styled from 'styled-components';

// Define the styled button component
interface StyledButtonProps {
  size?: 'sm' | 'md' | 'lg';
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  background: transparent;
  border: none;

  /* Size variants */
  padding: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '0.25rem';
      case 'lg':
        return '0.75rem';
      default:
        return '0.5rem'; // Medium (default)
    }
  }};

  /* State styles */
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover:not(:disabled) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }

  &:active:not(:disabled) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

/**
 * IconButton - A button component that wraps an SVG icon
 *
 * @param {Object} props
 * @param {React.ReactElement<BaseIconProps>} props.children - The icon component to render (must implement BaseIconProps)
 * @param {string} props.label - Accessible label for the button
 * @param {function} props.onClick - Click handler
 * @param {string} props.className - Additional classes
 * @param {boolean} props.disabled - Whether the button is disabled
 * @param {'sm' | 'md' | 'lg'} props.size - Size of the button (sm, md, lg)
 * @param {Object} props.rest - Any other props to pass to the button element
 */

type IconButtonTypes = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
> & {
  children: React.ReactElement<BaseIconProps>;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
};

const IconButton = ({
  children,
  label,
  onClick,
  className,
  disabled = false,
  size = 'md',
  ...rest
}: IconButtonTypes) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      size={size}
      className={className}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default IconButton;
