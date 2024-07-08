import { Component } from 'react';

interface ButtonProps {
  onClick?: () => void;
  ariaLabel: string;
  imgSrc: string;
  imgAlt: string;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export class Button extends Component<ButtonProps> {
  static defaultProps = {
    disabled: false,
    type: 'button',
  };

  render() {
    const { onClick, ariaLabel, imgSrc, imgAlt, className, disabled, type } =
      this.props;

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
  }
}
