import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        term: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <input 
                            type="text" 
                            onChange={(e) => this.setState({ term: e.target.value })}
                            style={{ backgroundColor: 'rgb(161, 149, 149)', color: 'white', fontWeight: 'bold' }} 
                            value={this.state.term}
                            placeholder="type the image you want here"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;