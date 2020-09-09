import React, { Component } from 'react';
import { connect } from "react-redux";
import {selectActiveWord}  from "../../store/palabra/reducer";


class Palabra extends Component{

    render(){
        return(
            <div>
                <p>{this.props.palabra}</p>
            </div>
        )
    }
    
}

//const Palabra = ({ palabra }) => <div>{palabra}</div>

const mapStateToProps = state =>{
    return{
        palabra: selectActiveWord(state)
    }
}

export default connect(mapStateToProps)(Palabra);






