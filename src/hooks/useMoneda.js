import React, { Fragment, useState } from 'react';

const useMoneda = () => {

    //State del custom hook 
    const [state, setState] = useState('')

    const Seleccionar = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value="MXN">Peso Mexicano</option>
            </select>
        </Fragment>
    );

    //Retornar state, interfaz y fn que modifica el state
    return [state, Seleccionar, setState];
}

export default useMoneda; 