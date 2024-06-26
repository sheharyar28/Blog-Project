import {Grid,Link,Box, Typography} from '@mui/material'
import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../Images/logo.JPG'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const Navigation = () => {
  return (
    <nav className='navClass'>
        <Grid sx={{alignItems:'center',justifyContent:'center'}} container spacing={3}>
          <Grid item sx={{display:{xs:'none',lg:'block'}}} md={2}>
            <Link href='https://www.facebook.com/'>
              <FacebookIcon color='primary'/>
            </Link>
            <Link href='https://www.twitter.com/'>
              <TwitterIcon color='primary'/>
            </Link>
            <Link href='https://www.instagram.com/'>
              <InstagramIcon sx={{color:'#f53867'}}/>
            </Link>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{display:'flex',justifyContent:'center', width:'100%', alignItems:'center'}}>
              <Box sx={{display:{xs:'none',md:'block'}}}>
                <NavLink to='/'><img className='logo' src={logo} height='50px' width='300px' alt='Logo Here'/>
                </NavLink>
              </Box>
              <Typography variant='h5' sx={{display:{xs:'block',md:'none'},fontWeight:900}}><NavLink style={{borderRadius:'50%',padding:5}} to="/">AB</NavLink></Typography>
              <NavLink className="NavItems" to='categories'> CATEGORIES </NavLink>
              <NavLink className="NavItems" to='addPost'> ADD POST </NavLink> 
              <NavLink className="NavItems" to='ContactUs'>CONTACT</NavLink>
            </Box>
          </Grid>
          <Grid item sx={{display:{xs:'none',lg:'block'}}} md={3}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Dummy Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
        
          </Grid>
        </Grid>
    </nav>
  )
}

export default Navigation
