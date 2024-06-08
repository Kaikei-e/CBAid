import { useForm, SubmitHandler } from "react-hook-form";
import { ThoughtInputs } from "@/app/types/thoughtInputs";

export function InputForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ThoughtInputs>();
  const onSubmit: SubmitHandler<ThoughtInputs> = (data) => {
    console.log(data);
  };

  console.log(watch("content"));

  return (
    <div className="flex-col">
      <form onSubmit={handleSubmit(onSubmit)} className="flex-col">
        <input defaultValue={"Write here"} {...register("content")} />
        <label htmlFor="content">Content</label>
        <input type="submit" />
      </form>
    </div>
  );
}
