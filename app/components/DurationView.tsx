import { formatDuration } from "@/utils/formatDuration"

export const DurationView = ({ duration = 0, small, backgroundStyle = "bg-light-yellow" }: { duration?: number, small?: boolean, backgroundStyle?: string }) => {
  return (
    <div className={`${backgroundStyle} ${small ? 'rounded-lg p-1 xl:px-2' : 'rounded-xl p-2 xl:px-4'} mr-4 text-sm`}>
      {formatDuration(duration || 0)}
    </div>
  )
}