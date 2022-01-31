import {
  useState,
  useRef
} from 'react';
import {
  Box,
  Button,
  Drawer,
  FormControlLabel,
  IconButton,
  SvgIcon,
  Switch,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import SettingsIcon from 'src/icons/Adjustments';
import useSettings from 'src/hooks/useSettings';
import { THEMES } from 'src/theme';
import { Settings as SettingsType } from 'src/contexts/SettingsContext';

const getValues = (settings: SettingsType) => ({
  compact: settings.compact,
  responsiveFontSizes: settings.responsiveFontSizes,
  roundedCorners: settings.roundedCorners,
  theme: settings.theme
});

function Settings() {
  const ref = useRef<HTMLButtonElement>(null);
  const { settings, saveSettings } = useSettings();
  const [open, setOpen] = useState<boolean>(false);
  const [values, setValues] = useState(getValues(settings));

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleChange = (field: string, value: string | number | boolean): void => {
    setValues({
      ...values,
      [field]: value
    });
  };

  const handleSave = (): void => {
    saveSettings(values);
    setOpen(false);
  };

  return (
    <div style={{ zIndex: 1000 }}>
      <Tooltip title="Settings">
        <IconButton
          color="inherit"
          onClick={handleOpen}
          ref={ref}
        >
          <SvgIcon fontSize="small">
            <SettingsIcon />
          </SvgIcon>
        </IconButton>
      </Tooltip>
      <Drawer
        anchor="right"
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: {
            p: 2,
            width: 320
          }
        }}
      >
        <Typography
          color="textPrimary"
          variant="h6"
        >
          Settings
        </Typography>
        <Box sx={{ mt: 5 }}>
          <TextField
            fullWidth
            label="Theme"
            name="theme"
            onChange={(event): void => handleChange(
              'theme',
              event.target.value
            )}
            select
            SelectProps={{ native: true }}
            value={values.theme}
            variant="outlined"
          >
            {Object.keys(THEMES).map((theme) => (
              <option
                key={theme}
                value={theme}
              >
                {
                  theme
                    .split('_')
                    .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
                    .join(' ')
                }
              </option>
            ))}
          </TextField>
        </Box>
        <Box
          sx={{
            mt: 2,
            px: 1.5
          }}
        >
          <FormControlLabel
            control={(
              <Switch
                checked={values.responsiveFontSizes}
                color="primary"
                edge="start"
                name="direction"
                onChange={(event): void => handleChange(
                  'responsiveFontSizes',
                  event.target.checked
                )}
              />
            )}
            label={(
              <div>
                Responsive font sizes
                <Typography
                  color="textSecondary"
                  component="p"
                  variant="caption"
                >
                  Adjust font for small devices
                </Typography>
              </div>
            )}
          />
        </Box>
        <Box
          sx={{
            mt: 2,
            px: 1.5
          }}
        >
          <FormControlLabel
            control={(
              <Switch
                checked={values.compact}
                color="primary"
                edge="start"
                name="compact"
                onChange={(event): void => handleChange(
                  'compact',
                  event.target.checked
                )}
              />
            )}
            label={(
              <div>
                Compact
                <Typography
                  color="textSecondary"
                  component="p"
                  variant="caption"
                >
                  Fixed width on some screens
                </Typography>
              </div>
            )}
          />
        </Box>
        <Box
          sx={{
            mt: 2,
            px: 1.5
          }}
        >
          <FormControlLabel
            control={(
              <Switch
                checked={values.roundedCorners}
                color="primary"
                edge="start"
                name="roundedCorners"
                onChange={(event): void => handleChange(
                  'roundedCorners',
                  event.target.checked
                )}
              />
            )}
            label={(
              <div>
                Rounded Corners
                <Typography
                  color="textSecondary"
                  component="p"
                  variant="caption"
                >
                  Increase border radius
                </Typography>
              </div>
            )}
          />
        </Box>
        <Box sx={{ mt: 3 }}>
          <Button
            color="primary"
            fullWidth
            onClick={handleSave}
            variant="contained"
          >
            Save Settings
          </Button>
        </Box>
      </Drawer>
    </div>
  );
}

export default Settings;
