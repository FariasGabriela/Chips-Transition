import React from 'react';
import Page from './layouts/main'

class Error extends React.Component {

  render() {
    return (
      <Page>
       {'Erro ao encontrar page!!!'}
      </Page>
    );
  }
}

export default Error;