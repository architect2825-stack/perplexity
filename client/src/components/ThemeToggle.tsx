interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414zM2.05 6.464L3.464 5.05a1 1 0 001.414-1.414L3.464 3.636a1 1 0 00-1.414 1.414zM18 11a1 1 0 100-2h-2a1 1 0 100 2h2zm-2-7a1 1 0 11-2 0 1 1 0 012 0zM5.464 18.536l-1.414-1.414a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 001.414-1.414zM3 11a1 1 0 100-2H1a1 1 0 100 2h2zm-1-7a1 1 0 110-2 1 1 0 010 2zM3.464 5.05L2.05 3.636a1 1 0 111.414-1.414L4.878 3.636a1 1 0 11-1.414 1.414zM19 11a1 1 0 100-2h-2a1 1 0 100 2h2zm0 4a1 1 0 110-2 1 1 0 010 2z" clipRule="evenodd"></path>
        </svg>
      )}
    </button>
  )
}
