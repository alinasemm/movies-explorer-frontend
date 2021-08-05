import './App.css';
import React, { useState } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import SavedMovies from './components/SavedMovies/SavedMovies'
import Profile from './components/Profile/Profile';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Background from './components/Background/Background';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PageWrapper from './components/PageWrapper/PageWrapper';

import { useMovies } from './utils/useMovies';
import { useLocalStorageState } from './utils/useLocalStorageState';
import { useMenu } from './utils/useMenu';

import { AppContext } from './AppContext';

function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useLocalStorageState(null, 'user');
  const [token, setToken] = useLocalStorageState('', 'token');
  const appContext = { user, setUser, token, setToken };

  const [isShortMoviesEnabled, setIsShortMoviesEnabled] = useLocalStorageState(true, 'isShortMoviesEnabled');
  const [movieName, setMovieName] = useLocalStorageState('', 'movieName');

  const [filteredMovies, handleMoviesSearch] = useMovies({
    setIsLoading,
    setErrorMessage,
    movieName,
    isShortMoviesEnabled
  });

  const [isMenuVisible, menuHandlers] = useMenu();

  return (
    <div className='app'>
      <AppContext.Provider value={appContext}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <PageWrapper>
                <Main />
              </PageWrapper>
            </Route>
            <Route path="/movies">
              <PageWrapper headerProps={menuHandlers}>
                <Movies 
                  movies={filteredMovies}
                  errorMessage={errorMessage} 
                  handleMoviesSearch={handleMoviesSearch}
                  isLoading={isLoading}
                  isShortMoviesEnabled={isShortMoviesEnabled}
                  setIsShortMoviesEnabled={setIsShortMoviesEnabled}
                  movieName={movieName}
                  setMovieName={setMovieName}
                />
              </PageWrapper>
            </Route>
            <Route path="/saved-movies">
              <PageWrapper headerProps={menuHandlers}>
                <SavedMovies />
              </PageWrapper>
            </Route>
            <Route exact path="/profile">
              <PageWrapper withFooter={false} headerProps={menuHandlers}>
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
          <Background isMenuVisible={isMenuVisible} closeMenu={menuHandlers.closeMenu} />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
