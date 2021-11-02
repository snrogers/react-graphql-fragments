import { gql } from "@apollo/client";
import { FC } from "react";
import { OrderItemSummaryFragment } from "../generated/graphql";

export const ORDER_ITEM_SUMMARY_FRAGMENT = gql`
  fragment OrderItemSummaryFragment on OrderItem {
    id
    name
    amount
    cost
  }
`;

export interface OrderItemSummaryProps {
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
