import {useState} from "react"

function AddBook ({addBook}) {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [imageURL, setImageURL] = useState('')

  const add = () => {
    addBook(title, author, imageURL)
    setTitle('')
    setAuthor('')
    setImageURL('')
  }

  return (
    <div className="addBook">
      <input placeholder="Raamtu pealkiri" value={title} onChange={(event) => setTitle(event.target.value)} />
      <input placeholder="Raamatu autor" value={author} onChange={(event) => setAuthor(event.target.value)} />
      <input placeholder="Pildi URL" value={imageURL} onChange={(event) => setImageURL(event.target.value)} />
      <button onClick={add}>Lisa uus raamat</button>
    </div>
  )
}

export default AddBook;
