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
