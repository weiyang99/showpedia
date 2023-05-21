import React, { useEffect, useState } from 'react'
import { Typography, Box, Stack, IconButton, CardMedia, Card } from '@mui/material'
import { Link, useParams } from 'react-router-dom';
import { REACT_APP_API_KEY } from '../config';
import { fetchFromAPI } from './fetchFromAPI';
import { Movie, KeyboardDoubleArrowUp } from '@mui/icons-material';
import SearchBar from './SearchBar';
import Footer from './Footer';
import Menu from './Menu';
import Movies from './Movies';

const CastDetails = () => {
    const { id } = useParams()
    const [castDetails, setCastDetails] = useState([])
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetchFromAPI(`person/${id}/movie_credits?api_key=${REACT_APP_API_KEY}&language=en-US`)
            .then((data) => setMovies(data.cast))

        fetchFromAPI(`person/${id}?api_key=${REACT_APP_API_KEY}&language=en-US`)
            .then((data) => setCastDetails(data))

        window.scrollTo(0, 0)
    }, [id]);


    return (
        <>
            <Menu />
            <Box
                pt={2}
                sx={{ flex: 2, background: '#191919' }}
            >
                <Stack className='fix' direction='row' alignItems='center' justifyContent='center' pt={2.5} mt='-1em' bgcolor='#191919'>
                    <Link to='/'>
                        <IconButton type='submit' sx={{ p: '10px', color: 'darkOrange' }}>
                            <Movie fontSize='large' />
                        </IconButton>
                    </Link>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Typography color='gold' variant='h4' fontWeight='bold' mr={3}>Moviepedia</Typography>
                    </Link>
                    <SearchBar />
                </Stack>

                <Box mt={5} sx={{ padding: '10% 15% 0 15%' }}>
                    <Stack direction='row' alignItems='center' justifyContent='center' gap={5}>
                        <Card sx={{ width: 300, height: 400 }}>
                            <CardMedia image={`https://image.tmdb.org/t/p/w500${castDetails.profile_path}`} sx={{ height: '100%' }}>
                            </CardMedia>
                        </Card >
                        <Stack direction='column' width='50%'>
                            <Typography variant='h4' fontWeight='bold' color='white'>{castDetails.name}</Typography>

                            <Typography variant='p' color='lightgrey' fontSize='0.8rem' mt={2}><span style={{ color: 'white', fontSize: '0.85rem', fontWeight: '700' }}>Birthday:</span> {castDetails.birthday}</Typography>

                            <Typography variant='p' color='lightgrey' fontSize='0.8rem' mt={2}><span style={{ color: 'white', fontSize: '0.85rem', fontWeight: '700' }}>Place of birth:</span> {castDetails.place_of_birth}</Typography>

                            <Typography variant='p' color='white' fontSize='0.85rem' fontWeight='700' mt={2}>Biography:</Typography>

                            <Typography variant='p' color='lightgrey' lineHeight='1.05rem' fontSize='0.8rem' mt={1}>{castDetails.biography}</Typography>

                        </Stack>
                    </Stack >
                </Box >

                <Box padding='0 8%'>
                    <Typography
                        variant='h4'
                        fontWeight='bold'
                        mb={5}
                        mt={15}
                        pl={2}
                        sx={{ color: 'white', borderLeft: '7px solid gold' }}
                    >
                        Acted in
                    </Typography>
                    <Movies movies={movies} />
                </Box>

                <IconButton type='button' onClick={() => window.scrollTo(0, 0)}>
                    <KeyboardDoubleArrowUp fontSize='large' sx={{ position: 'fixed', bottom: '5%', right: '5%', backgroundColor: 'gold', borderRadius: '50%', color: 'black', p: '0.2em' }} />
                </IconButton>

                <Footer />
            </Box >
        </>
    )
}

export default CastDetails