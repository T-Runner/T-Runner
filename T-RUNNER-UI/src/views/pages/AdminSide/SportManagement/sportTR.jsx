import React from "react";
import ActionIcon from "../../../components/Icons/action-icon";
import DefaultImage from "../../../components/Icons/default-image";
import { StyledTableCell, StyledTableRow } from "./style";

const SportTR = ({ item }) => {
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        <DefaultImage />
      </StyledTableCell>
      <StyledTableCell align="left">{item.sportName}</StyledTableCell>
      <StyledTableCell align="left">{item.sportType}</StyledTableCell>
      <StyledTableCell align="left">{item.lastModifiedBy}</StyledTableCell>
      <StyledTableCell align="left">{item.lastModifiedDate}</StyledTableCell>
      <StyledTableCell align="left">{item.active}</StyledTableCell>
      <StyledTableCell align="left">
        <ActionIcon />
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default SportTR;