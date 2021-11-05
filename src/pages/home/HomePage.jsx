import Header from '../../components/base/Header';
import LocoRow from '../../components/locoRow/LocoRow';
import Footer from '../../components/footer/Footer';

import firebase from '../../api/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function HomePage() {
  const auth = getAuth(firebase);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('home_user', user);
      console.log('home_uid', uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return (
    <div>
      <Header />
      <LocoRow title="인기 콘텐츠" />
      <LocoRow title="지금 뜨는 콘텐츠" />
      <LocoRow title="오늘의 한국의 TOP 10 콘텐츠" />
      <LocoRow title="한국이 만든 콘텐츠" />
      <LocoRow title="이태겸님이 감상중인 콘텐츠" />
      <LocoRow title="이태겸님이 감상중인 콘텐츠 22" />
      <LocoRow title="이태겸님이 감상중인 콘텐츠 333" />
      <LocoRow title="이태겸님이 감상중인 콘텐츠 4444" />
      <LocoRow title="이태겸님이 감상중인 콘텐츠 55555" />
      <LocoRow title="이태겸님이 감상중인 콘텐츠 666666" />
      <LocoRow title="이태겸님이 감상중인 콘텐츠 7777777" />
      <LocoRow title="이태겸님이 감상중인 콘텐츠 88888888" />
      <LocoRow title="이태겸님이 감상중인 콘텐츠 999999999" />
      <Footer />
    </div>
  );
}

export default HomePage;
