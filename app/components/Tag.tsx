export const Tag = ({ tag, textStyle, backgroundStyle }: { tag: string, textStyle?: string, backgroundStyle?: string }) => {
  return (
    <div className={`font-semibold rounded-3xl text-xs px-3 py-2 whitespace-nowrap ${textStyle || 'text-neutral-500'} ${backgroundStyle || 'border bg-white'}`}>
      {tag}
    </div>
  )
}