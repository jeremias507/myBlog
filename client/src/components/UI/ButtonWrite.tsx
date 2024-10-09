import 'tailwindcss/tailwind.css'

interface ButtonWriteProps {
  children: string
}

export const ButtonWrite: React.FC<ButtonWriteProps> = ({ children }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >{children}</button>
  )
}
