import { Component } from 'react'

import { Link } from 'react-router-dom'

import Navigation from '../components/Navigation/Navigation'

class Layout extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Link to={`${process.env.PUBLIC_URL}/`}>
                    <h1>TRACTIAN</h1>
                </Link>
                
                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout