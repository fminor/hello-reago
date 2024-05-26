import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/common/CommonButton/CommonButton';

const Authentication = () => {
    const buttonStyles = {
        fontSize: '0.875rem',
        fontWeight: 600,
        textTransform: 'capitalize',
        borderRadius: 2.5,
        '&.MuiButton-contained': {
            backgroundColor: 'primary',
            '&:hover': {
                backgroundColor: 'primary'
            },
        },
        '&.MuiButton-outlined': {
            color: "red",
            borderColor: 'red',
            '&:hover': {
                backgroundColor: 'red'
            },
        },
    };

    return (
        <Grid item xs={8}>
            This is authentication page.
            <CommonButton
                sx={buttonStyles}
                variant="contained"
            >
                Add user
            </CommonButton>
            <CommonButton
                sx={buttonStyles}
                variant="outlined"
            >
                Remove user
            </CommonButton>
        </Grid>
    )
}

export default Authentication
