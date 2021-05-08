import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  bgColor:{
    backgroundColor: "#d6d6d6",
  }
});

const UserTableList = (props) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.bgColor}>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map(user => (
                    <TableRow key={user.id}>
                        <TableCell component="th" scope="row">{user.username}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
        </TableContainer>
    );
};

export default UserTableList;