import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { modalStyle, modalTheme, styleButton } from './style';
import CloseIcon from '@mui/icons-material/Close';
import TextFields from '../../../components/TextField';
import { defaultMember, roleDatas } from '../../../../constants';

const MemberModal = ({ isShow = false, onClose, data }) => {
  const [open, setOpen] = useState(isShow);
  const [status, setStatus] = useState(0);
  const [formState, setFormState] = useState(defaultMember);

  const handleChangeRole = (event) => {
    setFormState({
      ...formState,
      role: event.target.value,
    });
  };

  const handleChangeGender = (event) => {
    setFormState({
      ...formState,
      gender: event.target.value,
    });
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  useEffect(() => {
    setOpen(isShow);
  }, [isShow]);

  useEffect(() => {
    setFormState({ ...data });
  }, [data]);


  const handleChangeUserEmail = (event) => {
    setFormState({
      ...formState,
      email: event.target.value,
    });
  };

  const handleChangeFullName = (event) => {
    setFormState({
      ...formState,
      fullname: event.target.value,
    });
  };

  const handleChangeGroupName = (event) => {
    setFormState({
      ...formState,
      groupName: event.target.value,
    });
  };

  const handleChangeBirthYear = (event) => {
    setFormState({
      ...formState,
      DOB: event.target.value,
    });
  };

  const handleChangePhoneNumber = (event) => {
    setFormState({
      ...formState,
      phoneNumber: event.target.value,
    });
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <Modal
        open={open}
      >
        <Box sx={modalStyle}>
          <div className='flex justify-between'>
            <div />
            <Typography align='center' variant="h5" component="h2">
              Member Information
            </Typography>
            <CloseIcon onClick={() => onClose()} />
          </div>
          <div className='mt-10 grid grid-cols-2'>
            <div>
              <TextFields name='User Email' required={true} ml='26px' value={formState.email} onChange={handleChangeUserEmail} type='email' />
              <TextFields name='Full Name' required={true} ml='32px' value={formState.fullname} onChange={handleChangeFullName} />
              <div className='flex items-center text-lg  font-serif'>
                <p className='m-2'>Role <span className='text-red-600 ml-1'>*</span></p>
                <Box
                  sx={{
                    "& .MuiInputBase-root": { m: 1, width: '250px' },
                    marginLeft: '80px'
                  }}
                >
                  <FormControl fullWidth>
                    <Select
                      value={formState.role}
                      onChange={handleChangeRole}
                      size='small'
                    >
                      {roleDatas.map((item, index) => (
                        <MenuItem value={item.role} key={index}>{item.role}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <TextFields name='Comunity Group' required={false} value={formState.groupName} onChange={handleChangeGroupName} />
            </div>
            <div>
              <TextFields name='Birth Year' required={true} ml='22px' value={formState.DOB} onChange={handleChangeBirthYear} />
              <div className='flex items-center text-lg  font-serif'>
                <p className='m-2'>Gender <span className='text-red-600 ml-1'>*</span></p>
                <Box
                  sx={{
                    "& .MuiInputBase-root": { m: 1, width: '250px' },
                    marginLeft: '44px'
                  }}
                >
                  <FormControl fullWidth>
                    <Select
                      value={formState.gender}
                      onChange={handleChangeGender}
                      size='small'
                    >
                      <MenuItem value='Male'>Male</MenuItem>
                      <MenuItem value='Female'>Female</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <TextFields name='Phone Number' required={false} value={formState.phoneNumber} onChange={handleChangePhoneNumber} />
              <div className='flex items-center text-lg  font-serif'>
                <p className='m-2'>Profile Status<span className='text-red-600 ml-1'>*</span></p>
                <Box
                  sx={{
                    "& .MuiInputBase-root": { m: 1, width: '250px' },
                    marginLeft: '1px'
                  }}
                >
                  <FormControl fullWidth>
                    <Select
                      value={status}
                      onChange={handleChangeStatus}
                      size='small'
                      sx={status === 0 ? { backgroundColor: '#08a848', color: 'white' } : { backgroundColor: 'gray', color: 'white' }}
                    >
                      <MenuItem value={0}>Active</MenuItem>
                      <MenuItem value={1}>Deactive</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
          </div>
          <div className='flex justify-evenly mt-10'>
            <ThemeProvider theme={modalTheme}>
              <Button variant="outlined" color='cancel' sx={styleButton} onClick={() => onClose()} >Cancel</Button>
              <Button submit variant="contained" color='save' sx={styleButton} onClick={stopPropagation} >Save</Button>
            </ThemeProvider>
          </div>
        </Box>
      </Modal>
    </div >
  )
}

export default MemberModal;