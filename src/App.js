import './App.css';
import React, { useState } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import SavedMovies from './components/SavedMovies/SavedMovies'
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Background from './components/Background/Background';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function PageWrapper ({ children, withHeader = true, withFooter = true, headerProps = {} }) {
  return (
    <>
      {withHeader && <Header {...headerProps} />}
      {children}
      {withFooter && <Footer />}
    </>
  )
}

function App() {
  const [isMenuVisible, setMenuVisibility] = useState(false)

  const openMenu = () => setMenuVisibility(true)
  const closeMenu = () => setMenuVisibility(false)

  const headerProps = { openMenu, closeMenu };

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
            <PageWrapper headerProps={headerProps}>
              <Movies />
            </PageWrapper>
          </Route>
          <Route path="/saved-movies">
            <PageWrapper headerProps={headerProps}>
              <SavedMovies />
            </PageWrapper>
          </Route>
          <Route exact path="/profile">
            <PageWrapper withFooter={false} headerProps={headerProps}>
              <Profile />
            </PageWrapper>
          </Route>
          <Route exact path="/signup">
            <PageWrapper withFooter={false}>
              <Register />
            </PageWrapper>
          </Route>
          <Route exact path="/signin">
            <PageWrapper withFooter={false}>
              <Login />
            </PageWrapper>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Background isMenuVisible={isMenuVisible} closeMenu={closeMenu} />
      </BrowserRouter>
    </div>
  );
}

export default App;
