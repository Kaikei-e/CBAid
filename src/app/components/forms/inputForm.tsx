import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "@/app/types/inputs";

export function InputForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
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
