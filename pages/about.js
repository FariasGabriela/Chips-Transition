import React, { Component } from 'react';
import Page from './layouts/main'

class About extends Component {
    render() {
        return (
            <Page>
                <div>
                    <p>TESTE NA TAG P</p>
                    <style jsx>{`
                        p {
                            color: red;
                        }
                        div {
                            background: pink;
                        }
                        @media (max-width: 600px) {
                            div {
                                background: pink;
                            }
                        }
                    `}</style>
                </div>
                    TELA ABOUT
                    <p> TESTE </p>
    
            </Page>
        )
    }
}

export default About;