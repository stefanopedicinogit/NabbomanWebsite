import { GraphQLClient, gql } from 'graphql-request';

export const getPosts = async () => {

    const graphQLClient = new GraphQLClient(
        "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg6k3r540uiz01tf95acdb07/master"
        )

    const query = gql`
        query myQuery {
            postsConnection {
              edges {
                node {
                  author {
                    name
                  }
                  createdAt
                  slug
                  title
                  excerpt
                  coverImage {
                    url
                  }
                  tags
                  id
                  content{
                    text
                  }
                }
              }
            }
          }`

    const result = await graphQLClient.request(query)

    return result.postsConnection.edges;
}

