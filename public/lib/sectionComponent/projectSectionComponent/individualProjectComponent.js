import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


const Section = React.createClass({

  componentDidMount () {
    // this.DOMnode = ReactDOM.findDOMNode(this);
    // console.log('this is the indie project, did mount', this.props.indieProject.name);
    // this.props.addSection(this.DOMnode, this);
  },

  playAnimation () {
    var node = d3.select(this.DOMnode);
    node.classed({sectionsReveal: true});
  },
// name: 'minsweeper',
//       description: 'aksf aufhjk jdhjk hajhj adjfhajkh  sjkh asjhk sdajkh sdakhjsf',
//       pic: 'link to pic'


  render () {
    return (
      <div className='sectionsReveal'>
        <h1> {this.props.indieProject.name} </h1>
        <div> {this.props.indieProject.description} </div>
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
