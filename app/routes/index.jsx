import { Form } from "@remix-run/react";
import styles from "../Style/Style.css";
import { useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function Index() {
  const [loading, setLoading] = useState(false);

  const handleLoader = async (e) => {
    e.preventDefault();
    console.log("called function");
    setLoading(true);
    await new Promise((r) =>
      setTimeout(() => {
        r(true);
      }, 4000)
    );
    setLoading(false);
  };

  return (
    <div className="main-container">
      <div className="loderarea">
        <div className="loder">
          <ScaleLoader color={"#36d7b7"} loading={loading} size={20} />
        </div>
        <h1>Add An App Wide Loader Near the Logo</h1>
      </div>
      <hr />
      <div className="form-areas">
        <Form className="form">
          <label htmlFor="" className="lable">
            Tital:
          </label>
          <input type="text" name="title" placeholder="tital" />
          <label htmlFor="" className="lable">
            Comments:
          </label>
          <textarea
            name="textarea"
            id="textarea"
            placeholder="Text here..."
            cols="20"
            rows="8"></textarea>
          <button onClick={(e) => handleLoader(e)}>Submit</button>
        </Form>
      </div>
    </div>
  );
}


export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
