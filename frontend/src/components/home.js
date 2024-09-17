import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ChannelsBlock from './channelsBlock.js';
import MessagesBlock from './messagesBlock.js';
import CommonHeader from './commonHeader.js';
import { refresh } from '../slices/authSlice.js';

const Home = () => {
  const dispatch = useDispatch();
  dispatch(refresh());
  const userData = useSelector((state) => state.user);
  const isLoggedIn = userData.token !== '';

  if (!isLoggedIn) return <Navigate to="/login" />;
  return (
    <div style={{ height: '80vh' }}>
      <CommonHeader />
      <Container fluid className="container h-100 my-4 overflow-hidden rounded shadow align-self-stretch">
        <div className="row h-100 bg-white flex-md-row">
          <Card className="col-4 col-md-3 border-end px-0 bg-light flex-column h-100 d-flex">
            <ChannelsBlock />
          </Card>
          <Card className="col p-0 m-0 h-100 bg-light shadow-sm">
            <MessagesBlock />
          </Card>
        </div>
      </Container>
    </div>

  );
};

export default Home;
