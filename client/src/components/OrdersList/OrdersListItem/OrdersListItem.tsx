import { FC } from "react";
import TableSummary from "./TableSummary";
import { OrdersListItemOrderFragment } from "./OrdersListItem.graphql.generated";

type OrdersListItemProps = {
  order: OrdersListItemOrderFragment;
};
const OrdersListItem: FC<OrdersListItemProps> = ({ order }) => {
  return (
    <li style={{ border: "solid 1px black" }}>
      <div key={order.id} style={{ border: "1px black solid" }}>
        <div>
          <a href={`/orders/${order.id}`}>{order.id}</a>{" "}
          <span>({new Date(order.createdAt * 1000).toString()})</span>
        </div>

        <TableSummary tableId={order.table.id} />
      </div>
    </li>
  );
};

export default OrdersListItem;
