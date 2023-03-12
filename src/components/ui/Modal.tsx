import { useRef } from 'react';
import { createPortal } from 'react-dom';
import useModalOptions from '../../hooks/useModalOptions';
import { SetStateBooleanAction } from '../../types/types';

interface ModalProps {
  children: JSX.Element;
  setIsShow: SetStateBooleanAction;
  isShow: boolean;
}

const Modal = ({ children, setIsShow, isShow }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { closeModalHandler, animationClose, listClass } = useModalOptions({
    isShow,
    setIsShow,
    ref,
  });

  return createPortal(
    <div
      ref={ref}
      className={listClass.join(' ')}
      onClick={closeModalHandler}
      onAnimationEnd={animationClose}
    >
      <div className="modal__content">
        <span className="cross-close"></span>
        {children}
      </div>
    </div>,
    document.getElementById('root') as Element
  );
};

export default Modal;
