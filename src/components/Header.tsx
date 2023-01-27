import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Nav } from './Nav';

export const Header: FC = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <Typography variant="h6" sx={{ my: 2 }} color="grey.700">
      Swapi APP
    </Typography>
    <Nav />
  </Box>
);
