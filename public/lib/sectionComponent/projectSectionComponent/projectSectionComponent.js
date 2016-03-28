import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import IndieProject from './individualProjectComponent.js';

const Section = React.createClass({

  componentDidMount () {
    this.DOMnode = ReactDOM.findDOMNode(this);
    // d3.select(DOMnode).classed({'section': true});
    console.log('this is the project did mount');
    this.props.addSection(this.DOMnode, this);
  },

  playAnimation () {
    var node = d3.select(this.DOMnode);
    node.classed({sectionsReveal: true});
  },

  render () {
    return (
      <div className='sections'>
        <h1>
          {this.props.section.catagoryName}
        </h1>
        <div>
          {this.props.section.catagoryHeading}
        </div>
        {this.props.section.projects.map( (projectObj) => {
          return (<IndieProject indieProject={projectObj}/>);
        } )}
      </div>);
  }
});

function addSection (sectionDOM, sectionComponent) {
  return {
    type: 'addSection',
    payload: {
      sectionDOM: sectionDOM,
      section: sectionComponent,
    }
  };
}

//should add the component and its dom node to a list once it gets mounted
//just so d3 can access it

function mapStateToProps (state) {
  return {
    state: state
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addSection: addSection
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Section);
