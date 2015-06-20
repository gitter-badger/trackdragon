// ThreadSection.react.js -||- component -||- alt

var React = require('react');
var ThreadStore = require('../stores/ThreadStore');
/*
var MessageStore = require('../stores/MessageStore');
var ThreadListItem = require('../components/ThreadListItem.react');
var ThreadStore = require('../stores/ThreadStore');
var UnreadThreadStore = require('../stores/UnreadThreadStore');
var ListenerMixin = require('../../../../mixins/ListenerMixin');
*/

function getStateFromStores() {
  return {
    threads: ThreadStore.getAllChrono(),
    currentThreadID: ThreadStore.getCurrentID()/*,
    unreadCount: UnreadThreadStore.getCount()*/
  };
}

var ThreadSection = React.createClass({
  //mixins: [ListenerMixin],

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    //this.listenTo(ThreadStore, this._onChange);
    //this.listenTo(UnreadThreadStore, this._onChange);
  },

  render: function() {
    
    var threadListItems = this.state.threads.map(function(thread) {
      return (
        <div>ThreadListItem
          key={thread.id}
          thread={thread}
          currentThreadID={this.state.currentThreadID} </div>
      );
    }, this);
    /*
    var unread =
      this.state.unreadCount === 0 ?
      null :
      <span>Unread threads: {this.state.unreadCount}</span>;
    return (
      <div className="thread-section">
        <div className="thread-count">
          {unread}
        </div>
        <ul className="thread-list">
          {threadListItems}
          </ul>
      </div>
    );
    */

    // TEMP PLACEHOLDER
    return (
      <div className="thread-section">
        <div className="thread-count">
          [unread]
        </div>
        <ul className="thread-list">
          [threadListItems]
          {threadListItems}
        </ul>
      </div>
    );

  },

  /**
   * Event handler for 'change' events coming from the stores
   */
  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = ThreadSection;