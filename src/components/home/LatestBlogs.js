import { useTheme } from '@emotion/react';
import { Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import BlogCardVertical from './BlogCardVertical'
import { globalStyles } from '../../globalStyle';

function LatestBlogs() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container mt={6} rowSpacing={5} columnSpacing={ !isMobile ? 3 : 0} sx={{...globalStyles.latestBlogsContainer}}>
        <Grid item md={12} xs={12} textAlign="center" mb={5}>
            <Typography sx={{...globalStyles.mainHeading}}>
                Leatest Blog
            </Typography>
        </Grid>
        <BlogCardVertical />
        <BlogCardVertical />
        <BlogCardVertical />
    </Grid>
  )
}

export default LatestBlogs