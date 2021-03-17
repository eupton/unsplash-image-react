import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

import axios from 'axios'

class App extends React.Component {
    state = { images: [], total: null};
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
                Authorization: 'Client-ID FwG7BtzcyXlsyXuY6EVsUwx--s4U11jUziXQNeJsI10' 
            }
        });

        this.setState({ 
            images: response.data.results, 
            total: response.data.total });
        console.log(response.data);
    }

    render() {
        return (
        <div className='ui container' style={{marginTop:'10px'}}>
            <SearchBar onSubmit={ this.onSearchSubmit }/>
            <div>Found {this.state.total} images</div>
            <ImageList images={this.state.images}/>
        </div>
        
        );
    }
}

export default App