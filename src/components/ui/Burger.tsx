import { NAME_CLASS_ACTIVE_BURGER } from '../../utils/constants';

interface BurgerProps {
  activeClass: boolean;
  handler: () => void;
}

const Burger = ({ activeClass, handler }: BurgerProps) => {
  return (
    <span className={`burger ${activeClass ? NAME_CLASS_ACTIVE_BURGER : ''}`} onClick={handler}>
      <span className="burger__line"></span>
    </span>
  );
};

export default Burger;
