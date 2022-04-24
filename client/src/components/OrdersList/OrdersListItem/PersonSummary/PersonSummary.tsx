import React, { FC } from "react";
import { gql } from "@apollo/client";
import { pluck } from "ramda";

import ErrorViewState from "../../../ErrorViewState";
import LoadingViewState from "../../../LoadingViewState";
import NotFoundViewState from "../../../NotFoundViewState";
import OrderItemSummary from "../OrderItemSummary";
import { usePersonSummaryQuery } from "./PersonSummary.graphql.generated";

type PersonSummaryProps = {
  personId: string;
};
const PersonSummary: FC<PersonSummaryProps> = ({ personId }) => {
  const { data, loading, error } = usePersonSummaryQuery({
    variables: { personId },
  });

  if (loading) return <LoadingViewState />;
  if (error || !data) return <ErrorViewState />;
  if (!data.personById) return <NotFoundViewState />;

  const { personById: person } = data;
  const orderItemIds = pluck("id", person.orderItems);

  return (
    <li style={{ border: 'solid 1px black' }}>
      <h5>Person</h5>
      <div>
        <div>
          <a href={`/people/${person.id}`}>{person.name}</a> ({person.age} y/o)
        </div>
        <div>
          <ol>
            {orderItemIds.map((orderItemId) => (
              <OrderItemSummary key={orderItemId} orderItemId={orderItemId} />
            ))}
          </ol>
        </div>
      </div>
    </li>
  );
};

export default PersonSummary;
