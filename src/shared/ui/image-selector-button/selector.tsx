import React, { useRef, useState } from 'react';

type Props = {
	onChange: (file: File, preview: string) => void;
	initialImage?: string;
};

export function ImageSelectorButton({ onChange, initialImage }: Props) {
	const [image, setImage] = useState<string | null>(initialImage || null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		fileInputRef.current?.click();
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				const previewUrl = reader.result as string;
				setImage(previewUrl);
				onChange(file, previewUrl); // отправляем файл и превью
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<>
			<input
				type="file"
				accept="image/*"
				style={{ display: 'none' }}
				ref={fileInputRef}
				onChange={handleChange}
			/>
			<div
				onClick={handleClick}
				style={{
					width: 150,
					height: 150,
					borderRadius: 20,
					backgroundColor: '#888',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					cursor: 'pointer',
					boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)',
					overflow: 'hidden',
				}}
			>
				{image ? (
					<img
						src={image}
						alt="Selected"
						style={{ width: '100%', height: '100%', objectFit: 'cover' }}
					/>
				) : (
					<span style={{ fontSize: 40, color: 'white' }}>+</span>
				)}
			</div>
		</>
	);
}
