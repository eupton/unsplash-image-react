import React from 'react'

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setGridSpans);
    }

    //using arrow function to properly bind use of 'this' to ImageCard class in callback
    setGridSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/5); //calculating the grid row spans to dynamically allocate rows (css = grid-row-end: span 5)
        this.setState({ spans });
    }

    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.small}
                />
            </div>
        );
    }
}

export default ImageCard
