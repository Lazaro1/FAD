import React, { useState } from 'react';
import './style.css'
import { firebaseFirestore } from '../../services/firebase';
import { Paragraph , Loader, Button } from 'rsuite'


function Occurence() {

    const [type, setType] = useState('')
    const [sector, setSector] = useState('')
    const [colaboration, setColaboration] = useState('')
    const [occourence, setOccourence] = useState('')
    const [loading, setLoading] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const resultFirestoreAdd = await firebaseFirestore.collection('occourence').add({
                type: type,
                sector: sector,
                colaboration: colaboration,
                occourence: occourence,
                date: Date.now(),
                teste: 'lazaro lindo',
            });

            console.log(resultFirestoreAdd)

            setLoading(false)
        } catch (error) {
            alert('Error' + error.message)
        }
    }

    return (    
        <div className='occourence-container'>
            {loading ? <Loader backdrop center content='carregando...'/> : ''}

            <form onSubmit={handleSubmit}>
                <label >Tipo </label>
                <input
                    type='text'
                    placeholder='Tipo'
                    value={type}
                    onChange={e => setType(e.target.value)}
                    readOnly={(loading === true )}/>
                <label >Setor </label>
                <input type='text' placeholder='Setor' value={sector} onChange={e => setSector(e.target.value)} />
                <label >Colaborador </label>
                <input type='text' placeholder='Colaborador' value={colaboration} onChange={e => setColaboration(e.target.value)} />
                <label >Ocorrencia </label>
                <textarea required value={occourence} onChange={e => setOccourence(e.target.value)} ></textarea>
                <Button onClick={handleSubmit}>Registrar</Button>
            </form>
        </div>
    )
}
export default Occurence