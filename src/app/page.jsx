var React = require('react');
var page = require('page');

var pages = {};

module.exports = React.createClass({
  getInitialState: function(){
    return {
      page: 'buttons'
    };
  },

  componentDidMount: function(){
    page('/:page', this._routeChange);
    page();
  },

  render: function(){
    return (
      <div className="page-container">
        <div id="buttons-page" className={"page-view "+(this.state.page == "buttons" ? '' : 'hide')}></div>
        <div id="dialog-page" className={"page-view "+(this.state.page == "dialog" ? '' : 'hide')}></div>
        <div id="dropdown-menu-page" className={"page-view "+(this.state.page == "dropdown-menu" ? '' : 'hide')}></div>
        <div id="icon-button-page" className={"page-view "+(this.state.page == "icon-button" ? '' : 'hide')}></div>
        <div id="tab-page" className={"page-view "+(this.state.page == "tab" ? '' : 'hide')}></div>
        <div id="toast-page" className={"page-view "+(this.state.page == "toast" ? '' : 'hide')}></div>
      </div>
    );
  },

  _routeChange: function(ctx){
    var curPage = ctx.params.page;
    this.setState({'page': curPage});

    if(pages[curPage]) return;  //loaded

    pages[curPage] = true;
    loadScript('./'+curPage+'-bundle.js');
  }
});

function loadScript(src){
  var scriptEle = document.createElement('script'),
    headDom = document.getElementsByTagName('head')[0];

  scriptEle.src = src;
  scriptEle.async = true;
  headDom.appendChild(scriptEle);
}



