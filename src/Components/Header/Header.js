import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';

import Badge from '@mui/material/Badge';

import { NavLink, useNavigate } from 'react-router-dom';

import './Header.css';
import { useSelector } from 'react-redux';

const pages = ['Products', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [isPWAappDownloaded, setIsPWAappDownloaded] = React.useState(true);

  const [deferredPrompt, setDeferredPrompt] = React.useState(null);

  const shoppingCart = useSelector((state) => state.ShoppingCart);

  let navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener('beforeinstallprompt', (event) => {
      console.log('beforeinstallprompt fired');
      event.preventDefault();
      setDeferredPrompt(event);
      setIsPWAappDownloaded(false);
    });
  }, []);

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

  const installApp = (e) => {
    if (deferredPrompt) {
      console.log('deferredPrompt', deferredPrompt);

      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        console.log(choiceResult.outcome);

        if (choiceResult.outcome === 'dismissed') {
          console.log('User cancelled installation');
        } else {
          console.log('User added to home screen');
          setIsPWAappDownloaded(true);
        }
      });

      setDeferredPrompt(null);
    }
  };

  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: '#0F1111',
        zIndex: 1000,
        position: 'sticky',
        top: '0',
        width: '100%',
      }}
    >
      <Toolbar
        disableGutters
        sx={{ display: 'flex', justifyContent: 'space-between', m: '0px 20px' }}
      >
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          <NavLink to='/' className='brandName' id='brandName'>
            MY STORE
          </NavLink>
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
            color='inherit'
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuItem
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <NavLink
                to={`/`}
                className={({ isActive }) =>
                  isActive ? 'navActive' : 'navItem'
                }
              >
                Home
              </NavLink>
            </MenuItem>
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <NavLink
                  to={`/${page}`}
                  className={({ isActive }) =>
                    isActive ? 'navActive' : 'navItem'
                  }
                >
                  {page}
                </NavLink>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
        >
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'navActive brandName' : 'navItem brandName'
            }
          >
            My Store
          </NavLink>
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <NavLink
                to={`/${page}`}
                className={({ isActive }) =>
                  isActive ? 'navActive' : 'navItem'
                }
              >
                {page}
              </NavLink>
            </Button>
          ))}
        </Box>
        <Button
          sx={{ color: 'white', position: 'relative', top: '5px' }}
          variant='text'
          onClick={() => {
            navigate('/Cart');
          }}
        >
          <Badge badgeContent={shoppingCart.length} color='secondary'>
            <AddShoppingCartIcon sx={{ color: 'white' }} />
          </Badge>
        </Button>
        {!isPWAappDownloaded && (
          <Button
            sx={{ color: 'white', position: 'relative', top: '5px' }}
            variant='text'
            onClick={(event) => {
              installApp(event);
            }}
          >
            <DownloadSharpIcon sx={{ color: 'white', fontSize: '25px' }} />
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
