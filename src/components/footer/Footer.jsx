import styled from 'styled-components';

import FooterSocial from './FooterSocial';
import FooterCopyright from './FooterCopyright';
import FooterLinks from './FooterLinks';
import FooterService from './FooterService';

function Footer() {
  return (
    <FooterBlock>
      <FooterSocial />
      <FooterLinks />
      <FooterService />
      <FooterCopyright />
    </FooterBlock>
  );
}

const FooterBlock = styled.div`
  max-width: 980px;
  margin: 20px auto 0;
  padding: 0 4%;
  color: grey;
`;

export default Footer;
