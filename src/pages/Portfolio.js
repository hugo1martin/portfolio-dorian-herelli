import { React, useState, useEffect } from 'react'

import Layout from '../components/layout/layout'
import Modal from '../components/modal'
import data from './data.json'

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(false)
  const [item, setItem] = useState(null)
  const [skipIndex, setSkipIndex] = useState(window.matchMedia('(min-width: 1020)').matches ? 4 : 2)
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(window.matchMedia('(min-width: 1020)').matches ? 4 : 2)

  useEffect(() => {
    function handleResize () {
      if (window.innerWidth > 1020) {
        setEndIndex(4)
        setSkipIndex(4)
      } else {
        setEndIndex(2)
        setSkipIndex(2)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const items = data.map((item) => {
    return (
      <button
        key={item.id}
        className='carousel-item button no-style'
        wuitht
        onClick={() => {
          setOpenModal(true)
          setItem(item)
        }}
      >
        <img src={item.url} alt={item} />
      </button>
    )
  })

  return (
    <Layout>
      <div className='content centered'>
        <div className='arrow up'>
          {startIndex > 0 && (
            <button
              className='button no-style'
              onClick={() => {
                setStartIndex(startIndex - skipIndex)
                setEndIndex(endIndex - skipIndex)
              }}
            >
              <img src='up-arrow.svg' alt='up-arrow' />
            </button>
          )}
        </div>
        <div className='carousel-list'>{items.slice(startIndex, endIndex)}</div>
        <div className='arrow down'>
          {endIndex < data.length && (
            <button
              className='button no-style'
              onClick={() => {
                setStartIndex(startIndex + skipIndex)
                setEndIndex(endIndex + skipIndex)
              }}
            >
              <img src='down-arrow.svg' alt='down-arrow' />
            </button>
          )}
        </div>
      </div>
      {openModal && <Modal item={item} closeModal={setOpenModal} />}
    </Layout>
  )
}

export default Portfolio
