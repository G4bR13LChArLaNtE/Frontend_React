const API_KEY = '0e89e804fe568157836d9589f4770a82';
const API_BASE = 'https://api.themoviedb.org/3';


/*
- Originais da Netflix;
- Recomendados (trending);
- Em alta (Top rated);
- Ação;
- Comédia;
- Terror;
- Romance;
- Documentários.
*/


const basicfetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`); /* Use ` acento crase */
    const json = await req.json();
    return json;
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomelist: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicfetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicfetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicfetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicfetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicfetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicfetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicfetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicfetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },


    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
                // eslint-disable-next-line default-case
                switch(type) {
                    case 'movie':
                        info = await basicfetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                    case 'tv':
                        info = await basicfetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                }
        }

        return info;
    }
}