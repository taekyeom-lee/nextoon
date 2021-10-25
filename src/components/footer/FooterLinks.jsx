import styled from 'styled-components';

function FooterLinks() {
  return (
    <FooterLinksBlock>
      <FooterLinkWrapper>
        <FooterLink>
          <FooterLinkContent>자막 및 음성</FooterLinkContent>
        </FooterLink>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
        <FooterLink>
          <FooterLinkContent>음성 지원</FooterLinkContent>
        </FooterLink>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
        <FooterLink>
          <FooterLinkContent>고객 센터</FooterLinkContent>
        </FooterLink>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
        <FooterLink>
          <FooterLinkContent>기프트카드</FooterLinkContent>
        </FooterLink>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
        <FooterLink>
          <FooterLinkContent>미디어 센터</FooterLinkContent>
        </FooterLink>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
        <FooterLink>
          <FooterLinkContent>투자 정보(IR)</FooterLinkContent>
        </FooterLink>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
        <FooterLink>
          <FooterLinkContent>입사 정보</FooterLinkContent>
        </FooterLink>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
        <FooterLink>
          <FooterLinkContent>이용 약관</FooterLinkContent>
        </FooterLink>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
        <FooterLink>
          <FooterLinkContent>개인정보</FooterLinkContent>
        </FooterLink>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
        <FooterLink>
          <FooterLinkContent>법적 고지</FooterLinkContent>
        </FooterLink>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
        <FooterLink>
          <FooterLinkContent>쿠키 설정</FooterLinkContent>
        </FooterLink>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
        <FooterLink>
          <FooterLinkContent>회사 정보</FooterLinkContent>
        </FooterLink>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
        <FooterLink>
          <FooterLinkContent>문의하기</FooterLinkContent>
        </FooterLink>
      </FooterLinkWrapper>
    </FooterLinksBlock>
  );
}

const FooterLinksBlock = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 14px 0;
  padding: 0;
  list-style-type: none;
`;

const FooterLinkWrapper = styled.li`
  flex: 0 0 25%;
  margin-bottom: 16px;
`;

const FooterLink = styled.a`
  color: grey;
  text-decoration: none;
  font-size: 14px;
`;

const FooterLinkContent = styled.span``;

export default FooterLinks;
