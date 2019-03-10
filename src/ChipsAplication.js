import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

class ChipsAplication extends Component {

    constructor(props){
        super(props)

        this.state = {
            chipsItens : [
                { key: 0, label: 'Talhão 1'},
                { key: 1, label: 'Talhão 2'},
                { key: 2, label: 'Talhão 3'},
                { key: 3, label: 'Talhão 4'},
                { key: 4, label: 'Talhão 5'},
            ]
        }

      this.addChip = this.addChip.bind(this)
    }

    handleDelete = data => () => {
        const chipToDelete = this.state.chipsItens.indexOf(data)
        var chips = this.state.chipsItens
        chips.splice(chipToDelete, 1);

        this.setState({
            chipsItens: chips
        })
    }

    addChip(){
        const add = {
            key: 10, label: "Talhão 10"
        }

        var chip = this.state.chipsItens
        chip.push(add)

        this.setState({
            chipsItens: chip
        })
    }

    render () {
        return (
            <Card>
                <Button onClick={this.addChip} >
                    Click!!!
                </Button>


                { this.state.chipsItens.map((item) => {
                    
                    return (
                        <Chip 
                            key={item.key}
                            label={item.label}
                            onDelete={this.handleDelete(item)}
                        />
                    )
                }) }
            </Card>
        )
    }
}

export default ChipsAplication