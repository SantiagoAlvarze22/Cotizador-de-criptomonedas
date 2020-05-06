import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family:'Bebas Neue', cursive;
    color:#FFF;
    text-transform:uppercase;
    font-weight:bold;
    font-size:2.4rem;
    margin-top:2rem;
    display:block;
`

const Select = styled.select`
    width:100%;
    display:block;
    padding:1 rem;
    -webkit-appearance:none;
    border-radius:10px;
    border:none;
    font-size:1.2rem;
`

const useCriptoMoneda = (label, stateIncial, opciones) => {

    console.log(opciones)

    //State del custom hook 
    const [state, setState] = useState(stateIncial)

    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">--Seleccione--</option>
                {/* {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))} */}
            </Select>
        </Fragment>
    );

    //Retornar state, interfaz y fn que modifica el state
    return [state, SelectCripto, setState];
}

export default useCriptoMoneda; 