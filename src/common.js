new WOW().init();  

document.addEventListener("DOMContentLoaded", function() {
  const anis = document.querySelectorAll('.ani');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          } else {
              entry.target.classList.remove('show');
          }
      });
  }, {
      threshold: 0.1  // 요소가 10%만 화면에 들어와도 트리거되도록 설정
  });

  anis.forEach(ani => {
      observer.observe(ani);
  });
});