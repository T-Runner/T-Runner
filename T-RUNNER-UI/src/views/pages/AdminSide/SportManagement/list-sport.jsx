import {
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import React, { useState } from "react";
  import { sportData } from "../../../../constants";
  import FilterIcon from "../../../components/Icons/filter-icon";
  import Paginations from "../../../components/Pagination";
  import TotalResult from "../../../components/Pagination/total-result";
  import SearchFields from "../../../components/SearchFields";
  import SportTR from "./sportTR";
  import { StyledTableCell } from "./style";
  
  const ListSport = ({ actionOpen, actionClose }) => {
    return (
      <div>
        <div className="flex justify-between mt-4 font-barlow text-sm">
          <SearchFields placeholder="Search by sport name..." />
          <div className="cursor-pointer">
            <FilterIcon />
          </div>
        </div>
        <div className="mt-4">
          <TableContainer sx={{ maxHeight: 640 }} component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead sx={{ textTransform: "uppercase" }}>
                <TableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell align="left">Sport Name</StyledTableCell>
                  <StyledTableCell align="left">Sport Type</StyledTableCell>
                  <StyledTableCell align="left">Last Modified By</StyledTableCell>
                  <StyledTableCell align="left">
                    Last Modified Date
                  </StyledTableCell>
                  <StyledTableCell align="left">Active</StyledTableCell>
                  <StyledTableCell align="left">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sportData.length > 0 &&
                  sportData.map((item, index) => (
                    <SportTR
                      actionOpen={actionOpen}
                      actionClose={actionClose}
                      item={item}
                      key={index}
                    />
                  ))}
              </TableBody>
            </Table>
            {sportData.length == 0 && (
              <div className="w-full h-14 flex justify-center items-center">
                There is no data to display.
              </div>
            )}
          </TableContainer>
        </div>
        <div className="flex items-center justify-end m-4">
          <TotalResult total={500} limit={50} />
          <Paginations count={10} />
        </div>
      </div>
    );
  };
  
  export default ListSport;