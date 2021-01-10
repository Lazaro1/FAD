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
                <button onClick={onOpenModal}>Open modal</button>
                 <Modal open={open} onClose={onCloseModal} center>
                    <Occurence />
                 </Modal>                    
                    {/* <ul>
                        <li><a href='#' onClick={onOpenModal}>Abertura de Ocorrencia</a></li>
                        <li><a href='#'>Visualização de Ocorrencia</a></li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default Header