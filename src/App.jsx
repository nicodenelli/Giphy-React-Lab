import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
        const json = await response.json();
        console.log('getGiphy', json.data);
        setGiphySrc({ image_url: json.data.images.downsized_large.url });
      } catch (err) {
        console.log(err);
      }
    };

    getGiphy();
  }, []);

  const handleSubmit = async (val) => {
    if(val) {
      const giphySrc = `https://api.giphy.com/v1/gifs/search?api_key=OKpcTUbJ4uRt8Ar1fR70FrdXRxCdLcZd&q=&limit=25&offset=0&rating=g&lang=en`;
      const response = await fetch(giphySrc);
      const json = await response.json();
      console.log('handleSumbit', json.data[0].images.downsized_large.url );
      setGiphySrc({ image_url: json.data[0].images.downsized_large.url });
    } else {
      getGiphy()
    }
  };

  return (
    <>
      <h2>Giphy REACT Lab</h2>
      <Form handleSubmit={handleSubmit} />
      <br />
      {giphySrc.image_url ? (
        <Giphy giphySrc={giphySrc} />
      ) : (
        <></>
      )}
    </>
  );
}


