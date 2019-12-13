import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import * as React from "react";
import SettingsIcon from "@material-ui/icons/Settings";

export const SettingsListItem = () => {
  return (
    <ListItem dense button disabled>
      // @ts-ignore
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      // @ts-ignore
      <ListItemText primary="Settings" />
    </ListItem>
  );
};
