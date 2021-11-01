import { useRef, useState } from 'react';

function useLoginForm() {
  const [isEmailFocus, setIsEmailFoucs] = useState(false);
  const [isPasswordFocus, setIsPasswordFoucs] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const focusEmailInput = () => {
    setIsEmailFoucs(true);
  };

  const blurEmailInput = () => {
    !emailRef.current.value && setIsEmailFoucs(false);
  };

  const focusPasswordInput = () => {
    setIsPasswordFoucs(true);
  };

  const blurPasswordInput = () => {
    !passwordRef.current.value && setIsPasswordFoucs(false);
  };

  const clickCheckbox = () => {
    setIsChecked((prevState) => !prevState);
  };

  const clickShowButton = () => {
    setShowPassword((prevState) => !prevState);
  };

  return {
    isEmailFocus,
    isPasswordFocus,
    isChecked,
    showPassword,
    emailRef,
    passwordRef,
    focusEmailInput,
    blurEmailInput,
    focusPasswordInput,
    blurPasswordInput,
    clickCheckbox,
    clickShowButton,
  };
}

export default useLoginForm;
