import { FC } from "react";
import { gql } from "@apollo/client";
import { pluck } from "ramda";

import ErrorViewState from "../ErrorViewState";
import OrdersListItem from "./OrdersListItem";
import { useOrdersListQuery } from "./OrdersList.graphql.generated";

const OrdersListQuery: FC = () => {
  const { loading, error, data } = useOrdersListQuery();

  if (loading) return <p>Loading Orders...</p>
  if (error || !data) return <ErrorViewState />;

  const { orders } = data;
  const orderIds = pluck("id", orders);

  return (
    <ul>
      {orderIds.map((orderId) => (
        <OrdersListItem key={orderId} orderId={orderId} />
      ))}
    </ul>
  );
};

export default OrdersListQuery;
