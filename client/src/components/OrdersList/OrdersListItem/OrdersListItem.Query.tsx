import { FC } from "react";
import ErrorState from "../../ErrorState";
import LoadingState from "../../LoadingState";
import OrdersListItem from "./OrdersListItem";

import TableSummary from "./TableSummary/TableSummary";
import { useOrdersListItemQuery } from './OrdersListItem.graphql.generated'
import NotFound from "../../NotFound";

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

  if (loading ) return <LoadingState />
  if (error || !data) return <ErrorState />

  const { orderById }  = data

  if (!orderById) return <NotFound />

  return (
    <OrdersListItem order={orderById} />
  );
};

export default OrdersListItemQuery;
