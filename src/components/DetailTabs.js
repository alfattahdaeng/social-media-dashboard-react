import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import PostList from './PostList';
import AlbumList from './AlbumList';
import ListPostLayout from './layout/ListPostLayout';


const useStyles = makeStyles (theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#f7f7f7',
      display: 'flex',
      margin: '30px 0'
    },
    tabs: {
      borderRight: '1px solid #444',
      width: '25%',
      minHeight: 600,
      '& button':{
        padding: '30px 0',
        '&.Mui-selected':{
          color: '#04a4a4',
        }
      }
    },
    tabPanel: {
      width: '75%',
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
};

const DetailTabs = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { posts, albums } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
    return (
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Posts" {...a11yProps(0)} />
          <Tab label="Albums" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0} className={classes.tabPanel}>
          {props.posts.length !== 0 ? (
            <PostList posts={posts} />
          ) : (
            <ListPostLayout />
          )}
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabPanel}>
          {props.albums.length !== 0 ? (
            <AlbumList albums={albums} />
          ) : (
            <ListPostLayout/>
          )}
        </TabPanel>
      </div>
    );
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
    albums: state.albums
  };
};


export default  connect(mapStateToProps)(DetailTabs);