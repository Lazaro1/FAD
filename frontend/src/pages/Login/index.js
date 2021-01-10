import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

import './styles.css';


import Imagem from '../../assets/images/bg-01.jpeg'

function Login(){

    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')

    const history = useHistory();

    const redirect = () => {

        if (email !== '' && senha !== '') {
            history.push('/Home')
        } else {
            alert('Email ou senha branco ou inválido')
        }

    }

    return(
        <div className='main-container'>
            <div className='second-container'>
                <div className='img-container'> 
                    <img src={Imagem}/>
                </div>           

                <div className='third-container'>
                    <h1>Login</h1>   
                    <form className='form-container'>
                        <div>
                            <input type='' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input type='Senha' placeholder='Senha' onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        
                    </form>
                    <button onClick={redirect}>Entrar</button> 
                </div>

            </div>
        </div>
    )
}

export default Login;