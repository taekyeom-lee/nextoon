import { useState } from 'react';

function usePreviewModal() {
  const [previewModalIsOpen, setPreviewModalIsOpen] = useState(false);

  const mouseEnterItem = () => {
    setPreviewModalIsOpen(true);
  };

  const mouseLeaveItem = () => {
    setPreviewModalIsOpen(false);
  };

  return { previewModalIsOpen, mouseEnterItem, mouseLeaveItem };
}

export default usePreviewModal;
