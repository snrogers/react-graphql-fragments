import { gql } from "@apollo/client";
import { FC } from "react";
import { PersonSummaryFragment } from "../generated/graphql";
import OrderItemSummary from "./OrderItemSummary";

export const PERSON_SUMMARY_FRAGMENT = gql`
  fragment PersonSummaryFragment on Person {
    id
    name
    age
    orderItems {
      ...OrderItemSummaryFragment
    }
  }
`;

export interface PersonSummaryProps {
  person: PersonSummaryFragment;
}

const PersonSummary: FC<PersonSummaryProps> = ({ person }) => {
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
