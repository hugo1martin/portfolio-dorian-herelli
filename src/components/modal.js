import React from 'react'

function Modal ({ item, closeModal }) {
  return (
    <div className='modal-background'>
      <div className='modal-content'>
        <div className='flex column left'>
          <div className='flex row space-between'>
            <h1>{item.title}</h1>
            <button
              className='button align-self start'
              onClick={() => closeModal(false)}
            >
              X
            </button>
          </div>
          <p>{item.description}</p>
          {item.see_more !== '' && (
            <a
              href={item.see_more}
              className='button primary'
              target='_blank'
              rel='noreferrer'
            >
              Voir plus
            </a>
          )}
        </div>
        <div className='flex column right'>
          <div className='carousel-item'>
            <img src={item.url} alt={item} />
          </div>
          <img className='logo' src={item.logo} alt={item} />
        </div>
      </div>
    </div>
  )
}

export default Modal
