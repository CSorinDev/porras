import { SunIcon } from "lucide-react";
import { MoonIcon } from "lucide-react";

export default function ThemeButton({toggleTheme, theme}) {
  return (
    <div className="border-border flex items-center gap-4 md:ml-2 md:border-l md:pl-4">
      <button
        onClick={toggleTheme}
        className="hover:bg-secondary text-muted-foreground hover:text-foreground cursor-pointer rounded-full p-2 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <MoonIcon color="gray" size={20} />
        ) : (
          <SunIcon color="yellow" size={20} />
        )}
      </button>
    </div>
  )
}
