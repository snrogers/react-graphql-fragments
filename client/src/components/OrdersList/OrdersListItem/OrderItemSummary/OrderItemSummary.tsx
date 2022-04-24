import { gql } from "@apollo/client";
import { FC } from "react";

type OrderItemSummaryProps = {
  orderItem: OrderItemSummaryFragment;
}
const OrderItemSummary: FC<OrderItemSummaryProps> = ({ orderItem }) => {
  return (
    <div key={orderItem.id}>
      <div>
        ({orderItem.amount}){" "}
        <a href={`/order-items/${orderItem.id}`}>{orderItem.name}</a>{" "}
        {`$${orderItem.cost}`}
      </div>
    </div>
  );
};

export default OrderItemSummary;
