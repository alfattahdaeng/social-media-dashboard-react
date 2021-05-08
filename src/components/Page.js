import React from 'react';

import Users from './Users.js';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const Page = () =>  {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
          <Users/>
      </Container>
    </React.Fragment>
  );
}

export default Page;