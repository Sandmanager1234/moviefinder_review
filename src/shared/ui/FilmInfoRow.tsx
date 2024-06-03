import { FC, HTMLAttributes } from "react"

interface FilmInfoRowProps
  extends HTMLAttributes<HTMLDivElement> {
  title: string
  info: string
}

const FilmInfoRow: FC<FilmInfoRowProps> = ({
  title,
  info,
  ...props
}) => {
  return (
    <div
      className={"flex justify-between " + props.className}
    >
      <div>{title}:</div>
      <div>{info}</div>
    </div>
  )
}

export default FilmInfoRow
