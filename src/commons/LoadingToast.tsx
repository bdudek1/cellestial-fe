import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Spinner from 'react-bootstrap/Spinner';

export interface LoadingToastProps {
  show: boolean;
}
export const LoadingToast = ({ show }: LoadingToastProps) => {
  return (
    <ToastContainer position="bottom-start" className="p-3">
      <Toast show={show} className="bg-warning">
        <Toast.Body className="d-flex align-items-center">
          <Spinner
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            className="me-2"
          />
          <span>Loading celestial data...</span>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
