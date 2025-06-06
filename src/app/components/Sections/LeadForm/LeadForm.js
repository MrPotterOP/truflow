import styles from './styles.module.css';

import Form from '../../../components/UI/Form/Form';

function LeadForm() {
    return ( 
        <section id="leadForm" className={styles.leadForm}>

            <div className={styles.formInfo}>
                <h4 className={styles.formTitle}>
                    Want to stop guessing and start growing?
                </h4>
                <p className={styles.formDesc}>
                    Let&apos;s show you what revenue clarity looks like — and how it drives growth.
                </p>
            </div>

            <Form />

        </section>
     );
}
export default LeadForm;