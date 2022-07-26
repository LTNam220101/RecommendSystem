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

export default function ListItem({ listItem, loadingListMovie }) {
  const classes = useStyles();
  const [limit, setLimit] = useState(6);
  console.log(listItem)

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
            {listItem.map((item) => (
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
