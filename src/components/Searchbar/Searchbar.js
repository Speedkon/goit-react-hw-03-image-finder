import { Formik, Form, Field } from 'formik';
import css from "./Searchbar.module.css"

export const Searchbar = ({onSubmit}) => {
    return (
    <Formik
        initialValues={{
            query: '',
        }}
        onSubmit={(values, actions) => {
            onSubmit(values);
            actions.resetForm();
        }}>
        <Form className={css.SearchForm}>
            <Field
            className={css.SearchFormInput}  
            type="text"
            autoComplete="off"
            name="query"
            placeholder="Search images and photos"
            />       
            <button className={css.SearchFormButton} type="submit">
            <span className={css.SearchFormButtonLabel}>Search</span>
            </button>
        </Form>
    </Formik>
    )
};