import React, { Component } from 'react';

const MainContext = React.createContext();

class ContextProvider extends Component {
    state = {
        navMenu: false,
        modalOpen: false,
        imageSource: '',
        imageId: '',
    }

handleNavMenu = () => {
    this.setState({
        navMenu: ! this.state.navMenu
    })
}

handleModal = (id, photo) => {
    console.log(`current id is: ${id}, image path is: ${photo}`)
    this.setState({
      modalOpen: !this.state.modalOpen,
      imageSource: photo,
      imageId: id
    })
}

    render() {
        return (
            <MainContext.Provider value = {{
                ...this.state,
                handleNavMenu: this.handleNavMenu,
                handleModal: this.handleModal
            }}>
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

const ContextConsumer = MainContext.Consumer;

export { ContextProvider, ContextConsumer };
