import { Component } from "react";
import { Modal } from "../Modal/Modal";
import css from "./ImageGalleryItem.module.css"

export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    };

    openModal = () => {
        this.setState({
            isModalOpen: true,
        });
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        });
    };

    render() {
        const { isModalOpen } = this.state;
    
        const {image, largeImage, tags } = this.props;
        
        return (
            <>
                <li className={css.ImageGalleryItem} onClick={this.openModal}>
                    <img className={css.ImageGalleryItemImage} src={image} alt={tags} />
                </li>
                <Modal isOpen={isModalOpen} onClose={this.closeModal} largeImage={largeImage} tags={tags} />
            </>
        )
    }
}