import styled from 'styled-components';

function PreviewDetailBackdrop({ onClose }) {
  return (
    <PreviewDetailBackdropBlock onClick={onClose}></PreviewDetailBackdropBlock>
  );
}

const PreviewDetailBackdropBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export default PreviewDetailBackdrop;
