import React from "react";
import { Header } from "semantic-ui-react";

const PageHeader = () => {
  return (
    <div>
      <Header data-cy="page-header" as="h1">Course List</Header>
    </div>
  );
};

export default PageHeader;
