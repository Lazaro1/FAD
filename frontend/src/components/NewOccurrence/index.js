import React, { useState } from 'react';
import './style.css'
import { firebaseFirestore } from '../../services/firebase';
import { Paragraph, Loader, Button } from 'rsuite'


function Occurence(props) {

    const [type, setType] = useState('')
    const [sector, setSector] = useState('')
    const [colaboration, setColaboration] = useState('')
    const [occourence, setOccourence] = useState('')
    const [loading, setLoading] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (props.isUpdating === true) {
                console.log('Vai alterar')
                console.log(props.registers[0].id)

                const docs = await firebaseFirestore.collection("occourence").doc(props.registers[0].id).get();
                const tempOccourence = {...docs.data()}
                
                                
            } else {
                console.log('Vai cadastrar')

                setLoading(true)
                const resultFirestoreAdd = await firebaseFirestore.collection('occourence').add({
                    type: type,
                    sector: sector,
                    colaboration: colaboration,
                    occourence: occourence,
                    date: Date.now(),
                });
            }

            setLoading(false)
        } catch (error) {
            alert('Error' + error.message)
        }
    }

    return (
        <div className='occourence-container'>
            {loading ? <Loader backdrop center content='carregando...' /> : ''}
            {console.log(props.isUpdating)}

            <form onSubmit={handleSubmit}>
                    <label >Tipo </label>
                    <input
                        type='text'
                        placeholder='Tipo'
                        value={type}
                        onChange={e => setType(e.target.value)}
                        readOnly={(loading === true)} 
                        // value={props.isUpdating ? 'tempOccourence.type ': ''}
                        />
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