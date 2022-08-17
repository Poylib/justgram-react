function Comments({userId,userComment}) {
  return (
    <div>
      <a href="{() => false}">{ userId }</a>
      <span>{ userComment }</span>
    </div>
  );
}
export default Comments;