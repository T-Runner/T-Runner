import React from 'react'
import { StyledTableCell, StyledTableRow } from './style';

const MemberTR = ({ item, handleOpen }) => {
    return (
        <StyledTableRow>
            <StyledTableCell component="th" scope="row">
                <div onClick={handleOpen} className='cursor-pointer hover:text-ct4-orange-start hover:underline'>
                    {item.fullname}
                </div>
            </StyledTableCell>
            <StyledTableCell align="left">{item.username}</StyledTableCell>
            <StyledTableCell align="left">{item.role}</StyledTableCell>
            <StyledTableCell align="left">{item.groupName}</StyledTableCell>
            <StyledTableCell align="left">{item.email}</StyledTableCell>
            <StyledTableCell align="left">{item.phoneNumber}</StyledTableCell>
            <StyledTableCell align="left">{item.DOB}</StyledTableCell>
            <StyledTableCell align="left">{item.weight}</StyledTableCell>
        </StyledTableRow>
    )
};

export default MemberTR;