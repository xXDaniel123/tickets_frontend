import React, { useState, useEffect, useRef } from 'react'
import { Modal, Form, Input, Button, Checkbox, InputNumber } from 'antd';
import { stringify } from 'querystring';
import { useCreateTicketMutation, useTicketsLazyQuery } from '../generated';
import { useForm } from 'antd/lib/form/Form';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 24 },
};

type TicketInputDetails = {
    name: string;
    description: string;
    price: number;
}

type AddModalProps = {
  isAddModalVisible: boolean;
  hideAddModal: (arg?: string) => void;
};

export const AddModal: React.FC<AddModalProps> = ({ isAddModalVisible, hideAddModal }) => {

    const [form] = useForm()
    const [ticketToAdd, setTicketToAdd] = useState<TicketInputDetails>({
        name: '',
        description: '',
        price: 0
    });

    // is this best practice?
    const [getTickets] = useTicketsLazyQuery({
      fetchPolicy: 'network-only',
    });

    const [createTicketMutation, { data, loading, error }] = useCreateTicketMutation({
        onCompleted: () => onCompletedCreateTicket(),
        variables: {
          name: ticketToAdd.name,
          description: ticketToAdd.description,
          price: ticketToAdd.price
        },
      });

    const onCompletedCreateTicket = () => {
      getTickets();
      onExitAddModal()
    } 

    const onHandleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setTicketToAdd(prevState => ({ ...prevState, [ev.target.name]: ev.target.value }))
    }

    const onInputPrice = (inputPrice: number | any) => {
      setTicketToAdd((prevState) => ({ ...prevState, price: inputPrice }));
    }

    const handleSubmit = async () => {
      // here we will make verifications for fields
      // if they are empty => show error
      // why is loading still false? probably because im on localhost..
      console.log('start loading', loading);

      try {
        await createTicketMutation();
        form.resetFields();
      } catch (err) {
        console.log('error', error);
      }
    };

    const onExitAddModal = () => {
        form.resetFields()
        hideAddModal()
    }

    return (
      <>
        <Modal visible={isAddModalVisible} title="Add New Ticket" onOk={handleSubmit} onCancel={onExitAddModal}
          footer={[
            <Button key="back" onClick={onExitAddModal}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={handleSubmit} >
              Submit
            </Button>
            ]} >
          <Form {...layout} name="basic" form={form} initialValues={{ remember: true }} >

            <Form.Item name="name" rules={[{ required: true, message: 'Please input Ticket Name' }]} >
              <p>Ticket Name</p>
              <Input placeholder="eg: snowboarding" value={ticketToAdd.name} name="name" onChange={onHandleChange} />
            </Form.Item>

            <Form.Item name="description" rules={[{ required: true, message: 'Please input calories burned' }, ]}>
              <p>Calories Burned Per Hour</p>
              <Input value={ticketToAdd.description} placeholder="eg: 220 calories per hour" name="description" onChange={onHandleChange} />
            </Form.Item>
            
            <Form.Item rules={[{ required: true, message: 'Please input price' }]}>
              <p>Price</p>
              <InputNumber min={1} name="price" placeholder="eg: 99 ($)" value={ticketToAdd.price} onChange={onInputPrice} />
            </Form.Item>

          </Form>
        </Modal>
      </>
    );
};
