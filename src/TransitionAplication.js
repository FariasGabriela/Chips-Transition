import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

 
class TransitionAplication extends Component {

    render(){
        return (
            <Paper style={{ backgroundColor: 'white', marginTop: 15 }}>
                <Typography variant="h5" component="h3">
                    This is a sheet of paper.
                </Typography>
                <Typography component="p">
                    Paper can be used to build surface or other elements for your application.
                </Typography>
            </Paper>
        )
    }

}

export default TransitionAplication