import axios from './httpRequest/axios.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import mainReducer from './reducers/mainReducer.js';

import Section from './sectionComponent/plaintSectionComponent.js';
import MyContact from './sectionComponent/myContact.js';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let store = createStore(mainReducer);

const App = React.createClass({
  findInViewElements (cb) {
    var inViewNodeAmount = 0;
    var stat, sectionObj;
    var windowHeight = window.innerHeight;
    for (var i = 0; i < this.props.section.length; i++) {
      sectionObj = this.props.section[i];
      stat = sectionObj.sectionDOM.getBoundingClientRect();
      if (stat.top < windowHeight * 0.5 || stat.bottom < windowHeight) {
        cb(sectionObj.section);
        inViewNodeAmount++;
      } else {
        //end iteraction at first element that is not in view;
        return inViewNodeAmount;
      } 
    }
  },

  componentWillMount () {
    axios.get('/resume')
    .then( (respond) => {
      this.props.getResume(respond.data);
    });
  },

  componentDidUpdate () {

    var addClassToEle = function (sectionComponent) {
      setTimeout(sectionComponent.playAnimation, 0);
    };
    var nodeAmount = 0;

    nodeAmount = this.findInViewElements(addClassToEle);
    this.props.updateSectionList(nodeAmount);
    window.addEventListener('scroll', () => {
      nodeAmount = this.findInViewElements(addClassToEle);
      this.props.updateSectionList(nodeAmount);
    });
  },

  render () {
    return (
      <div>
        there will be blood!
        {
          this.props.resume.map( (section, index) => {
            // let component = <Section section={section} key={index} index = {index}/>;
            return matchElement(section, index);
          } )
        }
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    resume: state.resume,
    section: state.section
  };
}

function getResume (httpRespondData) {
  return {
    type: 'receivedResume',
    payload: httpRespondData
  };
}

function updateSectionList(inViewNodeAmount) {
  //should delete nodes from the this.props.section
  return {
    type: 'deleteSection',
    payload: inViewNodeAmount
  };
}

function matchElement (section, index) {
  if (section.catagoryName === 'contact') {
    return <MyContact section = {section} key={index}/>;
  } else {
    return <Section  section = {section} key={index} />;
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    getResume: getResume,
    updateSectionList: updateSectionList
  }, dispatch);
}

const AAA = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <AAA />
  </Provider>,
  document.getElementById("content")
);
