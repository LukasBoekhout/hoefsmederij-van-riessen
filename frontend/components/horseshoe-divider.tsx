import { TbHorseshoe } from "react-icons/tb";

export function HorseshoeDivider() {
    return (
        <div className="flex items-center justify-center my-8">
            <div className="h-px bg-slate-300 w-1/4"></div>

            <div className="mx-4">
                <TbHorseshoe className="text-amber-600 rotate-180" size={30} />
            </div>

            <div className="h-px bg-slate-300 w-1/4"></div>
        </div>
    );
}
