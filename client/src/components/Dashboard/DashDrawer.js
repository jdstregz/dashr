import React from 'react';
import {
  Drawer,
  useMediaQuery,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Collapse,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles/DashDrawer.styles';
import routes from '../Routes/routes';

const routeArray = Object.values(routes());

const DashDrawer = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedRouteIndex, setSelectedRouteIndex] = React.useState(-1);
  const [selectedSubrouteIndex, setSelectedSubrouteIndex] = React.useState(-1);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

  const renderSublist = (route, parentMenuIndex) => {
    return (
      <Collapse in={selectedRouteIndex === parentMenuIndex} timeout={'auto'} unmountOnExit>
        <List component={'div'} disablePadding>
          {Object.values(route.subroutes).map((subroute, index) => (
            <Tooltip
              title={subroute.text}
              key={subroute.text}
              classes={{ tooltip: classes.tooltipText, popper: classes.noShow }}
              placement={'right'}
            >
              <ListItem
                selected={selectedRouteIndex === parentMenuIndex && selectedSubrouteIndex === index}
                key={subroute.text}
                onClick={() => {
                  setSelectedSubrouteIndex(index);
                  setSelectedRouteIndex(parentMenuIndex);
                }}
                button
                component={Link}
                to={subroute.link}
                className={classes.sublistItem}
              >
                <ListItemIcon className={classes.sidebarIcon}>{subroute.icon}</ListItemIcon>
                <ListItemText className={classes.sidebarText} primary={subroute.text} />
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Collapse>
    );
  };

  return (
    <Drawer
      variant={mobile ? 'temporary' : 'persistent'}
      onClose={() => setDrawerOpen(false)}
      open={!mobile || drawerOpen}
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List className={classes.list}>
        {routeArray.map((route, index) => (
          <div key={route.text}>
            <Tooltip
              title={route.text}
              placement={'right'}
              classes={{ tooltip: classes.tooltipText, popper: classes.noShow }}
            >
              <ListItem
                button
                selected={selectedRouteIndex === index}
                component={Link}
                to={route.link}
                onClick={() => setSelectedRouteIndex(index)}
              >
                <ListItemText className={classes.sidebarText} primary={route.text} />
              </ListItem>
            </Tooltip>
            {route.subroutes ? renderSublist(route, index) : null}
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default DashDrawer;
