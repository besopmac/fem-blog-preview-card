import Tag from "../Tag"
import { formatDate } from "../../utils/formatDate"

type CardProps = {
  tag: string
  name: string
  title: string
  avatar?: string
  thumbnail?: string
  description: string
}

const Card = ({ title, description, avatar, thumbnail, name, tag }: CardProps) => {
  return (
    <div className="group flex flex-col w-full max-w-96 p-4 gap-6 bg-white border border-gray-950 rounded-[20px] card-shadow">
      <img className="rounded-[10px]" src={thumbnail} alt={title} />
      <div className="flex flex-col gap-3 items-start">
        <Tag label={tag} />
        <p className="text-xxs leading-6">Published {formatDate(new Date())}</p>
        <h1 className="text-2xl font-extrabold leading-6 transition-color duration-200 group-hover:text-yellow-450">{title}</h1>
        <p className="text-base text-slate-500 leading-6">{description}</p>
      </div>
      <div className="flex items-center gap-3">
        <img className="rounded-full w-8 h-8" src={avatar} alt={name} />
        <h2 className="font-bold text-xxs leading-6">{name}</h2>
      </div>
    </div>
  )
}

export default Card