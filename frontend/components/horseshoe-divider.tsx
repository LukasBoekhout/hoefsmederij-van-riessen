export function HorseshoeDivider() {
    return (
        <div className="flex items-center justify-center my-8">
            <div className="h-px bg-slate-300 w-1/4"></div>
            <div className="mx-4">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-amber-600"
                >
                    <path
                        d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M21 12C21 9.5 19 4 12 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M12 4C5 4 3 9.5 3 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M7 17L7.01 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M17 17L17.01 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <div className="h-px bg-slate-300 w-1/4"></div>
        </div>
    );
}
