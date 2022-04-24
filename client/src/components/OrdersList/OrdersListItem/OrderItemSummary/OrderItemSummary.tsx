import { gql } from "@apollo/client";
import { FC } from "react";

import ErrorState from "../../../ErrorState";
import LoadingState from "../../../LoadingState";
import NotFound from "../../../NotFound";
import { useOrderItemSummaryQuery } from "./OrderItemSummary.graphql.generated";

type OrderItemSummaryProps = {
  orderItemId: string;
};
const OrderItemSummary: FC<OrderItemSummaryProps> = ({ orderItemId }) => {
  const { data, loading, error } = useOrderItemSummaryQuery({
    variables: { orderItemId },
  });

  if (loading) return <LoadingState />
  if (error || !data) return <ErrorState />

  const { orderItemById: orderItem } = data;
  if (!orderItem) return <NotFound />;

  return (
    <li>
      <div key={orderItem.id}>
        <div>
          ({orderItem.amount}){" "}
          <a href={`/order-items/${orderItem.id}`}>{orderItem.name}</a>{" "}
          {`$${orderItem.cost}`}
        </div>
      </div>
    </li>
  );
};

export default OrderItemSummary;
