import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal as BootstrapModal } from 'react-bootstrap';

import AddChannel from './addChannel.js';
import RemoveChannel from './removeChannel.js';
import RenameChannel from './renameChannel.js';
import { closeModal, getShown, getModalType } from '../../slices/modalsSlice.js';

const modals = {
  add: AddChannel,
  remove: RemoveChannel,
  rename: RenameChannel,
};

const Modal = () => {
  const dispatch = useDispatch();

  const shown = useSelector(getShown);
  const modalType = useSelector(getModalType);

  const hide = () => {
    dispatch(closeModal());
  };

  const Component = modals[modalType];

  return (
    <BootstrapModal show={shown} onHide={hide}>
      {Component && <Component hide={hide} />}
    </BootstrapModal>
  );
};

export default Modal;
