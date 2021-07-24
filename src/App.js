import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Characters from './componentes/Characters';
import Navbar from './componentes/Navbar';
import styles from "./componentes/styles.css";
import Pagination from './componentes/Pagination';



function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [isloading, setIsloading] = useState(false)

  const url = "https://rickandmortyapi.com/api/character"

  const getCharacters = (url)=>{
    
    axios.get(url)
    .then(resp =>{
      const data = resp.data
      setCharacters(data.results)
      setInfo(data.info)
      
    })
  }
  const onPrevious =()=>{
    getCharacters(info.prev)
  }
  const onNext =()=>{
    getCharacters(info.next)
  }

  useEffect(() => {
    getCharacters(url)
  }, [])

  return (
    <div className="app">
      <Navbar brand="Rick and Morty Characters"/>
      <div className="container mt-5 mb-5">
        <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
        />
      <Characters
      isloading={isloading}
      characters={characters}
      />
      <Pagination
      prev={info.prev}
      next={info.next}
      onPrevious={onPrevious}
      onNext={onNext}
      />
      </div>
    </div>
  );
}

export default App;
