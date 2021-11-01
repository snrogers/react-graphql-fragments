import { GraphQLServer, PubSub } from "graphql-yoga";

import typeDefs from "./api.graphql";

/** Query
{
  orders {
    id
    createdAt
    table {
      id
      name
      people {
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
      people: [
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
              cost: 29.10,
            },
            {
              id: "e3e5c76c-3573-505d-b0e5-ecb41c4e9c25",
              name: "Guinness",
              amount: 1,
              cost: 8.50,
            },
          ],
        },
      ],
    },
  },
];

const resolvers = {
  Query: {
    orders: () => orderData,
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
server.start(() => console.log("Server is running on http://localhost:4000"));
