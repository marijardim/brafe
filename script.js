  const btn = document.querySelector('.btn-menu');
  const menu = document.querySelector('.nav-bar ul');
  const active = 'active';
  
  function mobileMenu(){
  const events = ['touchstart', 'click'];

  function outsideClick(element, events, callback){
    const html = document.documentElement;
    const outside = 'data-outside';
    if(!element.hasAttribute(outside)){
      events.forEach((userEvent)=>{
        setTimeout(()=> html.addEventListener(userEvent, handleOutsideClick)) 
      })
      element.setAttribute(outside, '');
    }
    function handleOutsideClick(event){
      if(!element.contains(event.target)){
         element.removeAttribute(outside);
         events.forEach(userEvent => {
           html.removeEventListener(userEvent, handleOutsideClick);
         })
         callback();
      }
    }
  }


  function openMenu(event){
    event.preventDefault();
    btn.classList.toggle(active);
    menu.classList.toggle(active);
    
    outsideClick(menu, events, ()=>{
      menu.classList.remove(active)
      btn.classList.remove(active)
    });
  }

  events.forEach((e) => btn.addEventListener(e, openMenu))
}


mobileMenu();

