import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  FlatList,

} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Ionicons } from "@expo/vector-icons"
import ProductListItem from '../components/ProductListItem';
import * as searchProductsActionCreator from "../actionCreators/SearchItem";

let URI = "http://172.16.105.165:4000";

class SearchItem extends Component {
  static navigationOptions = {
    title: `Search`,
  };
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  
  onWishTapped = id => {
  };

  _getProducts = (page = 1, limit = 8) => {
    const { searchText } = this.state;
    this.props.actions.getSearchProducts(searchText, page, limit);
  };

  /*  flat list supporting methods */

  _getMore = () => {
    this._getProducts(++this.props.page, this.props.limit);
  };

  _renderItem = ({ index, item }) => {
    return (
      <ProductListItem
        {...this.props}
        id={item.id}
        title={`${item.id} - ${item.title}`}
        image={item.image ? `${URI}/images/${item.image}` : null}
        rating={item.rating}
        price={item.price}
        wish={item.wish || false}
        onWishTapped={this.onWishTapped}
      />
    );
  };

  _keyExtractor = (item, index) => {
    return `${index}`;
  };

  searchHandler = (text) => {
    const { getSearchProducts, resetProducts } = this.props.actions;
    this.setState({ searchText: text }, () => {
      const { searchText } = this.state;
      getSearchProducts(searchText, 1, this.props.limit);
    });
  }

  render() {
    const { products, navigation, isLoading } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.searchSection}>
          <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#888888" />
          <TextInput
            style={styles.searchBar}
            value={this.state.searchText}
            onChangeText={(text) => this.searchHandler(text)}
            placeholder='Search' />
        </View>
        <View style={{flex:1,backgroundColor:'#fff'}}>
        {this.props.isLoading ? (
          <ActivityIndicator size="large" color="#00ff80" />
        ) : (
          <FlatList
            data={this.props.products}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            onEndReachedThreshold={0.5}
            onEndReached={this._getMore}
          />
        )}
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchSection: {
    position: 'relative',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  searchIcon: {
    position: 'absolute',
    top: 13,
    left: 13,
    padding: 10,
    zIndex: 1,
  },
  searchBar: {
    flex: 1,
    margin: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 40,
    paddingBottom: 10,
    borderRadius: 40,
    backgroundColor: '#fff',
    color: '#424242',
  },
  noResults: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});


function mapStateToProps(state) {
  return {
    products: state.searchState.products,
    isLoading: state.searchState.isLoading,
    isRefreshing: state.searchState.isRefreshing,
    page: state.searchState.page,
    limit: state.searchState.limit
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchProductsActionCreator, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  SearchItem
);