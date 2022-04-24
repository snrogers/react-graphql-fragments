import { FC } from "react";
import { gql } from "@apollo/client";
import { pluck } from "ramda";

import OrdersList from "../components/OrdersList";
import { useOrdersViewQuery } from "./OrdersView.graphql.generated";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";

const OrdersView: FC = () => {
  return (
    <div>
      <div>
        <a href="/">
          <img src="https://tableneeds.com/wp-content/uploads/2021/08/tn-new.svg" />
        </a>
      </div>
      <h1>Orders</h1>
      <OrdersList />
    </div>
  );
};

export default OrdersView;
