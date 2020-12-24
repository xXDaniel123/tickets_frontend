import React, { useEffect, useState, SyntheticEvent } from 'react';
import { useParams, useHistory } from 'react-router'
import Modal from 'antd/lib/modal/Modal';
import { useTicketByIdLazyQuery, useUpdateTicketMutation, useRemoveTicketMutation, useTicketsLazyQuery } from '../generated';
import { Form, Spin, Input, InputNumber, Button } from 'antd';
import { useForm } from 'antd/lib/form/Form';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 24 },
};

type Params = {
    id: string
}

type Ticket = {
    id: string;
    name: string;
    price: number;
    description: string;
}

export const Edit: React.FC = () => {

    const params: Params = useParams()
    const history = useHistory()
    const [form] = useForm()
    const [isShown, setIsShown] = useState<boolean>(false)

    // is this best practice?
    const [getTickets] = useTicketsLazyQuery({
      fetchPolicy: 'network-only',
    });

    const [getTicket, { data, loading, error }] = useTicketByIdLazyQuery({
      variables: {
        id: params.id,
      },
    });

    const [ticketToUpdate, setTicketToUpdate] = useState<Ticket>({
      id: '',
      name: '',
      description: '',
      price: 0,
    });

    const [updateTicketMutation, updateMutationResponse] = useUpdateTicketMutation({
      variables: {
        name: ticketToUpdate.name,
        description: ticketToUpdate.description,
        price: ticketToUpdate.price,
        id: ticketToUpdate.id,
      },
    });

    const [removeTicketMutation, removeMutationResponse] = useRemoveTicketMutation({
        onCompleted: () => getTickets(),
        variables: {
            id: ticketToUpdate.id
        },
    })

    useEffect(() => {
        setIsShown(true)
        getTicket()
        return()=>{
            setIsShown(false)
        }
    }, [])

    useEffect(() => {
        insertInitialTicketData()
    }, [data])

    const insertInitialTicketData = () => {
        if(data?.ticketById) {
          setTicketToUpdate({
            id: data.ticketById.id,
            name: data.ticketById.name,
            description: data.ticketById.description,
            price: data.ticketById.price,
          });
        }
    }

    // what is wrong with this? need to update only React.FormEvent
    const onInputFields = (ev: React.FormEvent | any) => {
        setTicketToUpdate(prevState => ({ ...prevState, [ev.target.name]: ev.target.value }))
    };

    const onInputPrice = (inputPrice: number | any) => {
        setTicketToUpdate(prevState => ({ ...prevState, price: inputPrice }))
    };

    const onCancel = () => {
      // should do comparison between the data,
      // and prompting a message before exiting if not equal
      history.goBack();
    };

    const onSubmit = async () => {
      // if a field is null, it should have the field of the data
      // verifyFields()
      await updateTicketMutation();
      history.goBack();
    };

    const onRemove = async () => {
        console.log('removing');
        // open confirmation modal
        // if ok then remove
        // if no then close modal
        // make it in a nested cmp here
        
        await removeTicketMutation()
        history.goBack();
    }

    return (
        
      <Modal title="Edit Ticket" visible={isShown} onCancel={onCancel}
        footer={[
            <Button danger onClick={onRemove} >
              Delete
            </Button>,
            <Button key="back" onClick={onCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={onSubmit} >
              Update card
            </Button>
            ]}
      >
        {error ? <h2>Error</h2> : null}
        {loading ? (
          <Spin />
        ) : (<>
            {data?.ticketById &&
                <Form form={form} onChange={onInputFields} {...layout} initialValues={{ remember: true }}>

                    <Form.Item name="name" rules={[{ required: true, message: 'Please input Ticket Name' },]}>
                        <h4>name: <span style={{ fontWeight: 'normal', color: '#00000590' }}>{data.ticketById.name}</span></h4>
                        <Input placeholder="change name" name="name"/>
                    </Form.Item>

                    <Form.Item name="description" rules={[{ required: true, message: 'Please input Description Name' },]}>
                        <h4>description: <span style={{ fontWeight: 'normal', color: '#00000590' }}>{data.ticketById.description}</span></h4>
                        <Input placeholder="change description" name="description"/>
                    </Form.Item>

                    <Form.Item rules={[{ required: true, message: 'Please input price' }]}>
                        <h4>Price: <span style={{ fontWeight: 'normal', color: '#00000590' }}>{data.ticketById.price}$</span></h4>
                        <InputNumber min={1} name="price" placeholder="eg: 99" onChange={onInputPrice} />
                    </Form.Item>

                </Form>
            }
            </>
        )}
      </Modal>
    );
}


    // why the heck does it still complain about data.ticket... can be null
    // const verifyFields = () => {
    //     if(data?.ticketById) {
    //         if(ticketToUpdate.name === '') setTicketToUpdate((prevState) => ({ ...prevState, name: data.ticketById.name }));
    //         if(ticketToUpdate.description === '') setTicketToUpdate((prevState) => ({ ...prevState, description: data.ticketById.description }));
    //         if(ticketToUpdate.price === 0) setTicketToUpdate((prevState) => ({ ...prevState, price: data.ticketById.price }));
    //     }
    // }
