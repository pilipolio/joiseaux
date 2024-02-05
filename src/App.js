import { useState } from "react";
import useSound from 'use-sound';
import titSong from "./sounds/Blue_Tit_(Cyanistes_caeruleus)_(W1CDR0001535_BD30).ogg";
import blackBirdSong from "./sounds/Turdus_merula_(06_02_16).ogg";
import goldFindSong from "./sounds/European_Goldfinch_(Carduelis_carduelis)_(W1CDR0001491_BD15).ogg"

const blueTit = {
  name: "Mésange bleue",
  image:
    "https://lh3.googleusercontent.com/pw/ABLVV85MnlcHwwSeAaMCsYPhHK832W-Yp5FfkasqSbzfY44fPkfsylprAYsmYH7LE1vghMxYlSuwZ5ifjmXNaxYfmbhzfdmUJaWXXBcGwMeNnMeXYVKoYCe1IdnD-_Fn9epGttrle5XsUo-muQ-iGOk2ZMX2gw=w1720-h1720-s-no?authuser=0",
  song: titSong
};

const blackBird = {
  name: "Merle",
  image:
    "https://lh3.googleusercontent.com/pw/ABLVV85smOO3HAsbny_42SkDXIW_IwwgTo8653lIUrNJ0A7tw_V1G1N3mcsbPiUi-JMO85z2fUpOcRkWWMvhEiPTNy8DXMyo6_VdUfi8rR6StnB6GfM7jXQmVzagWmY_XOuJwOSslCkyoGnQuNMFUS69QqYFfg=w1706-h1707-s-no?authuser=0",
  song: blackBirdSong
};

const goldfinch = {
  name: "Chardonneret",
  image:
    "https://lh3.googleusercontent.com/pw/ABLVV84wM-O7t3-7FpWZEfGKVeMYhU6CxGRjyou0GSsrAOXJmEd4Bv4XV2Ervj2rTiTuiIAlBAbD1kbQXvnniZvXGF7uDtUVmVG-5R2CKgAANVtBaU7IyGF7o59wtvqHF4daWJUvopsBX3tksqZL-oVV_eomAA=w1720-h1720-s-no?authuser=0",
  song: goldFindSong
};

const songThrush = {
  name: "Grive musicienne",
  image:
    "https://lh3.googleusercontent.com/pw/ABLVV84exDzl87aHAJRwbZAGNWHtKTBF8DqtVT2wv0GM3UV_mlgEuuom02-3lAti9nj78ZQMaVaTVSTpQHNrOozzFmFLHtULW-sz2c7W61mLTUI-MGrM2NFteG8cEJjNY7CSQZjTJBeqmgX8Kwa6sLm--OZrog=w1720-h1720-s-no?authuser=0",
};


function Square({bird}) {
  const [playing, setPlaying] = useState(null);
  const [play, { stop }] = useSound(bird.song, {
    interrupt: true,
    onend: () => {
      setPlaying(false);
      console.info('Sound ended!');
    },
  });

  function handleClick() {
    if (!playing) {
      play();
      setPlaying(true);
      return;
    } else {
      stop();
      setPlaying(false);
      return;
    } 
  }

  return (
    <button className="square" onClick={handleClick}>
      {playing ? bird.name : <img width="100" src={bird.image} />}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square bird={blueTit} />
        <Square bird={blackBird} />
        <Square bird={goldfinch} />
      </div>
    </>
  );
}
