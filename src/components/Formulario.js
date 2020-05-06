import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptoMoneda from '../hooks/useCriptoMoneda';
import Error from './Error';
import axios from 'axios';
import PropTypes from 'prop-types';

const Boton = styled.input`
    margin-top:20px;
    font-weight:bold;
    font-size:20px;
    padding:10px;
    background-color: #66a2fe;
    border:none;
    width:100%;
    border-radius:10px;
    color:#fff;
    transition:background-color .3s ease;

    &:hover{
        background-color:#326AC0;
        cursor:pointer;
    }
`;

const Formulario = ({ setMoneda, setCriptomoneda }) => {

    //State del listado de criptomonedas

    const [listacriptomonedas, setListacriptomonedas] = useState([]);
    const [error, setError] = useState(false)

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' },
        { codigo: 'COP', nombre: 'Peso Colombiano' },
    ]

    //Utiliza useMoneda

    const [moneda, SelectMoneda] = useMoneda('Elige tu moneda', '', MONEDAS);

    //utilizar useCriptoMoneda

    const [criptoMoneda, SelectCripto] = useCriptoMoneda('Elige tu criptomoneda', '', listacriptomonedas)

    //Ejecutar llamado a la API 

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(url)

            setListacriptomonedas(resultado.data.Data)
        }
        consultarAPI()
    }, [])

    //Cuando el usuario hace submit
    const contizarMoneda = e => {
        e.preventDefault()

        //validar si ambos campos estan llenos 

        if (moneda === '' || criptoMoneda === '') {
            setError(true)
            return;
        }

        //pASAR DATOS AL COMPONENTE PRINCIPAL
        setError(false);

        setMoneda(moneda);
        setCriptomoneda(criptoMoneda);

    }

    return (
        <form
            onSubmit={contizarMoneda}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
            <SelectMoneda />

            <SelectCripto />
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
}

Formulario.propTypes = {
    setMoneda: PropTypes.func.isRequired,
    setCriptomoneda: PropTypes.func.isRequired,
}


export default Formulario;