import styled from 'styled-components';

import Header from './Header';

function PageTemplate({ children }) {
  return (
    <PageTemplateBlock>
      <>
        <Header />
      </>
      {children}
    </PageTemplateBlock>
  );
}

const PageTemplateBlock = styled.div``;

export default PageTemplate;
