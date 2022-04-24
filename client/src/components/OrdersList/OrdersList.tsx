import { gql } from "@apollo/client";
import { FC } from "react";

import OrdersListItem from "./OrdersListItem";

type OrdersListProps = {
  orderIds: string[];
}
const OrdersList: FC<OrdersListProps> = ({ orderIds }) => {
  return (
    <ul>
      {orderIds.map((orderId) => (
        <OrdersListItem key={orderId} orderId={orderId} />
      ))}
    </ul>
  );
};

export default OrdersList;
