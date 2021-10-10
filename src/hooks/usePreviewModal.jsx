import { useState, useRef } from 'react';

function usePreviewModal() {
  const [previewModalIsOpen, setPreviewModalIsOpen] = useState(false);

  const titleCardRef = useRef(null);

  const mouseEnterItem = () => {
    setPreviewModalIsOpen(true);
  };

  const mouseLeaveItem = () => {
    setPreviewModalIsOpen(false);
  };

  return { previewModalIsOpen, titleCardRef, mouseEnterItem, mouseLeaveItem };
}

export default usePreviewModal;
