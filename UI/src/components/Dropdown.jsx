import { useState } from 'react';
import styles from './dropdown.module.css';
import '../global.css';

export function Dropdown({ tipo, children, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={isOpen ? styles.dropdownO : styles.dropdownC}>
            <div className={styles.strip}></div>
            <section className={isOpen ? styles.dropinfoO : styles.dropinfoC}>
                <h1>{tipo}</h1>
                <div 
                    className={styles.drop} 
                    onClick={toggleDropdown}
                ></div>
            </section>
            {isOpen && children.map((child, index) => (
                <section 
                    key={index} 
                    className={styles.dropcontent} 
                    onClick={() => {
                        onSelect(child);
                        toggleDropdown();  // Fecha o dropdown após a seleção
                    }}
                >
                    <h1>{child}</h1>
                </section>
            ))}
        </div>
    );
}