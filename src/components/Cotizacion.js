import React from 'react';

const Cotizacion = ({ resultado }) => {
    if (Object.keys(resultado).length === 0) return null;

    console.log(resultado)
    return (
        <div>
            <p>El precio es:<span> {resultado.PRICE}</span></p>
            <p>El precio mas alto del díoa:<span> {resultado.HIGHDAY}</span></p>
            <p>El precio más bajo del día:<span> {resultado.LOWDAY}</span></p>
            <p>Variación en las ultimas horas:<span> {resultado.CHANGEPCT24H0OUR}</span></p>
            <p>Ultima Actualización:<span> {resultado.LASTUPDATE}</span></p>
        </div>
    );
}

export default Cotizacion;