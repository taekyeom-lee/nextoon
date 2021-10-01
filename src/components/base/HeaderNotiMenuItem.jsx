import styled from 'styled-components';

import girl from '../../img/girl.jpg';

function HeaderNotiMenuItem() {
  return (
    <HeaderNotiMenuItemBlock>
      <ImageBlock>
        <Image src={girl} />
      </ImageBlock>
      <TextBlock>
        <Text>나혼자 레벨업 감상 완료!</Text>
        <Text>다음엔 뭘볼까?</Text>
        <Time>오늘</Time>
      </TextBlock>
    </HeaderNotiMenuItemBlock>
  );
}

const HeaderNotiMenuItemBlock = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
`;

const ImageBlock = styled.div`
  padding: 16px;
`;

const TextBlock = styled.div`
  padding: 16px 16px 16px 0px;
`;

const Image = styled.img`
  width: 100px;
  hegiht: 40px;
`;

const Text = styled.div`
  font-size: 1rem;
  color: #cccccc;
`;

const Time = styled.div`
  font-size: 0.8rem;
  color: #808080;
`;

export default HeaderNotiMenuItem;
