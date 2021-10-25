import styled from 'styled-components';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

function FooterSocial() {
  return (
    <FooterSocialBlock>
      <SocialLinks>
        <SocialLink>
          <Facebook />
        </SocialLink>
        <SocialLink>
          <Instagram />
        </SocialLink>
        <SocialLink>
          <Twitter />
        </SocialLink>
        <SocialLink>
          <Youtube />
        </SocialLink>
      </SocialLinks>
    </FooterSocialBlock>
  );
}

const FooterSocialBlock = styled.div``;

const SocialLinks = styled.div`
  display: flex;
  margin-bottom: 1em;
`;

const SocialLink = styled.a`
  width: 36px;
  height: 32px;
  margin-right: 15px;
`;

const Facebook = styled(FaFacebookSquare)`
  width: 28px;
  height: 28px;

  :hover {
    cursor: pointer;
  }
`;

const Instagram = styled(FaInstagram)`
  width: 28px;
  height: 28px;

  :hover {
    cursor: pointer;
  }
`;

const Twitter = styled(FaTwitter)`
  width: 28px;
  height: 28px;

  :hover {
    cursor: pointer;
  }
`;

const Youtube = styled(FaYoutube)`
  width: 28px;
  height: 28px;

  :hover {
    cursor: pointer;
  }
`;

export default FooterSocial;
