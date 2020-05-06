import React from 'react';
import styled from '@emotion/styled';

const Resultado = styled.div`
    color:#FFF;
    font-family:Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size:18px;

    span{
        font-weight:bold;
    }
`;

const Precio = styled.p`
    font-size:30px;

    span{
        font-weight:bold;
    }
`;

const Cotizacion = ({ resultado }) => {
    if (Object.keys(resultado).length === 0) return null;

    console.log(resultado)
    return (
        <Resultado>
            <Precio>El precio es:<span> {resultado.PRICE}</span></Precio>
            <Info>El precio mas alto del día:<span> {resultado.HIGHDAY}</span></Info>
            <Info>El precio más bajo del día:<span> {resultado.LOWDAY}</span></Info>
            <Info>Variación en las últimas horas:<span> {resultado.CHANGEPCT24H0OUR}</span></Info>
            <Info>Ultima Actualización:<span> {resultado.LASTUPDATE}</span></Info>
        </Resultado>
    );
}

export default Cotizacion;