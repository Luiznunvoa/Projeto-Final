import { useState } from 'react';
import styles from './dropdown.module.css';
import '../global.css';

export function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const childrenArray = props.children

    return (
        <div className={isOpen ? styles.dropdownO : styles.dropdownC}>
            <div className={styles.strip}></div>
            <section className={isOpen ? styles.dropinfoO : styles.dropinfoC}>
                <h1>{props.tipo}</h1>
                <div 
                    className={styles.drop} 
                    onClick={toggleDropdown}
                ></div>
            </section>
            {isOpen && childrenArray.map((child, index) => (
                <section key={index} className={styles.dropcontent}>
                    <h1>{child}</h1>
                </section>
            ))}
        </div>
    );
}