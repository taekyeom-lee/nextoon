import styled from 'styled-components';

import Header from './Header';
import Footer from '../footer/Footer';

function PageTemplate({ children }) {
  return (
    <PageTemplateBlock>
      <>
        <Header />
      </>
      {children}
      <>
        <Footer />
      </>
    </PageTemplateBlock>
  );
}

const PageTemplateBlock = styled.div``;

export default PageTemplate;
