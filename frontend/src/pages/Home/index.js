import { useEffect, useState } from 'react';
import { firebaseFirestore } from '../../services/firebase';
import { Row, Panel, Col } from 'rsuite';


import './styles.css';

import Header from '../../components/Header'

function Home() {
    const [registers, setRegisters] = useState([])

    useEffect(() => {
        console.log('renderizou')
        getAll();
    }, [])


    const getAll = async () => {
        const docs = await firebaseFirestore.collection("occourence").get();


        const tempDocs = [];

        docs.forEach(doc => {
            tempDocs.push(doc.data());
        });

        setRegisters(tempDocs)
        console.log(docs)
    }

    return (
        <div className='App'>
            <Header />
            <div>
                <Row>
                    {registers.map(register => (

                        <Col md={6} sm={12}>
                            <Panel header='ID' shaded> 
                                {register.colaboration}<br/>
                                {register.date}<br/>
                                {register.ocourence}<br/>
                                {register.sector}<br/>
                                {register.teste}<br/>
                                {register.type}
                            </Panel>
                        </Col>


                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Home;