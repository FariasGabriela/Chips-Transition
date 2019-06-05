import React from 'react'
import Router from 'next/router'

class HelloUA extends React.Component {
  static async getInitialProps({ req }) {
    const nameUser = req ? 'Gabriela Farias' : 'Gabriela'
    return { nameUser }
  }

  render() {
    return <div>Hello World {this.props.nameUser}
    <button onClick={ ()=> Router.push('/testeLifecycle') }>
      Click
    </button>
    </div>
  }
}

export default HelloUA