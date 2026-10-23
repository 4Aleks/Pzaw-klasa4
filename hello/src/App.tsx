import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

interface MovieProps {
  id: number;
  posterUrl: string;
  title: string;
  releaseYear: number;
  rating: number;
}

const MovieTab:MovieProps[]=[
  {
    
    id: 1,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
    title: "The Matrix",
    releaseYear:1999,
    rating:8
  },
  {
    id: 2,
    posterUrl: "https://fwcdn.pl/fpo/56/29/375629/7670122_2.8.webp",
    title: "Interstellar",
    releaseYear:2014,
    rating:10
  },
  {
    id: 3,
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/d/df/Taxi_3_film.jpg",
    title: "Taxi 3",
    releaseYear:2003,
    rating:6
  }
]

function Movie(props: MovieProps) {
  return (
    <div className="card">
      <img src={props.posterUrl} className="cardImg" alt={props.title} style={{ height: 375 }} />
      <div className="card-body">
        <h5 className="card" onClick={() => Title(props)}>{props.title}</h5>
        <p className="card">Rok: {props.releaseYear}</p>
        <p className="card">
           Ocena: {props.rating} {props.rating >= 8 && <span className="polecany">Polecany</span>}
        </p>
        <button onClick={() => Sczegoly(props)} >Pokaż szczegóły</button>
      </div>
    </div>
  );
}

function Title(props){
  console.log(`wybrales film ${props.title}`);
}


function Sczegoly(props){
  console.log(`klikołęś ten film ${props.title}`)
}

interface BookProps {
  id: number,
  coverUrl: string;
  title: string;
  releaseYear: number;
  numPages: number;
}
      
const BookTab:BookProps[]=[
  {
    id: 1,
    coverUrl: "https://files.legimi.com/images/44263fa8e9e4caa1720c7efd30d695e6/w512_u90.jpg",
    title: "Atomowe nawyki",
    releaseYear: 2019,
    numPages: 272
  },
  {
    id: 2,
    coverUrl: "https://static.profinfo.pl/storage/image/core_products/2026/8/23/196950ec8988246ea07ed9965506dcb3/admin/preview/6999907590569.webp",
    title: "Pułapki myślenia. O myśleniu szybkim i wolnym",
    releaseYear: 2012,
    numPages: 667
  },
  {
    id: 3,
    coverUrl: "https://m.media-amazon.com/images/I/61rUfWyyfoL._AC_UF1000,1000_QL80_.jpg",
    title: "Tiny experiments",
    releaseYear: 2025,
    numPages: 304
  },
  {
    id: 4,
    coverUrl: "https://static01.helion.com.pl/global/okladki/vbig/prag2v.jpg",
    title: "Pragmatyczny programista",
    releaseYear: 1999,
    numPages: 354
  }
]

function Book(props: BookProps) {
  return (
    <div className="card">
     <img src={props.coverUrl} className="cardImg" alt={props.title} style={{ height: 375 }}/>
      <div className="card-body">
      <h5 className="card">{props.title}</h5>
        <p className="card">
           {props.releaseYear} &bull; {props.numPages ?? 0} stron
           {props.releaseYear < 2000 && <span className="klasyk">klasyka</span>}
        </p>
      </div>
    </div>
  );
}

interface TrackProps {
  index: number;
  title: string;
  length: string;
}




function Track(props: TrackProps) {
  return (
    <tr >
      <td>{props.index}</td>
      <td>{props.title}</td>
      <td>{props.length}</td>
    </tr>
  );
}


interface AlbumProps {
  id:number;
  coverUrl: string;
  title: string;
  band: string;
  genre: string;
  releaseYear: number;
  tracks: TrackProps[];
}

const AlbumTab: AlbumProps[] = [
  {
    id: 1,
    coverUrl: "https://muzikercdn.com/uploads/products/11924/1192412/main_70a2a6cc.jpg",
    title: "Hold Your Colour",
    band: "Pendulum",
    genre: "drum'n'bass",
    releaseYear: 2005,
    tracks: [
      { index: 1, title: "Prelude", length: "0:52" },
      { index: 2, title: "Slam", length: "5:44" },
      { index: 3, title: "Plasticworld", length: "6:21" },
      { index: 4, title: "Fasten Your Seatbelt", length: "6:38" },
      { index: 5, title: "Through the Loop", length: "6:13" },
      { index: 6, title: "Sounds of Life", length: "5:21" },
      { index: 7, title: "Girl in the Fire", length: "4:53" },
      { index: 8, title: "Tarantula", length: "5:31" },
      { index: 9, title: "Out Here", length: "6:07" },
      { index: 10, title: "Hold Your Colour", length: "5:28" },
      { index: 11, title: "The Terminal", length: "5:42" },
      { index: 12, title: "Streamline", length: "5:23" },
      { index: 13, title: "Another Planet", length: "7:38" },
      { index: 14, title: "Still Grey", length: "7:51" }
    ]
  },
  {
    id: 2,
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/Overseer_-_Wreckage.jpg",
    title: "Wreckage",
    band: "Overseer",
    genre: "big beat",
    releaseYear: 2003,
    tracks: [
      { index: 1, title: "Slayed", length: "4:47" },
      { index: 2, title: "Stompbox", length: "3:53" },
      { index: 3, title: "Supermoves", length: "4:47" },
      { index: 4, title: "Velocity Shift", length: "2:08" },
      { index: 5, title: "Horndog", length: "3:31" },
      { index: 6, title: "Meteorology", length: "5:32" },
      { index: 7, title: "Aquaplane", length: "5:14" },
      { index: 8, title: "Doomsday", length: "3:14" },
      { index: 9, title: "Basstrap", length: "4:03" },
      { index: 10, title: "Sparks", length: "6:02" },
      { index: 11, title: "Never", length: "6:36" },
      { index: 12, title: "Heligoland", length: "26:56" }
    ]
  },
  {
    id: 3,
    coverUrl: "https://ecsmedia.pl/c/discovery-b-iext197156812.jpg",
    title: "Discovery",
    band: "Daft Punk",
    genre: "disco house",
    releaseYear: 2001,
    tracks: [
      { index: 1, title: "One More Time", length: "5:20" },
      { index: 2, title: "Aerodynamic", length: "3:27" },
      { index: 3, title: "Digital Love", length: "4:58" },
      { index: 4, title: "Harder, Better, Faster, Stronger", length: "3:45" },
      { index: 5, title: "Crescendolls", length: "3:31" },
      { index: 6, title: "Nightvision", length: "1:44" },
      { index: 7, title: "Superheroes", length: "3:57" },
      { index: 8, title: "High Life", length: "3:22" },
      { index: 9, title: "Something About Us", length: "3:51" },
      { index: 10, title: "Voyager", length: "3:47" },
      { index: 11, title: "Veridis Quo", length: "5:44" },
      { index: 12, title: "Short Circuit", length: "3:26" },
      { index: 13, title: "Face to Face", length: "3:58" },
      { index: 14, title: "Too Long", length: "10:00" }
    ]
  },
  {
    id: 3,
    coverUrl: "https://ecsmedia.pl/c/discovery-b-iext197156812.jpg",
    title: "test",
    band: "Daft test",
    genre: "disco test",
    releaseYear: 2027,
    tracks: []
  }
];

//handleSongClick(props.title){|

//}
function Album(props: AlbumProps) {
  return (
    <div className="card">
      <img src={props.coverUrl} className="cardImg" alt={props.title} style={{ height: 375}} />
      <div className="card-body">
        <h5 className="card">{props.title}</h5>
        <p className="card">
          {props.band} &bull; {props.releaseYear} &bull; {props.genre}
        </p>
        {props.tracks.length == 0 ? (
          <div className="alert">Brak utworów</div>
        ) : (
          <table className="table table-striped">
             <thead>
               <tr>
                <th>L.p.</th>
                <th>Tytuł</th>
                <th className="text-end">Czas trwania</th>
               </tr>
            </thead>
             <tbody >
              {props.tracks.map((track) => (
              <Track   key={track.index} {...track} />
              ))}
           </tbody>
          </table>
        )}
      </div>
     </div>
  );
}







function App() {
  
  // return (
  //   <div>
  //     <h1>Filmy</h1>
  //     <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
  //       {MovieTab.map((M)=><Movie {...M}></Movie>)}
  //       </div>

  //     <h1>Książki</h1>
  //     <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
  //       {BookTab.map((B)=><Book {...B}></Book>)}
  //     </div>

  //     <h1>Albumy</h1>
  //     <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
  //         {AlbumTab.map((album) => (
  //           <Album key={album.id} {...album} />
  //         ))}
  //     </div>
  //   </div>
  // );

     
  //zadanie 3 i 4 i 5 i 6
    
    const [isMovieOpen, setIsMovieOpen] = useState(true);
    const [isBooksOpen, setIsBooksOpen] = useState(true);
    const [isAlbumsOpen, setIsAlbumsOpen] = useState(true);
    MovieTab.sort((a, b) => a.title.localeCompare(b.title));//sortuje tavblice fimy
    BookTab.sort((a, b) => b.releaseYear -a.releaseYear);//sortuje ksazki
    const AlbumTab2 = [...AlbumTab].sort(
      (b, a) => a.tracks.length - b.tracks.length).slice(0, 1);//najwicej utworow
    return(
      <div className="container">
      <div>
       <h1 onClick={() => setIsMovieOpen(!isMovieOpen)} style={{ cursor: "pointer", userSelect: "none" }}>{isMovieOpen ? "▾" : "▸"} Filmy po 2010</h1>
            {isMovieOpen && (
        <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
          {MovieTab.filter((M) => M.releaseYear > 2010).map((M) => (
            <Movie key={M.id} {...M} />
          ))}
        </div>
      )}

          
       <h1 onClick={() => setIsBooksOpen(!isBooksOpen)} style={{ cursor: "pointer", userSelect: "none" }}>{isBooksOpen ? "▾" : "▸"} Książki</h1>
          {isBooksOpen && (
            <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
          {BookTab.map((B) => ( <Book key={B.id} {...B} />
          ))}
        </div>
      )}


          <h1 onClick={() => setIsAlbumsOpen(!isAlbumsOpen)} style={{ cursor: "pointer", userSelect: "none" }}>{isAlbumsOpen ? "▾" : "▸"} Albumy</h1>
          {isAlbumsOpen && (
            <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
           {AlbumTab2.map((album) => (
             <Album key={album.id} {...album} />
          ))}
         </div>
          )}
       </div>
       </div>
    )
  
}

export default App
