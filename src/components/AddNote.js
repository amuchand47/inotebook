import noteContext from "../context/notes/noteContext";
import React, { useContext, useState } from "react";

export const AddNote = (props) => {

  const context = useContext(noteContext);

  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag)
    props.showAlert("Added successfully", "success")

  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container shadow my-3 p-3 form-signup">
      <h2 className="text-center">Add a note</h2>
      <div className="container my-3">
        <form>
          
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={5} required
              value = {note.title}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              minLength={5} required
              value = {note.description}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              value = {note.tag}

            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled = {note.title.length<5 || note.description.length<5}
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};
