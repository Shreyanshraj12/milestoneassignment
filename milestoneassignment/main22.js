window.addEventListener('scroll', function() {
    const progressBarFill = document.getElementById('progressBarFill');
    const windowHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollProgress = (window.pageYOffset / pageHeight) * 100;
    progressBarFill.style.width = scrollProgress + '%';
  });
  