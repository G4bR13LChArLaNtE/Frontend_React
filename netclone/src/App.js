/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {


  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);



  useEffect(()=>{
    const loadall = async () => {

    let list = await Tmdb.getHomelist();
    setMovieList(list);

    let originals = list.filter(i=>i.slug === 'originals');
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
    let chosen = originals[0].items.results[randomChosen];
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
    setFeaturedData(chosenInfo);
    }

    loadall();
  }, []);



  useEffect(() =>{
    const scrollListener = () => {
      if(window.scrollY > 20){
        setBlackHeader(true);
      } else{
        setBlackHeader(false);
      }
      
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);


    return (
      <div className="page">

        <Header black={blackHeader}/>

        {featuredData &&
          <FeaturedMovie item={featuredData} />
        }


        <section className="lists">
          {movieList.map((item,key)=>(
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </section>

        <footer>
          Feito por Gabriel Charlante <span role="img" aria-label='óculos'>😎</span><br />
          Direitos de imagem para NetFlix®<br />
          Dados pegos do Site themoviedb.org <br />
        </footer>


            {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://www.metageek.com/img/buffering-800px.gif"></img>
        </div> }
      </div>
     );
}
