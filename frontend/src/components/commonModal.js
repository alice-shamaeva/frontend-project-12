import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import CreateChannelModal from './createChannelModal.js';
import DeleteChannelModal from './deleteChannelModal.js';
import EditChannelModal from './editChannelModal.js';
import { hide } from '../slices/modalSlice.js';

const CommonModal = () => {
  const show = useSelector((state) => state.modal.show);
  const type = useSelector((state) => state.modal.type);

  const dispatch = useDispatch();

  const handleClose = () => dispatch(hide());

  const modalTypes = {
    create: <CreateChannelModal />,
    delete: <DeleteChannelModal />,
    edit: <EditChannelModal />,
  };

  return (
    <Modal show={show} onHide={handleClose}>
      {modalTypes[type]}
    </Modal>
  );
};

export default CommonModal;
