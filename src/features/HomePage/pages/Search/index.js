import { Box, CircularProgress } from '@mui/material';
// import ListItem from 'features/HomePage/components/ListItem';
import ListItem from '../../components/ListItem';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchBtn from '../../components/SearchBtn';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../components/ListItem/slice';

export default function Search() {
  const dispatch = useDispatch();
  const { search } = useParams();
  useEffect(() => {
    dispatch(actions.getListMovieRequest({search: search.slice(7)}));
  }, [search]);

  const { dataListMovie, loadingListMovie } = useSelector((state) => state.listMovie);
  console.log(dataListMovie)

  return (
    <div>
      {search.length > 7 && (
        <Box sx={{ mt: "80px" }}>
          <Box sx={{ mt: 4, mb: 6, textAlign: 'center', color: "#fff" }}>
            <Box>Hiển thị kết quả tìm kiếm cho {search.slice(7)}</Box>
            <Box>Có {dataListMovie.length} kết quả.</Box>
          </Box>
          {!loadingListMovie ? (
            <>
              <ListItem listItem={dataListMovie} />
            </>
          ) : (
            <Box style={{ textAlign: 'center' }}>
              <CircularProgress
                color="success"
                style={{ margin: '20px auto' }}
              />
            </Box>
          )}
        </Box>
      )}
    </div>
  );
}
