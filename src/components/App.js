import React, { Component } from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import ImageDisplay from './ImageDisplay'
import LoadMoreButton from './LoadMoreButton'
import './App.css'

class App extends Component {
    state = {
        images: [],
        imageIsSelected: false,
        selectedImage: null,
        page: 1,
        term: ''
    }

    onSearchSubmit = async (term) => {
        let resp = await unsplash.get('/search/photos', {
            params: { 
                query: term,
                per_page: 10 
            }
        })

        this.setState({ 
            images: resp.data.results,
            term
         })
    }

    imageSelected = (image) => {
        this.setState({
            imageIsSelected: true,
            selectedImage: image
        })
    }

    closeImage = () => {
        this.setState({
            imageIsSelected: false,
            selectedImage: null
        })
    }

    loadMoreImages = async () => {
        const currentPage = this.state.page
        const currentImages = this.state.images
        const term = this.state.term

        let resp = await unsplash.get('/search/photos', {
            params: { 
                query: term,
                page: currentPage + 1 
            }
        })

        const results = resp.data.results

        this.setState({
            images: [...currentImages, ...results],
            page: currentPage + 1
        })

    }

    render() {
        if (!this.state.imageIsSelected) {
            return (
                <div className="ui container" style={{ marginTop: '10px' }}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    <ImageList 
                        images={this.state.images} 
                        imageSelected={this.imageSelected}
                     />

                    {this.state.images.length >= 10 ? <LoadMoreButton loadMoreImages={this.loadMoreImages} /> : null }
                </div>
            )
        } else {
            const image = this.state.selectedImage
            return (
                <ImageDisplay closeImage={this.closeImage} image={image}/>
            )
        }
    }
}

export default App;