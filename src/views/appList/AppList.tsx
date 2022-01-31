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
import { App } from 'src/types/api';
import Header from './components/Header';

function AccessKeysList() {
  const [apps, setApps] = useState<App[]>([])

  const fetchApps = async () => {
    const res = await api.getApps()
    setApps(res.data?.apps || [])
  }

  useEffect(() => {
    fetchApps().then(() => { }).catch(() => { })
  }, [])

  // const onDelete = async (data: App) => {
  //   await api.removeApp(data.friendlyName)
  //   await fetchApps()
  // }
  return (
    <Box p={3}>
      <Helmet>
        <title>Apps</title>
      </Helmet>
      <Header fetchApps={fetchApps} />
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>OS</TableCell>
              <TableCell>Platform</TableCell>
              <TableCell>Deployments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apps?.map((row, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.os}</TableCell>
                <TableCell>{row.platform}</TableCell>
                <TableCell>{row.deployments.join(', ')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AccessKeysList
