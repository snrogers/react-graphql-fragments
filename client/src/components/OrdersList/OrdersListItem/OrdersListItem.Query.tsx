import { FC } from "react";
import ErrorViewState from "../../ErrorViewState";
import LoadingViewState from "../../LoadingViewState";
import OrdersListItem from "./OrdersListItem";

import TableSummary from "./TableSummary/TableSummary";
import { useOrdersListItemQuery } from './OrdersListItem.graphql.generated'
import NotFoundViewState from "../../NotFoundViewState";

// ----------------------------------------------------------------- //
// Public API
// ----------------------------------------------------------------- //
type OrdersListItemQueryProps = {
  orderId: string;
}
const OrdersListItemQuery: FC<OrdersListItemQueryProps> = (props) => {
  const { orderId } = props

  const { data, loading, error } = useOrdersListItemQuery({
    variables: { orderId }
  })

  if (loading ) return <LoadingViewState />
  if (error || !data) return <ErrorViewState error={error} />
  if (!data.orderById) return <NotFoundViewState />

  const { orderById: order }  = data

  return (
    <OrdersListItem order={order} />
  );
};

export default OrdersListItemQuery;
