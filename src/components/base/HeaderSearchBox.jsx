import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import { FaSearch } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

import useInput from '../../hooks/useInput';

function HeaderSearchBox() {
  const {
    inputIsClicked,
    inputText,
    inputRef,
    openInput,
    closeInput,
    changeInput,
    clearInput,
  } = useInput();

  return (
    <OutsideClickHandler onOutsideClick={closeInput}>
      <HeaderSearchBoxBlock>
        {inputIsClicked ? (
          <SearchWrapper>
            <SearchIcon onClick={closeInput} />
            <SeacrhInput
              ref={inputRef}
              value={inputText}
              placeholder="제목, 사람, 장르"
              onChange={changeInput}
            />
            <CloseWrapper onClick={closeInput}>
              {inputText && <CloseIcon onClick={clearInput} />}
            </CloseWrapper>
          </SearchWrapper>
        ) : (
          <SearchIcon onClick={openInput} />
        )}
      </HeaderSearchBoxBlock>
    </OutsideClickHandler>
  );
}

const HeaderSearchBoxBlock = styled.div`
  display: flex;
  align-items: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 16rem;
  height: 32px;
  border: solid 1px rgba(255, 255, 255, 0.85);
`;

const SeacrhInput = styled.input`
  width: 100%;
  background-color: #141414;
  color: white;
  border: none;
  outline: none;
`;

const SearchIcon = styled(FaSearch)`
  width: 20px;
  height: 20px;

  padding: 0 6px;
`;

const CloseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

const CloseIcon = styled(IoClose)`
  width: 28px;
  height: 28px;
`;

export default HeaderSearchBox;
