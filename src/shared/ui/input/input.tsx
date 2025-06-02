import { IInputProps } from "./input.types";
import "./input.style.css";
import { useState } from "react";
import { EyeIcon } from "../icons";

export function Input(props: IInputProps) {
	const { label, error, register, ...rest } = props;

	return (
		<div className="all-input">
			{label && (
				<div className="input-label-div">
					<p className="input-label-text">{label}</p>
				</div>
			)}

			<input type="text" className="input" {...register} {...rest} />

			{error && (
				<div className="input-error-div">
					<p className="input-error-text">{error}</p>
				</div>
			)}
		</div>
	);
}

function PasswordInput(props: IInputProps) {
	const { label, error, register, ...rest } = props;
	const [ shown, setShown ] = useState(false)

	return (
		<div className="all-input">
			{label && (
				<div className="input-label-div">
					<p className="input-label-text">{label}</p>
				</div>
			)}

			<div className="input-help-div">
				<input type={shown ? 'text' : 'password'} className="password-input" {...register} {...rest} />

				<button className="show-password-button" type="button" onClick={()=>setShown(!shown)}> 
					{
					shown
					? <EyeIcon className='show-password-icon' />
					: <EyeIcon.Strikethrough className='show-password-icon' />
					}
				</button>
			</div>

			{error && (
				<div className="input-error-div">
					<p className="input-error-text">{error}</p>
				</div>
			)}
		</div>
	);
}

function SmallInput(props: IInputProps) {
	const { label, error, register, ...rest } = props;

	return (
		<div className="all-input">
			{label && (
				<div className="input-label-div">
					<p className="input-label-text">{label}</p>
				</div>
			)}

			<input type="text" className="input small-input" {...register} {...rest} />

			{error && (
				<div className="input-error-div">
					<p className="input-error-text">{error}</p>
				</div>
			)}
		</div>
	);
}

Input.SmallInput = SmallInput
Input.PasswordInput = PasswordInput
