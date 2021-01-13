import { useEffect, useState } from 'react';
import { firebaseFirestore } from '../../services/firebase';

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
    }

    return (
        <div className='App'>
            <Header />
            <div>
                {registers.map(register => (
                    <div>
                        <h1>{register.colaboration}</h1>
                        <h1>{register.occourence}</h1>
                        <h1>{register.sector}</h1>
                        <h1>{register.type}</h1>
                        <h1>{register.date}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;