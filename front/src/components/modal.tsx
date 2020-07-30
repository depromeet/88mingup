import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModalActionCreators } from 'store/modal/action';
import { ModalProps } from 'store/modal/reducer';

const Modal: React.FC<ModalProps> = ({
  content = '',
  mode = 'confirm',
  visible,
}: ModalProps) => {
  const dispatch = useDispatch();

  if (!visible) {
    return null;
  }

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: '100%',
          zIndex: 1000,
          background: 'rgba(0,0,0,.45)',
        }}
      />
      <div
        style={{
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%)`,
          zIndex: 1000,
          width: 300,
          minHeight: 160,
          borderRadius: 50,
          padding: 36,
          display: 'flex',
          margin: '0 auto',
          background: '#ffffff',
          flexDirection: 'column',
        }}
      >
        <div>{content}</div>

        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <button onClick={() => dispatch(ModalActionCreators.confirmCancel())}>
            Cancel
          </button>
          <button>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
