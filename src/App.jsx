import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { AuthContextProvider } from './store/auth-context';

function App() {
  return (
    <AuthContextProvider>

    <BrowserRouter>
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='/profile'>
          <UserProfile />
        </Route>
      </Switch>
    </Layout>
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
