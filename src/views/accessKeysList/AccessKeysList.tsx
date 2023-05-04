/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
import {
  Box, Button
} from '@mui/material'
import { Helmet } from 'react-helmet-async'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as api from 'src/api';
import { AccessKey } from 'src/types/api';
import Header from './components/Header';

function AccessKeysList() {
  const [accessKeys, setAccessKeys] = useState<AccessKey[]>([])

  const fetchAccessKeys = async () => {
    const res = await api.getAccessKeys()
    setAccessKeys(res.data?.accessKeys || [])
  }

  useEffect(() => {
    fetchAccessKeys().then(() => { }).catch(() => { })
  }, [])

  const onDeleteKey = async (key: AccessKey) => {
    await api.removeAccessKey(key.friendlyName)
    await fetchAccessKeys()
  }

  return (
    <Box p={3}>
      <Helmet>
        <title>Access Keys</title>
      </Helmet>
      <Header fetchAccessKeys={fetchAccessKeys} />
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Expires</TableCell>
              <TableCell>Description</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {accessKeys?.map((row, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.friendlyName}
                </TableCell>
                <TableCell>{new Date(row.createdTime).toLocaleDateString()}</TableCell>
                <TableCell>{row.createdBy}</TableCell>
                <TableCell>{new Date(row.expires).toLocaleDateString()}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell><Button onClick={() => onDeleteKey(row)} variant="text" color="error">remove</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AccessKeysList
