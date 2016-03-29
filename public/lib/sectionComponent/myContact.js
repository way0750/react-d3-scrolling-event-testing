import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


const MyContact = React.createClass({

  componentDidMount () {
    this.DOMnode = ReactDOM.findDOMNode(this);
    this.props.addSection(this.DOMnode, this);
  },

  playAnimation () {
    var node = d3.select(this.DOMnode);
    node.classed({"myContact": true});
},

  render () {
    return (
      <div className='sections contact'>
        <div className="myName">
          <h1>WAY</h1>
          <h1>HUANG</h1>
        </div>

        <h1 className="role">SOFTWARE ENGINEER</h1>
        <div className="summary">
          <div className="circle">
          </div>
          I am looking for oppotunity, Am I the front-end developer you are looking for?
          I can develope full-stack application, but I am more of a front-end person.
        </div>
        <h2>CONTACT:</h2>
        <ul className="contactInfo">
          {this.props.section.data.map( (obj) => {
            return (<li>
              <a href={obj.link}>{obj.link}</a>
            </li>);
          } )}
          <li>
            <a href="mailto:way0750huang@gmail.com">way0750huang@gmail.com</a>
          </li>
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
