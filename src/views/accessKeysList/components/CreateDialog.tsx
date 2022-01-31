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
import { createAccessKey } from 'src/api';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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
  const [description, setDescription] = React.useState('')
  const [expiresIn, setExpiresIn] = React.useState('30')

  const [accessKey, setAccessKey] = React.useState('')
  const [error, setError] = React.useState('')
  const { onClose } = props

  const onGenerate = async () => {
    try {
      const { data } = await createAccessKey({ name, ttl: Number(expiresIn), description })
      if (data.accessKey) { return setAccessKey(data.accessKey.token) }
      return setError(data.errorMessage)
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return setError((e?.message) as string)
    }
  }

  const handleChange = (event: SelectChangeEvent) => {
    setExpiresIn(event.target.value);
  };

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
              label="Access Key Name (optional)"
              onChange={(e) => setName(e.target.value)}
              value={name}
              variant="outlined"
            />
          </Box>
          <Box sx={{ maxWidth: 200, mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="expires-label">Expires in</InputLabel>
              <Select
                labelId="expires-label"
                value={expiresIn}
                label="Expires in"
                onChange={handleChange}
              >
                <MenuItem value={30}>30 Days</MenuItem>
                <MenuItem value={60}>60 Days</MenuItem>
                <MenuItem value={90}>90 Days</MenuItem>
                <MenuItem value={365}>1 Year</MenuItem>
                <MenuItem value={2000}>Never (Not Recommended)</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120, mt: 2 }}>
            <FormControl fullWidth>
              <TextField
                multiline
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                minRows={5}
              />
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
            onClick={onGenerate}
          >
            Generate Key
          </Button>
        )}
      </DialogActions>
    </RootDialog>
  );
}
