import styled from 'styled-components';

function FooterService() {
  return (
    <FooterServiceBlock>
      <ServiceCode>서비스 코드</ServiceCode>
    </FooterServiceBlock>
  );
}

const FooterServiceBlock = styled.div``;

const ServiceCode = styled.button`
  margin-bottom: 20px;
  padding: 0.5em;
  border: solid 1px grey;
  font-size: 12px;
  background: 0 0;
  color: grey;

  :hover {
    cursor: pointer;
    color: #fff;
  }
`;

export default FooterService;
