import { useForm } from "react-hook-form";
import { User } from "../../types";
import "./form.style.css";
import { Input } from "../../../../shared";

export function LoginForm() {
	const { register, handleSubmit, formState } = useForm<
		Omit<
			User,
			"name" | "surname" | "repeatPassword" | "image" | "description"
		>
	>({
		mode: "onSubmit",
	});

	function onSubmit(
		data: Omit<
			User,
			"name" | "surname" | "repeatPassword" | "image" | "description"
		>
	) {
		console.log(1);
	}

	return (
		<div className="login-form">
			<form className="r-form-form" onSubmit={handleSubmit(onSubmit)}>
				<Input
					label="Email"
					error={formState.errors.email?.message}
					register={register("email", {
						required: {
							value: true,
							message: "Пошта обов'язкова для введення",
						},
						minLength: {
							value: 3,
							message: "Пошта повинна бути більше 3 символів",
						},
						maxLength: {
							value: 50,
							message: "Пошта повинна бути менше 50 символів",
						},
					})}
				/>

				<Input
					label="Password"
					error={formState.errors.password?.message}
					register={register("password", {
						required: {
							value: true,
							message: "Пароль обов'язковий для введення",
						},
						minLength: {
							value: 3,
							message: "Пароль повинен бути більше 3 символів",
						},
						maxLength: {
							value: 50,
							message: "Пароль повинен бути менше 50 символів",
						},
					})}
				/>

				<button className="r-form-submit-button">SEND</button>
			</form>
			<div className="r-form-nav-block">
				<p className="r-form-nav-text r-form-selected">AUTH</p>
				<p className="r-form-nav-text">/</p>
				<p className="r-form-nav-text">REG</p>
			</div>
		</div>
	);
}
