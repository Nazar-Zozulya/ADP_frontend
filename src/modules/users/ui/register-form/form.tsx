import { Controller, useForm } from "react-hook-form";
import { User } from "../../types";
import { Input } from "../../../../shared/ui/input";
import "./form.style.css";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { ImageSelectorButton } from "../../../../shared/ui/image-selector-button";
import { UserRegister } from "./form.types";

export function RegisterForm() {
	const { register: userRegister } = useAuth()

	const { register, handleSubmit, formState, control } = useForm<
		UserRegister
	>({
		mode: "onSubmit",
	});

	function onSubmit(data: UserRegister) {
		userRegister(data.name, data.surname, data.email, data.password)
	}

	return (
		<div className="reg-form">
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
				<div className="r-form-small-inputs-div">
					<Input.SmallInput
						label="Name"
						error={formState.errors.name?.message}
						register={register("name", {
							required: {
								value: true,
								message: "Ім'я обов'язкове для введення",
							},
							minLength: {
								value: 3,
								message: "Ім'я повинне бути більше 3 символів",
							},
							maxLength: {
								value: 50,
								message: "Ім'я повинне бути менше 50 символів",
							},
						})}
					/>
					<Input.SmallInput
						label="Surname"
						error={formState.errors.surname?.message}
						register={register("surname", {
							required: {
								value: true,
								message: "Прізвище обов'язкове для введення",
							},
							minLength: {
								value: 3,
								message:
									"Прізвище повинне бути більше 3 символів",
							},
							maxLength: {
								value: 50,
								message:
									"Прізвище повинне бути менше 50 символів",
							},
						})}
					/>
				</div>

				<Input.PasswordInput
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

				<Input.PasswordInput
					label="Repeat password"
					error={formState.errors.repeatPassword?.message}
					register={register("repeatPassword", {
						required: {
							value: true,
							message:
								"Повторення паролю обов'язкове для введення",
						},
						minLength: {
							value: 3,
							message:
								"Повторення паролю повинне бути більше 3 символів",
						},
						maxLength: {
							value: 50,
							message:
								"Повторення паролю повинне бути менше 50 символів",
						},
					})}
				/>
{/* 				
				<Controller
					control={control}
					name="image"
					render={({ field: { value, onChange } }) => (
						<ImageSelectorButton
							value={value}
							onChange={onChange}
						/>
					)}
				/> */}

				<button className="r-form-submit-button">SEND</button>
			</form>
			<div className="r-form-nav-block">
				<Link to='/login' className="r-form-nav-text">AUTH</Link>
				<p className="r-form-nav-text">/</p>
				<Link to='/register' className="r-form-nav-text r-form-selected">REG</Link>
			</div>
		</div>
	);
}
