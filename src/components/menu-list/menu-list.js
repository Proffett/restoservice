import React, { Component } from "react";
import MenuListItem from "../menu-list-item";
import { connect } from "react-redux";
import WithRestoService from "../hoc";
import { menuLoaded, menuRequsted, errorRecieved } from "../../actions";
import Spinner from "../spinner";
import Error from "../error";

import "./menu-list.scss";

class MenuList extends Component {
  componentDidMount() {
    this.props.menuRequsted();

    const { RestoService } = this.props;
    RestoService.getMenuItems()
      .then((res) => this.props.menuLoaded(res))
      .catch(() => this.props.errorRecieved());
  }

  renderPage(items) {
    return items.map((item) => {
      return <MenuListItem key={item.id} menuItem={item} />;
    });
  }

  render() {
    const { menuItems, loading, error } = this.props;
    console.log(this.props);

    if (loading) {
      return <Spinner />;
    } else if (error) {
      return <Error />;
    }
    return <ul className="menu__list">{this.renderPage(menuItems)}</ul>;
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
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
