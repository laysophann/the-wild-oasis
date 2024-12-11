import React, { useState } from "react";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "../cabins/CabinTable";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
      <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

// const AddCabin = () => {
//   const [isOpenModal, setIsOpenMoal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenMoal((showModal) => !showModal)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenMoal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenMoal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// };

export default AddCabin;
