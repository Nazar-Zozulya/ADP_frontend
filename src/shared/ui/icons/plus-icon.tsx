import { SVGProps } from "react";

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <defs>
                <pattern
                    id="pattern0_74_727"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_74_727" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_74_727"
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACTklEQVR4nO3czWrUYBhH8UFRrPdgb8OPbly4qbZF8ZpUtBQE8QqmuugtlRFr0W0X4kIFj4REWqHVJE7m/ZucH2RVaB/e049pmCezmSRJkiRJ/zvgenWVnmPSgBvAa+ATpz4Cr6qPlZ5vUoDHwBcu9hl4WHrOSQDuAd/5u2/A3dLzjhpwBVjQ3jvgaum5Rwt4RHc7peceLeBljyB7peceLeBtjyBvSs89WsBBjyAHpeceLQySBYNkwSBZMEgWDJIFg2TBIFkwSBYMkgWDZMEgWTBIFgySBYNkwSBZMEgWDJIFg2TBIFkwSBYMkgWDZMEgWTBIFgxy4cFcBraAZ8B+c1CruI57vHPxeIXz7Tdn8qA6o1V9l250XAmYqgVwZ+gYOy2XZXS6NLQ9VIx14KT5QmqvOrP1IYLsdRhCv9sdIkifP6iqfVh2jDXgR/PJ1V11dmsGyQpybdk/Jf7K6u9oqTGaILv/MNDUPR8iiC97k172NlG2m3921E51VluDxDgT5TZw2HKgKTsEbg0a40yUS8B94Ckw9+Yiv24uzpsz2azOaDZ2ePs9CwbJgkGyYJAsGCQLBsmCQbJgkCwYJAsGyYJBsmCQLBgkCwbJgkGyYJAsGCQLBsmCQbJgkCwYJAsGyYJBsmCQLBgkCwbJQr0H3tW89NyjRb2U39WT0nOPFvUTErraLD332B/psei4EjD+d6GXBNwEvraIUT1xYqP0vJNAvcn1p6dKnAy+uaRzdx6rRdSjZu24ut4DLwbb6VM71Q740vfAJUmSJEmaFfAT6lW4ZX3ip6kAAAAASUVORK5CYII="
                />
            </defs>

            {/* Визуальный элемент, который использует паттерн */}
            <rect width="30" height="30" fill="url(#pattern0_74_727)" />
        </svg>
    );
}
