import { useState } from 'react';

const NewTaskInput = ({ onSubmit }) => {
    const [newItem, setNewItem] = useState('');

    function submit(e){
        e.preventDefault();
        onSubmit(newItem);
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input 
                    className=''
                    placeholder='Digite um nova tarefa'
                    onChange={t => setNewItem(t.target.value)}
                />
                <button type='submit'>Adicionar</button>
            </form>
        </div>
    )
}

export default NewTaskInput;