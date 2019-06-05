import React from 'react';
import Page from './layouts/main'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <Page>
       {'Erro ao encontrar page!!!'}
      </Page>
    );
  }
}

export default Error;