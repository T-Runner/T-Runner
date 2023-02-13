
import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusPopup, setDataPopup } from '../../../slices/popupSlice';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const styleItem = {
    display: 'flex',
    justifyContent: 'flex-end',
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius: "10px",
    zindex: "100",
    outline: "none"
};

const AddChallenge = () => {
    const popup = useSelector((state) => state.popup);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [value, setValue] = useState({
        calories: '',
        splatPoints: '',
        avg: '',
        max: '',
        miles: '',
        steps: '',
    });

    useEffect(() => {
        return () => {
            setValue({
                calories: '',
                splatPoints: '',
                avg: '',
                max: '',
                miles: '',
                steps: '',
            })
        }
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValue((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleAddChallenge = (event) => {
        event.preventDefault();
        handleCloseChallenge();
        dispatch(setDataPopup(null));
        navigate("/workout");
    }

    const handleCloseChallenge = () => {
        dispatch(setStatusPopup({
            isOpenAddChallenge: false
        }));
        dispatch(setDataPopup(null));
    }

    return (
        <>
            <Modal
                open={popup.isOpenAddChallenge}
                onClose={handleCloseChallenge}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ width: '100%', padding: "10px" }}
            >
                <Box sx={style}>
                    <Box sx={{ width: '100%', padding: "10px" }}>
                        <form onSubmit={handleAddChallenge}>
                            <Grid container spacing={2} >
                                <Grid item xs={12} className='flex justify-between'>
                                    <Typography sx={{ fontWeight: "bold", fontSize: 25 }} id="modal-modal-title" variant="h6" component="h2">
                                        Add your metric
                                    </Typography>
                                    <CloseIcon onClick={() => handleCloseChallenge()} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField autoFocus={true} type='number' required placeholder='Please input number' onChange={(e) => handleChange(e)} value={value.calories} fullWidth label='Calories' variant='outlined' name='calories' />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField type='number' required placeholder='Please input number' onChange={(e) => handleChange(e)} value={value.splatPoints} fullWidth label='Splat Points' variant='outlined' name='splatPoints' />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField type='number' required placeholder='Please input number' onChange={(e) => handleChange(e)} value={value.avg} fullWidth label='AVG.HR' variant='outlined' name='avg' />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField type='number' required placeholder='Please input number' onChange={(e) => handleChange(e)} value={value.max} fullWidth label='MAX HR' variant='outlined' name='max' />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField type='number' required placeholder='Please input number' onChange={(e) => handleChange(e)} value={value.miles} fullWidth label='Miles' variant='outlined' name='miles' />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField type='number' required placeholder='Please input number' onChange={(e) => handleChange(e)} value={value.steps} fullWidth label='Steps' variant='outlined' name='steps' />
                                </Grid>
                                <Grid sx={styleItem} item xs={12}>
                                    <Button type='submit' variant='outlined'> Submit</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default AddChallenge