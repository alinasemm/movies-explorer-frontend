import './App.css';
import React, { useState, useEffect } from 'react'
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

import * as mainApi from './utils/mainApi'
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

  const [savedMovies, setSavedMovies] = useState([]);
  const getSavedMovies = () => {
    mainApi.getSavedMovies(token)
      .then(setSavedMovies)
      .catch((error) => {
        console.log(error);
      });
  }

  const getUser = () => {
    mainApi.getUser(token)
      .then(setUser)
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (token) {
      getSavedMovies();
      if (!user) {
        getUser();
      }
    }
  }, [token]);

  const [likes, setLikes] = useState({});
  useEffect(() => {
    setLikes(savedMovies.reduce((ref, savedMovie) => ({
      ...ref,
      [savedMovie.movieId]: savedMovie._id
    }), {}))
  }, [savedMovies]);

  const saveMovie = (movie) => {
    return mainApi.saveMovie(movie, appContext.token).then((data) => {
      getSavedMovies();
    })   
    .catch((error) => {
      console.log(error);
    });
  }

  const deleteMovie = (id) => {
    return mainApi.deleteMovie(id, appContext.token).then((data) => {
      getSavedMovies();
    })   
    .catch((error) => {
      console.log(error);
    });
  }

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
            <ProtectedRoute path="/movies" loggedIn={token}>
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
                  errorMessage={errorMessage} 
                />
              </PageWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/saved-movies" loggedIn={token}>
              <PageWrapper headerProps={menuHandlers}>
                <SavedMovies
                  savedMovies={savedMovies}
                  saveMovie={saveMovie}
                  deleteMovie={deleteMovie}
                  movieName={movieName}
                  setMovieName={setMovieName}
                  isShortMoviesEnabled={isShortMoviesEnabled}
                  setIsShortMoviesEnabled={setIsShortMoviesEnabled}
                  handleMoviesSearch={() => console.log('SEARCH')}
                />
              </PageWrapper>
            </ProtectedRoute>
            <ProtectedRoute exact path="/profile" loggedIn={token}>
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
