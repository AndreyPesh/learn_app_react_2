interface LoadButtonProps {
  isLoad: boolean;
  listClass: string;
  type: 'button' | 'submit';
  children: React.ReactNode;
}

const LoadButton = (props: LoadButtonProps): JSX.Element => {
  return (
    <button className={props.listClass} type={props.type} disabled={props.isLoad}>
      {props.children}
    </button>
  );
};

export default LoadButton;
