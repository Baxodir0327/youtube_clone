import {Box, Container, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {colors} from "../../constants/colors";
import {Category, Videos} from "../index";
import {ApiService} from "../service/api.service";

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])
    const selectedCategoryHandler = category => setSelectedCategory(category)

    useEffect(() => {
        ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
            .then(data => {
                setVideos(data.items)
                console.log(data.items)
            }).catch(err => {
            console.log(err)
        })
    }, [selectedCategory]);
    return (
        <Stack>
            <Category
                selectedCategoryHandler={selectedCategoryHandler}
                selectedCategory={selectedCategory}
            />
            <Box p={2} sx={{height: '90vh'}}>
                <Container maxWidth={{
                    xs: '100%',
                    sm: '100%',
                    md: '90%',
                    lg: '90%',
                }}>
                    <Typography variant={'h4'} fontWeight={'bold'} pb={2}>
                        {selectedCategory} <span style={{color: colors.secondary}}>videos</span>
                    </Typography>
                    <Videos videos={videos}/>

                </Container>
            </Box>
        </Stack>
    );
};

export default Main;