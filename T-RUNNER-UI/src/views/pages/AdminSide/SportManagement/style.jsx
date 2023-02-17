import { Box, FormControl, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f6f6f6",
    color: "#333333",
    fontFamily: "Barlow",
    fontWeight: 600,
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "#ffffff",
    color: "#333333",
    fontFamily: "Barlow",
    fontWeight: 400,
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#ffffff",
  },
}));

export const StyledSelect = styled(Select)(() => ({
  width: "600px",
  height: "40px",
  fontSize: "14px",
  fontFamily: "Barlow",
}));

export const StyledFormControl = styled(FormControl)(() => ({
  "& .MuiInputBase-root": {
    color: "#dfdfdf",
    borderColor: "#dfdfdf",
    borderWidth: "1px",
    borderStyle: "solid",
    color: "#a3a3a3",
  },
  "& .MuiSelect-select.MuiSelect-select": {
    paddingRight: "0px",
  },
}));

export const StyledMenuItem = styled(MenuItem)(() => ({
  fontSize: "14px",
  fontFamily: "Barlow",
  color: "#000000",
}));

export const StyledTextField = styled(TextField)(() => ({
  "& input::placeholder": {
    fontSize: "14px",
    fontFamily: "Barlow",
  },
  "& input": {
    fontSize: "14px",
    fontFamily: "Barlow",
  },
}));