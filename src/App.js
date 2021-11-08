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
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/comic" component={ComicPage} />
          <Route path="/novel" component={NovelPage} />
          <Route path="/latest" component={LastestPage} />
          <Route path="/my-list" component={MyListPage} />
          
          <Route path="/login" component={LoginPage} />
          <Route path='/logout' component={LogoutPage} />
          
          <Route path='/signup' component={SignUpPage} />
          <Route path='/register' component={RegisterPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
