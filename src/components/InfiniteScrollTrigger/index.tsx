import React, { useEffect, useRef } from "react";
import { Trigger } from "./styles";

interface InfiniteScrollTriggerInterface {
  functionToTrigger: () => void;
  loading: boolean;
}

const InfiniteScrollTrigger: React.FC<InfiniteScrollTriggerInterface> = (
  props: InfiniteScrollTriggerInterface
) => {
  const triggerElement = useRef<HTMLDivElement>(null);
  const { functionToTrigger, loading } = props;

  useEffect(() => {
    if (loading) return;

    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        functionToTrigger();
      }
    });

    if (triggerElement.current)
      intersectionObserver.observe(triggerElement.current);

    return () => intersectionObserver.disconnect();
  }, [functionToTrigger, loading]);

  return loading ? <></> : <Trigger ref={triggerElement} />;
};

export default InfiniteScrollTrigger;
