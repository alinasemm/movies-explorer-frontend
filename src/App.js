import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import SavedMovies from './components/SavedMovies/SavedMovies'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
