

import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';

import Nav from './router/staticComps/nav/Nav';
import AppRouter from './router/AppRouter';
import Footer from './router/staticComps/footer/Footer';


createRoot(document.getElementById('root'))
    .render(
        <Provider store={store}>

            <BrowserRouter>

                <Nav />

                <AppRouter />

                <Footer />

            </BrowserRouter>

        </Provider>
    )
    


