import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { firebaseAuth } from '../../services/firebase';

import './styles.css';


import Imagem from '../../assets/images/bg-01.jpeg'

function Login(){

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const history = useHistory();

    const redirect = async (e) => {
        e.preventDefault();
        try {
            let resultAuth = await firebaseAuth().signInWithEmailAndPassword(email, password);
            history.push('/home')
        } catch (error) {
            alert('Houve um erro: ' + error.message)
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
                    <form className='form-container' onSubmit={redirect}>
                        <div>
                            <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button>Entrar</button> 
                    </form>
                    
                </div>

            </div>
        </div>
    )
}

export default Login;