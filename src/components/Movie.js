import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

// 평점별 색상주기 
const setVoteClass = (vote) => {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 6) {
        return "orange";
    } else {
        return "red";
    }
}

// 가져올 목록  
const Movie = ({title, poster_path, overview, vote_average }) => (
    <div className="movie">
        <img 
            src={
                poster_path 
                ? IMG_API + poster_path
                // 영화포스터 깨질경우 아래 이미지로 대처
                : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
                } 
                alt={title} />
                <div className="movie-info">
                    <h3>{title}</h3>
                    <span className={
                            `tag ${setVoteClass(vote_average)}`
                            }>
                        {vote_average}
                    </span>
                </div>

        <div className="movie-over">
            {/* 영화 소개 */}
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
    
);

export default Movie;