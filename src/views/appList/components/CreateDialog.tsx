/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {
  DialogContentText, TextField, Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { addApp } from 'src/api';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const RootDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface CreateDialogProps {
  onClose: () => void;
}

export default function CreateDialog(props: CreateDialogProps) {
  const [name, setName] = React.useState('')
  const [OS, setOS] = React.useState('Android')
  const [platform, setPlatform] = React.useState('NativeScript')

  const [accessKey, setAccessKey] = React.useState('')
  const [error, setError] = React.useState('')
  const { onClose } = props

  const onCreate = async () => {
    try {
      const { data } = await addApp(name, OS, platform)
      console.log('🚀 ~ file: CreateDialog.tsx ~ line 43 ~ onGenerate ~ data', data)
      return setError(data.errorMessage)
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return setError((e?.message) as string)
    }
  }

  const renderForm = () => {
    if (!accessKey) {
      return (
        <>
          <DialogContentText>
            Generate an access key to login from the cli
          </DialogContentText>
          <Box maxWidth={250} mt={2}>
            <TextField
              fullWidth
              label="App Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              variant="outlined"
            />
          </Box>
          <Box sx={{ maxWidth: 200, mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="OS-label">OS</InputLabel>
              <Select
                labelId="OS-label"
                value={OS}
                label="OS"
                onChange={(e) => setOS(e.target.value)}
              >
                <MenuItem value="iOS">iOS</MenuItem>
                <MenuItem value="Android">Android</MenuItem>
                <MenuItem value="Windows">Windows</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ maxWidth: 200, mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="Platform-label">Platform</InputLabel>
              <Select
                labelId="Platform-label"
                value={platform}
                label="Platform"
                onChange={(e) => setPlatform(e.target.value)}
              >
                <MenuItem value="NativeScript">NativeScript</MenuItem>
                <MenuItem value="React-Native">React-Native</MenuItem>
                <MenuItem value="Cordova">Cordova</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Typography color="red">
            {error}
          </Typography>
        </>
      )
    }

    return (
      <>
        <DialogContentText>
          Store this key somewhere safe and never give it out. You will not be able to recover this key later
        </DialogContentText>
        <Box mt={2}>
          <TextField
            fullWidth
            value={accessKey}
          />
        </Box>
      </>
    )
  }

  return (
    <RootDialog
      onClose={onClose}
      open
      fullWidth
      maxWidth="sm"
    >
      {!accessKey && (
        <DialogTitle>
          Create Access Key
        </DialogTitle>
      )}
      <DialogContent>
        {renderForm()}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>
          Close
        </Button>
        {!accessKey && (
          <Button
            variant="contained"
            onClick={onCreate}
          >
            Create
          </Button>
        )}
      </DialogActions>
    </RootDialog>
  );
}
