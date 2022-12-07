const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})


overlay.addEventListener('click', () => {
  const modal = document.querySelectorAll('.modal.active')
  modal.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}





openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = document.querySelector(button.dataset.modalTarget)
    openModal(modal2)
  })
})

overlay.addEventListener('click', () => {
  const modal2 = document.querySelectorAll('.modal2.active')
  modal2.forEach(modal2 => {
    closeModal(modal2)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = button.closest('.modal2')
    closeModal(modal2)
  })
})

function openModal(modal2) {
  if (modal2 == null) return
  modal2.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal2) {
  if (modal2 == null) return
  modal2.classList.remove('active')
  overlay.classList.remove('active')
}





openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal3 = document.querySelector(button.dataset.modalTarget)
    openModal(modal3)
  })
})

overlay.addEventListener('click', () => {
  const modal3 = document.querySelectorAll('.modal3.active')
  modal3.forEach(modal3 => {
    closeModal(modal3)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal3 = button.closest('.modal3')
    closeModal(modal3)
  })
})

function openModal(modal3) {
  if (modal3 == null) return
  modal3.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal3) {
  if (modal3 == null) return
  modal3.classList.remove('active')
  overlay.classList.remove('active')
}





openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal4 = document.querySelector(button.dataset.modalTarget)
    openModal(modal4)
  })
})

overlay.addEventListener('click', () => {
  const modal4 = document.querySelectorAll('.modal4.active')
  modal4.forEach(modal4 => {
    closeModal(modal4)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal4 = button.closest('.modal4')
    closeModal(modal4)
  })
})

function openModal(modal4) {
  if (modal4 == null) return
  modal4.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal4) {
  if (modal4 == null) return
  modal4.classList.remove('active')
  overlay.classList.remove('active')
}





openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal5 = document.querySelector(button.dataset.modalTarget)
    openModal(modal5)
  })
})

overlay.addEventListener('click', () => {
  const modal5 = document.querySelectorAll('.modal5.active')
  modal5.forEach(modal5 => {
    closeModal(modal5)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal5 = button.closest('.modal5')
    closeModal(modal5)
  })
})

function openModal(modal5) {
  if (modal5 == null) return
  modal5.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal5) {
  if (modal5 == null) return
  modal5.classList.remove('active')
  overlay.classList.remove('active')
}



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal6 = document.querySelector(button.dataset.modalTarget)
    openModal(modal6)
  })
})

overlay.addEventListener('click', () => {
  const modal6 = document.querySelectorAll('.modal6.active')
  modal6.forEach(modal6 => {
    closeModal(modal6)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal6 = button.closest('.modal6')
    closeModal(modal6)
  })
})

function openModal(modal6) {
  if (modal6 == null) return
  modal6.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal6) {
  if (modal6 == null) return
  modal6.classList.remove('active')
  overlay.classList.remove('active')
}



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal7 = document.querySelector(button.dataset.modalTarget)
    openModal(modal7)
  })
})

overlay.addEventListener('click', () => {
  const modal7 = document.querySelectorAll('.modal7.active')
  modal7.forEach(modal7 => {
    closeModal(modal7)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal7 = button.closest('.modal7')
    closeModal(modal7)
  })
})

function openModal(modal7) {
  if (modal7 == null) return
  modal7.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal7) {
  if (modal7 == null) return
  modal7.classList.remove('active')
  overlay.classList.remove('active')
}



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal8 = document.querySelector(button.dataset.modalTarget)
    openModal(modal8)
  })
})

overlay.addEventListener('click', () => {
  const modal8 = document.querySelectorAll('.modal8.active')
  modal8.forEach(modal8 => {
    closeModal(modal8)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal8 = button.closest('.modal8')
    closeModal(modal8)
  })
})

function openModal(modal8) {
  if (modal8 == null) return
  modal8.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal8) {
  if (modal8 == null) return
  modal8.classList.remove('active')
  overlay.classList.remove('active')
}



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal9 = document.querySelector(button.dataset.modalTarget)
    openModal(modal9)
  })
})

overlay.addEventListener('click', () => {
  const modal9 = document.querySelectorAll('.modal9.active')
  modal9.forEach(modal9 => {
    closeModal(modal9)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal9 = button.closest('.modal9')
    closeModal(modal9)
  })
})

function openModal(modal9) {
  if (modal9 == null) return
  modal9.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal9) {
  if (modal9 == null) return
  modal9.classList.remove('active')
  overlay.classList.remove('active')
}



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal10 = document.querySelector(button.dataset.modalTarget)
    openModal(modal10)
  })
})

overlay.addEventListener('click', () => {
  const modal10 = document.querySelectorAll('.modal10.active')
  modal10.forEach(modal10 => {
    closeModal(modal10)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal10 = button.closest('.modal10')
    closeModal(modal10)
  })
})

function openModal(modal10) {
  if (modal10 == null) return
  modal10.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal10) {
  if (modal10 == null) return
  modal10.classList.remove('active')
  overlay.classList.remove('active')
}



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal11 = document.querySelector(button.dataset.modalTarget)
    openModal(modal11)
  })
})

overlay.addEventListener('click', () => {
  const modal11 = document.querySelectorAll('.modal11.active')
  modal11.forEach(modal11 => {
    closeModal(modal11)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal11 = button.closest('.modal11')
    closeModal(modal11)
  })
})

function openModal(modal11) {
  if (modal11 == null) return
  modal11.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal11) {
  if (modal11 == null) return
  modal11.classList.remove('active')
  overlay.classList.remove('active')
}



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal12 = document.querySelector(button.dataset.modalTarget)
    openModal(modal12)
  })
})

overlay.addEventListener('click', () => {
  const modal12 = document.querySelectorAll('.modal12.active')
  modal12.forEach(modal12 => {
    closeModal(modal12)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal12 = button.closest('.modal12')
    closeModal(modal12)
  })
})

function openModal(modal12) {
  if (modal12 == null) return
  modal12.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal12) {
  if (modal12 == null) return
  modal12.classList.remove('active')
  overlay.classList.remove('active')
}



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal13 = document.querySelector(button.dataset.modalTarget)
    openModal(modal13)
  })
})

overlay.addEventListener('click', () => {
  const modal13 = document.querySelectorAll('.modal13.active')
  modal13.forEach(modal13 => {
    closeModal(modal13)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal13 = button.closest('.modal13')
    closeModal(modal13)
  })
})

function openModal(modal13) {
  if (modal13 == null) return
  modal13.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal13) {
  if (modal13 == null) return
  modal13.classList.remove('active')
  overlay.classList.remove('active')
}



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal14 = document.querySelector(button.dataset.modalTarget)
    openModal(modal14)
  })
})

overlay.addEventListener('click', () => {
  const modal14 = document.querySelectorAll('.modal14.active')
  modal14.forEach(modal14 => {
    closeModal(modal14)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal14 = button.closest('.modal14')
    closeModal(modal14)
  })
})

function openModal(modal14) {
  if (modal14 == null) return
  modal14.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal14) {
  if (modal14 == null) return
  modal14.classList.remove('active')
  overlay.classList.remove('active')
}



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal15 = document.querySelector(button.dataset.modalTarget)
    openModal(modal15)
  })
})

overlay.addEventListener('click', () => {
  const modal15 = document.querySelectorAll('.modal15.active')
  modal15.forEach(modal15 => {
    closeModal(modal15)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal15 = button.closest('.modal15')
    closeModal(modal15)
  })
})

function openModal(modal15) {
  if (modal15 == null) return
  modal15.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal15) {
  if (modal15 == null) return
  modal15.classList.remove('active')
  overlay.classList.remove('active')
}