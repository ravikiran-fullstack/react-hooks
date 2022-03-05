import React, { useReducer, useState } from "react";

const initialState = [
  { id: Date.now(), name: "ravikiran", email: "ravi@gmail.com" },
];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((contact) => contact.id !== action.payload.id);
    default:
      return state;
  }
}

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addContact = (e) => {
    e.preventDefault();

    dispatch({ type: "add", payload: { id: Date.now(), name, email } });
    setName("");
    setEmail("");
  };
  console.log(state);
  return (
    <div>
      <form onSubmit={addContact}>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit'>Add Contact</button>
      </form>

      <div>
        <ul>
          {state.map((contact) => {
            return (
              <li key={contact.id}>
                <h2>{contact.name}</h2>
                <h2>{contact.email}</h2>
                <div>
                  <button
                    onClick={() =>
                      dispatch({ type: "delete", payload: { id: contact.id } })
                    }
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ReducerHook;
