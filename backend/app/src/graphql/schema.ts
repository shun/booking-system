import {gql} from "apollo-server-express";

export const Schema = gql`
  scalar Date
  scalar DateTime

  type Query {
    user_by_id(id: Int!): User
    users_by_ids(ids: [Int]): [User]
    bookinginfo_by_user_id(user_id: Int!): User
    bookinginfo_by_id(id: Int!): Bookinginfo
  }

  type Mutation {
    addUser(
      firstname: String!
      lastname: String!
      mail: String!
    ): User
  }

  type User {
    id: Int!
    firstname: String!
    lastname: String!
    delflg: Boolean!
    bookinginfolist: [Bookinginfo]
  }

  type Bookinginfo {
    title: String!
    start_datetime: String!
    end_datetime: String
    user: User!
  }

  type Facility {
    label: String!
    start_datetime: String
    end_datetime: String
  }

`;
