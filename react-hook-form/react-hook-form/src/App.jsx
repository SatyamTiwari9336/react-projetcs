import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm();

  async function onsubmit(data) {
    //simulate we api call
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Submit the form ", data);
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label>First--Name:</label>
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName", {
            required: true,
            minLength: { value: 3, message: "Min length is 3" },
            maxLength: { value: 10, message: "Max length is 10" },
          })}
        />
        {errors.firstName && (
          <p className="error-msg">{errors.firstName.message}</p>
        )}
        {/*cant submit until value filled  and min length 3 */}
      </div>
      <br />
      <div>
        <label>Middle-name:</label>
        <input
          className={errors.middleName ? "input-error" : ""}
          {...register("middleName")}
        />
      </div>
      <br />
      <div>
        <label>Last-Name:</label>
        <input
          className={errors.lastName ? "input-error" : ""}
          {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last name is not as per the rules",
            },
          })}
        />
        {errors.lastName && (
          <p className="error-msg">{errors.lastName.message}</p>
        )}
      </div>
      <br />
      <input
        type="submit"
        disabled={isSubmitting}
        value={isSubmitting ? "Submitting..." : "Submitt"}
      />
    </form>
  );
}

export default App;
