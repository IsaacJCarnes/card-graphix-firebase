/*import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($email: String!, $password: String!) {
    addProfile(email: $email, password: $password) {
      token
      profile {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
      }
    }
  }
`;

// Talita's adding mutations starts here
export const CREATE_CARD = gql`
mutation createCard($components: [ID]!) {
createCard(components: $components) {
  logo
  selectedLayoutField
  components {
    _id
    compClass
    compValue
    compStyle
  }
  }
}
`;

export const UPDATE_CARD = gql`
mutation updateCard ($profileId: ID!, $components: [ID]!) {
  updateCard (profileId: $profileId, components: $components) {
    _id 
    logo
    components {
      _id
      compClass
      compValue
      compStyle
    }
  }
}
`;

export const REMOVE_CARD = gql `
mutation removeCard ($cardId: ID!) {
  removeCard (cardId: $cardId) {
    _id
    logo
    components {
      _id
      compClass
      compValue
      compStyle
    }
  }
}
`
;*/
