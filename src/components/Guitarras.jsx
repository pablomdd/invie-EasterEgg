import React, {Component} from 'react';
import {connect} from 'react-redux';
// import CSSTransitionGroup from 'react-transition-group'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function mapStateToProps(state){
    return{
            guitarras: state.guitarras,
        }
}


 class Guitarras extends Component{
    render(){
        return(
            <section id="guitarras"  className="guitarras contenedor">  
                <h2>Nuestra guitarras</h2> 
                {
                    this.props.guitarras.map((guitarra, index) => {
                        return(
                            <article  className="guitarra" key={index}>  
                                <TransitionGroup>
                                    <CSSTransition
                                        // transitionName="flicker"
                                        key={guitarra.image}
                                        classNames="flicker"
                                        timeout={{ enter: 1000, exit: 50 }}
                                        // transitionEnterTimeOut={500}
                                        // transitionLeaveTimeOut={500}
                                    >
                                        <img  
                                        className="guitarra-image" 
                                        key={guitarra.image}
                                        src={guitarra.image}  
                                        alt={guitarra.alt} 
                                        width="350"/>
                                    </CSSTransition>
                                </TransitionGroup>
                                <TransitionGroup>
                                    <CSSTransition
                                    key={guitarra.name}
                                    classNames="fade"
                                    timeout={{ enter: 1000,  }}
                                    >
                                        <div  className="contenedor-guitarra" key={guitarra.name}>
                                            <h3  className="guitarra-name">{guitarra.name}</h3>
                                            <ol>
                                                {
                                                    guitarra.features.map((feature, index) => {
                                                        return(
                                                            <li key={index}>{feature}</li>
                                                        )
                                                    })
                                                }
                                            </ol>
                                        </div>
                                    </CSSTransition>
                                </TransitionGroup>
                            </article>
                        )
                    } )
                }
            </section>
        )
    }
}

export default connect(mapStateToProps) (Guitarras);