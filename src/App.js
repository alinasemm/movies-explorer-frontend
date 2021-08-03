import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { getMovies } from './utils/moviesApi'

import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import SavedMovies from './components/SavedMovies/SavedMovies'
import Profile from './components/Profile/Profile';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Background from './components/Background/Background';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PageWrapper from './components/PageWrapper/PageWrapper';

import filterMovies from './filterMovies';
import { useInitialRender } from './useInitialRender';

function App() {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isShortMoviesEnabled, setIsShortMoviesEnabled] = useState(true);
  const [movieName, setMovieName] = useState('');

  const [movies, setMovies] = useState([]);
  const handleMoviesSearch = () => {
    setErrorMessage('');

    if (!movieName) {
      setErrorMessage('Нужно ввести ключевое слово');
      return;
    }

    setIsLoading(true);

    getMovies()
      .then((movies) => filterMovies(movies, movieName, isShortMoviesEnabled))
      .then((filteredMovies) => {
        if (filteredMovies.length === 0) {
          setErrorMessage('Ничего не найдено');
        } else {
          setMovies(filteredMovies);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const isInitialRender = useInitialRender();
  useEffect(() => {
    if (!isInitialRender) {
      handleMoviesSearch();
    }
  }, [isShortMoviesEnabled])

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
              <Movies 
                movies={movies}
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
