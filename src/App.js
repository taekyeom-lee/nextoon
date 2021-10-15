import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import ComicPage from './pages/comic/ComicPage';
import NovelPage from './pages/novel/NovelPage';
import LastestPage from './pages/latest/LastestPage';
import MyListPage from './pages/mylist/MyListPage';

import './App.css';

function App() {
  // const openPreviewDetailModal = () => {
  //   setPreviewDetailModalIsOpen(true);
  //   pageRef.current.style.position = 'fixed';
  // };

  // const closePreviewDetailModal = () => {
  //   setPreviewDetailModalIsOpen(false);
  //   pageRef.current.style.position = '';
  // };

  return (
    <div className="App">
      <div>
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/comic" component={ComicPage} />
          <Route path="/novel" component={NovelPage} />
          <Route path="/latest" component={LastestPage} />
          <Route path="/my-list" component={MyListPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
