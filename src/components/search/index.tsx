// @flow 
import { Box } from '@material-ui/core';
import React, {useState } from 'react';
import {useStyles} from "./style"
import api from '../../services/api';

function Search({setResponse}: {setResponse: (value: []) => void}){
    const style = useStyles();
    const [input, setInput] = useState("")
    const [erro, setErro] = useState("");
    const consumeApi = () =>{
        api
        .get(`${input}`)
        .then((response) => {
            if(response.data.hits.length === 0){
                setErro("Nada foi encontrado")
            }else{
                setErro("")
            }
            setResponse(response.data.hits)
        })
        .catch((err) => console.log(err));
    }
        
    return(
        <Box className={style.container}>
            <h1>{process.env.REACT_APP_API_TITLE}</h1>
            <Box className={style.search}>
            <input className={style.input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Busque pelo autor ou nome do livro...' />
            <button onClick={consumeApi} className={style.button}>Pesquisar</button>
            </Box>
            {!!erro && <span className={style.erro}>{erro}</span>}
        </Box>
    )
}

export default Search;