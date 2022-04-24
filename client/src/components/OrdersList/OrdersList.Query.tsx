import { FC } from "react";
import { gql } from "@apollo/client";
import { pluck } from "ramda";

import ErrorState from "../ErrorState";
import LoadingState from "../LoadingState";
import OrdersListItem from "./OrdersListItem";
import { useOrdersListQuery } from "./OrdersList.graphql.generated";

const OrdersListQuery: FC = () => {
  const { loading, error, data } = useOrdersListQuery();

  if (loading) return <LoadingState />;
  if (error || !data) return <ErrorState />;

  const { orders } = data;
  const orderIds = pluck("id", orders);

  return (
    <ul>
      {orderIds.map((orderId) => (
        <li key={orderId}>
          <OrdersListItem orderId={orderId} />
        </li>
      ))}
    </ul>
  );
};

export default OrdersListQuery;
