import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client";
import { MainRoutes } from "./routes/Routes";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MainRoutes />
    </ApolloProvider>
  );
};

export default App;
