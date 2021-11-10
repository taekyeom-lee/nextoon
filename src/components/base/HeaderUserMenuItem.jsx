import styled from 'styled-components';

import { getAuth, signOut } from 'firebase/auth';
// import { useHistory } from 'react-router';

import firebase from '../../api/firebase';

import { useHistory } from 'react-router-dom';

function HeaderUserMenuItem({ children }) {
  const auth = getAuth(firebase);

  const history = useHistory();

  const onClick = () => {
    console.log('header_signout');
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        history.push('/');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <HeaderUserMenuItemBlock onClick={onClick}>
      {children}
    </HeaderUserMenuItemBlock>
  );
}

const HeaderUserMenuItemBlock = styled.div`
  font-size: 0.8rem;
  padding: 5px 10px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default HeaderUserMenuItem;
