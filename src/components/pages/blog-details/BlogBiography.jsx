import ImportantPoints from "./ImportantPoints"

const BlogBiography = ({ title, bio }) => {
  return (
    <div className="mb-12 break-words">
      <h1 className="max-sm:text-center boldStyle_text">{title}</h1>
      <p className="mediumStyle_text text-sm mt-4 mb-20 max-sm:text-center">{bio}</p>
      <ImportantPoints bio={bio} />
    </div>
  )
}

export default BlogBiography