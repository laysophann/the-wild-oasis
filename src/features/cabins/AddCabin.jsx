import React, { useState } from "react";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

const AddCabin = () => {
  const [isOpenModal, setIsOpenMoal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenMoal((showModal) => !showModal)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenMoal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenMoal(false)} />
        </Modal>
      )}
    </div>
  );
};

export default AddCabin;
