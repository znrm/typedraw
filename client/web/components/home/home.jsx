import React from 'react';

class Home extends React.Component {
    componentDidMount() {
        this.props.state.session.loggedIn ? null : this.props.history.replace('/login');
    }

    componentWillReceiveProps() {
        this.props.state.session.loggedIn ? null : this.props.history.replace('/login');     
    }

    handleLogout() {
        this.props.logout();
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