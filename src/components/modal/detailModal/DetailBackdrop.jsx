import styled from 'styled-components';

function DetailBackdrop({ onClose }) {
  return <DetailBackdropBlock onClick={onClose}></DetailBackdropBlock>;
}

const DetailBackdropBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
`;

export default DetailBackdrop;
