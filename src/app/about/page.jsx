import Image from "next/image";
import { useDarkMode } from "../context/DarkModeContext";
import ProfileCard from "../Components/ProfileCard";

export default function About() {
    const { darkMode, setDarkMode } = useDarkMode();
    return (
        <div className="h-screen overflow-hidden border-top rounded-xl sticky top-0">
            <div className="grid grid-cols-5">



            </div>
        </div>

    );
}
