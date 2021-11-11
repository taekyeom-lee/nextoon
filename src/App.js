import { Route, Switch, useHistory } from 'react-router-dom';

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

import useAuth from './hooks/useAuth';

function App() {
  const { init, isLogin } = useAuth();

  const history = useHistory();

  return (
    <div className="App">
      {init ? (
        <div>
          <Switch>
            <Route
              path="/"
              exact
              render={() =>
                isLogin ? history.push('/browse') : <SignUpPage />
              }
            />
            <Route
              path="/register"
              render={() =>
                isLogin ? history.push('/browse') : <RegisterPage />
              }
            />
            <Route
              path="/login"
              render={() => (isLogin ? history.push('/browse') : <LoginPage />)}
            />
            <Route
              path="/logout"
              render={() =>
                isLogin ? history.push('/browse') : <LogoutPage />
              }
            />

            <Route
              path="/browse"
              exact
              render={() => (isLogin ? <HomePage /> : history.push('/login'))}
            />
            <Route
              path="/browse/comic"
              render={() => (isLogin ? <ComicPage /> : history.push('/login'))}
            />
            <Route
              path="/browse/novel"
              render={() => (isLogin ? <NovelPage /> : history.push('/login'))}
            />
            <Route
              path="/browse/latest"
              render={() =>
                isLogin ? <LastestPage /> : history.push('/login')
              }
            />
            <Route
              path="/browse/my-list"
              render={() => (isLogin ? <MyListPage /> : history.push('/login'))}
            />
          </Switch>
        </div>
      ) : (
        <div>Loding</div>
      )}
    </div>
  );
}

export default App;
