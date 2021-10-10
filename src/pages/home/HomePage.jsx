import Header from '../../components/base/Header';
import LocoRow from '../../components/locoRow/LocoRow';

function HomePage({ onOpen }) {
  return (
    <div>
      <Header />
      <LocoRow title="인기 콘텐츠" onOpen={onOpen} />
      <LocoRow title="지금 뜨는 콘텐츠" onOpen={onOpen} />
      {/* <LocoRow title="오늘의 한국의 TOP 10 콘텐츠" onOpen={onOpen} /> */}
      {/* <LocoRow title="한국이 만든 콘텐츠" onOpen={onOpen} /> */}
      {/* <LocoRow title="이태겸님이 감상중인 콘텐츠" onOpen={onOpen} /> */}
    </div>
  );
}

export default HomePage;
