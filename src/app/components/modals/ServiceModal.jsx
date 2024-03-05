"use client";

import * as React from "react";
import Modal from "./Modal";

const ServiceModal = ({ isOpen, onClose, text }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        body={
          <>
            <p className="font-semibold text-center text-black-light mt-3">
              {text}
            </p>
          </>
        }
      />
    </>
  );
};

export default ServiceModal;
