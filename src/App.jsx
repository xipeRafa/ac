
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';

import { Nav } from './router/partialComps';
import AppRouter from './router/AppRouter';
import { Footer } from './router/partialComps';


export const App = () => {
    return (
        <Provider store={store}>

            <BrowserRouter>

                <Nav />

                <AppRouter />

                <Footer />

            </BrowserRouter>

        </Provider>
    )
}


export default App