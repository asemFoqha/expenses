import { FC } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import BsButton from "../../components/shared/BsButton";

const schema = z.object({
  name: z.string(),
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
    formState: { errors, isValid, isSubmitted },
  } = useForm<FormType>({ resolver: zodResolver(schema) });

  return (
    <>
      <div className="container">
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className={`row g-3 needs-validation ${
            isSubmitted ? "was-validated" : ""
          }`}
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
          </div>
          <div className="mb-2">
            <BsButton>Submit</BsButton>
          </div>
        </form>
      </div>
    </>
  );
};
export default SiginUp;
