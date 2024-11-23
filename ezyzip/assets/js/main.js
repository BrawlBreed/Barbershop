window.addEventListener('load', (event) => {
  //hamburger 
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('hamburgerNav');
  //останалите променливи в кода
  // const slider1 = new Slider(document.querySelector('#slider1'))
  // const slider2 = new Slider(document.querySelector('#slider2'))
  // const slider3 = new Slider(document.querySelector('#slider3'))

  hamburger.addEventListener('click', function showMenu(){
    navMenu.classList.toggle('active')
  })
  

    //slider constructor
    class Slider {
      constructor(sliderElement) {
        this.sliderElement = sliderElement;
        this.sliderItems = sliderElement.querySelectorAll('.slider-item');
        this.sliderDots = sliderElement.querySelector('.slider-dots');
        this.currentIndex = 0;
        this.createDots();
        this.setActive();
        setInterval(() => {
          this.slideNext();
        }, 8000);
      }
    
      createDots() {
        if (!this.sliderDots) {
          return;
        }
        this.sliderItems.forEach((item, index) => {
          const dot = document.createElement('div');
          dot.classList.add('slider-dot');
          if (index === 0) {
            dot.classList.add('active');
          }
          dot.addEventListener('click', () => {
            this.goToIndex(index);
          });
          this.sliderDots.appendChild(dot);
        });
      }
    
      setActive() {
        const activeItem = this.sliderElement.querySelector('.slider-item.active');
        if (activeItem) {
          activeItem.classList.remove('active');
        }
        this.sliderItems[this.currentIndex].classList.add('active');
      
        const activeDot = this.sliderElement.querySelector('.slider-dot.active');
        if (activeDot) {
          activeDot.classList.remove('active');
        }
        if (this.sliderDots) {
          this.sliderDots.children[this.currentIndex].classList.add('active');
        }
      }
      
    
      goToIndex(index) {
        this.currentIndex = index;
        this.setActive();
      }
    
      slideNext() {
        this.currentIndex++;
        if (this.currentIndex >= this.sliderItems.length) {
          this.currentIndex = 0;
        }
        this.setActive();
      }
    
      slidePrev() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
          this.currentIndex = this.sliderItems.length - 1;
        }
        this.setActive();
      }
    }
    //end constructor for slider
    const slider1 = new Slider(document.querySelector('#slider1'))
    //end slider

    //our team click effect

    const ourTeamContents = document.querySelectorAll('.ourTeam_content');

    ourTeamContents.forEach(function(content) {
        content.addEventListener('click', function() {
            for (let i = 0; i < ourTeamContents.length; i++) {
            ourTeamContents[i].classList.remove('active_click');
        }
        content.classList.add('active_click');
        });
    });
    // slider 2
    const slider2 = new Slider(document.querySelector('#slider2'))
    //slider 3
    const slider3 = new Slider(document.querySelector('#slider3'))
    

});
  