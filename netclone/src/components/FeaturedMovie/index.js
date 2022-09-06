import React from "react";
import "./FeaturedMovie.css";


// eslint-disable-next-line import/no-anonymous-default-export
export default ({item}) => {
    console.log(item);


    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i  in item.genres) {
        genres.push(item.genres[i].name);
    }
    
    let description = item.overview;
    if(description.length > 200) {
        description = description.substring(0,340)+'...';
    }



    return(
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name"> {item.name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average.toFixed(1)} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                        <div className="featured--description">{description}</div>
                        <div className="featured--buttons">
                            <a href={`/watc/${item.id}`} className="featured--watching">► Assistir</a>
                            <a href={`/list/add/${item.id}`} className="featured--list">+ Minha Lista</a>
                        </div>
                        <div className="featured--genres"><strong>Gênero: </strong>{genres.join(', ')}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

