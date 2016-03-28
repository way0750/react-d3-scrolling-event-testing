import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


const Section = React.createClass({

  componentDidMount () {
    this.DOMnode = ReactDOM.findDOMNode(this);
    // d3.select(DOMnode).classed({'section': true});
    this.props.addSection(this.DOMnode, this);
  },

  playAnimation () {
    var node = d3.select(this.DOMnode);
    node.classed({sectionsReveal: true});
  },

  render () {
    return (
      <div className='sections'>
        <h1> Education </h1>
        {this.props.section.school.map( (schoolObj) => {
          return (
              <div>
                <h1>{schoolObj.schoolName}</h1>
                <div>{schoolObj.education}</div>
                <time>{schoolObj.year}</time>
              </div>
            );
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
