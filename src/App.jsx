import { useState, useEffect } from 'react'
import './App.css'
import Form from './Form/Form';
import Giphy from './Giphy/Giphy';


export default function App() {
  const [giphySrc, setGiphySrc] = useState({});
  useEffect(() => {
    const giphySrc = `https://api.giphy.com/v1/gifs/random?api_key=OKpcTUbJ4uRt8Ar1fR70FrdXRxCdLcZd&tag=&rating=g`;
    async function getGiphy() {
      try {
        const response = await fetch(giphySrc);
        const allData = await response.json();
        setGiphySrc({ image_url: allData.data.images.original.url });
      } catch (err) {
        console.log(err);
      }
    };
    getGiphy();
  }, []);
  const handleSubmit = async (val) => {
    if(val) {
      const giphySrc = `https://api.giphy.com/v1/gifs/random?api_key=OKpcTUbJ4uRt8Ar1fR70FrdXRxCdLcZd&tag=&rating=g`;
      const response = await fetch(giphySrc);
      const allData = await response.json();
      setGiphySrc({ image_url: allData.data[0].images.original.url });
    } else {
      getGiphy()
    }
  };
  return (
    <>
      <h2>Giphy REACT Lab</h2>
      <br />
      <Form handleSubmit={handleSubmit} />
      <br />
      <br />
      {giphySrc.image_url ? (
        <Giphy giphySrc={giphySrc} />
      ) : (
        <></>
      )}
    </>
  );
}


