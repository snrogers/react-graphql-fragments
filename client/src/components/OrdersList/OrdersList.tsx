import { FC } from "react";
import { gql } from "@apollo/client";

import OrdersListItem from "./OrdersListItem";

type OrdersListProps = {
  orderIds: string[];
}
const OrdersList: FC<OrdersListProps> = ({ orderIds }) => {

  return (
    <div>
      {orderIds.map((orderId) => (
        <OrdersListItem key={orderId} orderId={orderId} />
      ))}
    </div>
  );
};

export default OrdersList;

