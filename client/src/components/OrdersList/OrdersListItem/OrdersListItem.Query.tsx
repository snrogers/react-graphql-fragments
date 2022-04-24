import { FC } from "react";
import { OrdersListOrderFragment } from "../generated/graphql";
import TableSummary from "./TableSummary";

interface OrdersListItemQueryProps {
  orderId: string;
}

const OrdersListItemQuery: FC<OrdersListItemQueryProps> = (props) => {
  const { orderId } = props

  return (
    <div style={{ border: '1px black solid' }}>
      <div>
        <a href={`/orders/${order.id}`}>{order.id}</a>{" "}
        <span>({new Date(order.createdAt * 1000).toString()})</span>
      </div>
      <TableSummary table={order.table} />
    </div>
  );
};

export default OrdersListItemQuery;
