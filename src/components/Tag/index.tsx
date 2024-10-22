type TagProps = {
  label: string
}

const Tag = ({ label }: TagProps) => {
  return (
    <div className="inline-flex bg-yellow-450 px-4 py-1 rounded font-extrabold text-xxs text-slate-950 leading-6">{label}</div>
  )
}

export default Tag