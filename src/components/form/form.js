import React, { Component, useRef } from 'react';
import updateWord from "../../store/palabra/action";
import { connect } from "react-redux";

const Form = ({ updateWord }) => {
	const palabraRef = useRef(null);
	return (
        <div>
            <input ref={palabraRef} type="text" placeholder="La palabra"/>
            <button onClick={ () => {updateWord(palabraRef.current.value);}} >Add</button>
        </div>
	)
};

//El primer parametro va a null porque es para recuperar de la Store,    y ahora vamos a guardar
export default connect(null, { updateWord })(Form)