import React, { FC } from "react";
import { gql } from "@apollo/client";
import { pluck } from "ramda";

import ErrorState from "../../../ErrorState";
import LoadingState from "../../../LoadingState";
import NotFound from "../../../NotFound";
import OrderItemSummary from "../OrderItemSummary";
import { usePersonSummaryQuery } from "./PersonSummary.graphql.generated";

type PersonSummaryProps = {
  personId: string;
};
const PersonSummary: FC<PersonSummaryProps> = ({ personId }) => {
  const { data, loading, error } = usePersonSummaryQuery({
    variables: { personId },
  });

  if (loading) return <LoadingState />;
  if (error || !data) return <ErrorState />;

  const { personById: person } = data;
  if (!person) return <NotFound />;

  const orderItemIds = pluck("id", person.orderItems);

  return (
    <li>
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
