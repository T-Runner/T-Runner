import React from 'react'
import ActionIcon from '../../../components/Icons/action-icon';
import DefaultImage from '../../../components/Icons/default-image';
import { StyledTableCell, StyledTableRow } from './style';

const GroupTR = ({ item }) => {
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        <DefaultImage />
      </StyledTableCell>
      <StyledTableCell align="left">{item.groupName}</StyledTableCell>
      <StyledTableCell align="left">{item.desc}</StyledTableCell>
      <StyledTableCell align="left">{item.location}</StyledTableCell>
      <StyledTableCell align="left">{item.sport}</StyledTableCell>
      <StyledTableCell align="left">{item.groupType}</StyledTableCell>
      <StyledTableCell align="left">{item.createdDate}</StyledTableCell>
      <StyledTableCell align="left">{item.totalRunners}</StyledTableCell>
      <StyledTableCell align="left">{item.active}</StyledTableCell>
      <StyledTableCell align="left">
        <ActionIcon />
      </StyledTableCell>
    </StyledTableRow>
  )
}

export default GroupTR;