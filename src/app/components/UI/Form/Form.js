import styles from './styles.module.css';
function Form({
    inputs = [{
        type: 'text',
        label: 'First Name',
        placeholder: 'John',
        required: true
    },
    {
        type: 'text',
        label: 'Last Name',
        placeholder: 'Doe',
        required: true
    },
    {
        type: 'email',
        label: 'Email',
        placeholder: 'your@email.com',
        required: true
    },
    {
        type: 'tel',
        label: 'Phone Number',
        placeholder: '9898989898',
    },
    {
        type: 'text',
        label: 'Designation',
        placeholder: 'CEO'
    },
    {
        type: 'text',
        label: 'Company Name',
        placeholder: 'TruFlo'
    }
    ],
    ...props
})
    {




    return ( 
        <form className={styles.form}>
            <div className={styles.formContent}>
                <div className={styles.formInputs}>
                    {inputs.map((input, index) => (
                        <div key={index} className={styles.formInput}>
                            <label htmlFor={input.label}>{input.label}</label>
                            <input type={input.type} id={input.label} placeholder={input.placeholder} required={input.required} />
                        </div>
                    ))}
                </div>

                <button type="submit" className={styles.btnPrime}>
                    Submit
                </button>
            </div>
        </form>
     );
}

export default Form;