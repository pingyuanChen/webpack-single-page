var React = require('react');
var Components = require('react-ui-components');
var Menu = Components.Menu;
var WindowListener = Components.WindowListener;
var browserHistory = require('react-router').browserHistory;

module.exports = React.createClass({
  mixins: [WindowListener],

  propTypes: {
    sidebarData: React.PropTypes.array.isRequired,
    selectedVal: React.PropTypes.string
  },

  getInitialState: function(){
    return {
      selectedVal: this.props.selectedVal || ''
    };
  },

  render: function(){
    return (
      <div className="sidebar-menu demo-middle">
        <Menu
          menuItems={this.props.sidebarData}
          selectedVal={this.state.selectedVal}
          displayKey="display"
          valKey="link"
          itemTpl={this._itemTpl}
          onItemTap={this._onItemTap} >
        </Menu>
      </div>
    );
  },

  _itemTpl: function(index, data, selected, displayKey, valKey){
    var displayText = data[displayKey],
      displayVal = data[valKey];
    return (
      <div data-val={displayVal} className={selected ? 'selected' : ''}>
        <span className="menu-item-text">
          <span className="menu-item-link" to={displayVal}>{displayText}</span>
        </span>
      </div>
    );
  },

  _onItemTap: function(e, index, data){
    browserHistory.push({
      pathname: '/'+data.link
    });
    this.setState({
      selectedVal: data.link
    });
  }
  
});



