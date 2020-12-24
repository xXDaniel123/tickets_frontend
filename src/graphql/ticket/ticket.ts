import { gql } from '@apollo/client'
// here we put all of our calls, mutation and queries alike for ticket
// after running run generate with code gen, it will run through all these and output the 
// hooks and functions in the "generated.tsx" file we specified

gql`
  query Tickets {
    tickets {
      id
      name
      price
      description
    }
  }
`;

gql`
  query TicketById($id: ID!){
    ticketById(id: $id){
      id
      name
      description
      price
    }
  }
`

gql`
  mutation CreateTicket($name: String!, $description: String!, $price: Int!) {
    createTicket(name: $name, description: $description, price: $price) {
      id
    }
  }
`;

// after updating, when the requested info after is the details, it automatically updates that
// ticket object even if we didn't specifically called it again, WOW AMAZING!
gql`
  mutation UpdateTicket($name: String!, $description: String!, $price: Int!, $id: ID!) {
    updateTicket(name: $name, description: $description, price: $price, id: $id) {
      id
      name
      price
      description
    }
  }
`;

gql`
  mutation RemoveTicket($id: ID!) {
    removeTicket(id: $id) {
      id
      name
      price
      description
    }
  }
`;

