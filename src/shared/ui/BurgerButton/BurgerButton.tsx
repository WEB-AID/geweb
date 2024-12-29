export function BurgerButton({
    additionalClass,
    handleBurgerOpen,
}: {
    additionalClass?: string
    handleBurgerOpen: VoidFunction
}) {
    return (
        <button
            onClick={handleBurgerOpen}
            className={`ml-8 my-auto flex md:hidden ${additionalClass}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 48 48"
                fill="none"
            >
                <rect x="3" y="8" width="42" height="6" rx="3" fill="#F97316" />
                <rect
                    x="3"
                    y="21"
                    width="42"
                    height="6"
                    rx="3"
                    fill="#F97316"
                />
                <rect
                    x="3"
                    y="34"
                    width="42"
                    height="6"
                    rx="3"
                    fill="#F97316"
                />
            </svg>
        </button>
    )
}
