import { Box, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import * as api from 'src/api';
import bytesToSize from 'src/utils/bytesToSize';

type DeploymentHistoryProps = {
  data: api.DeploymentHistory[]
  sx?: SxProps<Theme>
}

function DeploymentHistory(props: DeploymentHistoryProps) {
  const { data, ...rest } = props

  const columns: GridColDef[] = [
    { field: 'label', headerName: 'Label', width: 70 },
    { field: 'appVersion', headerName: 'App Version', width: 130 },
    { field: 'releaseMethod', headerName: 'Method', width: 130 },
    { field: 'isDisabled', headerName: 'Disabled', width: 130 },
    { field: 'isMandatory', headerName: 'Mandatory', width: 130 },
    {
      field: 'size',
      headerName: 'Size',
      width: 130,
      valueGetter: (params: GridValueGetterParams) => bytesToSize((params.row as api.DeploymentHistory).size)
    },
    { field: 'description', headerName: 'Description', width: 130 },
    { field: 'releasedBy', headerName: 'Released By', width: 130 },
    { field: 'packageHash', headerName: 'Package Hash', width: 130 },
    { field: 'blobUrl', headerName: 'Blob Url', width: 130 },
    { field: 'manifestBlobUrl', headerName: 'Manifest Blob Url', width: 130 },
  ];

  return (
    <Box height={400} {...rest}>
      <DataGrid
        rows={data.map((m, i) => ({ ...m, id: i }))}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  )
}

export default DeploymentHistory
