import { useState, useEffect, useRef } from 'react';

function useSlider() {
  const [pageNumber, setPageNumber] = useState(1);

  const pageRef = useRef(null);

  const raisePageNumber = () => {
    setPageNumber(pageNumber + 1);
    if (pageNumber === 7) {
      setPageNumber(1);
    }
  };

  const lowerPageNumber = () => {
    setPageNumber(pageNumber - 1);
    if (pageNumber === 1) {
      setPageNumber(7);
    }
  };

  useEffect(() => {
    for (let i = 0; i < pageRef.current.children.length; i++) {
      pageRef.current.children[i].style.backgroundColor = '#4d4d4d';
    }
    pageRef.current.children[pageNumber - 1].style.backgroundColor = '#aaa';
  });

  return { pageNumber, pageRef, raisePageNumber, lowerPageNumber };
}

export default useSlider;
