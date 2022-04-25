import { FC } from "react";
import { pluck } from "ramda";

import ErrorViewState from "../../../ErrorViewState";
import NotFoundViewState from "../../../NotFoundViewState";
import OrderItemSummary from "../OrderItemSummary";
import PresentKillModalButton from "./PresentKillModalButton";
import { usePersonSummaryQuery } from "./PersonSummary.graphql.generated";

type PersonSummaryProps = {
  personId: string;
};
const PersonSummary: FC<PersonSummaryProps> = ({ personId }) => {
  const { data, loading, error } = usePersonSummaryQuery({
    variables: { personId },
  });

  if (loading) return <p>Loading Person: [{personId}] </p>;
  if (error || !data) return <ErrorViewState />;
  if (!data.personById) return <NotFoundViewState />;

  const { personById: person } = data;
  const orderItemIds = pluck("id", person.orderItems);

  return (
    <li style={{ border: "solid 1px black" }}>
      <h5>
        Person
        {person.isDead && <h1 style={{ fontSize: "100px" }}>💀</h1>}
        <PresentKillModalButton personId={person.id} />
      </h5>
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
