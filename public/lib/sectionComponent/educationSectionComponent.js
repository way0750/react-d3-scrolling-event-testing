import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


const Section = React.createClass({

  componentDidMount () {
    this.DOMnode = ReactDOM.findDOMNode(this);
    this.props.addSection(this.DOMnode, this);
  },

  playAnimation () {
    var node = d3.select(this.DOMnode);
    node.classed({sectionsReveal: true});
  },

  render () {
    return (
      <div className='sections educationSection'>
        <h1 className = "educationSectionTitle"> Education </h1>
        {this.props.section.school.map( (schoolObj) => {
          return (
              <div className="indieEducation">
                <div className="educationStat">
                  <h1>{schoolObj.schoolName}</h1>
                  <div>{schoolObj.education}</div>
                  <time>{schoolObj.year}</time>
                </div>
                <img className="schoolPic" src={'assets/education/' + schoolObj.schoolPic} />
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
