import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import SavedMovies from './components/SavedMovies/SavedMovies'
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Register from './components/Register/Register';

function PageWrapper ({ children, withHeader = true, withFooter = true }) {
  return (
    <>
      {withHeader && <Header />}
      {children}
      {withFooter && <Footer />}
    </>
  )
}

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PageWrapper>
              <Main />
            </PageWrapper>
          </Route>
          <Route path="/movies">
            <PageWrapper>
              <Movies />
            </PageWrapper>
          </Route>
          <Route path="/saved-movies">
            <PageWrapper>
              <SavedMovies />
            </PageWrapper>
          </Route>
          <Route exact path="/profile">
            <PageWrapper withFooter={false}>
              <Profile />
            </PageWrapper>
          </Route>
          <Route exact path="/signup">
            <PageWrapper withFooter={false}>
              <Register />
            </PageWrapper>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
