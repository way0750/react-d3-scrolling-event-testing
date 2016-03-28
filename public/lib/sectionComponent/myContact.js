import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


const MyContact = React.createClass({

  componentDidMount () {
    this.DOMnode = ReactDOM.findDOMNode(this);
    // d3.select(DOMnode).classed({'section': true});
    this.props.addSection(this.DOMnode, this);
  },

  playAnimation () {
    var node = d3.select(this.DOMnode);
    node.transition()
        .style({'background-color': 'blue', opacity: 1})
        .duration(1000);
    
    node.classed({"myContactAnimation": true});
},

  render () {
    return (
      <div className='sections'>
        <h1>
          {this.props.section.catagoryName}
          so this is the fucking contact section????
        </h1>
        <div>
          {this.props.section.catagoryHeading}
        </div>
        <ul className="contactInfo">
          <li>{this.props.section.data.firstName}</li>
          <li>{this.props.section.data.lastName}</li>
          <li>{this.props.section.data.linkedin}</li>
        </ul>
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
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addSection: addSection
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyContact);
