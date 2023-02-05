import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import { StyledTableCell } from './style';
import MemberModal from './MemberModal';
import MemberTR from './MemberTR';
import { defaultMember, memberdatas } from '../../../../constants';

const MemberTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [memberProfile, setMemberProfile] = useState(defaultMember);

    const handleOpen = (item) => {
        setMemberProfile({
            fullname: item.fullname,
            username: item.username,
            role: item.role,
            groupName: item.groupName,
            email: item.email,
            phoneNumber: item.phoneNumber,
            DOB: item.DOB,
            weight: item.weight,
            gender: item.gender
        });
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div className='mt-5'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Full Name</StyledTableCell>
                            <StyledTableCell align="left">User Name</StyledTableCell>
                            <StyledTableCell align="left">Role</StyledTableCell>
                            <StyledTableCell align="left">Comunity Group</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Phone Number</StyledTableCell>
                            <StyledTableCell align="left">DOB</StyledTableCell>
                            <StyledTableCell align="left">Weight</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {memberdatas.map((item, index) =>
                        (
                            <MemberTR item={item} handleOpen={() => handleOpen(item)} key={index} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {showModal && <MemberModal isShow={showModal} onClose={handleClose} data={memberProfile} />}
        </div>
    )
};

export default MemberTable;