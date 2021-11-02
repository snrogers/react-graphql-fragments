import { gql } from "@apollo/client";
import { FC } from "react";
import OrdersList from "../components/OrdersList";
import { OrdersViewQuery, useOrdersViewQuery } from "../generated/graphql";

export const ORDERS_VIEW_QUERY = gql`
  query OrdersView {
    orders {
      ...OrdersListOrderFragment
    }
  }
`;

const OrdersView: FC = () => {
  const { loading, error, data } = useOrdersViewQuery();

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error :(</p>;

  return (
    <div>
      <div>
        <a href="/">
          <img src="https://tableneeds.com/wp-content/uploads/2021/08/tn-new.svg" />
        </a>
      </div>
      <h1>Orders</h1>
      <OrdersList orders={data.orders} />
    </div>
  );
};

export default OrdersView;
