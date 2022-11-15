/*import { gql } from '@apollo/client';

export const QUERY_SECRET_KEYS = gql`
  query secretkeys {
    secretkeys {
      cloudinary_cloud_name
      cloudinary_upload_preset
      google_api_key
    }
  }
`;

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
    }
  }
`;

export const QUERY_CARDS = gql`
query addCard {
  cards {
    _id
  }
}`

export const GET_ME = gql`
{
   me {
    _id
    email
    cards {
        cardId
        logo
        components {
            _id
            compClass
            compValue
            compStyle
        }
      }
    } 
}
`;*/
