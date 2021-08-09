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
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import { useMovies } from './utils/useMovies';
import { useSavedMovies } from './utils/useSavedMovies';
import { useLocalStorageState } from './utils/useLocalStorageState';
import { useMenu } from './utils/useMenu';
import { useAppContext } from './utils/useAppContext';

import { AppContext } from './AppContext';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const appContext = useAppContext();

  const [isShortMoviesEnabled, setIsShortMoviesEnabled] = useLocalStorageState(true, 'isShortMoviesEnabled');
  const [movieName, setMovieName] = useLocalStorageState('', 'movieName');

  const {
    moviesErrorMessage,
    filteredMovies,
    handleMoviesSearch,
  } = useMovies({
    setIsLoading,
    movieName,
    isShortMoviesEnabled,
  });

  const {
    savedMoviesErrorMessage,
    filteredSavedMovies,
    handleSavedMoviesSearch,
    likes,
    saveMovie,
    deleteMovie,
  } = useSavedMovies({
    token: appContext.token,
    setIsLoading,
    movieName,
    isShortMoviesEnabled,
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
            <ProtectedRoute path="/movies" loggedIn={appContext.token}>
              <PageWrapper headerProps={menuHandlers}>
                <Movies 
                  movies={filteredMovies}
                  likes={likes}
                  saveMovie={saveMovie}
                  deleteMovie={deleteMovie}
                  movieName={movieName}
                  setMovieName={setMovieName}
                  isShortMoviesEnabled={isShortMoviesEnabled}
                  setIsShortMoviesEnabled={setIsShortMoviesEnabled}
                  handleMoviesSearch={handleMoviesSearch}
                  isLoading={isLoading}
                  errorMessage={moviesErrorMessage}
                />
              </PageWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/saved-movies" loggedIn={appContext.token}>
              <PageWrapper headerProps={menuHandlers}>
                <SavedMovies
                  savedMovies={filteredSavedMovies}
                  saveMovie={saveMovie}
                  deleteMovie={deleteMovie}
                  movieName={movieName}
                  setMovieName={setMovieName}
                  isShortMoviesEnabled={isShortMoviesEnabled}
                  setIsShortMoviesEnabled={setIsShortMoviesEnabled}
                  handleMoviesSearch={handleSavedMoviesSearch}
                  isLoading={isLoading}
                  errorMessage={savedMoviesErrorMessage}
                />
              </PageWrapper>
            </ProtectedRoute>
            <ProtectedRoute exact path="/profile" loggedIn={appContext.token}>
              <PageWrapper withFooter={false} headerProps={menuHandlers}>
                <Profile />
              </PageWrapper>
            </ProtectedRoute>
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
