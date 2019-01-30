import React, { Component } from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import './App.css'

class App extends Component {
    state = {
        images: [],
        imageIsSelected: false,
        selectedImage: null
    }

    onSearchSubmit = async (term) => {
        let resp = await unsplash.get('/search/photos', {
            params: { 
                query: term,
                per_page: 40 
            }
        })

        this.setState({ images: resp.data.results })
    }

    imageSelected = (image) => {
        this.setState({
            imageIsSelected: true,
            selectedImage: image
        })
    }

    render() {
        if (!this.state.imageIsSelected) {
            return (
                <div className="ui container" style={{ marginTop: '10px' }}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    <ImageList images={this.state.images} imageSelected={this.imageSelected} />
                    {this.state.images.length >= 10 ? <button className="ui button" style={{ padding: '10px' }}>Load More</button> : null }
                </div>
            )
        } else {
            const { urls, description } = this.state.selectedImage
            return (
                <div className="display-image"><img className="ui centered medium image" style={{ display: 'inline-block' }}src={urls.regular} alt={description} /><button>X</button></div>
                // <div><img className="ui centered medium image" src={urls.full} alt={description} /></div>
            )
        }
    }
}

export default App;