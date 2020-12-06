import React, {useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
import Info from './components/Info'

import axios from 'axios'

function App() {

  const [buscarLetra, setBuscarLetra] = useState({})
  const [letra, setLetra] = useState('')
  const [info, setInfo] = useState({})

  const {artista, cancion} = buscarLetra

  useEffect(()=>{
    if(Object.keys(buscarLetra).length === 0) return null;

    const consultarAPILetra = async () =>{
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const [letra, informacion] = await Promise.all([
        axios.get(url),
        axios.get(url2)
      ])
      
      setLetra(letra.data.lyrics)
      setInfo(informacion.data.artists[0])


   
    }
    consultarAPILetra()

  },[buscarLetra])


  return (
   <>
     <Formulario setBuscarLetra={setBuscarLetra}/>
     <div className="container mt-5">
       <div className="row">
         <div className="col-md-6">
            <Info info={info}/>
         </div>
         <div className="col-md-6">
              <Cancion letra={letra} cancion={buscarLetra.cancion}/>
         </div>
       </div>
     </div>
   </>
  );
}

export default App;
