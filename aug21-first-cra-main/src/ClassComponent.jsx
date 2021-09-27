// a React component can be also made as a class
// a class component has a more rigid structure, but generally speaking is more powerful

import { Component } from 'react'

class ClassComponent extends Component {

    // a Class Component can use a STATE OBJECT

    render() {
        return <h1>I'm a Class component!</h1>
    }
}

export default ClassComponent