import React from 'react'

const ListItem = ({onChange, onDelete, value}) => {
    return(
        <div>
            <input 
                className=''
                value={value}
                onChange={onChange}
            />
            <button onClick={onDelete}>Excluir</button>
        </div>
    )
}

export default ListItem