import React, { FC } from "react";

import ErrorViewState from "../../../ErrorViewState";
import LoadingViewState from "../../../LoadingViewState";
import NotFoundViewState from "../../../NotFoundViewState";
import { useOrderItemSummaryQuery } from "./OrderItemSummary.graphql.generated";

type OrderItemSummaryProps = {
  orderItemId: string;
};
const OrderItemSummary: FC<OrderItemSummaryProps> = ({ orderItemId }) => {
  const { data, loading, error } = useOrderItemSummaryQuery({
    variables: { orderItemId },
  });

  if (loading) return <LoadingViewState />;
  if (error || !data) return <ErrorViewState />;
  if (!data.orderItemById) return <NotFoundViewState />;

  const { orderItemById: orderItem } = data;

  return (
    <li style={{ border: "solid 1px black" }}>
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
