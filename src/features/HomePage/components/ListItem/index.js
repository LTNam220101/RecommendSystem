import { Button, Box, CircularProgress, useMediaQuery } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import Item from '../../components/Item';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './slice';
import axios from 'axios';

const useStyles = makeStyles({
  root: {},
  body: {
    display: 'grid',
    gridTemplateColumns: `repeat(4, minmax(0, 1fr))`,
    gridGap: '20px',
  },

  moreBtn: {
    width: '100%',
    backgroundColor: '#ff8000 !important',
    borderRadius: '30px !important',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
});

export default function ListItem({ listItem, api }) {
  // console.log(listItem)
  const dispatch = useDispatch();
  const classes = useStyles();
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    dispatch(actions.getListMovieRequest());
  }, []);

  const { dataListMovie, loadingListMovie } = useSelector((state) => state.listMovie);
  console.log(dataListMovie)
  // API
  useEffect(() => {
    async function getData() {
      // const array = [
      //   675353, 629542, 414906, 453395, 628900, 763285, 893370, 883502, 799876,
      //   752623, 526896, 338953, 661791, 294793, 639933, 676705, 836225, 438695,
      //   646385, 760926, 675353, 629542, 414906, 453395, 628900, 763285, 893370,
      //   883502, 799876, 752623, 526896, 338953, 661791, 294793, 639933, 676705,
      //   836225, 438695, 646385, 760926, 675353, 629542, 414906, 453395, 628900,
      //   763285, 893370, 883502, 799876, 752623, 526896, 338953, 661791, 294793,
      //   639933, 676705, 836225, 438695, 646385, 760926,
      // ];
      // const data = [];
      // for (let i of array) {
      //   const movie = await axios.get(
      //     `https://api.themoviedb.org/3/movie/${i}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`
      //   );
      //   console.log(movie);
      //   const actor = await axios.get(
      //     `http://api.themoviedb.org/3/movie/${i}/casts?api_key=e9e9d8da18ae29fc430845952232787c`
      //   );
      //   console.log(actor);
      //   data.push({ ...movie.data, ...actor.data });
      //   // data[-1].actors =  actor
      // }
      // console.log(data);
      // const data1 = [];
      // data.map((item) => {
      //   const vid = item.videos.results.find(({ name }) => {
      //     return name === "Official Trailer";
      //   })
      //   const url = vid ? vid.key : "DcCISK3sCYg";
      //   data1.push({
      //     categories: item.genres.map((gen) => {
      //       return gen.name;
      //     }),
      //     createAt: item.release_date,
      //     name: item.title,
      //     descriptions: item.overview,
      //     image: "https://image.tmdb.org/t/p/original" + item.poster_path,
      //     voteAverage: item.vote_average,
      //     voteQuantity: item.vote_count,
      //     actors: item.cast.slice(0, 5).map((actor) => {
      //       return {
      //         name: actor.name,
      //         image: "https://image.tmdb.org/t/p/original" + actor.profile_path,
      //       };
      //     }),
      //     // directors: item.crew.filter((pp) => {
      //     //   return pp.department === "Directing";
      //     // }),
      //     url: url,
      //   });
      // });
      // console.log(JSON.stringify(data1));
      const data = [
        {
          "categories": [
            "Action",
            "Adventure",
            "Family",
            "Comedy"
          ],
          "createAt": "2022-03-30",
          "name": "Sonic the Hedgehog 2",
          "descriptions": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
          "image": "https://image.tmdb.org/t/p/original/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
          "voteAverage": 7.7,
          "voteQuantity": 2393,
          "actors": [
            {
              "name": "James Marsden",
              "image": "https://image.tmdb.org/t/p/original/mk142GG0saiSXALY6V4wWcmPROW.jpg"
            },
            {
              "name": "Ben Schwartz",
              "image": "https://image.tmdb.org/t/p/original/5vV52TSEIhe4ZZLWwv3i7nfv8we.jpg"
            },
            {
              "name": "Tika Sumpter",
              "image": "https://image.tmdb.org/t/p/original/6Hb9e7jna7nml58cztAvbKgFAPx.jpg"
            },
            {
              "name": "Natasha Rothwell",
              "image": "https://image.tmdb.org/t/p/original/x5KdL3QoS4YuozVpfuPsu3MLwwf.jpg"
            },
            {
              "name": "Adam Pally",
              "image": "https://image.tmdb.org/t/p/original/yY13PEaVbPoXT5MkitVxTfdAZnU.jpg"
            }
          ],
          "url": "G5kzUpWAusI"
        },
        {
          "categories": [
            "Animation",
            "Comedy",
            "Family",
            "Crime"
          ],
          "createAt": "2022-03-17",
          "name": "The Bad Guys",
          "descriptions": "When the infamous Bad Guys are finally caught after years of countless heists and being the world’s most-wanted villains, Mr. Wolf brokers a deal to save them all from prison.",
          "image": "https://image.tmdb.org/t/p/original/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg",
          "voteAverage": 7.8,
          "voteQuantity": 749,
          "actors": [
            {
              "name": "Sam Rockwell",
              "image": "https://image.tmdb.org/t/p/original/vYpWxV0bnUgKo7SdasfGP9HttUq.jpg"
            },
            {
              "name": "Marc Maron",
              "image": "https://image.tmdb.org/t/p/original/2ENNRs7lgbyLfrUN622zRqkYJWL.jpg"
            },
            {
              "name": "Awkwafina",
              "image": "https://image.tmdb.org/t/p/original/l5AKkg3H1QhMuXmTTmq1EyjyiRb.jpg"
            },
            {
              "name": "Craig Robinson",
              "image": "https://image.tmdb.org/t/p/original/nWZI2ghokrha2lYnr5Z48agItL7.jpg"
            },
            {
              "name": "Anthony Ramos",
              "image": "https://image.tmdb.org/t/p/original/ityTHqIXFT3laID4j4ptlnc84zq.jpg"
            }
          ],
          "url": "DcCISK3sCYg"
        },
        {
          "categories": [
            "Crime",
            "Mystery",
            "Thriller"
          ],
          "createAt": "2022-03-01",
          "name": "The Batman",
          "descriptions": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
          "image": "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
          "voteAverage": 7.8,
          "voteQuantity": 5435,
          "actors": [
            {
              "name": "Robert Pattinson",
              "image": "https://image.tmdb.org/t/p/original/6RVxNlNmc0DIfZzaJKCJM43If3M.jpg"
            },
            {
              "name": "Zoë Kravitz",
              "image": "https://image.tmdb.org/t/p/original/4uOfGQSKCz2I7HVV5vPwhvTD61y.jpg"
            },
            {
              "name": "Paul Dano",
              "image": "https://image.tmdb.org/t/p/original/tHsaqfauzG4MuFs5oCbq0pRy5EF.jpg"
            },
            {
              "name": "Jeffrey Wright",
              "image": "https://image.tmdb.org/t/p/original/43EGVkmHzZFZQQHW20AL6GivrBD.jpg"
            },
            {
              "name": "John Turturro",
              "image": "https://image.tmdb.org/t/p/original/6O9W9cJW0kCqMzYeLupV9oH0ftn.jpg"
            }
          ],
          "url": "DcCISK3sCYg"
        },
        {
          "categories": [
            "Fantasy",
            "Action",
            "Adventure"
          ],
          "createAt": "2022-05-04",
          "name": "Doctor Strange in the Multiverse of Madness",
          "descriptions": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
          "image": "https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          "voteAverage": 7.5,
          "voteQuantity": 4040,
          "actors": [
            {
              "name": "Benedict Cumberbatch",
              "image": "https://image.tmdb.org/t/p/original/fBEucxECxGLKVHBznO0qHtCGiMO.jpg"
            },
            {
              "name": "Elizabeth Olsen",
              "image": "https://image.tmdb.org/t/p/original/wIU675y4dofIDVuhaNWPizJNtep.jpg"
            },
            {
              "name": "Chiwetel Ejiofor",
              "image": "https://image.tmdb.org/t/p/original/kq5DDnqqofoRI0t6ddtRlsJnNPT.jpg"
            },
            {
              "name": "Benedict Wong",
              "image": "https://image.tmdb.org/t/p/original/ukmfsl59Isvn9odgzMWBidA3cmt.jpg"
            },
            {
              "name": "Xochitl Gomez",
              "image": "https://image.tmdb.org/t/p/original/y3aFdIpfT7GqVoVa523PqF9cJgO.jpg"
            }
          ],
          "url": "aWzlQ2N6qqg"
        },
        {
          "categories": [
            "Action",
            "Thriller"
          ],
          "createAt": "2022-03-10",
          "name": "The Contractor",
          "descriptions": "After being involuntarily discharged from the U.S. Special Forces, James Harper decides to support his family by joining a private contracting organization alongside his best friend and under the command of a fellow veteran. Overseas on a covert mission, Harper must evade those trying to kill him while making his way back home.",
          "image": "https://image.tmdb.org/t/p/original/rJPGPZ5soaG27MK90oKpioSiJE2.jpg",
          "voteAverage": 6.5,
          "voteQuantity": 375,
          "actors": [
            {
              "name": "Chris Pine",
              "image": "https://image.tmdb.org/t/p/original/ipG3BMO8Ckv9xVeEY27lzq975Qm.jpg"
            },
            {
              "name": "Ben Foster",
              "image": "https://image.tmdb.org/t/p/original/4le1PMWTGp7y2IBmZEIOHfE3HAB.jpg"
            },
            {
              "name": "Gillian Jacobs",
              "image": "https://image.tmdb.org/t/p/original/sdhAxrVgmoVpglDsKn2B2yZmdj5.jpg"
            },
            {
              "name": "Eddie Marsan",
              "image": "https://image.tmdb.org/t/p/original/9atfOgIxhfOKvv2be8HEp6SzOct.jpg"
            },
            {
              "name": "Kiefer Sutherland",
              "image": "https://image.tmdb.org/t/p/original/g4HLUHuQ742roPxugGzxeVoKnel.jpg"
            }
          ],
          "url": "e7glvM8Xh0w"
        },
        {
          "categories": [
            "Action",
            "Thriller",
            "Crime"
          ],
          "createAt": "2022-03-16",
          "name": "Ambulance",
          "descriptions": "Decorated veteran Will Sharp, desperate for money to cover his wife's medical bills, asks for help from his adoptive brother Danny. A charismatic career criminal, Danny instead offers him a score: the biggest bank heist in Los Angeles history: $32 million.",
          "image": "https://image.tmdb.org/t/p/original/zT5ynZ0UR6HFfWQSRf2uKtqCyWD.jpg",
          "voteAverage": 6.9,
          "voteQuantity": 893,
          "actors": [
            {
              "name": "Jake Gyllenhaal",
              "image": "https://image.tmdb.org/t/p/original/oA6fp6SQBQQWZEzn4NfY3E8mJhV.jpg"
            },
            {
              "name": "Yahya Abdul-Mateen II",
              "image": "https://image.tmdb.org/t/p/original/aBDebGZs2pAucyaK4EhHVJGm0Xu.jpg"
            },
            {
              "name": "Eiza González",
              "image": "https://image.tmdb.org/t/p/original/w2pZ8gLqZNguj8cqrDGbMw2Ibj0.jpg"
            },
            {
              "name": "Garret Dillahunt",
              "image": "https://image.tmdb.org/t/p/original/9ISUezmwt2Hnm2do6Mg75EyAwgE.jpg"
            },
            {
              "name": "Keir O'Donnell",
              "image": "https://image.tmdb.org/t/p/original/4PnupUSZLvtT5DOfAuqHrGgdEuV.jpg"
            }
          ],
          "url": "7NU-STboFeI"
        },
        {
          "categories": [
            "Horror"
          ],
          "createAt": "2022-04-21",
          "name": "Virus:32",
          "descriptions": "A virus is unleashed and a chilling massacre runs through the streets of Montevideo.",
          "image": "https://image.tmdb.org/t/p/original/wZiF79hbhLK1U2Pj9bF67NAKXQR.jpg",
          "voteAverage": 7.3,
          "voteQuantity": 94,
          "actors": [
            {
              "name": "Daniel Hendler",
              "image": "https://image.tmdb.org/t/p/original/8Q36TGfbnm4CjuKVWz1XGmTiZtk.jpg"
            },
            {
              "name": "Paula Silva",
              "image": "https://image.tmdb.org/t/p/originalnull"
            },
            {
              "name": "Franco Rilla",
              "image": "https://image.tmdb.org/t/p/originalnull"
            },
            {
              "name": "Sofía González",
              "image": "https://image.tmdb.org/t/p/originalnull"
            }
          ],
          "url": "qqGQzBGZ0FY"
        },
        {
          "categories": [
            "Crime",
            "Action"
          ],
          "createAt": "2022-04-29",
          "name": "Fortress: Sniper's Eye",
          "descriptions": "Weeks after the deadly assault on Fortress Camp, Robert makes a daring rescue to save Sasha, the widow of his old nemesis Balzary. But back in the camp's command bunker, it appears Sasha may have devious plans of her own. As a new attack breaks out, Robert is confronted with a familiar face he thought he'd never see again…",
          "image": "https://image.tmdb.org/t/p/original/61J34xHVVdQHbJ4MSCWQo4e727v.jpg",
          "voteAverage": 6.1,
          "voteQuantity": 85,
          "actors": [
            {
              "name": "Chad Michael Murray",
              "image": "https://image.tmdb.org/t/p/original/uX04loV7QcU17hbKzs8XPKQ45qY.jpg"
            },
            {
              "name": "Bruce Willis",
              "image": "https://image.tmdb.org/t/p/original/caX3KtMU42EP3VLRFFBwqIIrch5.jpg"
            },
            {
              "name": "Jesse Metcalfe",
              "image": "https://image.tmdb.org/t/p/original/atp5FK0tBemYNYQfSPnI2egR7rX.jpg"
            },
            {
              "name": "Kelly Greyson",
              "image": "https://image.tmdb.org/t/p/original/dbygGZLqAqhPLQKVa24TACboAj9.jpg"
            },
            {
              "name": "Ser'Darius Blain",
              "image": "https://image.tmdb.org/t/p/original/4INvD4RYdjGCznboNgdyfWA6dpG.jpg"
            }
          ],
          "url": "uF4f_nlJpvY"
        },
        {
          "categories": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "createAt": "2022-02-25",
          "name": "The Outfit",
          "descriptions": "Leonard is an English tailor who used to craft suits on London’s world-famous Savile Row. After a personal tragedy, he’s ended up in Chicago, operating a small tailor shop in a rough part of town where he makes beautiful clothes for the only people around who can afford them: a family of vicious gangsters.",
          "image": "https://image.tmdb.org/t/p/original/lZa5EB6PVJBT5mxhgZS5ftqdAm6.jpg",
          "voteAverage": 7.1,
          "voteQuantity": 308,
          "actors": [
            {
              "name": "Mark Rylance",
              "image": "https://image.tmdb.org/t/p/original/bztEZRyXrvW3Pg1fexNASXlZrq7.jpg"
            },
            {
              "name": "Johnny Flynn",
              "image": "https://image.tmdb.org/t/p/original/mDD9Dh101map9KzJejtVk5QxuWu.jpg"
            },
            {
              "name": "Zoey Deutch",
              "image": "https://image.tmdb.org/t/p/original/jaBmJv7SqtDraYpRK6puKsxxwjS.jpg"
            },
            {
              "name": "Dylan O'Brien",
              "image": "https://image.tmdb.org/t/p/original/34b2hShMWBjFhxGPfcqqtsKXtkK.jpg"
            },
            {
              "name": "Simon Russell Beale",
              "image": "https://image.tmdb.org/t/p/original/kY9lQfGb8HNhq5BM30td4G5FwFr.jpg"
            }
          ],
          "url": "3UgJL23HxyU"
        },
        {
          "categories": [
            "Action",
            "Adventure",
            "Comedy"
          ],
          "createAt": "2022-03-24",
          "name": "The Lost City",
          "descriptions": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
          "image": "https://image.tmdb.org/t/p/original/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
          "voteAverage": 6.8,
          "voteQuantity": 1427,
          "actors": [
            {
              "name": "Sandra Bullock",
              "image": "https://image.tmdb.org/t/p/original/u2tnZ0L2dwrzFKevVANYT5Pb1nE.jpg"
            },
            {
              "name": "Channing Tatum",
              "image": "https://image.tmdb.org/t/p/original/bhTmp6FA8fOQnGlNk75tdmj2bpu.jpg"
            },
            {
              "name": "Daniel Radcliffe",
              "image": "https://image.tmdb.org/t/p/original/f9WKorjfanW4PxTxhjRvHtCmfKf.jpg"
            },
            {
              "name": "Brad Pitt",
              "image": "https://image.tmdb.org/t/p/original/cckcYc2v0yh1tc9QjRelptcOBko.jpg"
            },
            {
              "name": "Da'Vine Joy Randolph",
              "image": "https://image.tmdb.org/t/p/original/awNT6lltD8zItbGtolmO8IGT8ot.jpg"
            }
          ],
          "url": "5f9VcZqxFO4"
        },
        {
          "categories": [
            "Action",
            "Science Fiction",
            "Fantasy"
          ],
          "createAt": "2022-03-30",
          "name": "Morbius",
          "descriptions": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
          "image": "https://image.tmdb.org/t/p/original/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
          "voteAverage": 6.4,
          "voteQuantity": 1964,
          "actors": [
            {
              "name": "Jared Leto",
              "image": "https://image.tmdb.org/t/p/original/ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg"
            },
            {
              "name": "Matt Smith",
              "image": "https://image.tmdb.org/t/p/original/xr2GSp8Pm6fT5VGm0I9tsWVcZ8q.jpg"
            },
            {
              "name": "Adria Arjona",
              "image": "https://image.tmdb.org/t/p/original/2xAwAxrjZrgfyrNYToBIjg1ZeRB.jpg"
            },
            {
              "name": "Jared Harris",
              "image": "https://image.tmdb.org/t/p/original/mGODbYpkR1NKBOV3rtTfZ7EWoIl.jpg"
            },
            {
              "name": "Al Madrigal",
              "image": "https://image.tmdb.org/t/p/original/p4vN80EGGlzLb5J7G8Ss3n9K2pc.jpg"
            }
          ],
          "url": "oZ6iiRrz1SY"
        },
        {
          "categories": [
            "Fantasy",
            "Adventure",
            "Action"
          ],
          "createAt": "2022-04-06",
          "name": "Fantastic Beasts: The Secrets of Dumbledore",
          "descriptions": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
          "image": "https://image.tmdb.org/t/p/original/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
          "voteAverage": 6.8,
          "voteQuantity": 2157,
          "actors": [
            {
              "name": "Eddie Redmayne",
              "image": "https://image.tmdb.org/t/p/original/fSvG7qzoBBnJUmgtIuMgrK3EQPN.jpg"
            },
            {
              "name": "Jude Law",
              "image": "https://image.tmdb.org/t/p/original/A6Y0m7qEe04ZTHKyYDLbnyCHNzn.jpg"
            },
            {
              "name": "Mads Mikkelsen",
              "image": "https://image.tmdb.org/t/p/original/ntwPvV4GKGGHO3I7LcHMwhXfsw9.jpg"
            },
            {
              "name": "Ezra Miller",
              "image": "https://image.tmdb.org/t/p/original/6wmTpbYpmhthaxzM5ss3377F9IV.jpg"
            },
            {
              "name": "Dan Fogler",
              "image": "https://image.tmdb.org/t/p/original/zJWbLEjfbDthBMucq9M6L4GJXL3.jpg"
            }
          ],
          "url": "Y9dr2zw-TXQ"
        },
        {
          "categories": [
            "Horror"
          ],
          "createAt": "2022-01-28",
          "name": "The Grandmother",
          "descriptions": "A Paris model must return to Madrid where her grandmother, who raised her, has had a stroke. But spending just a few days with this relative turns into an unexpected nightmare.",
          "image": "https://image.tmdb.org/t/p/original/eIUixNvox4U4foL5Z9KbN9HXYSM.jpg",
          "voteAverage": 5.9,
          "voteQuantity": 197,
          "actors": [
            {
              "name": "Almudena Amor",
              "image": "https://image.tmdb.org/t/p/original/mmwdXj20aW4I0f413j1F0TeSGPC.jpg"
            },
            {
              "name": "Vera Valdez",
              "image": "https://image.tmdb.org/t/p/original/shJTF8plSrjHCA1HE1Be0VJVWYs.jpg"
            },
            {
              "name": "Karina Kolokolchykova",
              "image": "https://image.tmdb.org/t/p/original/5hXuSKMXW5AU50UqDcWOTbS8HhF.jpg"
            },
            {
              "name": "Marina Gutiérrez",
              "image": "https://image.tmdb.org/t/p/originalnull"
            },
            {
              "name": "Gabriela Calonfirescu",
              "image": "https://image.tmdb.org/t/p/original/dTu4rpJjWZWtUD4ZiqbWY6LlaGa.jpg"
            }
          ],
          "url": "DcCISK3sCYg"
        },
        {
          "categories": [
            "Thriller",
            "Action"
          ],
          "createAt": "2022-04-08",
          "name": "All the Old Knives",
          "descriptions": "When the CIA discovers one of its agents leaked information that cost more than 100 people their lives, veteran operative Henry Pelham is assigned to root out the mole with his former lover and colleague Celia Harrison.",
          "image": "https://image.tmdb.org/t/p/original/g4tMniKxol1TBJrHlAtiDjjlx4Q.jpg",
          "voteAverage": 6,
          "voteQuantity": 299,
          "actors": [
            {
              "name": "Chris Pine",
              "image": "https://image.tmdb.org/t/p/original/ipG3BMO8Ckv9xVeEY27lzq975Qm.jpg"
            },
            {
              "name": "Thandiwe Newton",
              "image": "https://image.tmdb.org/t/p/original/5BCyGUiUsXD6XzJgPPolqgWFFtj.jpg"
            },
            {
              "name": "Jonathan Pryce",
              "image": "https://image.tmdb.org/t/p/original/zwSv5uXzPTtmitFe39UdqnVwmdL.jpg"
            },
            {
              "name": "Laurence Fishburne",
              "image": "https://image.tmdb.org/t/p/original/8suOhUmPbfKqDQ17jQ1Gy0mI3P4.jpg"
            },
            {
              "name": "Corey Johnson",
              "image": "https://image.tmdb.org/t/p/original/gFPilsTUQlClMiXooO4Q3DSJ5Nr.jpg"
            }
          ],
          "url": "6s7NziAetNs"
        },
        {
          "categories": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "createAt": "2022-04-07",
          "name": "The Northman",
          "descriptions": "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
          "image": "https://image.tmdb.org/t/p/original/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
          "voteAverage": 7.2,
          "voteQuantity": 1765,
          "actors": [
            {
              "name": "Alexander Skarsgård",
              "image": "https://image.tmdb.org/t/p/original/caOe6hwHEE89AJfGdHatnrGgkKj.jpg"
            },
            {
              "name": "Nicole Kidman",
              "image": "https://image.tmdb.org/t/p/original/jTtiPqW6VlNE9nTf4BuUzuIqzlR.jpg"
            },
            {
              "name": "Claes Bang",
              "image": "https://image.tmdb.org/t/p/original/w6kux5RIVfaGwHTb3yiDbaNHBPh.jpg"
            },
            {
              "name": "Ethan Hawke",
              "image": "https://image.tmdb.org/t/p/original/a7rgJl8TYUWAfJuM4fxbLHgD7BL.jpg"
            },
            {
              "name": "Anya Taylor-Joy",
              "image": "https://image.tmdb.org/t/p/original/8YUcwFAOBK3Yt5jnj9G2U8IffD.jpg"
            }
          ],
          "url": "oMSdFM12hOw"
        },
        {
          "categories": [
            "Adventure",
            "Animation",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "createAt": "2021-08-11",
          "name": "Pil's Adventures",
          "descriptions": "Pil, a little vagabond girl, lives on the streets of the medieval city of Roc-en-Brume, along with her three tame weasels. She survives of food stolen from the castle of the sinister Regent Tristain. One day, to escape his guards, Pil disguises herself as a princess. Thus she embarks upon a mad, delirious adventure, together with Crobar, a big clumsy guard who thinks she's a noble, and Rigolin, a young crackpot jester. Pil is going to have to save Roland, rightful heir to the throne under the curse of a spell. This adventure will turn the entire kingdom upside down, and teach Pil that nobility can be found in all of us.",
          "image": "https://image.tmdb.org/t/p/original/abPQVYyNfVuGoFUfGVhlNecu0QG.jpg",
          "voteAverage": 6.8,
          "voteQuantity": 95,
          "actors": [
            {
              "name": "Pierre Tessier",
              "image": "https://image.tmdb.org/t/p/original/33Q1dBoqtTiRLy8YFM418iPerQJ.jpg"
            },
            {
              "name": "Enrique Carballido",
              "image": "https://image.tmdb.org/t/p/originalnull"
            },
            {
              "name": "Kaycie Chase",
              "image": "https://image.tmdb.org/t/p/original/d3ru7HdVJFFyjxLcwavockxRv6d.jpg"
            },
            {
              "name": "Paul Borne",
              "image": "https://image.tmdb.org/t/p/original/vjhn44K5M5A3eSdqslscrNCtBSY.jpg"
            },
            {
              "name": "Julien Crampon",
              "image": "https://image.tmdb.org/t/p/original/x381pxBMUzxSeyOzjgdlhtr10Th.jpg"
            }
          ],
          "url": "DcCISK3sCYg"
        },
        {
          "categories": [
            "Horror"
          ],
          "createAt": "2022-03-11",
          "name": "The Exorcism of God",
          "descriptions": "An American priest working in Mexico is considered a saint by many local parishioners. However, due to a botched exorcism, he carries a secret that’s eating him alive until he gets an opportunity to face his demon one final time.",
          "image": "https://image.tmdb.org/t/p/original/hangTmbxpSV4gpHG7MgSlCWSSFa.jpg",
          "voteAverage": 7,
          "voteQuantity": 287,
          "actors": [
            {
              "name": "Will Beinbrink",
              "image": "https://image.tmdb.org/t/p/original/6S5JeespvNqBlXkC03znn0Sdfey.jpg"
            },
            {
              "name": "María Gabriela de Faría",
              "image": "https://image.tmdb.org/t/p/original/mMxLRggKxuQrwgtMpK3HMwhEmmH.jpg"
            },
            {
              "name": "Irán Castillo",
              "image": "https://image.tmdb.org/t/p/original/aaCEVHA4ybRYP2wHYgCYwrO7NJG.jpg"
            },
            {
              "name": "Joseph Marcell",
              "image": "https://image.tmdb.org/t/p/original/mbjY5qqeT9aV7weLzvbN1ikPq0M.jpg"
            },
            {
              "name": "Hector Kotsifakis",
              "image": "https://image.tmdb.org/t/p/original/yMlCG0Yqigqo1dg8SCBrwUrjW8H.jpg"
            }
          ],
          "url": "VdLI8I4jZD0"
        },
        {
          "categories": [
            "Animation",
            "Comedy",
            "Family",
            "Music"
          ],
          "createAt": "2021-12-01",
          "name": "Sing 2",
          "descriptions": "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
          "image": "https://image.tmdb.org/t/p/original/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
          "voteAverage": 8.1,
          "voteQuantity": 2911,
          "actors": [
            {
              "name": "Matthew McConaughey",
              "image": "https://image.tmdb.org/t/p/original/2mcg07areWJ4EAtDvafRz7eDVvb.jpg"
            },
            {
              "name": "Reese Witherspoon",
              "image": "https://image.tmdb.org/t/p/original/mfjunuTHrd0wnh8UG1ImMN9FSws.jpg"
            },
            {
              "name": "Scarlett Johansson",
              "image": "https://image.tmdb.org/t/p/original/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg"
            },
            {
              "name": "Taron Egerton",
              "image": "https://image.tmdb.org/t/p/original/hHEgQFENXD43ZFwLNWsRpPWPzrs.jpg"
            },
            {
              "name": "Bobby Cannavale",
              "image": "https://image.tmdb.org/t/p/original/gYQwTbEj5IBPYKLGKgrsNGrWAMl.jpg"
            }
          ],
          "url": "DcCISK3sCYg"
        },
        {
          "categories": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "createAt": "2022-01-12",
          "name": "Scream",
          "descriptions": "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
          "image": "https://image.tmdb.org/t/p/original/1m3W6cpgwuIyjtg5nSnPx7yFkXW.jpg",
          "voteAverage": 6.8,
          "voteQuantity": 1450,
          "actors": [
            {
              "name": "Neve Campbell",
              "image": "https://image.tmdb.org/t/p/original/9fDbXBbrM6L10YrzDJUJowDt8U.jpg"
            },
            {
              "name": "Courteney Cox",
              "image": "https://image.tmdb.org/t/p/original/3bTVQH9vBXAiwGVHXKLylStz4RT.jpg"
            },
            {
              "name": "David Arquette",
              "image": "https://image.tmdb.org/t/p/original/1C5sLNLNVZ3P8sMy7HUQ32IKdqX.jpg"
            },
            {
              "name": "Melissa Barrera",
              "image": "https://image.tmdb.org/t/p/original/r8JccIat3I7jilzLqUyb3oNPVP8.jpg"
            },
            {
              "name": "Jenna Ortega",
              "image": "https://image.tmdb.org/t/p/original/nK4GwlX3iEQsp4ZBkKSqbpzmYcB.jpg"
            }
          ],
          "url": "beToTslH17s"
        },
        {
          "categories": [
            "Thriller",
            "Action"
          ],
          "createAt": "2022-01-13",
          "name": "Gold",
          "descriptions": "In the not-too-distant future, two drifters traveling through the desert stumble across the biggest gold nugget ever found and the dream of immense wealth and greed takes hold. They hatch a plan to excavate their bounty, with one man leaving to secure the necessary tools while the other remains with the gold. The man who remains must endure harsh desert elements, ravenous wild dogs, and mysterious intruders, while battling the sinking suspicion that he has been abandoned to his fate.",
          "image": "https://image.tmdb.org/t/p/original/ejXBuNLvK4kZ7YcqeKqUWnCxdJq.jpg",
          "voteAverage": 6.4,
          "voteQuantity": 312,
          "actors": [
            {
              "name": "Zac Efron",
              "image": "https://image.tmdb.org/t/p/original/6oXNHv7gAyXXYFpF943pKRsTtqQ.jpg"
            },
            {
              "name": "Anthony Hayes",
              "image": "https://image.tmdb.org/t/p/original/fh4fTkRr6aNHeZpyjyXglNb3UVw.jpg"
            },
            {
              "name": "Susie Porter",
              "image": "https://image.tmdb.org/t/p/original/ynlvVxiKsmzJ5L7Rj6Kcntnczzh.jpg"
            },
            {
              "name": "Andreas Sobik",
              "image": "https://image.tmdb.org/t/p/originalnull"
            },
            {
              "name": "Akuol Ngot",
              "image": "https://image.tmdb.org/t/p/originalnull"
            }
          ],
          "url": "1HqBaI-FV7Y"
        },
        {
          "categories": [
            "Action",
            "Adventure",
            "Family",
            "Comedy"
          ],
          "createAt": "2022-03-30",
          "name": "Sonic the Hedgehog 2",
          "descriptions": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
          "image": "https://image.tmdb.org/t/p/original/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
          "voteAverage": 7.7,
          "voteQuantity": 2393,
          "actors": [
            {
              "name": "James Marsden",
              "image": "https://image.tmdb.org/t/p/original/mk142GG0saiSXALY6V4wWcmPROW.jpg"
            },
            {
              "name": "Ben Schwartz",
              "image": "https://image.tmdb.org/t/p/original/5vV52TSEIhe4ZZLWwv3i7nfv8we.jpg"
            },
            {
              "name": "Tika Sumpter",
              "image": "https://image.tmdb.org/t/p/original/6Hb9e7jna7nml58cztAvbKgFAPx.jpg"
            },
            {
              "name": "Natasha Rothwell",
              "image": "https://image.tmdb.org/t/p/original/x5KdL3QoS4YuozVpfuPsu3MLwwf.jpg"
            },
            {
              "name": "Adam Pally",
              "image": "https://image.tmdb.org/t/p/original/yY13PEaVbPoXT5MkitVxTfdAZnU.jpg"
            }
          ],
          "url": "G5kzUpWAusI"
        },
        {
          "categories": [
            "Animation",
            "Comedy",
            "Family",
            "Crime"
          ],
          "createAt": "2022-03-17",
          "name": "The Bad Guys",
          "descriptions": "When the infamous Bad Guys are finally caught after years of countless heists and being the world’s most-wanted villains, Mr. Wolf brokers a deal to save them all from prison.",
          "image": "https://image.tmdb.org/t/p/original/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg",
          "voteAverage": 7.8,
          "voteQuantity": 749,
          "actors": [
            {
              "name": "Sam Rockwell",
              "image": "https://image.tmdb.org/t/p/original/vYpWxV0bnUgKo7SdasfGP9HttUq.jpg"
            },
            {
              "name": "Marc Maron",
              "image": "https://image.tmdb.org/t/p/original/2ENNRs7lgbyLfrUN622zRqkYJWL.jpg"
            },
            {
              "name": "Awkwafina",
              "image": "https://image.tmdb.org/t/p/original/l5AKkg3H1QhMuXmTTmq1EyjyiRb.jpg"
            },
            {
              "name": "Craig Robinson",
              "image": "https://image.tmdb.org/t/p/original/nWZI2ghokrha2lYnr5Z48agItL7.jpg"
            },
            {
              "name": "Anthony Ramos",
              "image": "https://image.tmdb.org/t/p/original/ityTHqIXFT3laID4j4ptlnc84zq.jpg"
            }
          ],
          "url": "DcCISK3sCYg"
        },
        {
          "categories": [
            "Crime",
            "Mystery",
            "Thriller"
          ],
          "createAt": "2022-03-01",
          "name": "The Batman",
          "descriptions": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
          "image": "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
          "voteAverage": 7.8,
          "voteQuantity": 5435,
          "actors": [
            {
              "name": "Robert Pattinson",
              "image": "https://image.tmdb.org/t/p/original/6RVxNlNmc0DIfZzaJKCJM43If3M.jpg"
            },
            {
              "name": "Zoë Kravitz",
              "image": "https://image.tmdb.org/t/p/original/4uOfGQSKCz2I7HVV5vPwhvTD61y.jpg"
            },
            {
              "name": "Paul Dano",
              "image": "https://image.tmdb.org/t/p/original/tHsaqfauzG4MuFs5oCbq0pRy5EF.jpg"
            },
            {
              "name": "Jeffrey Wright",
              "image": "https://image.tmdb.org/t/p/original/43EGVkmHzZFZQQHW20AL6GivrBD.jpg"
            },
            {
              "name": "John Turturro",
              "image": "https://image.tmdb.org/t/p/original/6O9W9cJW0kCqMzYeLupV9oH0ftn.jpg"
            }
          ],
          "url": "DcCISK3sCYg"
        },
        {
          "categories": [
            "Fantasy",
            "Action",
            "Adventure"
          ],
          "createAt": "2022-05-04",
          "name": "Doctor Strange in the Multiverse of Madness",
          "descriptions": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
          "image": "https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          "voteAverage": 7.5,
          "voteQuantity": 4040,
          "actors": [
            {
              "name": "Benedict Cumberbatch",
              "image": "https://image.tmdb.org/t/p/original/fBEucxECxGLKVHBznO0qHtCGiMO.jpg"
            },
            {
              "name": "Elizabeth Olsen",
              "image": "https://image.tmdb.org/t/p/original/wIU675y4dofIDVuhaNWPizJNtep.jpg"
            },
            {
              "name": "Chiwetel Ejiofor",
              "image": "https://image.tmdb.org/t/p/original/kq5DDnqqofoRI0t6ddtRlsJnNPT.jpg"
            },
            {
              "name": "Benedict Wong",
              "image": "https://image.tmdb.org/t/p/original/ukmfsl59Isvn9odgzMWBidA3cmt.jpg"
            },
            {
              "name": "Xochitl Gomez",
              "image": "https://image.tmdb.org/t/p/original/y3aFdIpfT7GqVoVa523PqF9cJgO.jpg"
            }
          ],
          "url": "aWzlQ2N6qqg"
        },
        {
          "categories": [
            "Action",
            "Thriller"
          ],
          "createAt": "2022-03-10",
          "name": "The Contractor",
          "descriptions": "After being involuntarily discharged from the U.S. Special Forces, James Harper decides to support his family by joining a private contracting organization alongside his best friend and under the command of a fellow veteran. Overseas on a covert mission, Harper must evade those trying to kill him while making his way back home.",
          "image": "https://image.tmdb.org/t/p/original/rJPGPZ5soaG27MK90oKpioSiJE2.jpg",
          "voteAverage": 6.5,
          "voteQuantity": 375,
          "actors": [
            {
              "name": "Chris Pine",
              "image": "https://image.tmdb.org/t/p/original/ipG3BMO8Ckv9xVeEY27lzq975Qm.jpg"
            },
            {
              "name": "Ben Foster",
              "image": "https://image.tmdb.org/t/p/original/4le1PMWTGp7y2IBmZEIOHfE3HAB.jpg"
            },
            {
              "name": "Gillian Jacobs",
              "image": "https://image.tmdb.org/t/p/original/sdhAxrVgmoVpglDsKn2B2yZmdj5.jpg"
            },
            {
              "name": "Eddie Marsan",
              "image": "https://image.tmdb.org/t/p/original/9atfOgIxhfOKvv2be8HEp6SzOct.jpg"
            },
            {
              "name": "Kiefer Sutherland",
              "image": "https://image.tmdb.org/t/p/original/g4HLUHuQ742roPxugGzxeVoKnel.jpg"
            }
          ],
          "url": "e7glvM8Xh0w"
        },
        {
          "categories": [
            "Action",
            "Thriller",
            "Crime"
          ],
          "createAt": "2022-03-16",
          "name": "Ambulance",
          "descriptions": "Decorated veteran Will Sharp, desperate for money to cover his wife's medical bills, asks for help from his adoptive brother Danny. A charismatic career criminal, Danny instead offers him a score: the biggest bank heist in Los Angeles history: $32 million.",
          "image": "https://image.tmdb.org/t/p/original/zT5ynZ0UR6HFfWQSRf2uKtqCyWD.jpg",
          "voteAverage": 6.9,
          "voteQuantity": 893,
          "actors": [
            {
              "name": "Jake Gyllenhaal",
              "image": "https://image.tmdb.org/t/p/original/oA6fp6SQBQQWZEzn4NfY3E8mJhV.jpg"
            },
            {
              "name": "Yahya Abdul-Mateen II",
              "image": "https://image.tmdb.org/t/p/original/aBDebGZs2pAucyaK4EhHVJGm0Xu.jpg"
            },
            {
              "name": "Eiza González",
              "image": "https://image.tmdb.org/t/p/original/w2pZ8gLqZNguj8cqrDGbMw2Ibj0.jpg"
            },
            {
              "name": "Garret Dillahunt",
              "image": "https://image.tmdb.org/t/p/original/9ISUezmwt2Hnm2do6Mg75EyAwgE.jpg"
            },
            {
              "name": "Keir O'Donnell",
              "image": "https://image.tmdb.org/t/p/original/4PnupUSZLvtT5DOfAuqHrGgdEuV.jpg"
            }
          ],
          "url": "7NU-STboFeI"
        },
        {
          "categories": [
            "Horror"
          ],
          "createAt": "2022-04-21",
          "name": "Virus:32",
          "descriptions": "A virus is unleashed and a chilling massacre runs through the streets of Montevideo.",
          "image": "https://image.tmdb.org/t/p/original/wZiF79hbhLK1U2Pj9bF67NAKXQR.jpg",
          "voteAverage": 7.3,
          "voteQuantity": 94,
          "actors": [
            {
              "name": "Daniel Hendler",
              "image": "https://image.tmdb.org/t/p/original/8Q36TGfbnm4CjuKVWz1XGmTiZtk.jpg"
            },
            {
              "name": "Paula Silva",
              "image": "https://image.tmdb.org/t/p/originalnull"
            },
            {
              "name": "Franco Rilla",
              "image": "https://image.tmdb.org/t/p/originalnull"
            },
            {
              "name": "Sofía González",
              "image": "https://image.tmdb.org/t/p/originalnull"
            }
          ],
          "url": "qqGQzBGZ0FY"
        },
        {
          "categories": [
            "Crime",
            "Action"
          ],
          "createAt": "2022-04-29",
          "name": "Fortress: Sniper's Eye",
          "descriptions": "Weeks after the deadly assault on Fortress Camp, Robert makes a daring rescue to save Sasha, the widow of his old nemesis Balzary. But back in the camp's command bunker, it appears Sasha may have devious plans of her own. As a new attack breaks out, Robert is confronted with a familiar face he thought he'd never see again…",
          "image": "https://image.tmdb.org/t/p/original/61J34xHVVdQHbJ4MSCWQo4e727v.jpg",
          "voteAverage": 6.1,
          "voteQuantity": 85,
          "actors": [
            {
              "name": "Chad Michael Murray",
              "image": "https://image.tmdb.org/t/p/original/uX04loV7QcU17hbKzs8XPKQ45qY.jpg"
            },
            {
              "name": "Bruce Willis",
              "image": "https://image.tmdb.org/t/p/original/caX3KtMU42EP3VLRFFBwqIIrch5.jpg"
            },
            {
              "name": "Jesse Metcalfe",
              "image": "https://image.tmdb.org/t/p/original/atp5FK0tBemYNYQfSPnI2egR7rX.jpg"
            },
            {
              "name": "Kelly Greyson",
              "image": "https://image.tmdb.org/t/p/original/dbygGZLqAqhPLQKVa24TACboAj9.jpg"
            },
            {
              "name": "Ser'Darius Blain",
              "image": "https://image.tmdb.org/t/p/original/4INvD4RYdjGCznboNgdyfWA6dpG.jpg"
            }
          ],
          "url": "uF4f_nlJpvY"
        },
        {
          "categories": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "createAt": "2022-02-25",
          "name": "The Outfit",
          "descriptions": "Leonard is an English tailor who used to craft suits on London’s world-famous Savile Row. After a personal tragedy, he’s ended up in Chicago, operating a small tailor shop in a rough part of town where he makes beautiful clothes for the only people around who can afford them: a family of vicious gangsters.",
          "image": "https://image.tmdb.org/t/p/original/lZa5EB6PVJBT5mxhgZS5ftqdAm6.jpg",
          "voteAverage": 7.1,
          "voteQuantity": 308,
          "actors": [
            {
              "name": "Mark Rylance",
              "image": "https://image.tmdb.org/t/p/original/bztEZRyXrvW3Pg1fexNASXlZrq7.jpg"
            },
            {
              "name": "Johnny Flynn",
              "image": "https://image.tmdb.org/t/p/original/mDD9Dh101map9KzJejtVk5QxuWu.jpg"
            },
            {
              "name": "Zoey Deutch",
              "image": "https://image.tmdb.org/t/p/original/jaBmJv7SqtDraYpRK6puKsxxwjS.jpg"
            },
            {
              "name": "Dylan O'Brien",
              "image": "https://image.tmdb.org/t/p/original/34b2hShMWBjFhxGPfcqqtsKXtkK.jpg"
            },
            {
              "name": "Simon Russell Beale",
              "image": "https://image.tmdb.org/t/p/original/kY9lQfGb8HNhq5BM30td4G5FwFr.jpg"
            }
          ],
          "url": "3UgJL23HxyU"
        },
        {
          "categories": [
            "Action",
            "Adventure",
            "Comedy"
          ],
          "createAt": "2022-03-24",
          "name": "The Lost City",
          "descriptions": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
          "image": "https://image.tmdb.org/t/p/original/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
          "voteAverage": 6.8,
          "voteQuantity": 1427,
          "actors": [
            {
              "name": "Sandra Bullock",
              "image": "https://image.tmdb.org/t/p/original/u2tnZ0L2dwrzFKevVANYT5Pb1nE.jpg"
            },
            {
              "name": "Channing Tatum",
              "image": "https://image.tmdb.org/t/p/original/bhTmp6FA8fOQnGlNk75tdmj2bpu.jpg"
            },
            {
              "name": "Daniel Radcliffe",
              "image": "https://image.tmdb.org/t/p/original/f9WKorjfanW4PxTxhjRvHtCmfKf.jpg"
            },
            {
              "name": "Brad Pitt",
              "image": "https://image.tmdb.org/t/p/original/cckcYc2v0yh1tc9QjRelptcOBko.jpg"
            },
            {
              "name": "Da'Vine Joy Randolph",
              "image": "https://image.tmdb.org/t/p/original/awNT6lltD8zItbGtolmO8IGT8ot.jpg"
            }
          ],
          "url": "5f9VcZqxFO4"
        },
        {
          "categories": [
            "Action",
            "Science Fiction",
            "Fantasy"
          ],
          "createAt": "2022-03-30",
          "name": "Morbius",
          "descriptions": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
          "image": "https://image.tmdb.org/t/p/original/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
          "voteAverage": 6.4,
          "voteQuantity": 1964,
          "actors": [
            {
              "name": "Jared Leto",
              "image": "https://image.tmdb.org/t/p/original/ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg"
            },
            {
              "name": "Matt Smith",
              "image": "https://image.tmdb.org/t/p/original/xr2GSp8Pm6fT5VGm0I9tsWVcZ8q.jpg"
            },
            {
              "name": "Adria Arjona",
              "image": "https://image.tmdb.org/t/p/original/2xAwAxrjZrgfyrNYToBIjg1ZeRB.jpg"
            },
            {
              "name": "Jared Harris",
              "image": "https://image.tmdb.org/t/p/original/mGODbYpkR1NKBOV3rtTfZ7EWoIl.jpg"
            },
            {
              "name": "Al Madrigal",
              "image": "https://image.tmdb.org/t/p/original/p4vN80EGGlzLb5J7G8Ss3n9K2pc.jpg"
            }
          ],
          "url": "oZ6iiRrz1SY"
        },
        {
          "categories": [
            "Fantasy",
            "Adventure",
            "Action"
          ],
          "createAt": "2022-04-06",
          "name": "Fantastic Beasts: The Secrets of Dumbledore",
          "descriptions": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
          "image": "https://image.tmdb.org/t/p/original/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
          "voteAverage": 6.8,
          "voteQuantity": 2157,
          "actors": [
            {
              "name": "Eddie Redmayne",
              "image": "https://image.tmdb.org/t/p/original/fSvG7qzoBBnJUmgtIuMgrK3EQPN.jpg"
            },
            {
              "name": "Jude Law",
              "image": "https://image.tmdb.org/t/p/original/A6Y0m7qEe04ZTHKyYDLbnyCHNzn.jpg"
            },
            {
              "name": "Mads Mikkelsen",
              "image": "https://image.tmdb.org/t/p/original/ntwPvV4GKGGHO3I7LcHMwhXfsw9.jpg"
            },
            {
              "name": "Ezra Miller",
              "image": "https://image.tmdb.org/t/p/original/6wmTpbYpmhthaxzM5ss3377F9IV.jpg"
            },
            {
              "name": "Dan Fogler",
              "image": "https://image.tmdb.org/t/p/original/zJWbLEjfbDthBMucq9M6L4GJXL3.jpg"
            }
          ],
          "url": "Y9dr2zw-TXQ"
        },
        {
          "categories": [
            "Horror"
          ],
          "createAt": "2022-01-28",
          "name": "The Grandmother",
          "descriptions": "A Paris model must return to Madrid where her grandmother, who raised her, has had a stroke. But spending just a few days with this relative turns into an unexpected nightmare.",
          "image": "https://image.tmdb.org/t/p/original/eIUixNvox4U4foL5Z9KbN9HXYSM.jpg",
          "voteAverage": 5.9,
          "voteQuantity": 197,
          "actors": [
            {
              "name": "Almudena Amor",
              "image": "https://image.tmdb.org/t/p/original/mmwdXj20aW4I0f413j1F0TeSGPC.jpg"
            },
            {
              "name": "Vera Valdez",
              "image": "https://image.tmdb.org/t/p/original/shJTF8plSrjHCA1HE1Be0VJVWYs.jpg"
            },
            {
              "name": "Karina Kolokolchykova",
              "image": "https://image.tmdb.org/t/p/original/5hXuSKMXW5AU50UqDcWOTbS8HhF.jpg"
            },
            {
              "name": "Marina Gutiérrez",
              "image": "https://image.tmdb.org/t/p/originalnull"
            },
            {
              "name": "Gabriela Calonfirescu",
              "image": "https://image.tmdb.org/t/p/original/dTu4rpJjWZWtUD4ZiqbWY6LlaGa.jpg"
            }
          ],
          "url": "DcCISK3sCYg"
        },
        {
          "categories": [
            "Thriller",
            "Action"
          ],
          "createAt": "2022-04-08",
          "name": "All the Old Knives",
          "descriptions": "When the CIA discovers one of its agents leaked information that cost more than 100 people their lives, veteran operative Henry Pelham is assigned to root out the mole with his former lover and colleague Celia Harrison.",
          "image": "https://image.tmdb.org/t/p/original/g4tMniKxol1TBJrHlAtiDjjlx4Q.jpg",
          "voteAverage": 6,
          "voteQuantity": 299,
          "actors": [
            {
              "name": "Chris Pine",
              "image": "https://image.tmdb.org/t/p/original/ipG3BMO8Ckv9xVeEY27lzq975Qm.jpg"
            },
            {
              "name": "Thandiwe Newton",
              "image": "https://image.tmdb.org/t/p/original/5BCyGUiUsXD6XzJgPPolqgWFFtj.jpg"
            },
            {
              "name": "Jonathan Pryce",
              "image": "https://image.tmdb.org/t/p/original/zwSv5uXzPTtmitFe39UdqnVwmdL.jpg"
            },
            {
              "name": "Laurence Fishburne",
              "image": "https://image.tmdb.org/t/p/original/8suOhUmPbfKqDQ17jQ1Gy0mI3P4.jpg"
            },
            {
              "name": "Corey Johnson",
              "image": "https://image.tmdb.org/t/p/original/gFPilsTUQlClMiXooO4Q3DSJ5Nr.jpg"
            }
          ],
          "url": "6s7NziAetNs"
        },
        {
          "categories": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "createAt": "2022-04-07",
          "name": "The Northman",
          "descriptions": "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
          "image": "https://image.tmdb.org/t/p/original/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
          "voteAverage": 7.2,
          "voteQuantity": 1765,
          "actors": [
            {
              "name": "Alexander Skarsgård",
              "image": "https://image.tmdb.org/t/p/original/caOe6hwHEE89AJfGdHatnrGgkKj.jpg"
            },
            {
              "name": "Nicole Kidman",
              "image": "https://image.tmdb.org/t/p/original/jTtiPqW6VlNE9nTf4BuUzuIqzlR.jpg"
            },
            {
              "name": "Claes Bang",
              "image": "https://image.tmdb.org/t/p/original/w6kux5RIVfaGwHTb3yiDbaNHBPh.jpg"
            },
            {
              "name": "Ethan Hawke",
              "image": "https://image.tmdb.org/t/p/original/a7rgJl8TYUWAfJuM4fxbLHgD7BL.jpg"
            },
            {
              "name": "Anya Taylor-Joy",
              "image": "https://image.tmdb.org/t/p/original/8YUcwFAOBK3Yt5jnj9G2U8IffD.jpg"
            }
          ],
          "url": "oMSdFM12hOw"
        },
        {
          "categories": [
            "Adventure",
            "Animation",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "createAt": "2021-08-11",
          "name": "Pil's Adventures",
          "descriptions": "Pil, a little vagabond girl, lives on the streets of the medieval city of Roc-en-Brume, along with her three tame weasels. She survives of food stolen from the castle of the sinister Regent Tristain. One day, to escape his guards, Pil disguises herself as a princess. Thus she embarks upon a mad, delirious adventure, together with Crobar, a big clumsy guard who thinks she's a noble, and Rigolin, a young crackpot jester. Pil is going to have to save Roland, rightful heir to the throne under the curse of a spell. This adventure will turn the entire kingdom upside down, and teach Pil that nobility can be found in all of us.",
          "image": "https://image.tmdb.org/t/p/original/abPQVYyNfVuGoFUfGVhlNecu0QG.jpg",
          "voteAverage": 6.8,
          "voteQuantity": 95,
          "actors": [
            {
              "name": "Pierre Tessier",
              "image": "https://image.tmdb.org/t/p/original/33Q1dBoqtTiRLy8YFM418iPerQJ.jpg"
            },
            {
              "name": "Enrique Carballido",
              "image": "https://image.tmdb.org/t/p/originalnull"
            },
            {
              "name": "Kaycie Chase",
              "image": "https://image.tmdb.org/t/p/original/d3ru7HdVJFFyjxLcwavockxRv6d.jpg"
            },
            {
              "name": "Paul Borne",
              "image": "https://image.tmdb.org/t/p/original/vjhn44K5M5A3eSdqslscrNCtBSY.jpg"
            },
            {
              "name": "Julien Crampon",
              "image": "https://image.tmdb.org/t/p/original/x381pxBMUzxSeyOzjgdlhtr10Th.jpg"
            }
          ],
          "url": "DcCISK3sCYg"
        },
        {
          "categories": [
            "Horror"
          ],
          "createAt": "2022-03-11",
          "name": "The Exorcism of God",
          "descriptions": "An American priest working in Mexico is considered a saint by many local parishioners. However, due to a botched exorcism, he carries a secret that’s eating him alive until he gets an opportunity to face his demon one final time.",
          "image": "https://image.tmdb.org/t/p/original/hangTmbxpSV4gpHG7MgSlCWSSFa.jpg",
          "voteAverage": 7,
          "voteQuantity": 287,
          "actors": [
            {
              "name": "Will Beinbrink",
              "image": "https://image.tmdb.org/t/p/original/6S5JeespvNqBlXkC03znn0Sdfey.jpg"
            },
            {
              "name": "María Gabriela de Faría",
              "image": "https://image.tmdb.org/t/p/original/mMxLRggKxuQrwgtMpK3HMwhEmmH.jpg"
            },
            {
              "name": "Irán Castillo",
              "image": "https://image.tmdb.org/t/p/original/aaCEVHA4ybRYP2wHYgCYwrO7NJG.jpg"
            },
            {
              "name": "Joseph Marcell",
              "image": "https://image.tmdb.org/t/p/original/mbjY5qqeT9aV7weLzvbN1ikPq0M.jpg"
            },
            {
              "name": "Hector Kotsifakis",
              "image": "https://image.tmdb.org/t/p/original/yMlCG0Yqigqo1dg8SCBrwUrjW8H.jpg"
            }
          ],
          "url": "VdLI8I4jZD0"
        },
        {
          "categories": [
            "Animation",
            "Comedy",
            "Family",
            "Music"
          ],
          "createAt": "2021-12-01",
          "name": "Sing 2",
          "descriptions": "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
          "image": "https://image.tmdb.org/t/p/original/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
          "voteAverage": 8.1,
          "voteQuantity": 2911,
          "actors": [
            {
              "name": "Matthew McConaughey",
              "image": "https://image.tmdb.org/t/p/original/2mcg07areWJ4EAtDvafRz7eDVvb.jpg"
            },
            {
              "name": "Reese Witherspoon",
              "image": "https://image.tmdb.org/t/p/original/mfjunuTHrd0wnh8UG1ImMN9FSws.jpg"
            },
            {
              "name": "Scarlett Johansson",
              "image": "https://image.tmdb.org/t/p/original/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg"
            },
            {
              "name": "Taron Egerton",
              "image": "https://image.tmdb.org/t/p/original/hHEgQFENXD43ZFwLNWsRpPWPzrs.jpg"
            },
            {
              "name": "Bobby Cannavale",
              "image": "https://image.tmdb.org/t/p/original/gYQwTbEj5IBPYKLGKgrsNGrWAMl.jpg"
            }
          ],
          "url": "DcCISK3sCYg"
        },
        {
          "categories": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "createAt": "2022-01-12",
          "name": "Scream",
          "descriptions": "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
          "image": "https://image.tmdb.org/t/p/original/1m3W6cpgwuIyjtg5nSnPx7yFkXW.jpg",
          "voteAverage": 6.8,
          "voteQuantity": 1450,
          "actors": [
            {
              "name": "Neve Campbell",
              "image": "https://image.tmdb.org/t/p/original/9fDbXBbrM6L10YrzDJUJowDt8U.jpg"
            },
            {
              "name": "Courteney Cox",
              "image": "https://image.tmdb.org/t/p/original/3bTVQH9vBXAiwGVHXKLylStz4RT.jpg"
            },
            {
              "name": "David Arquette",
              "image": "https://image.tmdb.org/t/p/original/1C5sLNLNVZ3P8sMy7HUQ32IKdqX.jpg"
            },
            {
              "name": "Melissa Barrera",
              "image": "https://image.tmdb.org/t/p/original/r8JccIat3I7jilzLqUyb3oNPVP8.jpg"
            },
            {
              "name": "Jenna Ortega",
              "image": "https://image.tmdb.org/t/p/original/nK4GwlX3iEQsp4ZBkKSqbpzmYcB.jpg"
            }
          ],
          "url": "beToTslH17s"
        },
        {
          "categories": [
            "Thriller",
            "Action"
          ],
          "createAt": "2022-01-13",
          "name": "Gold",
          "descriptions": "In the not-too-distant future, two drifters traveling through the desert stumble across the biggest gold nugget ever found and the dream of immense wealth and greed takes hold. They hatch a plan to excavate their bounty, with one man leaving to secure the necessary tools while the other remains with the gold. The man who remains must endure harsh desert elements, ravenous wild dogs, and mysterious intruders, while battling the sinking suspicion that he has been abandoned to his fate.",
          "image": "https://image.tmdb.org/t/p/original/ejXBuNLvK4kZ7YcqeKqUWnCxdJq.jpg",
          "voteAverage": 6.4,
          "voteQuantity": 312,
          "actors": [
            {
              "name": "Zac Efron",
              "image": "https://image.tmdb.org/t/p/original/6oXNHv7gAyXXYFpF943pKRsTtqQ.jpg"
            },
            {
              "name": "Anthony Hayes",
              "image": "https://image.tmdb.org/t/p/original/fh4fTkRr6aNHeZpyjyXglNb3UVw.jpg"
            },
            {
              "name": "Susie Porter",
              "image": "https://image.tmdb.org/t/p/original/ynlvVxiKsmzJ5L7Rj6Kcntnczzh.jpg"
            },
            {
              "name": "Andreas Sobik",
              "image": "https://image.tmdb.org/t/p/originalnull"
            },
            {
              "name": "Akuol Ngot",
              "image": "https://image.tmdb.org/t/p/originalnull"
            }
          ],
          "url": "1HqBaI-FV7Y"
        },
        {
          "categories": [
            "Action",
            "Adventure",
            "Family",
            "Comedy"
          ],
          "createAt": "2022-03-30",
          "name": "Sonic the Hedgehog 2",
          "descriptions": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
          "image": "https://image.tmdb.org/t/p/original/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
          "voteAverage": 7.7,
          "voteQuantity": 2393,
          "actors": [
            {
              "name": "James Marsden",
              "image": "https://image.tmdb.org/t/p/original/mk142GG0saiSXALY6V4wWcmPROW.jpg"
            },
            {
              "name": "Ben Schwartz",
              "image": "https://image.tmdb.org/t/p/original/5vV52TSEIhe4ZZLWwv3i7nfv8we.jpg"
            },
            {
              "name": "Tika Sumpter",
              "image": "https://image.tmdb.org/t/p/original/6Hb9e7jna7nml58cztAvbKgFAPx.jpg"
            },
            {
              "name": "Natasha Rothwell",
              "image": "https://image.tmdb.org/t/p/original/x5KdL3QoS4YuozVpfuPsu3MLwwf.jpg"
            },
            {
              "name": "Adam Pally",
              "image": "https://image.tmdb.org/t/p/original/yY13PEaVbPoXT5MkitVxTfdAZnU.jpg"
            }
          ],
          "url": "G5kzUpWAusI"
        },
        {
          "categories": [
            "Animation",
            "Comedy",
            "Family",
            "Crime"
          ],
          "createAt": "2022-03-17",
          "name": "The Bad Guys",
          "descriptions": "When the infamous Bad Guys are finally caught after years of countless heists and being the world’s most-wanted villains, Mr. Wolf brokers a deal to save them all from prison.",
          "image": "https://image.tmdb.org/t/p/original/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg",
          "voteAverage": 7.8,
          "voteQuantity": 749,
          "actors": [
            {
              "name": "Sam Rockwell",
              "image": "https://image.tmdb.org/t/p/original/vYpWxV0bnUgKo7SdasfGP9HttUq.jpg"
            },
            {
              "name": "Marc Maron",
              "image": "https://image.tmdb.org/t/p/original/2ENNRs7lgbyLfrUN622zRqkYJWL.jpg"
            },
            {
              "name": "Awkwafina",
              "image": "https://image.tmdb.org/t/p/original/l5AKkg3H1QhMuXmTTmq1EyjyiRb.jpg"
            },
            {
              "name": "Craig Robinson",
              "image": "https://image.tmdb.org/t/p/original/nWZI2ghokrha2lYnr5Z48agItL7.jpg"
            },
            {
              "name": "Anthony Ramos",
              "image": "https://image.tmdb.org/t/p/original/ityTHqIXFT3laID4j4ptlnc84zq.jpg"
            }
          ],
          "url": "DcCISK3sCYg"
        },
        {
          "categories": [
            "Crime",
            "Mystery",
            "Thriller"
          ],
          "createAt": "2022-03-01",
          "name": "The Batman",
          "descriptions": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
          "image": "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
          "voteAverage": 7.8,
          "voteQuantity": 5435,
          "actors": [
            {
              "name": "Robert Pattinson",
              "image": "https://image.tmdb.org/t/p/original/6RVxNlNmc0DIfZzaJKCJM43If3M.jpg"
            },
            {
              "name": "Zoë Kravitz",
              "image": "https://image.tmdb.org/t/p/original/4uOfGQSKCz2I7HVV5vPwhvTD61y.jpg"
            },
            {
              "name": "Paul Dano",
              "image": "https://image.tmdb.org/t/p/original/tHsaqfauzG4MuFs5oCbq0pRy5EF.jpg"
            },
            {
              "name": "Jeffrey Wright",
              "image": "https://image.tmdb.org/t/p/original/43EGVkmHzZFZQQHW20AL6GivrBD.jpg"
            },
            {
              "name": "John Turturro",
              "image": "https://image.tmdb.org/t/p/original/6O9W9cJW0kCqMzYeLupV9oH0ftn.jpg"
            }
          ],
          "url": "DcCISK3sCYg"
        },
        {
          "categories": [
            "Fantasy",
            "Action",
            "Adventure"
          ],
          "createAt": "2022-05-04",
          "name": "Doctor Strange in the Multiverse of Madness",
          "descriptions": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
          "image": "https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          "voteAverage": 7.5,
          "voteQuantity": 4040,
          "actors": [
            {
              "name": "Benedict Cumberbatch",
              "image": "https://image.tmdb.org/t/p/original/fBEucxECxGLKVHBznO0qHtCGiMO.jpg"
            },
            {
              "name": "Elizabeth Olsen",
              "image": "https://image.tmdb.org/t/p/original/wIU675y4dofIDVuhaNWPizJNtep.jpg"
            },
            {
              "name": "Chiwetel Ejiofor",
              "image": "https://image.tmdb.org/t/p/original/kq5DDnqqofoRI0t6ddtRlsJnNPT.jpg"
            },
            {
              "name": "Benedict Wong",
              "image": "https://image.tmdb.org/t/p/original/ukmfsl59Isvn9odgzMWBidA3cmt.jpg"
            },
            {
              "name": "Xochitl Gomez",
              "image": "https://image.tmdb.org/t/p/original/y3aFdIpfT7GqVoVa523PqF9cJgO.jpg"
            }
          ],
          "url": "aWzlQ2N6qqg"
        },
        {
          "categories": [
            "Action",
            "Thriller"
          ],
          "createAt": "2022-03-10",
          "name": "The Contractor",
          "descriptions": "After being involuntarily discharged from the U.S. Special Forces, James Harper decides to support his family by joining a private contracting organization alongside his best friend and under the command of a fellow veteran. Overseas on a covert mission, Harper must evade those trying to kill him while making his way back home.",
          "image": "https://image.tmdb.org/t/p/original/rJPGPZ5soaG27MK90oKpioSiJE2.jpg",
          "voteAverage": 6.5,
          "voteQuantity": 375,
          "actors": [
            {
              "name": "Chris Pine",
              "image": "https://image.tmdb.org/t/p/original/ipG3BMO8Ckv9xVeEY27lzq975Qm.jpg"
            },
            {
              "name": "Ben Foster",
              "image": "https://image.tmdb.org/t/p/original/4le1PMWTGp7y2IBmZEIOHfE3HAB.jpg"
            },
            {
              "name": "Gillian Jacobs",
              "image": "https://image.tmdb.org/t/p/original/sdhAxrVgmoVpglDsKn2B2yZmdj5.jpg"
            },
            {
              "name": "Eddie Marsan",
              "image": "https://image.tmdb.org/t/p/original/9atfOgIxhfOKvv2be8HEp6SzOct.jpg"
            },
            {
              "name": "Kiefer Sutherland",
              "image": "https://image.tmdb.org/t/p/original/g4HLUHuQ742roPxugGzxeVoKnel.jpg"
            }
          ],
          "url": "e7glvM8Xh0w"
        },
        {
          "categories": [
            "Action",
            "Thriller",
            "Crime"
          ],
          "createAt": "2022-03-16",
          "name": "Ambulance",
          "descriptions": "Decorated veteran Will Sharp, desperate for money to cover his wife's medical bills, asks for help from his adoptive brother Danny. A charismatic career criminal, Danny instead offers him a score: the biggest bank heist in Los Angeles history: $32 million.",
          "image": "https://image.tmdb.org/t/p/original/zT5ynZ0UR6HFfWQSRf2uKtqCyWD.jpg",
          "voteAverage": 6.9,
          "voteQuantity": 893,
          "actors": [
            {
              "name": "Jake Gyllenhaal",
              "image": "https://image.tmdb.org/t/p/original/oA6fp6SQBQQWZEzn4NfY3E8mJhV.jpg"
            },
            {
              "name": "Yahya Abdul-Mateen II",
              "image": "https://image.tmdb.org/t/p/original/aBDebGZs2pAucyaK4EhHVJGm0Xu.jpg"
            },
            {
              "name": "Eiza González",
              "image": "https://image.tmdb.org/t/p/original/w2pZ8gLqZNguj8cqrDGbMw2Ibj0.jpg"
            },
            {
              "name": "Garret Dillahunt",
              "image": "https://image.tmdb.org/t/p/original/9ISUezmwt2Hnm2do6Mg75EyAwgE.jpg"
            },
            {
              "name": "Keir O'Donnell",
              "image": "https://image.tmdb.org/t/p/original/4PnupUSZLvtT5DOfAuqHrGgdEuV.jpg"
            }
          ],
          "url": "7NU-STboFeI"
        },
        {
          "categories": [
            "Horror"
          ],
          "createAt": "2022-04-21",
          "name": "Virus:32",
          "descriptions": "A virus is unleashed and a chilling massacre runs through the streets of Montevideo.",
          "image": "https://image.tmdb.org/t/p/original/wZiF79hbhLK1U2Pj9bF67NAKXQR.jpg",
          "voteAverage": 7.3,
          "voteQuantity": 94,
          "actors": [
            {
              "name": "Daniel Hendler",
              "image": "https://image.tmdb.org/t/p/original/8Q36TGfbnm4CjuKVWz1XGmTiZtk.jpg"
            },
            {
              "name": "Paula Silva",
              "image": "https://image.tmdb.org/t/p/originalnull"
            },
            {
              "name": "Franco Rilla",
              "image": "https://image.tmdb.org/t/p/originalnull"
            },
            {
              "name": "Sofía González",
              "image": "https://image.tmdb.org/t/p/originalnull"
            }
          ],
          "url": "qqGQzBGZ0FY"
        },
        {
          "categories": [
            "Crime",
            "Action"
          ],
          "createAt": "2022-04-29",
          "name": "Fortress: Sniper's Eye",
          "descriptions": "Weeks after the deadly assault on Fortress Camp, Robert makes a daring rescue to save Sasha, the widow of his old nemesis Balzary. But back in the camp's command bunker, it appears Sasha may have devious plans of her own. As a new attack breaks out, Robert is confronted with a familiar face he thought he'd never see again…",
          "image": "https://image.tmdb.org/t/p/original/61J34xHVVdQHbJ4MSCWQo4e727v.jpg",
          "voteAverage": 6.1,
          "voteQuantity": 85,
          "actors": [
            {
              "name": "Chad Michael Murray",
              "image": "https://image.tmdb.org/t/p/original/uX04loV7QcU17hbKzs8XPKQ45qY.jpg"
            },
            {
              "name": "Bruce Willis",
              "image": "https://image.tmdb.org/t/p/original/caX3KtMU42EP3VLRFFBwqIIrch5.jpg"
            },
            {
              "name": "Jesse Metcalfe",
              "image": "https://image.tmdb.org/t/p/original/atp5FK0tBemYNYQfSPnI2egR7rX.jpg"
            },
            {
              "name": "Kelly Greyson",
              "image": "https://image.tmdb.org/t/p/original/dbygGZLqAqhPLQKVa24TACboAj9.jpg"
            },
            {
              "name": "Ser'Darius Blain",
              "image": "https://image.tmdb.org/t/p/original/4INvD4RYdjGCznboNgdyfWA6dpG.jpg"
            }
          ],
          "url": "uF4f_nlJpvY"
        },
        {
          "categories": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "createAt": "2022-02-25",
          "name": "The Outfit",
          "descriptions": "Leonard is an English tailor who used to craft suits on London’s world-famous Savile Row. After a personal tragedy, he’s ended up in Chicago, operating a small tailor shop in a rough part of town where he makes beautiful clothes for the only people around who can afford them: a family of vicious gangsters.",
          "image": "https://image.tmdb.org/t/p/original/lZa5EB6PVJBT5mxhgZS5ftqdAm6.jpg",
          "voteAverage": 7.1,
          "voteQuantity": 308,
          "actors": [
            {
              "name": "Mark Rylance",
              "image": "https://image.tmdb.org/t/p/original/bztEZRyXrvW3Pg1fexNASXlZrq7.jpg"
            },
            {
              "name": "Johnny Flynn",
              "image": "https://image.tmdb.org/t/p/original/mDD9Dh101map9KzJejtVk5QxuWu.jpg"
            },
            {
              "name": "Zoey Deutch",
              "image": "https://image.tmdb.org/t/p/original/jaBmJv7SqtDraYpRK6puKsxxwjS.jpg"
            },
            {
              "name": "Dylan O'Brien",
              "image": "https://image.tmdb.org/t/p/original/34b2hShMWBjFhxGPfcqqtsKXtkK.jpg"
            },
            {
              "name": "Simon Russell Beale",
              "image": "https://image.tmdb.org/t/p/original/kY9lQfGb8HNhq5BM30td4G5FwFr.jpg"
            }
          ],
          "url": "3UgJL23HxyU"
        },
        {
          "categories": [
            "Action",
            "Adventure",
            "Comedy"
          ],
          "createAt": "2022-03-24",
          "name": "The Lost City",
          "descriptions": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
          "image": "https://image.tmdb.org/t/p/original/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
          "voteAverage": 6.8,
          "voteQuantity": 1427,
          "actors": [
            {
              "name": "Sandra Bullock",
              "image": "https://image.tmdb.org/t/p/original/u2tnZ0L2dwrzFKevVANYT5Pb1nE.jpg"
            },
            {
              "name": "Channing Tatum",
              "image": "https://image.tmdb.org/t/p/original/bhTmp6FA8fOQnGlNk75tdmj2bpu.jpg"
            },
            {
              "name": "Daniel Radcliffe",
              "image": "https://image.tmdb.org/t/p/original/f9WKorjfanW4PxTxhjRvHtCmfKf.jpg"
            },
            {
              "name": "Brad Pitt",
              "image": "https://image.tmdb.org/t/p/original/cckcYc2v0yh1tc9QjRelptcOBko.jpg"
            },
            {
              "name": "Da'Vine Joy Randolph",
              "image": "https://image.tmdb.org/t/p/original/awNT6lltD8zItbGtolmO8IGT8ot.jpg"
            }
          ],
          "url": "5f9VcZqxFO4"
        },
        {
          "categories": [
            "Action",
            "Science Fiction",
            "Fantasy"
          ],
          "createAt": "2022-03-30",
          "name": "Morbius",
          "descriptions": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
          "image": "https://image.tmdb.org/t/p/original/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
          "voteAverage": 6.4,
          "voteQuantity": 1964,
          "actors": [
            {
              "name": "Jared Leto",
              "image": "https://image.tmdb.org/t/p/original/ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg"
            },
            {
              "name": "Matt Smith",
              "image": "https://image.tmdb.org/t/p/original/xr2GSp8Pm6fT5VGm0I9tsWVcZ8q.jpg"
            },
            {
              "name": "Adria Arjona",
              "image": "https://image.tmdb.org/t/p/original/2xAwAxrjZrgfyrNYToBIjg1ZeRB.jpg"
            },
            {
              "name": "Jared Harris",
              "image": "https://image.tmdb.org/t/p/original/mGODbYpkR1NKBOV3rtTfZ7EWoIl.jpg"
            },
            {
              "name": "Al Madrigal",
              "image": "https://image.tmdb.org/t/p/original/p4vN80EGGlzLb5J7G8Ss3n9K2pc.jpg"
            }
          ],
          "url": "oZ6iiRrz1SY"
        },
        {
          "categories": [
            "Fantasy",
            "Adventure",
            "Action"
          ],
          "createAt": "2022-04-06",
          "name": "Fantastic Beasts: The Secrets of Dumbledore",
          "descriptions": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
          "image": "https://image.tmdb.org/t/p/original/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
          "voteAverage": 6.8,
          "voteQuantity": 2157,
          "actors": [
            {
              "name": "Eddie Redmayne",
              "image": "https://image.tmdb.org/t/p/original/fSvG7qzoBBnJUmgtIuMgrK3EQPN.jpg"
            },
            {
              "name": "Jude Law",
              "image": "https://image.tmdb.org/t/p/original/A6Y0m7qEe04ZTHKyYDLbnyCHNzn.jpg"
            },
            {
              "name": "Mads Mikkelsen",
              "image": "https://image.tmdb.org/t/p/original/ntwPvV4GKGGHO3I7LcHMwhXfsw9.jpg"
            },
            {
              "name": "Ezra Miller",
              "image": "https://image.tmdb.org/t/p/original/6wmTpbYpmhthaxzM5ss3377F9IV.jpg"
            },
            {
              "name": "Dan Fogler",
              "image": "https://image.tmdb.org/t/p/original/zJWbLEjfbDthBMucq9M6L4GJXL3.jpg"
            }
          ],
          "url": "Y9dr2zw-TXQ"
        },
        {
          "categories": [
            "Horror"
          ],
          "createAt": "2022-01-28",
          "name": "The Grandmother",
          "descriptions": "A Paris model must return to Madrid where her grandmother, who raised her, has had a stroke. But spending just a few days with this relative turns into an unexpected nightmare.",
          "image": "https://image.tmdb.org/t/p/original/eIUixNvox4U4foL5Z9KbN9HXYSM.jpg",
          "voteAverage": 5.9,
          "voteQuantity": 197,
          "actors": [
            {
              "name": "Almudena Amor",
              "image": "https://image.tmdb.org/t/p/original/mmwdXj20aW4I0f413j1F0TeSGPC.jpg"
            },
            {
              "name": "Vera Valdez",
              "image": "https://image.tmdb.org/t/p/original/shJTF8plSrjHCA1HE1Be0VJVWYs.jpg"
            },
            {
              "name": "Karina Kolokolchykova",
              "image": "https://image.tmdb.org/t/p/original/5hXuSKMXW5AU50UqDcWOTbS8HhF.jpg"
            },
            {
              "name": "Marina Gutiérrez",
              "image": "https://image.tmdb.org/t/p/originalnull"
            },
            {
              "name": "Gabriela Calonfirescu",
              "image": "https://image.tmdb.org/t/p/original/dTu4rpJjWZWtUD4ZiqbWY6LlaGa.jpg"
            }
          ],
          "url": "DcCISK3sCYg"
        },
        {
          "categories": [
            "Thriller",
            "Action"
          ],
          "createAt": "2022-04-08",
          "name": "All the Old Knives",
          "descriptions": "When the CIA discovers one of its agents leaked information that cost more than 100 people their lives, veteran operative Henry Pelham is assigned to root out the mole with his former lover and colleague Celia Harrison.",
          "image": "https://image.tmdb.org/t/p/original/g4tMniKxol1TBJrHlAtiDjjlx4Q.jpg",
          "voteAverage": 6,
          "voteQuantity": 299,
          "actors": [
            {
              "name": "Chris Pine",
              "image": "https://image.tmdb.org/t/p/original/ipG3BMO8Ckv9xVeEY27lzq975Qm.jpg"
            },
            {
              "name": "Thandiwe Newton",
              "image": "https://image.tmdb.org/t/p/original/5BCyGUiUsXD6XzJgPPolqgWFFtj.jpg"
            },
            {
              "name": "Jonathan Pryce",
              "image": "https://image.tmdb.org/t/p/original/zwSv5uXzPTtmitFe39UdqnVwmdL.jpg"
            },
            {
              "name": "Laurence Fishburne",
              "image": "https://image.tmdb.org/t/p/original/8suOhUmPbfKqDQ17jQ1Gy0mI3P4.jpg"
            },
            {
              "name": "Corey Johnson",
              "image": "https://image.tmdb.org/t/p/original/gFPilsTUQlClMiXooO4Q3DSJ5Nr.jpg"
            }
          ],
          "url": "6s7NziAetNs"
        },
        {
          "categories": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "createAt": "2022-04-07",
          "name": "The Northman",
          "descriptions": "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
          "image": "https://image.tmdb.org/t/p/original/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
          "voteAverage": 7.2,
          "voteQuantity": 1765,
          "actors": [
            {
              "name": "Alexander Skarsgård",
              "image": "https://image.tmdb.org/t/p/original/caOe6hwHEE89AJfGdHatnrGgkKj.jpg"
            },
            {
              "name": "Nicole Kidman",
              "image": "https://image.tmdb.org/t/p/original/jTtiPqW6VlNE9nTf4BuUzuIqzlR.jpg"
            },
            {
              "name": "Claes Bang",
              "image": "https://image.tmdb.org/t/p/original/w6kux5RIVfaGwHTb3yiDbaNHBPh.jpg"
            },
            {
              "name": "Ethan Hawke",
              "image": "https://image.tmdb.org/t/p/original/a7rgJl8TYUWAfJuM4fxbLHgD7BL.jpg"
            },
            {
              "name": "Anya Taylor-Joy",
              "image": "https://image.tmdb.org/t/p/original/8YUcwFAOBK3Yt5jnj9G2U8IffD.jpg"
            }
          ],
          "url": "oMSdFM12hOw"
        },
        {
          "categories": [
            "Adventure",
            "Animation",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "createAt": "2021-08-11",
          "name": "Pil's Adventures",
          "descriptions": "Pil, a little vagabond girl, lives on the streets of the medieval city of Roc-en-Brume, along with her three tame weasels. She survives of food stolen from the castle of the sinister Regent Tristain. One day, to escape his guards, Pil disguises herself as a princess. Thus she embarks upon a mad, delirious adventure, together with Crobar, a big clumsy guard who thinks she's a noble, and Rigolin, a young crackpot jester. Pil is going to have to save Roland, rightful heir to the throne under the curse of a spell. This adventure will turn the entire kingdom upside down, and teach Pil that nobility can be found in all of us.",
          "image": "https://image.tmdb.org/t/p/original/abPQVYyNfVuGoFUfGVhlNecu0QG.jpg",
          "voteAverage": 6.8,
          "voteQuantity": 95,
          "actors": [
            {
              "name": "Pierre Tessier",
              "image": "https://image.tmdb.org/t/p/original/33Q1dBoqtTiRLy8YFM418iPerQJ.jpg"
            },
            {
              "name": "Enrique Carballido",
              "image": "https://image.tmdb.org/t/p/originalnull"
            },
            {
              "name": "Kaycie Chase",
              "image": "https://image.tmdb.org/t/p/original/d3ru7HdVJFFyjxLcwavockxRv6d.jpg"
            },
            {
              "name": "Paul Borne",
              "image": "https://image.tmdb.org/t/p/original/vjhn44K5M5A3eSdqslscrNCtBSY.jpg"
            },
            {
              "name": "Julien Crampon",
              "image": "https://image.tmdb.org/t/p/original/x381pxBMUzxSeyOzjgdlhtr10Th.jpg"
            }
          ],
          "url": "DcCISK3sCYg"
        },
        {
          "categories": [
            "Horror"
          ],
          "createAt": "2022-03-11",
          "name": "The Exorcism of God",
          "descriptions": "An American priest working in Mexico is considered a saint by many local parishioners. However, due to a botched exorcism, he carries a secret that’s eating him alive until he gets an opportunity to face his demon one final time.",
          "image": "https://image.tmdb.org/t/p/original/hangTmbxpSV4gpHG7MgSlCWSSFa.jpg",
          "voteAverage": 7,
          "voteQuantity": 287,
          "actors": [
            {
              "name": "Will Beinbrink",
              "image": "https://image.tmdb.org/t/p/original/6S5JeespvNqBlXkC03znn0Sdfey.jpg"
            },
            {
              "name": "María Gabriela de Faría",
              "image": "https://image.tmdb.org/t/p/original/mMxLRggKxuQrwgtMpK3HMwhEmmH.jpg"
            },
            {
              "name": "Irán Castillo",
              "image": "https://image.tmdb.org/t/p/original/aaCEVHA4ybRYP2wHYgCYwrO7NJG.jpg"
            },
            {
              "name": "Joseph Marcell",
              "image": "https://image.tmdb.org/t/p/original/mbjY5qqeT9aV7weLzvbN1ikPq0M.jpg"
            },
            {
              "name": "Hector Kotsifakis",
              "image": "https://image.tmdb.org/t/p/original/yMlCG0Yqigqo1dg8SCBrwUrjW8H.jpg"
            }
          ],
          "url": "VdLI8I4jZD0"
        },
        {
          "categories": [
            "Animation",
            "Comedy",
            "Family",
            "Music"
          ],
          "createAt": "2021-12-01",
          "name": "Sing 2",
          "descriptions": "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
          "image": "https://image.tmdb.org/t/p/original/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
          "voteAverage": 8.1,
          "voteQuantity": 2911,
          "actors": [
            {
              "name": "Matthew McConaughey",
              "image": "https://image.tmdb.org/t/p/original/2mcg07areWJ4EAtDvafRz7eDVvb.jpg"
            },
            {
              "name": "Reese Witherspoon",
              "image": "https://image.tmdb.org/t/p/original/mfjunuTHrd0wnh8UG1ImMN9FSws.jpg"
            },
            {
              "name": "Scarlett Johansson",
              "image": "https://image.tmdb.org/t/p/original/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg"
            },
            {
              "name": "Taron Egerton",
              "image": "https://image.tmdb.org/t/p/original/hHEgQFENXD43ZFwLNWsRpPWPzrs.jpg"
            },
            {
              "name": "Bobby Cannavale",
              "image": "https://image.tmdb.org/t/p/original/gYQwTbEj5IBPYKLGKgrsNGrWAMl.jpg"
            }
          ],
          "url": "DcCISK3sCYg"
        },
        {
          "categories": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "createAt": "2022-01-12",
          "name": "Scream",
          "descriptions": "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
          "image": "https://image.tmdb.org/t/p/original/1m3W6cpgwuIyjtg5nSnPx7yFkXW.jpg",
          "voteAverage": 6.8,
          "voteQuantity": 1450,
          "actors": [
            {
              "name": "Neve Campbell",
              "image": "https://image.tmdb.org/t/p/original/9fDbXBbrM6L10YrzDJUJowDt8U.jpg"
            },
            {
              "name": "Courteney Cox",
              "image": "https://image.tmdb.org/t/p/original/3bTVQH9vBXAiwGVHXKLylStz4RT.jpg"
            },
            {
              "name": "David Arquette",
              "image": "https://image.tmdb.org/t/p/original/1C5sLNLNVZ3P8sMy7HUQ32IKdqX.jpg"
            },
            {
              "name": "Melissa Barrera",
              "image": "https://image.tmdb.org/t/p/original/r8JccIat3I7jilzLqUyb3oNPVP8.jpg"
            },
            {
              "name": "Jenna Ortega",
              "image": "https://image.tmdb.org/t/p/original/nK4GwlX3iEQsp4ZBkKSqbpzmYcB.jpg"
            }
          ],
          "url": "beToTslH17s"
        },
        {
          "categories": [
            "Thriller",
            "Action"
          ],
          "createAt": "2022-01-13",
          "name": "Gold",
          "descriptions": "In the not-too-distant future, two drifters traveling through the desert stumble across the biggest gold nugget ever found and the dream of immense wealth and greed takes hold. They hatch a plan to excavate their bounty, with one man leaving to secure the necessary tools while the other remains with the gold. The man who remains must endure harsh desert elements, ravenous wild dogs, and mysterious intruders, while battling the sinking suspicion that he has been abandoned to his fate.",
          "image": "https://image.tmdb.org/t/p/original/ejXBuNLvK4kZ7YcqeKqUWnCxdJq.jpg",
          "voteAverage": 6.4,
          "voteQuantity": 312,
          "actors": [
            {
              "name": "Zac Efron",
              "image": "https://image.tmdb.org/t/p/original/6oXNHv7gAyXXYFpF943pKRsTtqQ.jpg"
            },
            {
              "name": "Anthony Hayes",
              "image": "https://image.tmdb.org/t/p/original/fh4fTkRr6aNHeZpyjyXglNb3UVw.jpg"
            },
            {
              "name": "Susie Porter",
              "image": "https://image.tmdb.org/t/p/original/ynlvVxiKsmzJ5L7Rj6Kcntnczzh.jpg"
            },
            {
              "name": "Andreas Sobik",
              "image": "https://image.tmdb.org/t/p/originalnull"
            },
            {
              "name": "Akuol Ngot",
              "image": "https://image.tmdb.org/t/p/originalnull"
            }
          ],
          "url": "1HqBaI-FV7Y"
        }
      ]
      for (let i of data){
        axios.post('http://localhost:3001/movie', i)
      }
    }
    getData();
  }, []);

  return (
    <Box className={classes.root}>
      {loadingListMovie
       ? (
        // loading ? (
        //   <>
        //     <Box className={classes.body}>
        //       {data.slice(0, limit).map((item) => (
        //         <Item key={item.pk} item={item} />
        //       ))}
        //     </Box>
        //     {/* <Button
        //       className={classes.moreBtn}
        //       sx={{ display: limit >= data.length ? 'none' : '' }}
        //       variant="contained"
        //       onClick={handleMoreBtn}
        //     >
        //       Xem thêm
        //     </Button> */}
        //   </>
        // ) : (
          <Box style={{ textAlign: 'center' }}>
            <CircularProgress color="success" style={{ margin: '20px auto' }} />
          </Box>
        // )
      ) : (
        <>
          <Box className={classes.body}>
            {dataListMovie.map((item) => (
              <Item key={item.key} item={item} />
            ))}
          </Box>
          {/* <Button
            className={classes.moreBtn}
            sx={{ display: limit >= listItem.length ? 'none' : '' }}
            variant="contained"
            onClick={handleMoreBtn}
          >
            Xem thêm
          </Button> */}
        </>
      )}
    </Box>
  );
}
