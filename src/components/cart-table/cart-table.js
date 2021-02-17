import React from "react";
import WithRestoService from "../hoc";
import { connect } from "react-redux";
import { deleteFromCart } from "../../actions";

import "./cart-table.scss";

const CartTable = ({ items, deleteFromCart, summaryPrice, RestoService }) => {
  // props.children.RestoService.pushMenuItems()
  //   .then((res) => this.props.menuLoaded(res))
  //   .catch(() => this.props.errorRecieved());
  if (items.length === 0) {
    return <div className="cart__title"> Ваша корзина пуста :( </div>;
  }
 
  return (
    <>
      <div className="cart__title">Ваш заказ на сумму {summaryPrice} $:</div>
      <div className="cart__list">
        {items.map((item) => {
          const { title, price, url, id, qtty } = item;
          if (item.qtty > 1) {
          }
          return (
            <div key={id + Math.random()} className="cart__item">
              <img src={url} className="cart__item-img" alt={title}></img>
              <div className="cart__item-title">{title}</div>
              <div className="cart__item-price">
                {price}$ <span>кол-во {qtty}</span>
              </div>
              <div onClick={() => deleteFromCart(id, -price)} className="cart__close">
                &times;
              </div>
            </div>
          );
        })}
        <div className="cart__title">
          <button onClick={() => RestoService.pushOrder(generateOrder(items))}>
            Оформить
          </button>
        </div>
      </div>
    </>
  );
};
const generateOrder = (items) => {
  const newOrder = items.map((item) => {
    return {
      id: item.id,
      qtty: item.qtty,
    };
  });
  return newOrder;
};

const mapStateToProps = ({ items, summaryPrice }) => {
  return {
    items,
    summaryPrice,
  };
};

const mapDispatchToProps = {
  deleteFromCart,
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));
