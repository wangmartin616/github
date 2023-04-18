import { gql } from "@apollo/client";

export const USER_INFO_FRAGMENT = gql`
  fragment UserInfo on User {
    id
    name
    email
    avatarUrl
    login
    resourcePath
    url
    repositories(first: 100) {
      totalCount
    }
  }
`;

export const USER_REPOSITORIES_FRAGMENT = gql`
  fragment UserRepositoriesInfo on User {
    ...UserInfo
    repositories(first: 100) {
      nodes {
        ...RepositoryInfo
      }
      totalCount
    }
  }
`;

export const REPOSITORY_INFO_FRAGMENT = gql`
  fragment RepositoryInfo on Repository {
    id
    name
    description
    url
    primaryLanguage {
      name
      color
    }
  }
`;
