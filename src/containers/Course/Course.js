import React, { Component } from 'react';



class Course extends Component {
    state = {courseTitle: ''}

    componentDidMount () {
        this.parseQueryParams()
    } ;

    componentDidUpdate() {
        this.parseQueryParams()
    };

    parseQueryParams () {
        console.log(this.props); //just to see what is in there
        const query = new URLSearchParams(this.props.location.search);
        //this will turn out look like an array that we can loop through
        for (let param of query.entries()) {
            console.log(param); //will return [key and and value] in arrays
            if(this.state.courseTitle !== param[1]){
                this.setState({ courseTitle: param[1] });
                } //param[1]=key, if statement to avoid infinite loop
        }
    }
    render () {

        return (
            <div>
            <h1>
                {this.state.courseTitle}
                {/*this.props.match.params.courseTitle}
                you can start using match params once Course is linked to a route (in this case in App.js)*/}
            </h1>
            <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
        </div>
        )
    }
}

export default Course;