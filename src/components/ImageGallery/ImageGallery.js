import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css"

export const ImageGallery = ({ gallery }) => {
    return (
        <ul className={css.ImageGallery}>
            {gallery.map(photo => {
                const { id, webformatURL, largeImageURL, tags} = photo;
                return ( 
                    <ImageGalleryItem key={id} image={webformatURL} largeImage={largeImageURL} tags={tags}></ImageGalleryItem>
                )
            })}
        </ul>
    )
}