var React = require('react');
var injectTapEventPlugin = require('react-tap-event-plugin');
var page = require('page');

var model = require('./model/index');
var Page = require('./app/page');
var Sidebar = require('./app/sidebar');


injectTapEventPlugin();

var App = React.createClass({
  render: function(){
    return (
      <div>
        <Sidebar sidebarData={model.sidebarData} ></Sidebar>
        <div id="main-content" className="main-content">
          <Page />
        </div>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('main'))









