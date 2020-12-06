import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Formulario = ({setBuscarLetra}) => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })
    const [error, setError] = useState(false)

    const {artista, cancion} = busqueda

    const handleChange = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault()

        if(artista.trim() === '' || cancion.trim()=== ''){
            setError(true)
            return
        }
        setError(false)

        setBuscarLetra(busqueda)

    }



    return (
        <div className="bg-info">
            <div className="container">
                {error && <p className='alert alert-danger text-center p-2'>Todos los campos son obligatorios</p>}
                <div className="row">
                <form  className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={handleSubmit}>
                    <fieldset>
                        <legend className="text-center">Buscar Letras Canciones</legend>
                        <div className="row">
                            <div className="col-md 6">
                                <div className="form-group">
                                    <label htmlFor="">Artista</label>
                                    <input type="text" 
                                        name='artista' 
                                        placeholder='Nombre del Artista' 
                                        className="form-control" 
                                        onChange={handleChange}
                                        value={artista}/>
                                        
                                </div>
                            </div>
                            <div className="col-md 6">
                            <div className="form-group">
                                    <label htmlFor="">Cancion</label>
                                    <input type="text" 
                                        name='cancion' 
                                        placeholder='Título de la canción' 
                                        className="form-control" 
                                        onChange={handleChange}
                                        value={cancion}/>
                                        
                                </div>
                            </div>

                        </div>
                        <button type='submit' className='btn btn-primary float-right'>Buscar</button>
                    </fieldset>
                </form>

                </div>
            </div>
        </div>
    )
}

Formulario.propTypes = {
    setBuscarLetra: PropTypes.func.isRequired
}

export default Formulario
