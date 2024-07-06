import { Component } from 'react';
import searchIcon from '../../assets/search.svg';

interface ButtonProps {
  onClick?: () => void;
  ariaLabel: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export class Button extends Component<ButtonProps> {
  static defaultProps = {
    disabled: false,
    type: 'button',
  };

  render() {
    const { onClick, ariaLabel, disabled, type } = this.props;

    return (
      <button
        type={type}
        onClick={onClick}
        aria-label={ariaLabel}
        disabled={disabled}
        className={`button ${disabled ? 'disabled' : ''}`}
      >
        <img src={searchIcon} alt={ariaLabel} />
      </button>
    );
  }
}
