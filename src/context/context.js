import React, { Component } from 'react';

const MainContext = React.createContext();

class ContextProvider extends Component {
    state = {
        navMenu: false
    }

handleNavMenu = () => {
    this.setState({
        navMenu: ! this.state.navMenu
    })
}

    render() {
        return (
            <MainContext.Provider value = {{
                ...this.state,
                handleNavMenu: this.handleNavMenu
            }}>
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

const ContextConsumer = MainContext.Consumer;

export { ContextProvider, ContextConsumer };
