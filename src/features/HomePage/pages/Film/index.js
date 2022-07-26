import { Alert, AlertTitle, Box, Button, Divider, Link, Rating, Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actions } from "./sliceItem";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DownloadIcon from '@mui/icons-material/Download';

const useStyles = makeStyles({
  root: {
    margin: "80px 0 100px 0",
    color: "#ffffff",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  name: {
    fontSize: "2rem",
    fontWeight: "600",
  },
  rating: {
    '& svg': {
      color: "#ffffff",
    }
  }
});

const Film = () => {
  // useEffect(() => {
  //   async function getData() {
  //     const id = [];
  //     const data = await axios.get(
  //       `https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1`
  //     );
  //     await data.data.results.map((item) => {
  //       id.push(item.id);
  //     });
  //     const data2 = await axios.get(
  //       `https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=2`
  //     );
  //     await data2.data.results.map((item) => {
  //       id.push(item.id);
  //     });
  //     const data3 = await axios.get(
  //       `https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=3`
  //     );
  //     await data3.data.results.map((item) => {
  //       id.push(item.id);
  //     });
  //     console.log(id);
  //   }
  //   getData();
  // }, []);
  useEffect(() => {
    async function getData() {
      const array = [
        675353, 629542, 414906, 453395, 628900, 763285, 893370, 883502, 799876,
        752623, 526896, 338953, 661791, 294793, 639933, 676705, 836225, 438695,
        646385, 760926, 675353, 629542, 414906, 453395, 628900, 763285, 893370,
        883502, 799876, 752623, 526896, 338953, 661791, 294793, 639933, 676705,
        836225, 438695, 646385, 760926, 675353, 629542, 414906, 453395, 628900,
        763285, 893370, 883502, 799876, 752623, 526896, 338953, 661791, 294793,
        639933, 676705, 836225, 438695, 646385, 760926,
      ];
      const data = [];
      for (let i of array) {
        const movie = await axios.get(
          `https://api.themoviedb.org/3/movie/${i}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`
        );
        console.log(movie);
        const actor = await axios.get(
          `http://api.themoviedb.org/3/movie/${i}/casts?api_key=e9e9d8da18ae29fc430845952232787c`
        );
        console.log(actor);
        data.push({ ...movie.data, ...actor.data });
        // data[-1].actors =  actor
      }
      console.log(data);
      const data1 = [];
      data.map((item) => {
        const vid = item.videos.results.find(({ name }) => {
          return name === "Official Trailer";
        })
        const url = vid ? vid.key : "DcCISK3sCYg";
        data1.push({
          categories: item.genres.map((gen) => {
            return gen.name;
          }),
          createAt: item.release_date,
          name: item.title,
          descriptions: item.overview,
          image: item.poster_path,
          voteAverage: item.vote_average,
          voteQuantity: item.vote_count,
          actors: item.cast.slice(0, 5).map((actor) => {
            return {
              name: actor.name,
              image: actor.profile_path,
            };
          }),
          // directors: item.crew.filter((pp) => {
          //   return pp.department === "Directing";
          // }),
          url: url,
        });
      });
      console.log(JSON.stringify(data1));
    }
    // getData();
  }, []);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getItemMovieRequest(id));
    dispatch(actions.resetRating());
    if(dataLogin){
      dispatch(actions.getRatingRequest({id, email: dataLogin._id}))
    }
  }, [id]);
  const { dataMovie, loadingMovie, dataRatingCount, loadingRatingCount } = useSelector((state) => state.movie);
  const { dataLogin, loadingLogin } = useSelector((state) => state.login);
  const addRating = (rating) => {
    dispatch(actions.addRatingRequest({id, rating, email: dataLogin._id}));
  }
  const classes = useStyles();

  const [isRating, setIsRating] = useState(false); 

  const removeFromFavorites = () => {
    if(!dataLogin){
      setOpenAlert(true);
      return;
    }
    dispatch(actions.addFavoriteRequest({id, email: dataLogin.email, history: dataLogin.history}));
  }

  const navigate = useNavigate();

  const [openAlert, setOpenAlert] = useState(false)

  const download = () => {
    if(!dataLogin){
      setOpenAlert(true);
      return;
    }
    setOpen(true);
  }

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      {loadingMovie ? (
        <div></div>
      ) : (
        <Box className={classes.root}>
          <Alert
            severity="info"
            sx={{position: 'fixed', top: '30px', zIndex: '10', display: openAlert ? 'block' : 'none'}}
            action={
              <Box>
                <Button color="inherit" size="small" onClick={() => {navigate(`/login`, { replace: true })}}>
                  Đăng nhập
                </Button>
                <Button color="inherit" size="small" onClick={() => {navigate(`/register`, { replace: true })}}>
                  Đăng ký
                </Button>
                <Button color="inherit" size="small" onClick={() => {setOpenAlert(false)}}>
                  Huỷ
                </Button>
              </Box>
            }
          >
            <AlertTitle>Info</AlertTitle>
            Bạn cần đăng nhập để sử dụng tính năng này
          </Alert>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${dataMovie.url}`}
            width="100%"
            height="600px"
            playing={true}
            controls={true}
          />
          {/* <Box component="img" src={img} className={classes.video}></Box> */}
          <Box className={classes.title}>
            <Box className={classes.name}>
              {dataMovie.name}    
            </Box>
              <Box >
              {dataLogin && dataLogin.history.includes(dataMovie._id) ?
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', cursor: "pointer"}} onClick={removeFromFavorites}>
                  <FavoriteIcon />
                    Xoá khỏi danh sách yêu thích
                </Box>
                :
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', cursor: "pointer"}} onClick={removeFromFavorites}>
                  <FavoriteBorderIcon />
                  Thêm vào danh sách yêu thích    
                </Box>
              }
              </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "5px 0 5px 0",
            }}
          >
            <Box>
              <Box>Đánh giá: {dataMovie.ratingAverage}/5</Box>
              <Box>Lượt đánh giá: {dataMovie.ratingQuantity}</Box>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px'}}>
              <Box sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
              }}>Đánh giá của bạn: 
                <Rating 
                  defaultValue={dataRatingCount || 0} 
                  size="small" 
                  className={classes.rating}
                  readOnly={dataRatingCount || isRating}
                  onChange={(event, newValue) => {
                            if(dataLogin){
                              addRating(newValue)
                              setIsRating(true)
                            }else{
                              setOpenAlert(true)
                            }
                          }
                }/>
              </Box>
              <Box sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  cursor: 'pointer',
              }}
              onClick={download}>
                <DownloadIcon />
                Tải phim
              </Box>
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Download Successfully
                </Alert>
              </Snackbar>
            </Box>
          </Box>
          <Box sx={{ marginBottom: "5px", fontSize: "1.2rem" }}>Thông tin</Box>
          <Divider
            light={true}
            sx={{ borderColor: "rgba(142, 142, 142, 0.65)" }}
          />
          <Box sx={{ marginBottom: "5px", display: "flex" }}>
            Diễn viên:&nbsp;
            {dataMovie &&
              dataMovie.actors &&
              dataMovie.actors.map((actor, index) => {
                return (
                  <Link key={index} href={`/search=${actor}`}>
                    {actor},&nbsp;
                  </Link>
                );
              })}
          </Box>
          <Box sx={{ marginBottom: "5px", display: "flex" }}>
            Thể loại:&nbsp;
            {dataMovie &&
              dataMovie.categories &&
              dataMovie.categories.map((cate, index) => {
                return (
                  <Link key={index} href={`/search=${cate}`}>
                    {cate},&nbsp;
                  </Link>
                );
              })}
          </Box>
          <Box sx={{ marginBottom: "5px" }}>
            Miêu tả: {dataMovie.descriptions}
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Film;
