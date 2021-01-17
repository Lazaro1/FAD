import { useEffect, useState } from 'react';
import { firebaseFirestore } from '../../services/firebase';
import { Row, Panel, Col, Modal } from 'rsuite';
import { ImPencil } from "react-icons/im";
import Occurence from '../../components/NewOccurrence'

import './styles.css';

import Header from '../../components/Header'

function Home() {

    const [IsUpdating ,setIsUpdating] = useState(false)
    const [registers, setRegisters] = useState([])
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getAll();
    }, [])


    const getAll = async () => {
        const docs = await firebaseFirestore.collection("occourence").get();


        const tempDocs = [];

        docs.forEach(doc => {
            tempDocs.push({...doc.data(), id: doc.id});
        });

        setRegisters(tempDocs)
    }


    return (
        <div className='App'>
            <Header />
            <div>
                <Row>
                    {registers.map(register => (
                        <Col md={6} sm={12}>
                            <Panel header={register.id} shaded>
                                {register.colaboration}<br />
                                {register.date}<br />
                                {register.ocourence}<br />
                                {register.sector}<br />
                                {register.teste}<br />
                                {register.type}
                                <button className='home-button' onClick={() =>{
                                    setIsUpdating(true)
                                    setOpen(true)
                                }}><ImPencil /></button>
                            </Panel>
                        </Col>
                    ))}
                </Row>

            </div>


            <Modal show={open} onHide={() =>{
                setOpen(false)
                setIsUpdating(false)
            }} center>
                <Modal.Header>
                    <Modal.Title classPrefix='modal-title'> Cadastro de Ocorrência </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Occurence isUpdating={IsUpdating} registers={registers} />
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default Home;