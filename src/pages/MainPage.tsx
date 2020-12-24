import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import { TicketList } from '../cmps/TicketList';
import { AddModal } from '../cmps/AddModal';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Edit } from '../cmps/Edit'

const { Header, Content, Footer } = Layout;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  border: 1px solid #d1d1d1;
  border-radius: 0.35em;
  align-items: center;
  padding: 0 1rem;
  transition: .25s;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.14);
  }
`;

const MainHeaderText = styled.h2`
  color: #00000090;
  font-weight: bold;
`;

const AddIconContainer = styled.div`
  & > span {
    font-size: 24px;
    opacity: 0.65;
    transition: 0.4s;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

export const MainPage: React.FC = () => {

  const [isAddModalVisible, setIsAddModalVisible] = useState<boolean>(false);

  const hideAddModal = (arg: string = 'exiting modal') => {
    setIsAddModalVisible(false)
    console.log(arg);
  }
 
    return (
      <Layout className="layout">
        <AddModal
          isAddModalVisible={isAddModalVisible}
          hideAddModal={hideAddModal}
        />

        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Main Page</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <HeaderContainer>
            <MainHeaderText>Tickets</MainHeaderText>
            <AddIconContainer>
              <FileAddOutlined onClick={() => setIsAddModalVisible(true)} />
            </AddIconContainer>
          </HeaderContainer>

          <Route path="/:id" component={Edit} />

          <TicketList />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Learning Typescript and GraphQL
        </Footer>
      </Layout>
    );
}
