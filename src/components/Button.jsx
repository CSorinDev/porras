export default function Button({ children, className = '', onClick }) {
  const defaultClass =
    'py-2 px-4 rounded-md bg-primary text-secondary hover:bg-primary/80 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer hover:-translate-y-0.5'
  return (
    <button className={`${defaultClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
