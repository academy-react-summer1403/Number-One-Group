import { Form, Formik } from "formik"

const FormHolder = ({ initialValues, onSubmit, style, children, validations, additionParams }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validations && validations}
            {...additionParams}
        >
            <Form className={style}>
                {children}
            </Form>
        </Formik>
    )
}

export default FormHolder
