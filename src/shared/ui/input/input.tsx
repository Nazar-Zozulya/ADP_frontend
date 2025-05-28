import { IInputProps } from "./input.types";
import "./input.style.css";

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

Input.SmallInput = SmallInput;
