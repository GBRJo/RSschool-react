interface ButtonProps {
  onClick?: () => void;
  ariaLabel: string;
  imgSrc: string;
  imgAlt: string;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  ariaLabel,
  imgSrc,
  imgAlt,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`button ${className} ${disabled ? 'disabled' : ''}`}
    >
      <img src={imgSrc} alt={imgAlt} />
    </button>
  );
};
