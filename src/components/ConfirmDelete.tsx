import { useState } from 'react';
import {
  Box, Button, SxProps, TextField, Theme
} from '@mui/material';

interface ConfirmDeleteProps {
  confirmText: string
  onDelete: () => void
  sx?: SxProps<Theme>
}

function ConfirmDelete({ confirmText, onDelete, ...rest }: ConfirmDeleteProps) {
  const [confirm, setConfirm] = useState(false)
  const [name, setName] = useState('')

  if (!confirm) {
    return (
      <Box {...rest}>
        <Button color="error" onClick={() => setConfirm(true)} variant="outlined">Delete</Button>
      </Box>
    )
  }

  return (
    <Box {...rest}>
      <Box>
        <TextField
          label="Confirm App Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="standard"
          color="error"
        />
      </Box>
      <Box mt={1}>
        <Button color="error" disabled={confirmText !== name} onClick={onDelete} variant="outlined">Delete</Button>
      </Box>
    </Box>
  );
}

export default ConfirmDelete
