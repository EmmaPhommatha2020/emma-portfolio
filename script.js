(() => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Reveal-on-scroll
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target);}
    });
  },{threshold:0.1});
  reveals.forEach(el=>io.observe(el));

  // Back-to-top button
  const topBtn=document.getElementById('toTop');
  window.addEventListener('scroll',()=>{
    if(window.scrollY>400) topBtn.classList.add('show');
    else topBtn.classList.remove('show');
  });
  topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

  // Contact form + modal
  const form=document.getElementById('contactForm');
  const status=document.getElementById('formStatus');
  const modalEl=document.getElementById('thankYouModal');
  const thankYouModal=new bootstrap.Modal(modalEl);

  form.addEventListener('submit',async e=>{
    e.preventDefault();
    status.textContent='Sending...';
    const data=new FormData(form);
    try{
      const res=await fetch(form.action,{method:'POST',body:data,headers:{'Accept':'application/json'}});
      if(res.ok){
        form.reset();
        status.textContent='';
        thankYouModal.show();
        setTimeout(()=>thankYouModal.hide(),4000);
      }else status.textContent='❌ Something went wrong.';
    }catch{status.textContent='❌ Network error.';}
  });
})();
