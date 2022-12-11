import { useContext, useEffect, useState } from "react";
import { UrlContext } from "../../../../App";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import TablePagination from "@mui/material/TablePagination";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { ContactType } from "../../../../types/Contact";

function TableContacts() {
  const contactsUrl = useContext(UrlContext);

  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [totalContacts, setTotalContacts] = useState(0);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    retrieveContacts(0);
    retrieveNumberContacts();
  }, [setPage, setContacts]);

  function retrieveContacts(actualPage: number) {
    console.log(`${contactsUrl}?page=${actualPage + 1}?perPage=10`);
    axios
      .get(`${contactsUrl}?page=${actualPage + 1}?perPage=10`)
      .then((response) => {
        setContacts(response["data"]["results"]);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function retrieveNumberContacts() {
    axios
      .get(`${contactsUrl}/count`)
      .then((response) => {
        setTotalContacts(response["data"]);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
    retrieveContacts(newPage);
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
              <TableCell>Número</TableCell>
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
                  <IconButton
                    aria-label="delete"
                    onClick={() => navigate(`/delete/${row["_id"]}`)}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label="edit"
                    onClick={() => navigate(`/edit/${row["_id"]}`)}
                  >
                    <EditIcon color="warning" />
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
        count={totalContacts}
        page={page}
        rowsPerPage={10}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
}

export default TableContacts;
