import { Button as ButtonHero } from '@heroui/react'

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  icon?: React.ReactNode;
}

export default function Button({ type = "button", text, className, size = "md", onClick = (): void => { }, icon }: ButtonProps) {
  return (
    <ButtonHero
      type={type}
      className={className}
      size={size}
      onClick={onClick}
    >
      {icon}
      {text}
    </ButtonHero>
  )
}
