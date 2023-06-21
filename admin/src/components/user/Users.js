import React, { useCallback, useMemo, useState } from 'react';
import { Grid, Box, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow, TablePagination, IconButton, Paper, Pagination, Chip } from '@mui/material';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteUser, loadUsers, userActionTypes } from '../../store/actions/userActions';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';
import DeletePopUp from '../common/DeletePopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import { styled } from '@mui/system';

const columns = [
  { id: 'userName', label: 'Name' },
  { id: 'userEmail', label: 'Email' },
  {
    id: 'phone_number',
    label: 'Phone Number',
    align: 'left',
  },
  {
    id: 'userType',
    label: 'Type',
    align: 'center',
  },
  {
    id: 'userStatus',
    label: 'Status',
    align: 'center',
  },
  {
    id: 'created_on',
    label: 'Created On',
    align: 'center',
  },
  {
    id: 'actions',
    label: 'Actions',
    width: 170,
    align: 'right',
  },
];

const RootContainer = styled('div')({
  display: "block",
  flex: 1,
});

const TableContainerStyled = styled()({
  "maxWidth": "100vw",
  overflow: "scroll",
  WebkitOverflowScrolling: 'touch',
  '-ms-overflow-style': '-ms-autohiding-scrollbar',
});

function Users({ users, totalRecords, paginationArray, stateRowsPerPage, dispatch }) {
  const { recordsPerPage, pageNumber } = useParams();

  const [page, setPage] = useState(pageNumber ? parseInt(pageNumber) : 0);
  const [rowsPerPage, setRowsPerPage] = useState(recordsPerPage ? parseInt(recordsPerPage) : parseInt(stateRowsPerPage));

  const totalPages = useMemo(() => Math.ceil(totalRecords / rowsPerPage), [users, rowsPerPage]);

  useEffect(() => {
    if (!paginationArray[page]) {
      dispatch(loadUsers(page, rowsPerPage));
    }
  }, [page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
    dispatch({ type: userActionTypes.RESET_USER });
    dispatch({ type: userActionTypes.UPDATE_ROWS_PERPAGE, payload: event.target.value });
  };

  const visibleRows = React.useMemo(() => {
    if (paginationArray[page]) {
      return users.slice(paginationArray[page].startIndex, paginationArray[page].endIndex);
    } else {
      return [];
    }
  }, [users, page, rowsPerPage]);

  const refreshList = () => {
    dispatch({ type: userActionTypes.RESET_USER });
    if (page === 0) {
      dispatch(loadUsers(page, rowsPerPage));
    } else {
      setPage(0);
    }
  };

  return (
    <RootContainer>
      <Grid container>
        <Grid item md={12} xs={12}>
          <TableContainerStyled component={Paper}>
            <Box display="flex" justifyContent='space-between' m={3}>
              <Typography variant="h5">Users</Typography>
              <Box>
                <Button component={Link} to="/admin/users/add" variant="outlined" startIcon={<AddIcon />}>Add</Button>
                <Button sx={{ ml: 1 }} onClick={refreshList} variant="outlined" endIcon={<RefreshIcon />}>Refresh</Button>
              </Box>
            </Box>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell key={index}>{column.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {visibleRows.map((row) => {
                  if (!row) return;
                  if (row.is_deleted) return;
                  return (
                    <TableRow key={row._id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.phone_number}</TableCell>
                      <TableCell>
                        {row.type === process.env.REACT_APP_USER_TYPE_SUPERADMIN ?
                          <Chip size='small' label="Super Admin" color="primary" /> :
                          row.type === process.env.REACT_APP_USER_TYPE_ADMIN ?
                            <Chip size='small' label="Admin" color="primary" /> :
                            <Chip size='small' label="Standard" color="primary" />
                        }
                      </TableCell>
                      <TableCell>
                        {row.active === process.env.REACT_APP_STATUS_ACTIVE ?
                          <Chip size='small' label="Active" color="success" /> :
                          <Chip size='small' label="Not Active" color="primary" />
                        }
                      </TableCell>
                      <TableCell>
                        {format(new Date(row.created_on), 'dd MMMM, yyyy')}
                      </TableCell>
                      <TableCell sx={{ display: "flex" }}>
                        <Link to={`/admin/users/edit/${row._id}/${rowsPerPage}/${page}`}>
                          <IconButton sx={{ color: "blue" }}>
                            <FontAwesomeIcon icon={faEdit} style={{ fontSize: "1rem" }} />
                          </IconButton>
                        </Link>
                        <DeletePopUp id={row._id} page={page} actionToDispatch={deleteUser} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50, 100, 250, 500]}
                component="div"
                count={totalRecords}
                rowsPerPage={rowsPerPage}
                page={users.length ? page : 0}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                backIconButtonProps={{
                  style: { display: "none" },
                }}
                nextIconButtonProps={{
                  style: { display: "none" },
                }}
                style={{ height: "45px", overflow: "hidden" }}
              />
              <Box>
                <Pagination count={totalPages} page={page + 1} onChange={handleChangePage} variant="outlined" color="primary" shape="rounded" />
              </Box>
            </Box>
          </TableContainerStyled>
        </Grid>
      </Grid>
    </RootContainer>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    totalRecords: state.users.totalRecords,
    loadingRecords: state.progressBar.loading,
    paginationArray: state.users.paginationArray,
    stateRowsPerPage: state.brands.rowsPerPage,
  };
};

export default connect(mapStateToProps)(Users);
