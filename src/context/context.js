import React, { Component } from 'react';

const MainContext = React.createContext();

class ContextProvider extends Component {
    state = {
        navMenu: false,
        modalOpen: false,
        imageSource: '',
        imageId: 0,
        compartGallery: false,
        bwGallery: false,
        portraitGallery: false,
        eng: true,
        cn: false
    }

// ---------------------------------- IMAGE GALLERY

showNextImage = () => {
    this.setState(prevState => ({
        imageId: prevState.imageId + 1
    }), console.log(this.state.imageId));
  }

// ---------------------------------- LANGUAGE CHANGING

toggleENG = () => {
    this.setState({
        eng: true,
        cn: false
    })
}

toggleCN = () => {
    this.setState({
        cn: true,
        eng: false
        
    })
}

// ----------------------------------

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

toggleBackCompart = () => {
    this.setState({
        compartGallery: true,
        bwGallery: false,
        portraitGallery: false
    })
}

toggleBackBw = () => {
    this.setState({
        bwGallery: true,
        compartGallery: false,
        portraitGallery: false
    })
}

toggleBackPortraits = () => {
    this.setState({
        portraitGallery: true,
        compartGallery: false,
        bwGallery: false
    })
}

    render() {
        return (
            <MainContext.Provider value = {{
                ...this.state,
                handleNavMenu: this.handleNavMenu,
                handleModal: this.handleModal,
                toggleBackCompart: this.toggleBackCompart,
                toggleBackBw: this.toggleBackBw,
                toggleBackPortraits: this.toggleBackPortraits,
                toggleENG: this.toggleENG,
                toggleCN: this.toggleCN,
                showNextImage: this.showNextImage
            }}>
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

const ContextConsumer = MainContext.Consumer;

export { ContextProvider, ContextConsumer };
