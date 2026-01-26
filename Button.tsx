import React, { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { semanticColors, scaleColors } from '../../tokens/colors';
import { button } from '../../tokens/spacing';

/**
 * Button Component
 * DDS (Daekyo Design System)
 * 
 * @figma https://www.figma.com/design/1SskE79en5eBiobCKgPOoj/-DDS--Daekyo-Design-System
 */

// =============================================================================
// Types
// =============================================================================

export type ButtonSize = 'large' | 'medium' | 'small' | 'xsmall';
export type ButtonVariant = 'filled' | 'outlined' | 'ghost';
export type ButtonColor = 'accent' | 'brand' | 'neutral' | 'positive' | 'negative' | 'caution';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  /** 버튼 크기 */
  size?: ButtonSize;
  /** 버튼 스타일 변형 */
  variant?: ButtonVariant;
  /** 버튼 색상 */
  color?: ButtonColor;
  /** 전체 너비 사용 */
  fullWidth?: boolean;
  /** 아이콘만 있는 버튼 */
  iconOnly?: boolean;
  /** 왼쪽 아이콘 */
  leftIcon?: ReactNode;
  /** 오른쪽 아이콘 */
  rightIcon?: ReactNode;
  /** 로딩 상태 */
  loading?: boolean;
  /** 버튼 내용 */
  children?: ReactNode;
}

// =============================================================================
// Styles
// =============================================================================

const getSizeStyles = (size: ButtonSize, variant: ButtonVariant, iconOnly: boolean) => {
  if (iconOnly) {
    const iconPadding = variant === 'ghost' ? button.iconGhost : button.icon;
    return {
      padding: iconPadding[size === 'xsmall' ? 'small' : size]?.padding || '12px',
    };
  }

  if (variant === 'ghost') {
    const ghostSize = button.ghost[size];
    return {
      padding: `${ghostSize.paddingVertical} ${ghostSize.paddingHorizontal}`,
      gap: button[size].gap,
    };
  }

  const sizeConfig = button[size];
  return {
    padding: `${sizeConfig.paddingVertical} ${sizeConfig.paddingHorizontal}`,
    gap: sizeConfig.gap,
  };
};

const getColorStyles = (color: ButtonColor, variant: ButtonVariant, disabled: boolean) => {
  if (disabled) {
    return {
      backgroundColor: variant === 'filled' ? semanticColors.background.disabled : 'transparent',
      color: semanticColors.text.disabled,
      borderColor: variant === 'outlined' ? semanticColors.border.disabled : 'transparent',
    };
  }

  const colorMap: Record<ButtonColor, {
    filled: { bg: string; text: string };
    outlined: { border: string; text: string };
    ghost: { text: string };
  }> = {
    accent: {
      filled: { bg: semanticColors.background.accent, text: scaleColors.neutral.white },
      outlined: { border: semanticColors.border.accent, text: semanticColors.text.accent },
      ghost: { text: semanticColors.text.accent },
    },
    brand: {
      filled: { bg: semanticColors.background.brand, text: scaleColors.neutral.white },
      outlined: { border: semanticColors.border.brand, text: semanticColors.text.brand },
      ghost: { text: semanticColors.text.brand },
    },
    neutral: {
      filled: { bg: scaleColors.neutral.darkest, text: scaleColors.neutral.white },
      outlined: { border: semanticColors.border.default, text: semanticColors.text.primary },
      ghost: { text: semanticColors.text.primary },
    },
    positive: {
      filled: { bg: semanticColors.background.positive, text: scaleColors.neutral.white },
      outlined: { border: semanticColors.border.positive, text: semanticColors.text.positive },
      ghost: { text: semanticColors.text.positive },
    },
    negative: {
      filled: { bg: semanticColors.background.negative, text: scaleColors.neutral.white },
      outlined: { border: semanticColors.border.negative, text: semanticColors.text.negative },
      ghost: { text: semanticColors.text.negative },
    },
    caution: {
      filled: { bg: semanticColors.background.caution, text: scaleColors.neutral.darkest },
      outlined: { border: semanticColors.border.caution, text: semanticColors.text.caution },
      ghost: { text: semanticColors.text.caution },
    },
  };

  const colorConfig = colorMap[color][variant];

  if (variant === 'filled') {
    return {
      backgroundColor: colorConfig.bg,
      color: colorConfig.text,
      borderColor: 'transparent',
    };
  }

  if (variant === 'outlined') {
    return {
      backgroundColor: 'transparent',
      color: colorConfig.text,
      borderColor: colorConfig.border,
    };
  }

  // ghost
  return {
    backgroundColor: 'transparent',
    color: colorConfig.text,
    borderColor: 'transparent',
  };
};

// =============================================================================
// Component
// =============================================================================

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'medium',
      variant = 'filled',
      color = 'accent',
      fullWidth = false,
      iconOnly = false,
      leftIcon,
      rightIcon,
      loading = false,
      disabled = false,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    const sizeStyles = getSizeStyles(size, variant, iconOnly);
    const colorStyles = getColorStyles(color, variant, isDisabled);

    const buttonStyles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizeStyles.gap,
      padding: sizeStyles.padding,
      borderRadius: variant === 'ghost' ? button.ghostRadius : button.radius,
      border: variant === 'outlined' ? `1px solid ${colorStyles.borderColor}` : 'none',
      backgroundColor: colorStyles.backgroundColor,
      color: colorStyles.color,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      width: fullWidth ? '100%' : 'auto',
      maxWidth: button.maxWidth,
      fontFamily: '"Pretendard Variable", sans-serif',
      fontWeight: 500,
      fontSize: size === 'large' ? '18px' : size === 'medium' ? '16px' : '14px',
      lineHeight: 1.44,
      transition: 'all 0.2s ease',
      opacity: isDisabled ? 0.6 : 1,
      ...style,
    };

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        style={buttonStyles}
        {...props}
      >
        {loading ? (
          <span>Loading...</span>
        ) : (
          <>
            {leftIcon && <span style={{ display: 'flex' }}>{leftIcon}</span>}
            {!iconOnly && children}
            {rightIcon && <span style={{ display: 'flex' }}>{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
