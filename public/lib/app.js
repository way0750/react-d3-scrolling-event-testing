import axios from './httpRequest/axios.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import mainReducer from './reducers/mainReducer.js';

import Section from './sectionComponent/blankSectionComponent.js';
import MyContact from './sectionComponent/myContact.js';
import Project from './sectionComponent/projectSectionComponent/projectSectionComponent.js';
import MyTech from './sectionComponent/myTechSectionComponent.js';
import CodeSample from './sectionComponent/codeSampleSectionComponent.js';
import Education from './sectionComponent/educationSectionComponent.js';
import Personal from './sectionComponent/personalSectionComponent.js';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let store = createStore(mainReducer);

const App = React.createClass({
  getInitialState () {
    return {
      scrollEventAlreadySet: false
    };
  },

  //to find all the elements that are in view and animate them.
  findInViewElements (cb) {
    var inViewNodeAmount = 0;
    var stat, sectionObj;
    var windowHeight = window.innerHeight;
    for (var i = 0; i < this.props.section.length; i++) {
      sectionObj = this.props.section[i];
      stat = sectionObj.sectionDOM.getBoundingClientRect();
      if (stat.top < windowHeight * 0.4 || stat.bottom < windowHeight) {
        // cb(sectionObj.section);
        (function (sectionComponent) {
          setTimeout(sectionComponent.playAnimation, 0);
        })(sectionObj.section);
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
    var nodeAmount = 0;

    nodeAmount = this.findInViewElements();
    this.props.updateSectionList(nodeAmount);
    if (this.state.scrollEventAlreadySet === false) {
      this.state.scrollEventAlreadySet = true;
      window.addEventListener('scroll', () => {
        //animating elements:
        nodeAmount = this.findInViewElements();
        this.props.updateSectionList(nodeAmount);
      });
    }
  },

  render () {
    return (
      <div>
        {
          this.props.resume.map( (section, index) => {
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
  } else if (section.catagoryName === 'projects') {
    return <Project  section = {section} key={index}/>;
  } else if (section.catagoryName === 'myTech') {
    return <MyTech  section = {section} key={index} />;
  } else if (section.catagoryName === 'codeSample') {
    return <CodeSample  section = {section} key={index} />;
  } else if (section.catagoryName === 'education') {
    return <Education  section = {section} key={index} />;
  } else if (section.catagoryName === 'personal') {
    return <Personal  section = {section} key={index} />;
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

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("content")
);
