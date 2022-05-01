// Define break point scale here because media queries doesn't accept css variables
export const bp = {
  sm: '415px', // smaller than 415
  md: '768px', // between 415 to 768
};

// https://medium.flatstack.com/how-to-make-media-queries-strings-in-styled-components-shorter-and-more-reliable-c78bcce13fc8

export const maxWidth = (breakpoint) => `@media (max-width: ${breakpoint})`;

export const minWidth = (breakpoint) => `@media (min-width: ${breakpoint})`;
