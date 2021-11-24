import Header from '../../components/base/Header';
import LocoRow from '../../components/locoRow/LocoRow';
import Footer from '../../components/footer/Footer';

import firebase from '../../api/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { webtoon } from '../../resources/data';

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

  let data = webtoon.slice(0);

  let allType = [];

  data.forEach((data) =>
    data.tags.forEach((tag) => {
      allType.push(tag);
    })
  );

  allType = Array.from(new Set(allType));

  return (
    <div>
      <Header />
      <LocoRow title="인기 콘텐츠" />
      <LocoRow title="지금 뜨는 콘텐츠" />
      <LocoRow title="오늘의 한국의 TOP 10 콘텐츠" />
      <LocoRow title="한국이 만든 콘텐츠" />
      <LocoRow title="이태겸님이 감상중인 콘텐츠" />
      {allType.map((type) => (
        <LocoRow title={type} type={type} />
      ))}
      <Footer />
    </div>
  );
}

export default HomePage;
