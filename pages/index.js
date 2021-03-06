import Page from './layouts/main'
import Link from 'next/link'
import Router from 'next/router'
import Error from 'next/error';

class Index extends React.Component {
  static async getInitialProps({res}) {
     const errorCode = res.statusCode > 200 ? res.statusCode : false;

    return { errorCode, stars: 'teste' };
  }

  render() {
    if (this.props.errorCode) {
      return <Error statusCode={this.props.errorCode} />;
    }

    /*return   <Page>
    <p>my page with global styles!</p>
    <Link href="/about">
        <a>here</a>
    </Link>

    <button onClick={ ()=> Router.push('/about') }>
      Click
    </button>
  </Page>*/

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/about/">About</Link>
          </li>
        </ul>
      </nav>
    </div>
    )
  }
}

export default Index;

