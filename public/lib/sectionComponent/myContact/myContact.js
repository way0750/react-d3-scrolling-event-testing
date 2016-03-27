import React from 'react';

const MyContact = React.createClass({

  render () {
    return (<div style={ {backgroundColor: 'red'} }>
        <h1>
          {this.props.section.catagoryName}
        </h1>
        <div>
          {this.props.section.catagoryHeading}
        </div>
      </div>
      );
  }

});




export default MyContact;
