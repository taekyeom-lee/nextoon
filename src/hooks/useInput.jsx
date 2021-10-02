import { useState, useEffect, useRef } from 'react';

function useInput() {
  const [inputIsClicked, setInputIsClicked] = useState(false);
  const [inputText, setInputText] = useState('');

  const inputRef = useRef(null);

  const openInput = () => {
    setInputIsClicked(true);
  };

  const closeInput = () => {
    !inputText && setInputIsClicked(false);
  };

  const changeInput = (e) => {
    setInputText(e.target.value);
  };

  const clearInput = () => {
    setInputText('');
  };

  useEffect(() => {
    inputIsClicked && inputRef.current.focus();
  });

  return {
    inputIsClicked,
    inputText,
    inputRef,
    openInput,
    closeInput,
    changeInput,
    clearInput,
  };
}

export default useInput;
