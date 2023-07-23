import {Wrapper} from './styles'
import {CiMenuBurger} from 'react-icons/ci'
import { useState, useRef, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
export function BurgerMenu(props) {
  const [open, setIsOpen] = useState(false)
  const wrapperRef = useRef(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsOpen(false),
    onSwipedRight: () => setIsOpen(true),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  function openMenu (e) {
    e.stopPropagation();
    setIsOpen(true)
  }

  function closeMenu () {
    setIsOpen(false)
  }

  useEffect(() => {
    // Adicione o listener quando o componente montar
    document.addEventListener('click', closeMenu);
    
    // Remova o listener quando o componente desmontar
    return () => {
      document.removeEventListener('click', closeMenu);
    }
  }, []);

  return (
    <Wrapper isOpen={open} ref={wrapperRef} onClick={e => e.stopPropagation()} {...handlers}>
      {!open && (
        <button onClick={openMenu}>
          <CiMenuBurger />
        </button>
      )}
      <div>
        {open && props.children}
      </div>
    </Wrapper>
  )
}
