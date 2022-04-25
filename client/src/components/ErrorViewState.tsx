import React from "react";

type ErrorViewStateProps = { error?: Error };
export default ({ error }: ErrorViewStateProps) => (
  <p>{error ? JSON.stringify({ ...error }, null, 2) : "Error :("}</p>
);
