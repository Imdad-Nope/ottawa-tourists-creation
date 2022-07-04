import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const drawerWidth = 200;

function Header(props) {

    const { user, logOut } = useAuth();

    const [value, setValue] = React.useState();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <Link to='/home'>
                Home
            </Link>
            <Divider />
            <Link to='/activites'>
                Activity
            </Link>
            <Divider />
            <Link to='/Gift'>
                Gift
            </Link>
            <Divider />

        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{ bgcolor: '#f8f9fa' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon sx={{ color: 'ActiveCaption' }} />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ pl: '10%', color: '#333', display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>

                    <Tabs value={value} onChange={(e, value) => setValue(value)} indicatorColor='secondary' sx={{ ml: 'auto', display: { xs: 'none', sm: 'block', m: 'auto' } }} className='nav-items'>
                        <Tab label='Home' component={Link} to='/home' className='item' />
                        {
                            user?.email &&
                            <Tab label='Tourists Activities' component={Link} to='/activity' className='item' />
                        }
                        {
                            user?.email &&
                            <Tab label='Your Orders' component={Link} to='/orders' className='item' />
                        }
                    </Tabs>

                    <Grid sx={{ ml: 'auto' }}>
                        <Tabs className='signBtn'>
                            {
                                user?.email ? <Button onClick={logOut} sx={{ ml: 'auto' }} className='signOut'>Sign Out</Button>
                                    :
                                    <Link to='/login' className='link'>
                                        <Button variant='outlined' className='btn'>Sign In</Button>
                                    </Link>
                            }
                        </Tabs>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

        </Box >
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;