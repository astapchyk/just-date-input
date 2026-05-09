import Field from "./Field/Field";

import { onDateChange } from "./Field/Field.utils";

import styles from "./Field/Field.module.css";

interface FieldProps {
    value: string;
    onChange: (v: string) => void;
}

const Section: React.FC<FieldProps> = ({value, onChange}) => {
    return (
        <div className={styles.wrapper}>
            <Field
                value={value}
                onChange={onDateChange(onChange, value)}
                maxLength={10}
            />
        </div>
    )
}

export default Section;
