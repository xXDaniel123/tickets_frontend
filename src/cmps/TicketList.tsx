import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TicketPreview } from './TicketPreview'
import { useTicketsQuery, useTicketsLazyQuery } from '../generated'
import { Spin } from 'antd'
// import { gql, useQuery } from '@apollo/client'

type Ticket = {
  id: string;
  name: string;
  description: string;
  price: number;
}

const TicketListEl = styled.div`
    background-color: #fafafa;
    width: 100%;
    min-height: 80vh;
    margin: 0 auto;
`

export const TicketList: React.FC = () => {

    const [getTickets, { loading, error, data } ] = useTicketsLazyQuery({
      fetchPolicy: 'network-only'
    });
    
    useEffect(() => {
        getTickets()
    }, []);
    
    if(error) return <h2>error</h2>
    
    return (
        <TicketListEl>
            {
                loading ? <Spin /> : 
                data?.tickets.length === 0  ? <p>No tickets</p>
                : <>
                    {data?.tickets.map((ticket: any | Ticket ) => {
                        const {id, price, name, description} = ticket
                        return (
                            <TicketPreview
                                key={id}
                                id={id}
                                price={price}
                                name={name}
                                description={description}
                            />
                        )
                    })}
                </>
            }
        </TicketListEl>
    )
}
