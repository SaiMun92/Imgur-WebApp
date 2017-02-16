// Any script is run automatically


//Import the React Library
// This means find the react library and pull of the component
// ReactDOM is the rect component that has code to deal with the HTML DOM
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

//Create a component
// Render is a special method, so is componentwillmount
class App extends Component {

    constructor(props) {    // constructor method is called whenever the class method is instantiated
        super(props);

        this.state = { images: [] };
    }

    componentWillMount () {
        // Fantastic place to load data as it load before startup
        // Fetching these images
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
            .then(response => this.setState({ images: response.data.data }));
    }

	render () {
        return (
        <div>
            <ImageList images={this.state.images}/>
        </div>
        );
    }
};


//Render this component on the screen
//Meteor.startup() waits for everything to be rendered including the html files then run the code containing inside.
Meteor.startup(() => {
	ReactDOM.render(<App/>, document.querySelector('.container'));

})
// Render the app component to a HTML component by using the querySelector to search for the element.
