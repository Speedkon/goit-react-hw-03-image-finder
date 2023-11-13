import css from "./Button.module.css"

export const Button = ({ name, onClick }) => {
    return (
        <button className={ css.Button} type="button" onClick={onClick}>{name}</button>
    )
};