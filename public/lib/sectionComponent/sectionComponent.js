import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//all the template for different type of content
import MyContact from './myContact/myContact.js';


const Section = React.createClass({

  componentDidMount () {
    this.DOMnode = ReactDOM.findDOMNode(this);
    // d3.select(DOMnode).classed({'section': true});
    this.props.addSection(this.props.index, this.DOMnode, this);
  },

  playAnimation () {
    var node = d3.select(this.DOMnode);
    node.classed({sectionsReveal: true});
  },

  render () {
    var element = matchElement(this.props.section);

    return (
      <div className='sections'>
        {element}
      </div>);
  }
});

function matchElement (section) {
  if (section.catagoryName === 'contact') {
    return <MyContact section = {section}/>;
  } else {
    return (
        <div>
          <div>
            {section.catagoryHeading}
          </div>
          <div>
            {section.catagoryName}
          </div>
        </div>
      );
  }
}

function addSection (index, sectionDOM, sectionComponent) {
  return {
    type: 'addSection',
    payload: {
      index: index,
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
// export default Section;
