const Card = ({ post }) => {
  return (
    <div className="flex flex-col gap-2 border p-4 rounded mb-2">
      <h2 className="font-bold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Card;
