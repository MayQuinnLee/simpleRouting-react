import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';



class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <Link 
                            key={course.id} 
                            to = {{
                            pathname: this.props.match.url + '/' + course.id,
                            search: '?title=' + course.title
                            }}>
                            {/* to={this.props.match.url + '/' + course.id + '/' + course.title} >
                            this Link will lead you to a new page, with course.id it will bring you to URL/ID, with course.title it will being you to URL/ID/TITLE. Things in course.js will work with this Link and App js Route */}
                                <article className="Course">
                                    {course.title}
                                </article> 
                            </Link>
                        } )
                    }
                </section>
                <Route path= {this.props.match.url + '/:courseId/'} component={Course} /> 
            </div>
        );
    }
}

export default Courses;