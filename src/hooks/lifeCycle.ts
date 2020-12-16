import React from 'react';

// -------------------- componentWillMount --------------------
export const useComponentWillMount = (func: () => void) => {
  const willMount = React.useRef(true);
  if (willMount.current) func();
  willMount.current = false;
};
