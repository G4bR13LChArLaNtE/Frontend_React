import React, {useState} from "react";
import './MovieRow.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



// eslint-disable-next-line import/no-anonymous-default-export
export default ({title, items}) => {

    const [scrollX, setscrollX] = useState(-500);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0){
            x = 0;
        }
        setscrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 0.25);
        let listw = items.results.length * 250;
        if ((window.innerWidth - listw) > x) {
            x = (window.innerWidth - listw) + 980;

        }
        setscrollX(x);
    }


    return (
        <div className="movieRow">
            <h2>{title}</h2>
                <div className="movieRow--left" onClick={handleLeftArrow}>
                    <ArrowBackIosIcon style={{fontSize: 50}}/>
                </div>
                <div className="movieRow--right" onClick={handleRightArrow}>
                    <ArrowForwardIosIcon style={{fontSize: 50}}/>
                </div>


            <div className="movierow--listarea">

                <div className='movieRow--list' style={{
                // eslint-disable-next-line no-restricted-globals
                marginLeft: scrollX,
                width: items.results.length * 250}}>

                {items.results.length > 0 && items.results.map((item, key)=>

                    <div className="movieRow--item">

                    <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.original_title} />

                    </div>
                )}

                </div>

                
            </div>
        </div>
    );
}