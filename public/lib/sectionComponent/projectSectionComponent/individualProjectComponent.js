import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


const Section = React.createClass({

  playAnimation () {
    var node = d3.select(this.DOMnode);
    node.classed({sectionsReveal: true});
  },



  render () {
    return (
        <div className='sectionsReveal indieProject'>
          <div className="indieProjectStat">
            <div className='indieProjectName'>
              <h1>{this.props.indieProject.name}</h1> 
              <div className="indieProjectSubtitle">{this.props.indieProject.description}</div>
            </div>
            <div className="indieProjectTech">
              <img src={"assets/projectPics/" + this.props.indieProject.techPicName}/>
            </div>
          </div>



          <div className="indieProjectPic">
            <img src={"assets/projectPics/" + this.props.indieProject.bottomPic} className="indieProjectButtonPic"/>
            <a href = {this.props.indieProject.linkToProject} className="indieProjectHoverPic">
              <img src={"assets/projectPics/" + this.props.indieProject.hoverPic}/>
            </a>
          </div>
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
