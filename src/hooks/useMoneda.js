import React, { Fragment, useState } from 'react';

const useMoneda = (label, stateIncial, opciones) => {

    //State del custom hook 
    const [state, setState] = useState(stateIncial)

    const Seleccionar = () => (
        <Fragment>
            <label>{label}</label>
            <select>
                <option value="">--Seleccione--</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </select>
        </Fragment>
    );

    //Retornar state, interfaz y fn que modifica el state
    return [state, Seleccionar, setState];
}

export default useMoneda; 