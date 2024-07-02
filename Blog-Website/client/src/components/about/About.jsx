
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import img8410 from './IMG_8410.jpg';



const Banner = styled(Box)`
    background-image: url(${img8410});
    width: 100%;
    height: 50vh;
    background-position: center 40%; 
    background-size: cover;
    background-repeat: no-repeat;
`;


const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Vaishnavi Singh</Typography>
                <Text variant="h5">I'm a final year student. 
                    I've built websites and I am eager to learn more.<br />
                    If you are interested, you can view some of my  projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Decode777" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/_.vaishnavi._singh/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:vaishnavis979@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;