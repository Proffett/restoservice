import React, { Component } from "react";
import MenuListItem from "../menu-list-item";
import { connect } from "react-redux";
import WithRestoService from "../hoc";
import {
  menuLoaded,
  menuRequsted,
  errorRecieved,
  addedToCart,
} from "../../actions";
import Spinner from "../spinner";
import Error from "../error";
// import {Route} from 'react-router-dom';

import "./menu-list.scss";

class MenuList extends Component {
  componentDidMount() {
    this.props.menuRequsted();

    const { RestoService } = this.props;
    RestoService.getMenuItems()
      .then((res) => this.props.menuLoaded(res))
      .catch(() => this.props.errorRecieved());
  }

  renderPage(items, addedToCart) {
    return items.map((menuItem) => {
      return (
        // <Route path={item.title} component={MenuListItem}>
        <MenuListItem
          key={menuItem.id}
          menuItem={menuItem}
          onAddToCart={() => addedToCart(menuItem.id, menuItem.price)}
        />
        // </Route>
      );
    });
  }

  render() {
    const { menuItems, loading, error, addedToCart } = this.props;
    console.log(this.props);

    if (loading) {
      return <Spinner />;
    } else if (error) {
      return <Error />;
    }
    return <ul className="menu__list">{this.renderPage(menuItems, addedToCart)}</ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
    loading: state.loading,
    error: state.error,
  };
};
const mapDispatchToProps = {
  menuLoaded,
  menuRequsted,
  errorRecieved,
  addedToCart,
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
