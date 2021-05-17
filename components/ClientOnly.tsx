import { useEffect, useState } from 'react';

export const ClientOnly = ({ children }: Props) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
  return <>{children}</>;
};

type Props = {
  children: React.ReactNode;
};
