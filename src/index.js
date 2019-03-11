import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider} from 'react-redux'
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import ScrollToTop from './app/common/util/ScrollToTop.jsx'
import rootReducer from './app/reducers/rootReducer'
import thunk from 'redux-thunk'


const store = createStore(rootReducer,applyMiddleware(thunk));

const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
    <Provider store ={store}>
        <BrowserRouter>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </BrowserRouter>
    </Provider>,
     rootEl);
}
if (module.hot){
    module.hot.accept('./app/layout/App', ()=>{
        setTimeout(render)
    })
}

render();


serviceWorker.unregister();
