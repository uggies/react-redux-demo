import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserContainer />
        {/*
        <ItemContainer cake/>
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IcecreamContainer />
        <NewCakeContainer />
        */}
        
      </Provider>
    </div>
  );
}

export default App;
