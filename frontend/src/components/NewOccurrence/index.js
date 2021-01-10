
function Occurence() {

    return(
        <div className='third-container'>
        <h1>Registro de Ocorrencia</h1>   
        <form >
            <div>
                <label for="about">Tipo </label>    
                <input type='' placeholder='Tipo'/>
            </div>
            <div>
                <label for="about">Setor </label>    
                <input type='' placeholder='Setor'  />
            </div>
            <div>
                <label for="about">Colaborador </label> 
                <input type='' placeholder='Colaborador' />
            </div>
            <div >
              <label for="about">Ocorrencia </label>
              <textarea id="about" name="about" required></textarea>
            </div>

            
        </form>
        <button >Registrar</button> 
        </div>  
    )
}
export default Occurence