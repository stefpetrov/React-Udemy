import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';

function App() {


  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)



  return (
    <Fragment>
      {isLoggedIn ? <Header /> : <Auth />}
      <Counter />
    </Fragment>
  );
}


export default App;

