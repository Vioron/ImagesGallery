
import { Provider } from 'react-redux';
//import AppNavigation from '../../navigation/AppNavigation';
import { store } from './src/redux/store';
import AppNavigation from './src/navigation/AppNavigation';

const AppContainer = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}


export default AppContainer;