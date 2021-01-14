import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import Occurence from '../NewOccurrence/index'
import { Button, Modal, Navbar, Icon, Nav, Grid, Row, Col } from 'rsuite'



import './styles.css';


function Header() {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className='header navbar-page'>
            {/* <div className='main-header'>
                <div className='second-header'>
                    <h1>LOGO</h1>
                </div>
                <div className='third-header'>
                    <Button onClick={onOpenModal}>Nova Ocorrência</Button>
                    <Modal show={open} onHide={onCloseModal} center>
                        <Modal.Header>
                            <Modal.Title classPrefix='modal-title'> Cadastro de Ocorrência </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Occurence />
                        </Modal.Body>
                    </Modal>
                </div>
            </div> */}

            <Navbar >
                <Navbar.Header>
                    <a href="#" className="navbar-brand logo">
                        LOGO
                    </a>
                </Navbar.Header>
                <Navbar.Body>
                    <Nav >

                    </Nav>
                    <Nav pullRight>
                        <Nav.Item eventKey="1" >
                            <a onClick={onOpenModal}>
                                Modal
                            </a>
                        </Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>

            <Modal show={open} onHide={onCloseModal} center>
                <Modal.Header>
                    <Modal.Title classPrefix='modal-title'> Cadastro de Ocorrência </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Occurence />
                </Modal.Body>
            </Modal>
        </div>

    )
}

export default Header