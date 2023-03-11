import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from "../../assets/images/logo.svg"
import { height } from '@mui/system';
import "../CSS/LandingPage.css"
import Cards from './Cards';
import AnimatedCaraousel from './AnimatedCaraousel';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import "./styles.css";
// import { EffectCards } from "swiper";
// // Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/modules/Pagination/Pagination.min.css";


const pages = ['Home', 'Wedding', 'Ocassions', 'Ideas', 'Business', "food", "interior", "new-born"];
const settings = ['User', 'Photographer', 'Admin'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#FFFFFF', height: "10vh", width: "100%" }}>
        {/* <Container lg={12} sx={{width:"100vw", m:0, p:0}}> */}
        <Toolbar disableGutters lg={12} sx={{ m: 0, p: 0 }}>

          <div className='logo-container' style={{ height: '100px' }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img style={{ height: '100px', width: '9rem', marginLeft: "10rem" }} src={logo} />
            </Typography>
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, mr: "10" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              color='primary'
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color='primary'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 10,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          {/* <Box justifyContent="flex-end" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'red', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box> */}

          <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Button sx={{ color: '#171717', text: "Brandon Text", fontWeight: "600" }}>Login/SignUp</Button>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        {/* </Container> */}
      </AppBar>
      <div>
        <section id="about">
          <div className="container">
            <div className="about_wrapper">
              <div className="left_side">
                <h1 className="about_heading">
                  SnapHub -<br></br>
                </h1>
                <p className="about_info">
                  Discover and Purchase Stunning Photography on SnapHub - The Ultimate Destination for Photographers and Buyers!
                </p>
              </div>
              <div className="button">
                <a className="fancy" href="/FindCollege.html">
                  <span className="top-key"></span>
                  <span className="text">Get Started</span>
                  <span className="bottom-key-1"></span>
                  <span className="bottom-key-2"></span>
                </a>
              </div>
            </div>
            <div className="right_side" data-aos="zoom-in" data-aos-delay="300">
              {/* <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper> */}
              <AnimatedCaraousel/>
              
            </div>
          </div>
        
        </section>
      </div>
      <section id="offers">
        <div>
          <div className="heading_food">
            <span>What SnapHub Offers</span>
            <h3>SnapHub is an online platform for photographers to showcase and sell their photos to a global audience. Discover captivating images across various genres and elevate your creative projects with unique, high-quality photographs.</h3>
            <div className="border"></div>
          </div>


          <div className="cols">
            <div className="col">
              <div className="container">
                <div className="front1" >
                  <div className="inner">
                    <h2>Photographers</h2>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt, maxime accusamus iste quasi ullam!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="container">
                <div className="front2">
                  <div className="inner">
                    <h2>Stock Photos</h2>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, aliquid voluptate molestias quisquam inventore a aspernatur odio laboriosam aperiam repudiandae.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="container">
                <div className="front3">
                  <div className="inner">
                    <h2>Premium Photos</h2>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eligendi culpa accusantium. Officiis tempora dolorum non fugiat impedit, ratione qui!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='begin'>
        <div className="container_begin">
          <div className="begin_wrapper" data-aos="fade-right" data-aos-delay="200">
            <div className="right_side">
              <h1 className="begin_heading">
                Ready to find stunning photography for your creative projects? SnapHub is the perfect online platform for discovering captivating images from talented photographers worldwide. Browse and purchase unique, high-quality photos across various genres with ease.<br />
                <span>LETS BEGIN!</span>
              </h1>
            </div>
            <div className="button_end">
              <a className="fancy" href="/FindCollege.html">
                <span className="top-key"></span>
                <span className="text">Get Started</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </a>
            </div>
          </div>
          <div className="left_side_begin" data-aos="zoom-in" data-aos-delay="300">
            <div className="begin_image">
              <img className="abt_img1" src="" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}

      <footer className="footer">
        <div className="copyright1" />

        <div className="container_footer">
          <div className="row_foot">
            <div className="footer_item">
              <h2>Quick Links</h2>
              <ul className="nav-list_footer" id="navi-List_footer">
                <li className="list-items_foot">
                  <a className="active" href="#home">HOME</a>
                </li>
                <li className="list-items_foot">
                  <a className="active" href="#about">ABOUT</a>
                </li>
                <li className="list-items_foot">
                  <a className="active" href="#menu">MENU</a>
                </li>
                <li className="list-items_foot">
                  <a className="active" href="#testimonials">TESTIMONIALS</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="copyright">
              &copy; 2023 - SNAPHUB
            </div>
          </div>
        </div>
      </footer>
    </>

  );
}
export default ResponsiveAppBar;