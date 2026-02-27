const header = document.querySelector('header')

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('header-scrolled')
  } else {
    header.classList.remove('header-scrolled')
  }
})

document.querySelectorAll('.main-nav-container-links > li > a').forEach(link => {
  const img = link.querySelector('img')

  if (!img) return

  link.addEventListener('mouseenter', () => {
    img.src = './assets/icons/arrow-bottom-orange.svg'
  })

  link.addEventListener('mouseleave', () => {
    img.src = '../assets/icons/arrow-bottom.svg'
  })
})

document.getElementById('search').addEventListener('mouseenter', () => {
  document.getElementById('search').src = './assets/icons/search-orange.svg'
})

document.getElementById('search').addEventListener('mouseleave', () => {
  document.getElementById('search').src = './assets/icons/search.svg'
})

const dialog = document.getElementById('dialog')
const openBtn = document.getElementById('openDialog')
const closeBtn = document.getElementById('closeDialog')

openBtn.addEventListener('click', () => {
  dialog.showModal()
})

closeBtn.addEventListener('click', () => {
  dialog.close()
})
