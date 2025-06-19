
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRouter from './router/AppRouter';
// import { Footer } from './cmpsPartial';


export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
        {/*<Footer />*/}
      </BrowserRouter>
    </Provider>
  )
}
export default App