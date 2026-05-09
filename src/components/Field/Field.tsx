import { useState } from "react";
import cls from "classnames";

import styles from "./Field.module.css";

interface FieldProps {
    value: string;
    onChange: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength?: number;
}

const Field: React.FC<FieldProps> = ({value, onChange, maxLength}) => {
    const [active, setActive] = useState(false);

    return (
        <div className={cls(styles.wrapper, {[styles.active]: active })}>
            <div className={styles.inputWrapper}>
                <input
                    className={styles.input}
                    type="text"
                    id="date"
                    name="date"
                    value={value}
                    onChange={(e) => onChange(e.target.value.trim(), e)}
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(true)}
                    maxLength={maxLength}
                />

                <label htmlFor="date" className={styles.label}>Date of birth</label>
            </div>
        </div>
    )
}

export default Field;
