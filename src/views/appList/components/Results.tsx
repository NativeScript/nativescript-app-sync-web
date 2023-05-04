/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box, Button
} from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { App } from 'src/types/api';

type ResultsProps = {
  data: App[]
  onSelect: (app: App) => void
}

function Results(props: ResultsProps) {
  const { data, onSelect } = props
  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>OS</TableCell>
            <TableCell>Platform</TableCell>
            <TableCell>Deployments</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, i) => (
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
              <TableCell><Button color="secondary" variant="outlined" onClick={() => onSelect(row)}>View</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Results
