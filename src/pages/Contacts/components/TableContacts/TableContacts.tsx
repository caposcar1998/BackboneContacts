import { useContext, useEffect, useState } from 'react';
import { UrlContext } from '../../../../App';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from "react-router-dom";

import axios from 'axios';


function TableContacts() {

  const contactsUrl = useContext(UrlContext);
 
  
  const [contacts, setContacts] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0)
  const navigate = useNavigate();

  useEffect (() => {
    retrieveContacts(1)
    }, []);

  function retrieveContacts(page: number){
    axios.get(`${contactsUrl}?page=${page}`)
      .then(response => {
          console.log(response)
          setContacts(response["data"]["results"])
      })
      .catch(e => {
          console.log(e)
      })
  }


  const handleChangePage = (event: unknown, newPage: number) => {
    console.log("cambio"+ page)
    retrieveContacts(page+1)
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (

    <Paper>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Nombre</TableCell>
          <TableCell>Apellido</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Numero</TableCell>
          <TableCell>Eliminar</TableCell>
          <TableCell>Editar</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {contacts.map((row) => (
          <TableRow key={row["_id"]}>
            <TableCell>{row["firstName"]}</TableCell>
            <TableCell>{row["lastName"]}</TableCell>
            <TableCell>{row["email"]}</TableCell>
            <TableCell>{row["phone"]}</TableCell>
            <TableCell>
              <IconButton aria-label="delete" onClick={() => navigate(`/delete/${row["_id"]}`)}>
                <DeleteIcon 
                  color='error'
                />
              </IconButton>
            </TableCell>
            <TableCell>
              <IconButton aria-label="edit" onClick={() => navigate(`/edit/${row["_id"]}`)}>
                  <EditIcon
                    color='warning'
                  />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  <TablePagination
  rowsPerPageOptions={[10]}
  component="div"
  count={contacts.length}
  page={page}
  rowsPerPage={rowsPerPage}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
  />
  </Paper>
  );
}

export default TableContacts;
