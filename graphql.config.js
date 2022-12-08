require('dotenv').config();

module.exports = {
  projects: {
    app: {
      schema: './src/0_app/apollo/schema.graphql',
      documents: [
        'src/**/*.{graphql,gql,js,ts,jsx,tsx}',
        'src/graphql/fragments.graphql',
      ],
      extensions: {
        endpoints: {
          default: {
            url: process.env.GQL_API_URL,
            headers: {Authorization: `Bearer ${' '}`},
          },
        },
      },
    },
  },
};
