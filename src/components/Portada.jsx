import React, {Component} from 'react';
import {connect} from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Heart from './Heart.jsx'



function mapStateToProps(state){
    return{
            logo: state.logoPortada,
            menu: state.menu,
            isAnimated: state.isAnimated,
        }
}

class Portada extends Component{
    
    renderHeart(){
        const  hearts = new Array(250).fill({})
        return(
            hearts.map((element, index) =>{
                const style = {
                    left: Math.floor((Math.random() * (window.innerWidth - 0))) + "px",
                    animationDelay: Math.floor((Math.random() * (10000 - 0))) + "ms"
                }
                return(
                    <Heart key={index} style={style}/>
                )
            })
        )
    }

    render(){
        return(
            <section id="portada" className= {`portada background ${this.props.isAnimated}`}>  
                <header id="header" className="header contenedor">  
                    <figure className="logotipo">  
                    <img src={this.props.logo} width="186" height="60" alt="Invie logotipo"/>
                    </figure>
                    <span className="burguer-button icon-menu" id="burguer-button"></span>
                    <nav className="menu" id="menu">  
                    <ul>
                        {/* <li>
                        <a href="index.html">Home</a>
                        </li>
                        <li>
                        <a href="#guitarras">Guitarras</a>
                        </li>
                        <li>
                        <a href="precios.html">Precios</a>
                        </li> */}
                        {
                            this.props.menu.map((item) => {
                                return(
                                    <li>
                                        <a href={item.href}>{item.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    </nav>
                </header>
                <TransitionGroup>
                    <CSSTransition
                        // key={portada}
                        classNames="animationInOut"
                        timeout={{ enter: 1000, exit:500 }}
                    >
                        {/* {
                            !this.props.isAnimated &&
                            <div className="contenedor isAnimated" key="portada">
                                <h1 className="titulo">Guitarras <span>invie</span>sibles</h1> 
                                <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3> 
                                <a className="button" href="#guitarras">Conoce más</a> 
                            </div>

                        } */}
                        <div className="contenedor isAnimated" key="portada">
                            <h1 className="titulo">Guitarras <span>invie</span>sibles</h1> 
                            <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3> 
                            <a className="button" href="#guitarras">Conoce más</a> 
                        </div>
                        
                    </CSSTransition>
                </TransitionGroup>
                {
                    this.props.isAnimated && 
                    this.renderHeart()
                }
            </section>
        )
    }
}

export default connect(mapStateToProps)(Portada);