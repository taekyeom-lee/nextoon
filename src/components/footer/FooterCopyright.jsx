import styled from 'styled-components';

function FooterCopyright() {
  return (
    <FooterCopyrightBlock>
      <CopyText>
        <CopyTextBlock>
          넥스트툰서비시스코리아 유한회사 통신판매업신고번호: 제2021-서울-0000호
          전화번호: 000-000-0000
        </CopyTextBlock>
        <CopyTextBlock>대표: 이태겸</CopyTextBlock>
        <CopyTextBlock>이메일 주소: korea@nextoon.com</CopyTextBlock>
        <CopyTextBlock>주소: 대한민국 서울특별시</CopyTextBlock>
        <CopyTextBlock>사업자등록번호: 000-00-00000</CopyTextBlock>
        <CopyTextBlock>클라우드 호스팅: Amazon Web Services Inc.</CopyTextBlock>
        <CopyTextBlock>공정거래위원회 웹사이트</CopyTextBlock>
      </CopyText>
      <CopyrightInstance>
        '{'00000000-0000-0000-0000-000000000000'}'
      </CopyrightInstance>
    </FooterCopyrightBlock>
  );
}

const FooterCopyrightBlock = styled.div`
  font-size: 12px;
  margin-bottom: 15px;
`;

const CopyText = styled.div``;

const CopyTextBlock = styled.div`
  margin-top: 4px;

  :first-child {
    margin: 0px;
  }
`;

const CopyrightInstance = styled.div``;

export default FooterCopyright;
