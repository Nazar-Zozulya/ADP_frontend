import { SVGProps } from "react";

// Обычная иконка глаза
export function EyeIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			width="100%"
			height="100%"
			fill="#fff"
			{...props}
		>
			<g clipPath="url(#a)">
				<g
					stroke="#81818D"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				>
					<path d="M2.547 10s2.5-5.833 8.334-5.833c5.833 0 8.333 5.833 8.333 5.833s-2.5 5.833-8.333 5.833C5.047 15.833 2.547 10 2.547 10Z" />
					<path d="M10.88 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
				</g>
			</g>
			<defs>
				<clipPath id="a">
					<path d="M0 0h20v20H0z" />
				</clipPath>
			</defs>
		</svg>
	);
}

// Перечёркнутая иконка глаза
function StrikethroughEyeIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			width="100%"
			height="100%"
			fill="#fff"
			{...props}
		>
			<g clipPath="url(#a)">
				<path
					stroke="#81818D"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9.114 8.233a2.5 2.5 0 1 0 3.533 3.534M9.822 4.233a8.693 8.693 0 0 1 1.059-.066c5.833 0 8.333 5.833 8.333 5.833-.372.797-.84 1.547-1.392 2.233M6.39 5.508A11.272 11.272 0 0 0 2.547 10s2.5 5.833 8.334 5.833a8.116 8.116 0 0 0 4.491-1.341M2.547 1.667l16.667 16.666"
				/>
			</g>
			<defs>
				<clipPath id="a">
					<path d="M0 0h20v20H0z" />
				</clipPath>
			</defs>
		</svg>
	);
}

// Экспорт как свойство
EyeIcon.Strikethrough = StrikethroughEyeIcon;
