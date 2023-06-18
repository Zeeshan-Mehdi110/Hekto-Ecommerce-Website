import React from 'react';
import { Typography, Button } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div sx={{ textAlign: 'center', marginTop: 8 }}>
            <Typography variant="h4" component="h1" sx={{ marginBottom: 4 }}>
                404 - Page Not Found
            </Typography>
            <Typography variant="body1" component="p">
                The page you are looking for does not exist.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
                onClick={handleGoBack}
            >
                Go Back
            </Button>
        </div>
    );
};

export default NotFound;
