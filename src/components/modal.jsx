import {ModalContainer, Modal, ModalImgContainer, ModalTextContainer, ModalTextInner} from "../styles/modalStyle";

const ModalMain = ({onClose, children}) => {
    return(
        <ModalContainer onClick={onClose}>
            <Modal onClick={(e) => e.stopPropagation()}>
                {children}
            </Modal>
        </ModalContainer>
    )
}

export default ModalMain;