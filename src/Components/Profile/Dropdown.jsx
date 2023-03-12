import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function Dropdown() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Category
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Wedding</MenuItem>
            <MenuItem onClick={popupState.close}>Food</MenuItem>
            <MenuItem onClick={popupState.close}>Interior</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}