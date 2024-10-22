import Card from "./components/Card"
import thumb from "./assets/images/thumb.png"
import avatar from "./assets/images/userpic.jpg"

const USER = {
  thumb,
  avatar,
  tag: 'Learning',
  name: "Greg Hooper",
  title: "HTML & CSS foundations",
  description: "These languages are the backbone of every website, defining structure, content, and presentation.",
}

function App() {
  return (
    <Card
      tag={USER.tag}
      name={USER.name}
      title={USER.title}
      avatar={USER.avatar}
      thumbnail={USER.thumb}
      description={USER.description}
    />
  )
}

export default App
