import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Icon, IconName, IconColor } from './Icon'

/* ===========================================
   DDS BUTTON COMPONENT
   Figma 스펙 1:1 매핑
   - variant: filled | outlined | ghost
   - color: brand | neutral
   - size: large | medium | small | xsmall
   - state: default | hovered | pressed | disabled

   예외 컬러(negative 등)는 className으로 오버라이드:
   <Button className="bg-negative text-invert">삭제</Button>
   =========================================== */

type ButtonVariant = 'filled' | 'outlined' | 'ghost'
type ButtonSize = 'large' | 'medium' | 'small' | 'xsmall'
type ButtonColor = 'brand' | 'neutral'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  color?: ButtonColor
  fullWidth?: boolean
  /** 왼쪽 아이콘 (IconName) */
  leftIcon?: IconName
  /** 오른쪽 아이콘 (IconName) */
  rightIcon?: IconName
}

/* 아이콘 크기 매핑 (Figma 스펙) */
const iconSizeMap: Record<ButtonSize, 'spacing-6' | 'spacing-5' | 'spacing-4'> = {
  large: 'spacing-6',    // 24px
  medium: 'spacing-6',   // 24px
  small: 'spacing-5',    // 20px
  xsmall: 'spacing-4',   // 16px
}

/* DDS Button Size Styles (CSS 변수 사용) */
const sizeStyles: Record<ButtonSize, string> = {
  large: `
    px-[var(--button-large-padding-hor)]
    py-[var(--button-large-padding-ver)]
    gap-[var(--button-large-gap)]
    typo-label-large
  `,
  medium: `
    px-[var(--button-medium-padding-hor)]
    py-[var(--button-medium-padding-ver)]
    gap-[var(--button-medium-gap)]
    typo-label-medium
  `,
  small: `
    px-[var(--button-small-padding-hor)]
    py-[var(--button-small-padding-ver)]
    gap-[var(--button-small-gap)]
    typo-label-small
  `,
  xsmall: `
    px-[var(--button-xsmall-padding-hor)]
    py-[var(--button-xsmall-padding-ver)]
    gap-[var(--button-xsmall-gap)]
    typo-label-small
  `,
}

/* Ghost Button Size Styles */
const ghostSizeStyles: Record<ButtonSize, string> = {
  large: `
    px-[var(--button-ghost-large-padding-hor)]
    py-[var(--button-ghost-large-padding-ver)]
    gap-[var(--button-large-gap)]
    typo-label-large
  `,
  medium: `
    px-[var(--button-ghost-medium-padding-hor)]
    py-[var(--button-ghost-medium-padding-ver)]
    gap-[var(--button-medium-gap)]
    typo-label-medium
  `,
  small: `
    px-[var(--button-ghost-small-padding-hor)]
    py-[var(--button-ghost-small-padding-ver)]
    gap-[var(--button-small-gap)]
    typo-label-small
  `,
  xsmall: `
    px-[var(--button-ghost-xsmall-padding-hor)]
    py-[var(--button-ghost-xsmall-padding-ver)]
    gap-[var(--button-xsmall-gap)]
    typo-label-small
  `,
}

/* 텍스트 색상 매핑 */
const textColorMap: Record<ButtonColor, { filled: string; other: string }> = {
  brand: { filled: 'text-invert', other: 'text-brand' },
  neutral: { filled: 'text-primary', other: 'text-primary' },
}

const getTextColor = (variant: ButtonVariant, color: ButtonColor, disabled?: boolean): string => {
  if (disabled) return 'text-disabled'
  return variant === 'filled' ? textColorMap[color].filled : textColorMap[color].other
}

/* 배경색 매핑 */
const bgColorMap: Record<ButtonColor, string> = {
  brand: 'bg-brand',
  neutral: 'bg-invert',
}

const getBackgroundColor = (variant: ButtonVariant, color: ButtonColor, disabled?: boolean): string => {
  if (disabled) return variant === 'filled' ? 'bg-disabled' : 'bg-transparent'
  if (variant === 'filled') return bgColorMap[color]
  return 'bg-transparent'
}

/* 보더 색상 매핑 */
const borderColorMap: Record<ButtonColor, string> = {
  brand: 'border border-brand',
  neutral: 'border border-default',
}

const getBorderStyle = (variant: ButtonVariant, color: ButtonColor, disabled?: boolean): string => {
  if (variant !== 'outlined') return ''
  if (disabled) return 'border border-disabled'
  return borderColorMap[color]
}

/* 아이콘 색상 매핑 */
const iconColorMap: Record<ButtonColor, { filled: IconColor; other: IconColor }> = {
  brand: { filled: 'invert', other: 'brand' },
  neutral: { filled: 'primary', other: 'primary' },
}

const getIconColor = (variant: ButtonVariant, color: ButtonColor, disabled?: boolean): IconColor => {
  if (disabled) return 'disabled'
  return variant === 'filled' ? iconColorMap[color].filled : iconColorMap[color].other
}

function Button({
  children,
  variant = 'filled',
  size = 'medium',
  color = 'brand',
  fullWidth = false,
  leftIcon,
  rightIcon,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    max-w-[var(--button-max-width)]
    cursor-pointer
    disabled:cursor-not-allowed
    relative overflow-hidden
  `

  // Radius: 기본 999px (circle), Ghost는 8px
  const radiusStyle = variant === 'ghost'
    ? 'rounded-[var(--button-ghost-radius)]'
    : 'rounded-[var(--button-radius)]'

  // Size styles: Ghost는 별도 padding
  const currentSizeStyles = variant === 'ghost'
    ? ghostSizeStyles[size]
    : sizeStyles[size]

  // Figma 스펙에 맞는 색상 스타일
  const textColor = getTextColor(variant, color, disabled)
  const bgColor = getBackgroundColor(variant, color, disabled)
  const borderStyle = getBorderStyle(variant, color, disabled)

  const widthStyles = fullWidth ? 'w-full' : ''
  const iconColor = getIconColor(variant, color, disabled)
  const iconSize = iconSizeMap[size]

  return (
    <button
      className={`group ${baseStyles} ${radiusStyle} ${currentSizeStyles} ${bgColor} ${textColor} ${borderStyle} ${widthStyles} ${className}`.replace(/\s+/g, ' ').trim()}
      disabled={disabled}
      {...props}
    >
      {/* Interaction background layer (Figma 스펙) */}
      {!disabled && (
        <span
          className="absolute inset-0 bg-[var(--alpha-black-0)] group-hover:bg-[var(--alpha-black-12)] group-active:bg-[var(--alpha-black-24)] transition-colors"
          aria-hidden="true"
        />
      )}
      {/* Content layer */}
      <span className="relative inline-flex items-center justify-center gap-inherit">
        {leftIcon && (
          <Icon name={leftIcon} size={iconSize} color={iconColor} />
        )}
        {children}
        {rightIcon && (
          <Icon name={rightIcon} size={iconSize} color={iconColor} />
        )}
      </span>
    </button>
  )
}

export default Button
