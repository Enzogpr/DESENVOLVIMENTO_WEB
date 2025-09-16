function Sidebar({ posts }) {
  return (
    <aside>
      <h3>Posts Relacionados</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}><a href="#">{post}</a></li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
