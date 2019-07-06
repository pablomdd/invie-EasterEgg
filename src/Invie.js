import React from 'react';
import logo from './logo.svg';
import './css/invie.css';
import Portada from './components/Portada.jsx';
import Guitarras from './components/Guitarras.jsx';
import Footer from './components/Footer.jsx';

import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import clasica from './images/invie-classic.png';



const data = {
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


function App() {
  return (
    <div className="Invie">
      <section>
        {/* Portada */}
        {/* <Portada menu={data.menu} logo={data.logoPortada}/> */}
        <Portada />
        {/* Guitarras */}
        {/* <Guitarras guitarras={data.guitarras}/> */}
        <Guitarras />
        {/* Footer */}
        <Footer />
      </section>

    </div>
  );
}

export default App;
