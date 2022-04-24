import { FC } from "react";
import TableSummary from "./TableSummary";
import { OrdersListItemOrderFragment } from './OrdersListItem.graphql.generated'

interface OrdersListItemProps {
  order: OrdersListItemOrderFragment;
}

const OrdersListItem: FC<OrdersListItemProps> = ({ order }) => {
  return (
    <div key={order.id} style={{ border: '1px black solid' }}>
      <div>
        <a href={`/orders/${order.id}`}>{order.id}</a>{" "}
        <span>({new Date(order.createdAt * 1000).toString()})</span>
      </div>
      <TableSummary table={order.table} />
    </div>
  );
};

export default OrdersListItem;

