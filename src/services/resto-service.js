import { number } from "prop-types";

export default class RestoService {
  url = "http://localhost:3000";

  getResource = async (url) => {
    const res = await fetch(`${this.url}${url}`);
    if (!res.ok) {
      return "error";
    }
    const result = await res.json();
    return result;
  };
  async getMenuItems() {
    return await this.getResource("/menu/");
  }
  async pushOrder(order) {
    const number = await this.getOrderNumber();
    const newOrder = {
      id: number,
      order: order,
    };
    const response = await fetch(`${this.url}/orders/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newOrder),
    });
    if (!response.ok) {
      throw new Error("json error");
    }

  return alert(`Ваш номер заказа ${number}`);

  }
  async getOrderNumber() {
    const res = await this.getResource("/orders/");
    const orderNumber = res.length + 1;

    return orderNumber;
  }
}
