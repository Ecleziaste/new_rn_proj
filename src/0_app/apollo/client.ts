import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {reduxStorage} from 'src/0_app/store';

const customFetch = (uri: string, options?: any) => {
  const token = reduxStorage.getItem('token');
  options.headers.authorization = `Bearer ${token}`;

  return fetch(uri, options).then(async response => {
    const json = await response.clone().json();
    const error = json?.errors?.[0];

    // todo:
    if (
      error &&
      error.extensions.code === 'UNAUTHENTICATED'
      // && !window.location.pathname.includes(ROUTES.auth)
    ) {
      reduxStorage.removeItem('token'); // window.location.replace(ROUTES.signIn);
    }

    return response;
  });
};

const httpLink = createHttpLink({
  uri: process.env.API_BASE_URL,
  fetch: customFetch,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
