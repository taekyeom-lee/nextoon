import Header from '../../components/base/Header';
import LocoRow from '../../components/locoRow/LocoRow';
// import PreViewModal from '../../components/previewModal/PreviewModal';

function HomePage() {
  return (
    <div>
      <Header />
      <LocoRow title="인기 콘텐츠" />
      <LocoRow title="지금 뜨는 콘텐츠" />
      <LocoRow title="오늘의 한국의 TOP 10 콘텐츠" />
      <LocoRow title="한국이 만든 콘텐츠" />
      <LocoRow title="이태겸님이 감상중인 콘텐츠" />
      {/* <PreViewModal /> */}
    </div>
  );
}

export default HomePage;
