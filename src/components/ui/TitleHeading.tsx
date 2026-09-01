
interface HeadingProps {
  text: string;
}

export default function TitleHeading({ text }: HeadingProps) {
  return (
    <h1 className="text-4xl font-bold text-zinc-900 select-none">{text}</h1>
  )
}
