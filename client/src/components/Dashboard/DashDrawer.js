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
  IconButton,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Cancel } from '@material-ui/icons';
import useStyles from './styles/DashDrawer.styles';
import routes from '../Routes/routes';
import { useLocation } from 'react-router-dom';

const routeArray = Object.values(routes());

const DashDrawer = props => {
  const { drawerOpen, setDrawerOpen } = props;
  const [selectedRouteIndex, setSelectedRouteIndex] = React.useState(-1);
  const [selectedSubrouteIndex, setSelectedSubrouteIndex] = React.useState(-1);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useStyles();
  const location = useLocation();

  React.useEffect(() => {
    for (let i = 0; i < routeArray.length; i += 1) {
      if (routeArray[i].link === location.pathname) {
        setSelectedRouteIndex(i);
      }
      if (routeArray[i].subroutes != null) {
        const subroutes = Object.values(routeArray[i].subroutes);
        for (let j = 0; j < subroutes.length; j += 1) {
          if (subroutes[j].link === location.pathname) {
            setSelectedRouteIndex(i);
            setSelectedSubrouteIndex(j);
          }
        }
      }
    }
  }, [location.pathname]);

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
      <div className={classes.toolbar}>
        <IconButton
          color={'inherit'}
          className={classes.cancelIcon}
          onClick={() => setDrawerOpen(false)}
        >
          <Cancel />
        </IconButton>
      </div>
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
                onClick={() => {
                  setSelectedRouteIndex(index);
                  setSelectedSubrouteIndex(-1);
                }}
              >
                <ListItemIcon className={classes.sidebarIcon}>{route.icon}</ListItemIcon>
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
