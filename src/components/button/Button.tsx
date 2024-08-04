import Image from 'next/image';

interface IButtonProps {
  onClick?: () => void;
  ariaLabel: string;
  imgSrc?: string;
  imgAlt?: string;
  text?: string;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<IButtonProps> = ({
  onClick,
  ariaLabel,
  imgSrc,
  imgAlt,
  text,
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
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={imgAlt || ''}
          className="button-icon"
          width={24}
          height={24}
        />
      )}
      {text && <h5 className="button-text">{text}</h5>}
    </button>
  );
};
