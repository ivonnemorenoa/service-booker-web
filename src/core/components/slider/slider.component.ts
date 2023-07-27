import { Component } from '@angular/core';


export type DirectionType = 'left' | 'right';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  private stopped: boolean = false;
  private direction: DirectionType = 'left';
  private inTransition: boolean = false;

  constructor() {
  }


  onMouseEnter() {
    console.log('onMouseEnter');

    this.stopped = true;
  }

  onMouseLeave() {
    console.log('onMouseLeave');
    this.stopped = false;
  }


  ngAfterViewInit() {
    console.log('ngAfterViewInit')


    const sliderTrack: any = document.getElementById('sliderTrack');
    const container: any = document.getElementById('container');
    let currentIndex = 0;

    const btnLeft: any = document.getElementById('btnLeft');
    const btnRight: any = document.getElementById('btnRight');

    // Clona los primeros elementos para que aparezcan al final
    const sliderElements = [...sliderTrack.children];
    const numElements = sliderElements.length;
    // const clonedElements = sliderElements.slice(0, 3).map((el) => el.cloneNode(true));
    const clonedElements = sliderElements.slice(numElements - 3, numElements).map((el) => el.cloneNode(true));
    sliderTrack.append(...clonedElements);
    const cloneCount = 3;



    const moveSlider = (direction: 'left' | 'right') => {
      this.direction = direction;
      if (this.inTransition) {
        return;
      }

      // Event Listeners para los botones de desplazamiento (izquierda y derecha)


      this.inTransition = true;

      const trackWidth = sliderTrack.clientWidth;
      const numElements = sliderElements.length;

      // const slideAmount = direction === 'left' ? -trackWidth / 3 : trackWidth / 3;
      const slideAmount = direction === 'left' ? -trackWidth / cloneCount : trackWidth / cloneCount;
      currentIndex = (currentIndex + numElements + (direction === 'left' ? 1 : -1)) % numElements;


      sliderTrack.style.transform = `translateX(${slideAmount}px)`;

      setTimeout(() => {
        // Resetea la posición del slider después de la animación
        sliderTrack.style.transition = 'none';
        sliderTrack.style.transform = 'translateX(0)';

        // Mueve los elementos clonados al final o al inicio según la dirección
        if (direction === 'left') {
          sliderTrack.append(sliderElements[currentIndex].cloneNode(true));
        } else {
          sliderTrack.prepend(sliderElements[currentIndex].cloneNode(true));
        }

        // Elimina los elementos clonados del principio o del final según la dirección
        sliderTrack.removeChild(direction === 'left' ? sliderTrack.firstElementChild : sliderTrack.lastElementChild);



        // Vuelve a habilitar la transición
        setTimeout(() => {
          sliderTrack.style.transition = 'transform 0.3s ease';

          this.inTransition = false;
        }, 100);

      }, 300);
    }



    btnLeft.addEventListener('click', () => {
      moveSlider('left')
    });

    btnRight.addEventListener('click', () => {
      moveSlider('right')
    });


    container.addEventListener("wheel", ($event: any) => {
      $event.stopPropagation();
      $event.preventDefault();


      if ($event.deltaX < 0) {
        this.direction = 'left';
        moveSlider('left')
      } else if ($event.deltaX > 0) {
        this.direction = 'right';
        moveSlider('right')
      }

    }, { passive: true });


    setInterval(() => {
      if (!this.stopped) {
        moveSlider(this.direction);
      }
    }, 2000);
  }
}
