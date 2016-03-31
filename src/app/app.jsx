var React = require('react');

var model = require('../model/index');
var Sidebar = require('./sidebar');


module.exports = React.createClass({
  render: function(){
    return (
      <div className="app-wrap">
        <Sidebar sidebarData={model.sidebarData} {...this.props}></Sidebar>
        <div id="main-content" className="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
});

