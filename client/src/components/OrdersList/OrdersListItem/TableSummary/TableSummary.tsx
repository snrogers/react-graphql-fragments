import { FC } from "react";
import PersonSummary from "../PersonSummary";
import { TableSummaryFragment } from './TableSummary.graphql.generated'

export interface TableSummaryProps {
  table: TableSummaryFragment;
}

const TableSummary: FC<TableSummaryProps> = ({ table }) => {
  return (
    <div key={table.id}>
      <h2>
        <a href={`/tables/${table.id}`}> {table.name}</a>
      </h2>
      <div>
        <ol>
          {table.persons.map((person) => (
            <li>
              <PersonSummary personId={person.id} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TableSummary;
