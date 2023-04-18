import { gql } from "@apollo/client";

export const SEARCH_USER = gql`
  query SearchUser($query: String!) {
    search(query: $query, type: USER, first: 100) {
      nodes {
        ...UserInfo
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($login: String!) {
    user(login: $login) {
      ...UserRepositoriesInfo
    }
  }
`;
