import { GraphQLServer, PubSub } from "graphql-yoga";
import { prop } from "ramda";

import typeDefs from "./schema.graphql";

/** Query
{
  orders {
    id
    createdAt
    table {
      id
      name
      persons {
        id
        name
        age
        orderItems {
          id
          name
          amount
          cost
        }
      }
    }
  }
}
*/

const orderData = [
  {
    id: "64e69aaf-59a3-5710-8254-dff7a840f96b",
    createdAt: "1632854927",
    table: {
      id: "689d4a4c-b8a2-502a-a62c-791221cba669",
      name: "Table #54",
      persons: [
        {
          id: "43d1061c-f984-5d3b-8609-f9dabb939dd1",
          name: "Alvin Duncan",
          age: 45,
          orderItems: [
            {
              id: "92f53cc5-3ee4-594d-94e8-df073c9f5e21",
              name: "Banana Pancakes",
              amount: 5,
              cost: 45.55,
            },
          ],
        },
        {
          id: "abb44562-976d-5c4d-ac8b-5354cc3df3b6",
          name: "Randall Barnett",
          age: 38,
          orderItems: [
            {
              id: "9378f8cd-dbbe-57c7-83e6-cc3d7f2ebbcd",
              name: "Cheese Sampler",
              amount: 1,
              cost: 29.1,
            },
            {
              id: "e3e5c76c-3573-505d-b0e5-ecb41c4e9c25",
              name: "Guinness",
              amount: 1,
              cost: 8.5,
            },
          ],
        },
      ],
    },
  },
  {
    id: "2",
    createdAt: "1632854927",
    table: {
      id: "6",
      name: "Table #100",
      persons: [
        {
          id: "4",
          name: "Someone Else",
          age: 45,
          orderItems: [
            {
              id: "9",
              name: "Schmanana Schmancakes",
              amount: 500,
              cost: 45.55,
            },
          ],
        },
      ],
    },
  },
  {
    id: "3",
    createdAt: "1632854927",
    table: {
      id: "3T",
      name: "Table #2",
      persons: [
        {
          id: "3P",
          name: "Order Items Will Not Be Found",
          age: 45,
          orderItems: [
            {
              id: "3OI",
              name: "Shmanana Shmancakes",
              amount: 500,
              cost: 45.55,
            },
          ],
        },
      ],
    },
  },
  {
    id: "4",
    createdAt: "1632854927",
    table: {
      id: "4T",
      name: "Table #4",
      persons: [
        {
          id: "4P",
          name: "Order Items Will Error out",
          age: 45,
          orderItems: [
            {
              id: "4OI",
              name: "Shmanana Shmancakes",
              amount: 500,
              cost: 45.55,
            },
          ],
        },
      ],
    },
  },
];

const resolvers = {
  Query: {
    orderById: (_: unknown, { id }: { id: string }) =>
      orderData.find((o) => o.id === id),
    orderItemById: (_: unknown, { id }: { id: string }) =>
      id === "3OI" // NotFound on this one
        ? null
        : id === "4OI" // Error on this one
        ? (() => {
            return new Error("Kaboom");
          })()
        : orderData // Else just do it
            .flatMap(prop("table"))
            .flatMap(prop("persons"))
            .flatMap(prop("orderItems"))
            .find((oi) => oi.id === id),
    orders: () => orderData,
    personById: (_: unknown, { id }: { id: string }) =>
      orderData
        .flatMap(prop("table"))
        .flatMap(prop("persons"))
        .find((p) => p.id === id),
    tableById: (_: unknown, { id }: { id: string }) =>
      orderData.flatMap(prop("table")).find((t) => t.id === id),
  },
  // Mutation: {
  //   sendMessage: (_, { sender, channel, text }, { pubsub }) => {
  //     const message = { sender, channel, text };
  //     pubsub.publish(channel, { message });
  //     return message;
  //   },
  // },
  // Subscription: {
  //   message: {
  //     subscribe: (_, { channel }, { pubsub }) => {
  //       return pubsub.asyncIterator(channel);
  //     },
  //   },
  // },
};

const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });
server.start(() => {
  console.log("GraphQL Server is running on http://localhost:4000");
  console.log("Visit the URL in the browser for the GraphQL explorer.");
});
