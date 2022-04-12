import { makeStyles } from '@mui/styles';
// import Login from 'features/Authentication/pages/Login';
// import Register from 'features/Authentication/pages/Register';
// import BuySuccess from 'features/BuySuccess';
// import HomePage from 'features/HomePage';
// import Pay from 'features/PayMent';
// import Personal from 'features/Personal';
import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './features/HomePage';

const useStyles = makeStyles({
  root: {},
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        {/* <Route path="/pay" element={} />
        <Route path="/login" element={} />
        <Route path="/register" element={} />
        <Route path="/personal" element={} />
        <Route path="/success" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
