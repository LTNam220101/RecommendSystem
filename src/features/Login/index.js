/**
 *
 * Login
 *
 */
 import { Box, TextField, InputAdornment, Button, Link } from '@mui/material';
 import PasswordIcon from '@mui/icons-material/Password';
 import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
 import { makeStyles } from '@mui/styles';
 import { styled } from '@mui/material/styles';
 import * as React from 'react';
 import { Logo } from './logo';
 import background from './dashboard.png';
import logo from "./logoN.png";
 import { useForm } from 'react-hook-form';
 import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './sliceLogin';
 
 const CssTextField = styled(TextField)({
   '& label.Mui-focused': {
     color: '#fff',
   },
   '& label': {
     color: '#fff',
   },
   '& .MuiInput-underline:after': {
     borderBottomColor: '#fff',
     borderWidth: 2,
   },
   '& .MuiOutlinedInput-root': {
     '& fieldset': {
       borderColor: '#fff',
       borderWidth: 2,
     },
     '&:hover fieldset': {
       borderColor: '#fff',
       borderWidth: 2,
     },
     '&.Mui-focused fieldset': {
       borderColor: '#fff',
       borderWidth: 2,
     },
   },
 });
 
 const useStyles = makeStyles({
   root: {
     height: '100vh',
     width: '100%',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#3D81BB',
     backgroundImage: `url(${background})`,
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
     textColor: '#fff',
   },
   div: {
     width: '300px',
     height: '400px',
     textAlign: 'center',
   },
   logoName: {
    color: "#DB202C",
    fontFamily: "'Bebas Neue', cursive",
    fontSize: "36px",
    marginLeft: "10px",
  },
   form: { display: 'flex', flexDirection: 'column', marginTop: '60px' },
   text: {
     margin: '20px 0px 40px 0px !important',
   },
   button: {
     color: '#DB202C',
     backgroundColor: '#fff',
     padding: '15px 0px',
     margin: '10px 0px',
     border: 'none',
     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
     borderRadius: '4px',
     fontWeight: '600',
     transition: 'all 0.2s ease-in-out',
     '&:hover': {
       cursor: 'pointer',
       backgroundColor: '#F1F1F1',
     },
   },
 });
 
 export default function Login(props) {
  const dispatch = useDispatch();
   let navigate = useNavigate();
  const { dataLogin, loadingLogin } = useSelector((state) => state.login);
   const classes = useStyles();
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
    dispatch(actions.getLoginRequest(data));
   }

   React.useEffect(()=>{
    if(dataLogin) {
      navigate('/');
    }
   }, [dataLogin])
 
   return (
     <>
       <Box className={classes.root}>
         {/* <Background /> */}
         <Box className={classes.div}>
          <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", justifyContent: "center"}}>
            <Box component="img" src={logo} />
            <Box className={classes.logoName} onClick={()=>navigate('/')}>XILFTEN</Box>
          </Box>
           <Box className={classes.form}>
             <CssTextField
               {...register('email', { required: true })}
               helperText={errors.email ? 'Please enter your email' : ' '}
               error={errors.email ? true : false}
               required
               autoComplete="off"
               label="EMAIL"
               variant="outlined"
               InputProps={{
                 startAdornment: (
                   <InputAdornment position="start">
                     <AlternateEmailIcon />
                   </InputAdornment>
                 ),
               }}
             />
             <CssTextField
               {...register('password', { required: true })}
               helperText={errors.password ? 'Please enter your password' : ' '}
               error={errors.password ? true : false}
               required
               type='password'
               autoComplete="off"
               label="PASSWORD"
               variant="outlined"
               InputProps={{
                 startAdornment: (
                   <InputAdornment position="start">
                     <PasswordIcon />
                   </InputAdornment>
                 ),
               }}
             />
             <button
               className={classes.button}
               onClick={handleSubmit(onSubmit)}
             >
               LOGIN
             </button>
             <Box sx={{color: '#fff'}}>or
              <Link href={`http://localhost:3000/register`} sx={{color: '#DB202C'}} >
                {` `}Register
              </Link>
             </Box>
           </Box>
         </Box>
       </Box>
       {/*  {t(...messages.someThing())}  */}
     </>
   );
 }