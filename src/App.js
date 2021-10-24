import React, { useState } from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import MoviesList from "./cards/MoviesList";
import Footer from "./Footer/Footer";

import Addmovie from "./addmovie/Add";
import Search from "./Search/Search";

let moviesData = [
  {
    id: Math.random(),
    image:
      "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
    rating: 4,
    name: "Devil's Mile",
    date: "2014",
    type: "Action | Crime",
    description:
      "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers ...",
  },
  {
    id: Math.random(),
    image:
      "https://static.cinemagia.ro/img/db/movie/00/69/88/once-upon-a-time-in-the-west-549264l.jpg",
    rating: 5,
    name: "Once Upon A Time ",
    date: "1968",
    type: "Western",
    description:
      "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin .",
  },
  {
    id: Math.random(),
    image:
      "https://i.pinimg.com/564x/37/bd/f8/37bdf8f405a30977959e112d6f48aec0.jpg",
    rating: 4,
    name: "Taxi Driver",
    date: "1976",
    type: "Crime | Drama",
    time: "2h",
    description:
      "A mentally unstable veteran works as a nighttime taxi driver in New York City.",
  },
  {
    id: Math.random(),
    image:
      "https://i.pinimg.com/564x/78/55/ac/7855acc7002b1ae619b1edaa4b595df3.jpg",
    rating: 4,
    name: "Mad Max",
    date: "1979",
    type: "Action | Adventure",
    time: "1h",
    description:
      "In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.",
  },
  {
    id: Math.random(),
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/b1330b14202071.5627f4dc23472.jpg",
    rating: 3,
    name: "Little Miss Sunshine",
    date: "2006",
    type: "Comedy | Drama",
    time: "2h",
    description:
      "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
  },
  {
    id: Math.random(),
    image:
      "https://i.pinimg.com/564x/32/49/1c/32491ccd2f4ce577dea8871988c5828c.jpg",
    rating: 5,
    name: "KILL BILL",
    date: "2003",
    type: "Action",
    time: "2h",
    description:
      "The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.'The Bride' decided to escape her life as a killer.",
    details: "https://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl",
  },
  {
    id: Math.random(),
    image:
      "https://i.pinimg.com/originals/3e/f1/ba/3ef1baaaceb5a95c4f57a7cb2393b39d.jpg",
    rating: 5,
    name: "The Wolf Of Wall Street",
    date: "2013",
    type: " Biography | Crime | Drama  ",
    time: "3h",
    description:
      "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
  },
];

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchRat, setSearchRate] = useState();
  const [searchValue, setSearchvalue] = useState("");
  // hanlesearch
  const handleSearch = (event) => setSearchvalue(event.target.value);
  // handlesearchrate

  const handlesearchrate = (newrate) => setSearchRate(newrate);
  // addmovie
  const addMovie = (newmovie) => setMovies([...movies, newmovie]);
  return (
    <div>
      <Search
        searchValue={searchValue}
        handleSearch={handleSearch}
        searchRat={searchRat}
        handlesearchrate={handlesearchrate}
      />
      <MoviesList
        data={movies.filter((movie) =>
          movie.name
            .toLowerCase()
            .includes(
              searchValue.toLowerCase().trim() && movie.rating >= searchRat
            )
        )}
      />
      <Addmovie handleAdd={addMovie} />
      <Footer />
    </div>
  );
}

export default App;
