import React, { useEffect, useMemo, useState } from 'react';
import { Grid, Box, Table, TableBody, TableCell, TableHead, TableRow, TablePagination, Paper, Pagination, Chip, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { deleteReview, loadReviews, reviewActionTypes } from '../../store/actions/reviewActions';
import DeletePopUp from '../common/DeletePopUp';
import { TableContainer } from '@mui/material';

const columns = [
    { id: 'reviewRating', label: 'Rating' },
    { id: 'reviewText', label: 'Review Text' },
    {
        id: 'created_on',
        label: 'Created On',
        align: 'center',
    },
    {
        id: 'actions',
        label: 'Actions',
        width: 170,
        align: 'right'
    }
];

const StyledTableContainer = styled(TableContainer)({
    maxWidth: '100vw',
    overflow: 'scroll',
    WebkitOverflowScrolling: 'touch',
    '-ms-overflow-style': '-ms-autohiding-scrollbar'
});

const HeaderRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function Reviews({ reviews, totalRecords, paginationArray, dispatch }) {
    const { recordsPerPage, pageNumber, productId } = useParams();

    const [page, setPage] = useState(pageNumber ? parseInt(pageNumber) : 0);
    const [rowsPerPage, setRowsPerPage] = useState(recordsPerPage ? parseInt(recordsPerPage) : parseInt(process.env.REACT_APP_RECORDS_PER_PAGE));

    const totalPages = useMemo(() => Math.ceil(totalRecords / rowsPerPage), [reviews, rowsPerPage]);

    useEffect(() => {
        if (!paginationArray[page]) {
            dispatch(loadReviews(page, rowsPerPage, productId))
        }
    }, [page, rowsPerPage]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage - 1);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
        dispatch({ type: reviewActionTypes.RESET_REVIEW })
        dispatch({ type: reviewActionTypes.UPDATE_ROWS_PERPAGE, payload: event.target.value })
    };

    const visibleRows = useMemo(() => {
        if (paginationArray[page]) {
            return reviews.slice(paginationArray[page].startIndex, paginationArray[page].endIndex);
        } else {
            return [];
        }
    }, [reviews, page, rowsPerPage]);

    return (
        <Grid container>
            <Grid item md={12} xs={12}>
                <StyledTableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <HeaderRow>
                                {columns.map((column, index) => (
                                    <TableCell key={index}>{column.label}</TableCell>
                                ))}
                            </HeaderRow>
                        </TableHead>
                        <TableBody>
                            {visibleRows.map((row) => {
                                if (row.is_deleted) return null;
                                return (
                                    <HeaderRow key={row._id}>
                                        <TableCell><Rating value={row.rating} precision={0.5} readOnly /></TableCell>
                                        <TableCell>{row.reviewText}</TableCell>
                                        <TableCell>
                                            {format(new Date(row.created_on), 'dd MMMM, yyyy')}
                                        </TableCell>
                                        <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                                            <DeletePopUp id={row._id} page={page} actionToDispatch={deleteReview} />
                                        </TableCell>
                                    </HeaderRow>
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
                            page={reviews.length ? page : 0}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            backIconButtonProps={{ style: { display: 'none' } }}
                            nextIconButtonProps={{ style: { display: 'none' } }}
                            style={{ height: '45px', overflow: 'hidden' }}
                        />
                        <Box>
                            <Pagination count={totalPages} page={page + 1} onChange={handleChangePage} variant="outlined" color="primary" shape="rounded" />
                        </Box>
                    </Box>
                </StyledTableContainer>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = state => {
    return {
        reviews: state.reviews.reviews,
        totalRecords: state.reviews.totalRecords,
        loadingRecords: state.progressBar.loading,
        paginationArray: state.reviews.paginationArray,
    }
}

export default connect(mapStateToProps)(Reviews);
