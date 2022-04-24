import { FC } from "react";
import { gql } from "@apollo/client";

import OrdersListItem from "./OrdersListItem";

type OrdersListProps = {
  orderIds: string[];
}
const OrdersList: FC<OrdersListProps> = ({ orderIds }) => {

  return (
    <ul>
      {orderIds.map((orderId) => (
        <li key={orderId}>
          <OrdersListItem orderId={orderId} />
        </li>
      ))}
    </ul>
  );
};

export default OrdersList;

