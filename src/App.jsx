import { useState, useEffect } from 'react'
import './App.css'
import Form from './Form/Form';
import Giphy from './Giphy/Giphy';

export default function App() {
  const [giphySrc, setGiphySrc] = useState({});
  useEffect(() => {
    const giphyURL = `https://api.giphy.com/v1/gifs/random?api_key=OKpcTUbJ4uRt8Ar1fR70FrdXRxCdLcZd&tag=&rating=g`;
    async function getGiphy() {
      try {
        const response = await fetch(giphyURL);
        const allData = await response.json();
        setGiphySrc({ image_url: allData.data.images.original.url });
      } catch (err) {
        console.log(err);
      }
    };
    getGiphy();
  }, []);

  async function Randomizer(){
    const giphyURL = `https://api.giphy.com/v1/gifs/random?api_key=OKpcTUbJ4uRt8Ar1fR70FrdXRxCdLcZd&tag=&rating=g`;
      const response = await fetch(giphyURL);
      const allData = await response.json();
      setGiphySrc({ image_url: allData.data.images.original.url });
  }

  async function handleSubmit(l){
    if(l) {
      const giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=OKpcTUbJ4uRt8Ar1fR70FrdXRxCdLcZd&q=${l}&limit=25&offset=0&rating=g&lang=en`;
      const response = await fetch(giphyURL);
      const allData = await response.json();
      setGiphySrc({ image_url: allData.data[0].images.original.url });
    } else {
      Randomizer()
    }
  };

  return (
    <>
      <h2>Giphy REACT Lab</h2>
      <Form handleSearch={handleSubmit} />
      {giphySrc.image_url ? (
        <Giphy image={giphySrc} />
      ) : (
        <></>
      )}
    </>
  );
}


