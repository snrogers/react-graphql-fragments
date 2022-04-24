import { FC } from "react";
import ErrorState from "../../../ErrorState";
import LoadingState from "../../../LoadingState";
import NotFound from "../../../NotFound";
import PersonSummary from "../PersonSummary";
import { useTableSummaryQuery } from './TableSummary.graphql.generated'

export interface TableSummaryProps {
  tableId: string;
}

const TableSummary: FC<TableSummaryProps> = ({ tableId }) => {
  const { data, loading, error } = useTableSummaryQuery({
    variables: { tableId },
  });

  if (loading) return <LoadingState />
  if (error || !data) return <ErrorState />

  const { tableById: table } = data;
  if (!table) return <NotFound />;

  return (
    <div>
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
