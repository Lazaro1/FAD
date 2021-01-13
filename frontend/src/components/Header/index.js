import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Occurence from '../NewOccurrence/index'

import './styles.css';


function Header() {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return(
        <div className='header'>
            <div className='main-header'>
                <div className='second-header'>
                    <h1>LOGO</h1>
                </div>
                <div className='third-header'>
                <button onClick={onOpenModal}>Nova Ocorrência</button>
                 <Modal open={open} onClose={onCloseModal} center>
                    <Occurence />
                 </Modal>                           
                </div>
            </div>
        </div>
    )
}

export default Header