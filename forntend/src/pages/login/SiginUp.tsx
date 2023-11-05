import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import BsButton from "../../components/shared/BsButton";
import ErrorMessage from "../../components/shared/ErrorMessage";
import { DevTool } from "@hookform/devtools";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  fullname: z
    .string()
    .min(3, { message: "Fullname must be greater than 3 cahracter " }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" }),
});

type FormType = z.infer<typeof schema>;

const SiginUp = () => {
  //form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<FormType>({ resolver: zodResolver(schema) });

  return (
    <>
      <div className="container full-screen-container d-flex justify-content-center align-items-center">
        <div className="max-width-400">
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className={`row g-3 needs-validation`}
            noValidate
          >
            <div className="mb-2">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              />
              {errors.name ? (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              ) : null}
            </div>
            <div className="mb-2">
              <label htmlFor="fullname" className="form-label">
                Fullname
              </label>
              <input
                {...register("fullname")}
                type="text"
                className="form-control"
                id="fullname"
                placeholder="Fullname"
              />
              {errors.fullname ? (
                <ErrorMessage>{errors.fullname.message}</ErrorMessage>
              ) : null}
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
              {errors.password ? (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              ) : null}
            </div>
            <div className="mb-2">
              <BsButton>Submit</BsButton>
            </div>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </>
  );
};
export default SiginUp;
