import React from 'react';

class Home extends React.Component {
    handleLogout() {
        this.props.logout()
    }

    render() {
        return (
            <div>
                <h1>Welcome to TypeDraw</h1>
                <button onClick={ () => this.handleLogout() }>Logout</button>
            </div>
        )
    }
}

export default Home;