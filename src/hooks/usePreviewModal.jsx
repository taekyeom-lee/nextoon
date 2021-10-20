import { useState, useRef } from 'react';

function usePreviewModal() {
  const [previewModalIsOpen, setPreviewModalIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const titleCardRef = useRef(null);

  const mouseEnterItem = () => {
    setPreviewModalIsOpen(true);
    setWidth(titleCardRef.current.offsetWidth);
    setHeight(titleCardRef.current.offsetHeight);
  };

  const mouseLeaveItem = () => {
    setPreviewModalIsOpen(false);
    setWidth(0);
    setHeight(0);
  };

  return {
    previewModalIsOpen,
    width,
    height,
    titleCardRef,
    mouseEnterItem,
    mouseLeaveItem,
  };
}

export default usePreviewModal;
