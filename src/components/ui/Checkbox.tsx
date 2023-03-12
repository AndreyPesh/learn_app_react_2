import { useState } from 'react';
import { CheckboxHandlerParams } from '../../types/interface';

interface CheckboxProps {
  checkboxHandler: ({ status }: CheckboxHandlerParams) => void;
}

const Checkbox = ({ checkboxHandler }: CheckboxProps) => {
  const [active, setActive] = useState(false);

  const toggleCheckbox = () => {
    setActive((prevState) => {
      const status = !prevState;
      return status;
    });
    checkboxHandler({ status: !active });
  };

  return (
    <span className={`checkbox ${active ? 'checkbox_active' : ''}`} onClick={toggleCheckbox}></span>
  );
};

export default Checkbox;
