import React, { Component } from "react";
import ProductListItem from "../components/ProductListItem";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Ionicons } from "@expo/vector-icons"
import ProductList from '../components/ProductListItem';
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

  searchHandler = (text) => {
    const { searchProducts, resetProducts } = this.props.actions;
    this.setState({ searchText: text }, () => {
      const { searchText } = this.state;
      searchProducts(searchText, 1, this.props.limit);
    });

  }

  render() {
    const { products, navigation, isLoading } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.searchSection}>
          <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000" />
          <TextInput
            style={styles.searchBar}
            value={this.state.searchText}
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.searchHandler(text)}
            placeholder='Search' />
        </View>
        <View style={{ flex: 1 }}>
          <ProductList
            config={{ enableWish: true }}
            navigation={navigation}
            isLoading={isLoading}
            products={products}
            onWishTapped={this.onWishTapped}
            getMore={this._getMore}
            type="search"
          />
        </View>
      </View>
    );
  }
}

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
  SearchList
);