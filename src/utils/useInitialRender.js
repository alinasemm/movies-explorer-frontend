import { useRef, useEffect } from 'react'

export function useInitialRender () {
  const isInitialRenderRef = useRef(true);

  useEffect(() => {
    isInitialRenderRef.current = false;
  }, []);

  return isInitialRenderRef.current;
}