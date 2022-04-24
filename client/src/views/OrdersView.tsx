import { FC } from "react";
import { gql } from "@apollo/client";
import { pluck } from "ramda";

import OrdersList from "../components/OrdersList";
import { useOrdersViewQuery } from "./OrdersView.graphql.generated";
import LoadingViewState from "../components/LoadingViewState";
import ErrorViewState from "../components/ErrorViewState";

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
