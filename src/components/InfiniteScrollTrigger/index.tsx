import { useEffect, useRef } from "react";
import { Trigger } from "./styles";

interface InfiniteScrollTriggerInterface {
  functionToTrigger: () => void;
  loading: boolean;
}

const InfiniteScrollTrigger = (props: InfiniteScrollTriggerInterface) => {
  const triggerElement = useRef<HTMLDivElement>(null);
  const { functionToTrigger, loading } = props;

  useEffect(() => {
    console.log(loading);
    if (loading) return;

    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        functionToTrigger();
      }
    });

    if (triggerElement.current)
      intersectionObserver.observe(triggerElement.current);

    return () => intersectionObserver.disconnect();
  }, [functionToTrigger]);

  return <Trigger ref={triggerElement} />;
};

export default InfiniteScrollTrigger;
