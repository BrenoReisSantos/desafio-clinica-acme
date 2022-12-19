import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const AcmeClinicAppBar = ({ children }: { children: JSX.Element }) => {
    return (
        <>
            <AppBar position="static" >
                <Container maxWidth="xl" >
                    <Toolbar disableGutters >
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }
                            }
                        >
                            ACME CLINIC
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container maxWidth="xl" style={{ marginTop: 25 }}>
                {children}
            </Container>
        </>
    );
};

export default AcmeClinicAppBar;
