import { useState, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import ComicPage from './pages/comic/ComicPage';
import NovelPage from './pages/novel/NovelPage';
import LastestPage from './pages/latest/LastestPage';
import MyListPage from './pages/mylist/MyListPage';

import PreviewDetailModal from './components/previewDetailModal/PreviewDetailModal';
import PreviewDetailBackDrop from './components/previewDetailModal/PreviewDetailBackDrop';
import PreviewDetailModalPortal from './components/previewDetailModal/PreviewDetailModalPortal';

import './App.css';

function App() {
  const pageRef = useRef(null);
  const [previewDetailModalIsOpen, setPreviewDetailModalIsOpen] =
    useState(false);

  const openPreviewDetailModal = () => {
    setPreviewDetailModalIsOpen(true);
    pageRef.current.style.position = 'fixed';
  };

  const closePreviewDetailModal = () => {
    setPreviewDetailModalIsOpen(false);
    pageRef.current.style.position = '';
  };

  return (
    <div className="App">
      <div ref={pageRef}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <HomePage onOpen={openPreviewDetailModal} />}
          />
          <Route path="/comic" component={ComicPage} />
          <Route path="/novel" component={NovelPage} />
          <Route path="/latest" component={LastestPage} />
          <Route path="/my-list" component={MyListPage} />
        </Switch>
      </div>
      {previewDetailModalIsOpen && (
        <PreviewDetailModalPortal>
          <PreviewDetailModal onClose={closePreviewDetailModal} />
        </PreviewDetailModalPortal>
      )}
      {previewDetailModalIsOpen && <PreviewDetailBackDrop onClose={closePreviewDetailModal} />}
      
    </div>
  );
}

export default App;
