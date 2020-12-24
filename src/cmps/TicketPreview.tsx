import React, { useEffect } from 'react'
import { Card, Skeleton } from 'antd';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

interface TicketPreviewProps {
    name: string;
    description: string;
    price: number;
    id: string;
}

const TicketPreviewContainer = styled.div`
  margin-bottom: 1rem;

`

export const TicketPreview: React.FC<TicketPreviewProps> = (props) => {

  return (
    <TicketPreviewContainer>
      <Card title={props.name} extra={<Link to={`/${props.id}`}>Edit Card</Link>}>
        <Card type="inner" title={props.name} >
          {props.description}
          <h4>Price: {props.price}$</h4>
        </Card>
      </Card>
    </TicketPreviewContainer>
  );
};

