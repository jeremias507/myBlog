import { useState, useEffect, useRef } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'

export const SearchPanel = (): any => {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative">
      <button
        onClick={() => {
          setOpen(true)
        }}
        className="relative rounded-full p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <HiMagnifyingGlass className="h-6 w-6" />
      </button>

      {open && (
        <>
          <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-75 z-100"></div>
          <div className="fixed mt-32  top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex items-center justify-center z-20">
            <div
              ref={panelRef}
              style={{ background: '#020617' }}
              className="fixed p-6 rounded-xl w-1/2 h-1/4 "
            >
              <form className="mb-3 placeholder-gray-500 text-white text-base font-light py-3 px-5 w-full rounded-full bg-transparent border border-gray-500 focus:border-blue-500 focus:outline-none focus-within:border-blue-500">
                <input
                  type="text"
                  placeholder="Empieza a escribir para buscar"
                  className="w-full bg-transparent border-none focus:outline-none"
                />
              </form>

              <div className="flex items-center justify-center w-full py-3 gap-2">
                <HiMagnifyingGlass className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-500">
                  Busca por etiquetas, personas, artículos y más
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
