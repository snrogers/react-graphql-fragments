import { gql } from "@apollo/client";
import { FC } from "react";
import { OrdersListOrderFragment } from "../generated/graphql";
import OrdersListItem from "./OrdersListItem";

export const ORDERS_LIST_ORDER_FRAGMENT = gql`
  fragment OrdersListOrderFragment on Order {
    id
    createdAt
    table {
      ...TableSummaryFragment
    }
  }
`;

interface OrdersListProps {
  orderIds: OrdersListOrderFragment[];
}

const OrdersList: FC<OrdersListProps> = ({ orders }) => {
  return (
    <ul>
      {orders.map((order) => (
        <li>
          <OrdersListItem order={order} />
        </li>
      ))}
    </ul>
  );
};

export default OrdersList;
