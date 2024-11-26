import type { Dayjs } from 'dayjs';
import type { MobileDatePickerProps } from '@mui/x-date-pickers/MobileDatePicker';

import InputAdornment from '@mui/material/InputAdornment';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = MobileDatePickerProps<Dayjs> & {
  startAdornment?: React.ReactNode;
};

export function FilterTime({
  slotProps,
  startAdornment = (
    <InputAdornment position="start">
      <Iconify
        width={24}
        icon="solar:calendar-mark-outline"
        sx={{ color: 'text.disabled', mr: 1 }}
      />
    </InputAdornment>
  ),
  ...other
}: Props) {
  return (
    <MobileDatePicker
      slotProps={{
        ...slotProps,
        textField: {
          ...slotProps?.textField,
          fullWidth: true,
          variant: 'standard',
          InputProps: {
            disableUnderline: true,
            startAdornment,
          },
          inputProps: {
            sx: { py: 0, typography: 'subtitle1' },
          },
        },
      }}
      {...other}
    />
  );
}
