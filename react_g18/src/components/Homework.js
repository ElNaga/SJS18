import movies from "../mock/mockData"

export const Homework = ({movies}) => (
    <section>
        <h2>Homework</h2>

        {movies.map((movie,i) => (<Movie key={i}/>))}
    </section>
)


const Movie = ({name, genre, year,imdbLink, imageUrl}) => (
    <div style={{
        background: 'url(${imageUrl})'
    }}>
        <h3>Title: {name}</h3>
        <h4>Genre: {genre}</h4>
        <p>RElease year: {year}</p>
        <a href={imdbLink}>IMDB {name}</a>

    </div>
)