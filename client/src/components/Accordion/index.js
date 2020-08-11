import React, { useRef, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.js'

const Accordion = ({ children }) => {
  const popoutRef = useRef(null)
  useEffect(() => {
    M.Collapsible.init(popoutRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ul ref={popoutRef} className="collapsible popout">
      {children}
    </ul>
  )
}

export default Accordion
