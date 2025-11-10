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
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName", {
            required: true,
            minLength: { value: 3, message: "min length is 3" },
            maxLength: { value: 10, message: "max length is 10" },
          })}
        />
        {errors.firstName && (
          <p className="error-msg">{errors.firstName.message}</p>
        )}
        {/*cant submit until value filled  and min length 3 */}
      </div>
      <br />
      <div>
        <label>Middle name:</label>
        <input
          className={errors.middleName ? "input-error" : ""}
          {...register("middleName")}
        />
      </div>
      <br />
      <div>
        <label>Last Name:</label>
        <input
          className={errors.middleName ? "input-error" : ""}
          {...register("lastName")}
        />
      </div>
      <br />
      <input type="submit" />
    </form>
  );
}

export default App;
