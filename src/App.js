import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import ComicPage from './pages/comic/ComicPage';
import NovelPage from './pages/novel/NovelPage';
import LastestPage from './pages/latest/LastestPage';
import MyListPage from './pages/mylist/MyListPage';

import LoginPage from './pages/login/LoginPage';
import LogoutPage from './pages/logout/LogoutPage';
import SignUpPage from './pages/signup/SignUpPage';
import RegisterPage from './pages/register/RegisterPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route path="/" exact component={SignUpPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" component={LogoutPage} />

          <Route path="/browse" exact component={HomePage} />
          <Route path="/browse/comic" component={ComicPage} />
          <Route path="/browse/novel" component={NovelPage} />
          <Route path="/browse/latest" component={LastestPage} />
          <Route path="/browse/my-list" component={MyListPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
