import React from 'react'
import PropTypes from 'prop-types'

const Cancion = ({letra, cancion}) => {

    if(letra.length === 0) return null

    return (
        <>
            <h2>Letra Cancion <i>{cancion}</i></h2>
            <p className='letra'>{letra}</p>
            
        </>
    )
}

Cancion.propTypes = {
    letra: PropTypes.string.isRequired,
    cancion: PropTypes.string.isRequired
}

export default Cancion
