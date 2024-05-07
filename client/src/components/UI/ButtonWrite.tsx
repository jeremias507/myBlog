import { type ButtonHTMLAttributes } from 'react'
import 'tailwindcss/tailwind.css'

interface ButtonWriteProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
}

export const ButtonWrite: React.FC<ButtonWriteProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >{children}</button>
  )
}
