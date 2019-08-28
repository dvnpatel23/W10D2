import React from "react";
import ReactDOM from "react-dom";


class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0 
    }
  }

  tabClicked(tabIndex) {
    this.setState({ currentTab: tabIndex})
    // this.forceUpdate()
  }

  
  render() {
    let lis = [];
    for (let i = 0; i < this.props.tabs.length; i++){
      lis.push(
        <li key={i}>
          <h1 onClick={() => {
            this.tabClicked(i);
          }} >
            {this.props.tabs[i].title}
          </h1>
        </li>
      );
    }
    return (
      <header className="tabs">
        <ul>
          {lis}
        </ul >
        
        <article className="content">
          {this.props.tabs[this.state.currentTab].content}
        </article>
      </header>
    )
  }
}

export default Tab;