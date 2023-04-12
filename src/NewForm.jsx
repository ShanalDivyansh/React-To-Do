import { useEffect, useState } from "react";
import "./styles.css";
import ListItems from "./ListItems";
const NewForm = (props) => {
  const [formData, setFormData] = useState({
    newItem: "",
  });
  const [todo, setTodo] = useState(() => {
    const localValue = localStorage.getItem("MYITEMS");
    if (localValue === null) {
      return [];
    }
    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("MYITEMS", JSON.stringify(todo));
  }, [todo]);

  const deleteitems = (index) => {
    setTodo((prev) => {
      const newArray = prev.slice();
      newArray.splice(index, 1);
      return newArray;
    });
  };

  const clickHandler = (event) => {
    event.preventDefault();
    setTodo((prev) => {
      const data = prev.slice();
      data.push(formData.newItem);
      return data;
    });

    setFormData({ newItem: "" });
  };

  const formHandler = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            name="newItem"
            value={formData.newItem}
            onChange={formHandler}
          ></input>
        </div>
        <button className="btn" onClick={clickHandler}>
          Add
        </button>
      </form>
      <ListItems data={todo} delete={deleteitems}></ListItems>
    </>
  );
};
export default NewForm;
