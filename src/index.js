import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/invie.css';
import './css/animations.css';
import Invie from './Invie';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import logoPortada from './images/invie.png';
import logoPlatzi from './images/platzi.png';
import acustica from './images/invie-acustica.png';
import clasica from './images/invie-classic.png';
import easterA from './images/easter-a.png';
import easterB from './images/easter-b.png';


import cheet from 'cheet.js';

cheet('i n v i e', () => {
  // console.log('Hey yoe')
//   alert('Hey yoooo');

    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props:easter,
        }
    })
})
cheet('b a c k', () => {
  // console.log('Hey yoe')
    //   alert('o k a y');
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: initialState,
        }
    })
})

const initialState = {
    isAnimated: false,
    menu : [
      {
          href: 'index.html',
          title: 'Home',
      },
      {
          href: '#guitarras',
          title: 'Guitarras',   
      },
      {
          href: 'precios.html',
          title: 'Precios',
      },
    ],
  
    logoPortada : logoPortada,
  
    guitarras : [
      {
          image: acustica,
          alt: 'Guitarra Invie Acustica',
          name: 'Invie Acustica',
          features:[
              'Estilo vintage',
              'Madera pura',
              'Incluye estuche invisible de aluminio',
          ],
      },
      {
          image: clasica,
          alt: 'Guitarra Invie Clásica',
          name: 'Invie Clásica',
          features:[
              'Estilo vintage',
              'Ligero',
              'Inicia tu camino como Rockstars',
          ],
      }
  ]
    
  }

const easter = {
    isAnimated:'is-animated',

    logoPortada: logoPlatzi,

    menu : [
     
    ],
  
    guitarras : [
      {
          image: easterA,
          alt: 'Guitarra Padre de Familia',
          name: 'Invie Familiar',
          features:[
              'Listo para copiar a los Simpsons',
              'Aire puro',
              'Chistes malos',
          ],
      },
      {
          image: easterB,
          alt: 'Guitarra Invie Clásica',
          name: 'Invie Clásica',
          features:[
              'Estilo vintage',
              'Ligero',
              'Inicia tu camino como Rockstars',
          ],
      }
  ]
    
  }

function reducer(state, action){
    switch(action.type){
        case 'UPDATE_PROPS':{
            const newProps = action.payload.props;
            return {
                ...state, ...newProps
            }
        }

        default: {
            return state
        }
    }
}

const store = createStore(reducer, initialState);
  

ReactDOM.render(
    <Provider store = {store}>
        <Invie /> 
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
