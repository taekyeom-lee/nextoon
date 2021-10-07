import styled from 'styled-components';

function PreviewDetailBackDrop({ onClose }) {
  return (
    <PreviewDetailBackDropBlock onClick={onClose}></PreviewDetailBackDropBlock>
  );
}

const PreviewDetailBackDropBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export default PreviewDetailBackDrop;
