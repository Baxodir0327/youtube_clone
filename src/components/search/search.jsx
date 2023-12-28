import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ApiService} from "../service/api.service";
import {Box, Container, Typography} from "@mui/material";
import {colors} from "../../constants/colors";
import {Videos} from "../index";

const Search = () => {
    const {id} = useParams();
    const [videos, setVideos] = useState([])
    console.log(id);


    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
                console.log(data)
                setVideos(data.items)
            } catch (err) {
                console.log(err)
            }
        }

        getData()
    }, [id]);

    return (
        <Box p={2} sx={{height: '90vh'}}>
            <Container maxWidth={'90%'}>
                <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
                    Search result for <span style={{color: colors.secondary}}>{id}</span> videos
                </Typography>
                <Videos videos={videos}/>
            </Container>
        </Box>
    );
};

export default Search;