import ReactModal from 'react-modal';
import css from './Modal.module.css'

ReactModal.setAppElement('#root');

export const Modal = ({largeImage, isOpen, onClose, tags}) => {
    return (

    <ReactModal
        className={css.Modal}
        overlayClassName={css.overlay}
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Large Image"
            >
            <img src={largeImage} alt={tags} />
    </ReactModal>

    );
}