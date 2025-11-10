import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onsubmit(data) {
    console.log("submit the form ", data);
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label>First Name:</label>
        <input {...register("firstName", { required: true })} />
        {/*cant submit until value filled */}
      </div>
      <br />
      <div>
        <label>Middle name:</label>
        <input {...register("middle name")} />
      </div>
      <br />
      <div>
        <label>Last Name:</label>
        <input {...register("lastname")} />
      </div>
      <br />
      <input type="submit" />
    </form>
  );
}

export default App;
