
import React from 'react'
import Link from 'next/link'

export default class testeLifecycle extends React.Component {
  static async getInitialProps ({req}) {  
      console.log(req)
    return { stars: 'teste' }
  }

  render () {
    return (
      <div>
        <p>Preact has {this.props.nameUser} ⭝︝</p>
        <Link prefetch href='/'>
          <a>I bet next has more stars (?)</a>
        </Link>
      </div>
    )
  }
}