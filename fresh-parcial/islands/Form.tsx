import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";

export const Form: FunctionComponent = () => {
  const [error, setEerror] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const submitHandler = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();

    const errorMsg: string[] = [];

    if (!name || !email) {
      errorMsg.push(
        "Invalid contact. ",
      );
    }

    if (name === "" || email === "") {
      errorMsg.push(
        "A field is empty, email is invalid, or the email is already in use.",
      );
    }

    if (errorMsg.length > 0) {
      setEerror(errorMsg.join("  "));
    } else {
      setEerror("");
      e.currentTarget.submit();
    }
  };

  //falta verificar email aqui

  return (
    <div class="form">
      <h1>My Agenda</h1>
      <form
        action="/"
        method="POST"
        onSubmit={submitHandler}
      >
        <h2>Add new contact</h2>
        <div>
          <label class="labelName" for="name">
            Name
          </label>
        </div>

        <div>
          <input
            onFocus={(e) => setEerror("")}
            onInput={(e) => setName(e.currentTarget.value)}
            type="text"
            id="name"
            name="name"
          />
        </div>

        <div class="email">
          <label for="email"></label>
          Email
        </div>

        <div>
          <input
            onFocus={(e) => setEerror("")}
            onInput={(e) => setEmail(e.currentTarget.value)}
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={error !== error}
            class="mybutton"
          >
            Add contact
          </button>
        </div>

        <div>
          {error !== "" && <div class="error">{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default Form;
