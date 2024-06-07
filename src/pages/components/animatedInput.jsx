import { useState } from 'react';
import styles from '../../styles/animatedInput.module.css';

const AnimatedInput = ({ placeholder }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`${styles.inputContainer} ${focused ? styles.focused : ''}`}>
      <input
        type="text"
        className={styles.input}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder=" "
      />
      <label className={styles.placeholder}>{placeholder}</label>
    </div>
  );
};

export default AnimatedInput;
