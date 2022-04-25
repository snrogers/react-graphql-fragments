import { FC } from "react";

import ErrorViewState from "../../../ErrorViewState";
import NotFoundViewState from "../../../NotFoundViewState";
import PersonSummary from "../PersonSummary";
import { useTableSummaryQuery } from "./TableSummary.graphql.generated";

type TableSummaryProps = {
  tableId: string;
};
const TableSummary: FC<TableSummaryProps> = ({ tableId }) => {
  const { data, loading, error } = useTableSummaryQuery({
    variables: { tableId },
  });

  if (loading) return <p>Loading Table: [{tableId}] </p>;
  if (error || !data) return <ErrorViewState />;
  if (!data.tableById) return <NotFoundViewState />;

  const { tableById: table } = data;

  return (
    <div style={{ border: "solid 1px black" }}>
      <h2>
        <a href={`/tables/${table.id}`}> {table.name}</a>
      </h2>
      <div>
        <ol>
          {table.persons.map((person) => (
            <PersonSummary key={person.id} personId={person.id} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TableSummary;
