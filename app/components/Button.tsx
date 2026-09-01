import { Button as ButtonHero } from '@heroui/react'

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export default function Button({ type = "button", text, className, size = "md", onClick = (): void => { } }: ButtonProps) {
  return (
    <ButtonHero
      type={type}
      className={className}
      size={size}
      onClick={onClick}
    >
      {text}
    </ButtonHero>
  )
}
