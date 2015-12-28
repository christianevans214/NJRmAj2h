'use strict';

var React = require('react-native');
var NjrmAj2H = require('./NjrmAj2H.js');

var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var systemIconTypes = ['bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated'];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'bookmarks'
    };
  },

  render: function() {
    return (
      <TabBarIOS
        style={[styles.view8Tabbarios9]}
        >
        <TabBarIOS.Item 
        systemIcon='bookmarks'
        selected={this.state.selectedTab === 'bookmarks'}
        onPress={() => {
          this.setState({
            selectedTab: 'bookmarks',
          });
        }}>
        <NjrmAj2H />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
    view8Tabbarios9:{
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
    }, 
});
