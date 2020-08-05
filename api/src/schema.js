const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
{
    characters {
        results {
            name
        }
    }
}
`;

module.exports = typeDefs
