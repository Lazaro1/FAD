import React, { useEffect, useState } from 'react';
import './style.css'
import { firebaseFirestore } from '../../services/firebase';
import { Paragraph, Loader, Button } from 'rsuite'


function Occurence(props) {

    const [type, setType] = useState('')
    const [sector, setSector] = useState('')
    const [colaboration, setColaboration] = useState('')
    const [occourence, setOccourence] = useState('')
    const [loading, setLoading] = useState(false)

    
    useEffect(() => {
        if (props.isUpdating === true) {
            getOccourenceById(props.id)
        }
    }, []);


    const getOccourenceById = async (id) => {
        const doc = await firebaseFirestore.collection("occourence").doc(id).get();
        const register = doc.data()

        setType(register.type)
        setSector(register.sector)
        setSector(register.colaboration)
        setOccourence(register.occourence)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (props.isUpdating === true) {
                console.log('Vai alterar')                              
            } else {
                console.log('Vai cadastrar')

                setLoading(true)
                const resultFirestoreAdd = await firebaseFirestore.collection('header').add({
                    type: type,
                    sector: sector,
                    colaboration: colaboration,
                    date: Date.now(),
                });

                const resultFirestoreAddOccourence = await firebaseFirestore.collection('occourence').add({
                    occourence: occourence,
                    date: Date.now()
                })

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