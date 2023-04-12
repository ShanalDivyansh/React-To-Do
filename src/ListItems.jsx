export default function ListItems(props) {
  const { data } = props;
  let items;

  items = data.map((el, index) => {
    return (
      <li key={Math.random()}>
        {el}
        <button
          onClick={() => {
            props.delete(index);
          }}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <>
      <h1>ToDo List</h1>
      {data.length === 0 && <h1> No ToDos </h1>}
      <ul>{items}</ul>
    </>
  );
}
