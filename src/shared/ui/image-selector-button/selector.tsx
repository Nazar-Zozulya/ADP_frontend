import { useEffect, useRef, useState } from "react";
import { PlusButton } from "../icons";
import { ImageSelectorButtonProps as propsTypes } from './selector.types'
import './selector.styles.css'


export function ImageSelectorButton({value, onChange}: propsTypes ){
	const inputRef = useRef<HTMLInputElement>(null)
	const [backgroundUrl, setBackgroundUrl] = useState<string | null>(null);

	useEffect(() => {
		if (value) {
			const url = URL.createObjectURL(value);
			setBackgroundUrl(url);
			return () => URL.revokeObjectURL(url);
		}
		setBackgroundUrl(null);
	}, [value]);




	return(
		<div 
			className="image-selector-button" 
			onClick={() => inputRef.current?.click()}
			style={{
				backgroundColor: backgroundUrl ? "transparent" : "#B7B7B7",
				backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : undefined,
			}}>
			<PlusButton width={60} height={60} fill="#FFF" className="plus-icon" />

			<input 
				ref={inputRef}
				type="file"
				accept="image/*"
				style={{display:'none'}}
				onChange={(event)=> onChange(event.target.files?.[0] || null)}
			/>
		</div>
	)
}