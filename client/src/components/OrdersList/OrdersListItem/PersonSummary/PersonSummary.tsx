import { gql } from "@apollo/client";
import {pluck} from "ramda";
import { FC } from "react";
import OrderItemSummary from "../OrderItemSummary";
import { usePersonSummaryQuery } from './PersonSummary.graphql.generated'

type PersonSummaryProps = {
  personId: string;
}
const PersonSummary: FC<PersonSummaryProps> = ({ personId }) => {

  const { data, loading, error } = usePersonSummaryQuery({
    variables: { personId }
  })

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error :(</p>;

  const { person } = data;
  const orderItemIds = pluck("id", person.orderItems)

  return (
    <div key={person.id}>
      <div>
        <a href={`/people/${person.id}`}>{person.name}</a> ({person.age} y/o)
      </div>
      <div>
        <ol>
          {person.orderItems.map((orderItem) => (
            <li>
              <OrderItemSummary orderItem={orderItem} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default PersonSummary;
