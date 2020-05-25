import React from "react";
import Sidebar from "react-sidebar";

type State = {
    sidebarDocked: boolean;
    sidebarOpen: boolean;
    sidebarTransition: boolean;
};

type Prop = {
    sidebar: React.ReactNode;
}


// const mql = window.matchMedia(`(min-width: 800px)`);

class SidebarLayout extends React.Component<Prop, State> {

  match: any;
  checkWidth: any;

  constructor(props: any) {
    super(props);
    this.state = {
      sidebarDocked: true,
      sidebarOpen: false,
      sidebarTransition: false
    };

    // this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentDidMount() {
    this.match = window.matchMedia(`(min-width: 800px)`);
    this.checkWidth = (e: any) => {      
       this.setState({ sidebarDocked: e.matches, sidebarOpen: false });
     };
 
     this.checkWidth(this.match);
     this.match.addListener(this.checkWidth);
  }

  onSetSidebarOpen(open: boolean) {
    this.setState({ sidebarOpen: open });
  }

  componentWillUnmount() {
    this.match.removeListener(this.checkWidth);
  }

  render() {
    return (
      <Sidebar
        sidebar={this.props.sidebar}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        transitions={this.state.sidebarTransition}
      >
        {this.props.children}
      </Sidebar>
    );
  }
}

export default SidebarLayout;