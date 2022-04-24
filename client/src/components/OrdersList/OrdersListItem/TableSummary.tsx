import { FC } from "react";
import { TableSummaryFragment } from "../../../generated/graphql";
import PersonSummary from "../../PersonSummary";

// Fragment is in ./TableSummaryFragment.graphql

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
              <PersonSummary person={person} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TableSummary;
