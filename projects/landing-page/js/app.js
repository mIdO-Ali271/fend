const navLst = document.querySelector("#navbar__list");
const allSec = document.querySelectorAll("section");
const frg = document.createDocumentFragment();

// build the nav

allSec.forEach((sec) => {
	const nLst = document.createElement('li');
    const xyz = sec.dataset.nav
     
	nLst.innerHTML += `<a  href="#sec${index + 1}" class="menu__link" id="${xyz}" >${xyz}</a>`;

    frg.appendChild(nLst);

  });
navLst.appendChild(frg);

// getting the largest value that's less or equal to the number
   const offsetSec = (sec) => {
    return Math.floor(sec.getBoundingClientRect().top);
};

// remove the active class
const removeActiveSec = (sec) => {
    sec.classList.remove('secActive');
    sec.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
    
};



// adding the active class
const addActiveSec = (condition, sec) => {
    if(condition){
        sec.classList.add('secActive');
        sec.style.cssText = "border: 7px solid #fff;";

            //return section =>num Section active//
             const xSec = sec.getAttribute('data-nav');  
             const lnks= document.querySelectorAll('.menu__link');
          for (lnk of lnks ) {

            //return links =>"section i "//
             const xLnk =lnk.getAttribute('id');

             // remove the active class
             lnk.classList.remove('active');

             // active section related the same link 
           if (xSec == xLnk ) {

            // adding the active class
            lnk.classList.add('active');
            
           }
          }
          
       
    };
};

//implementating the actual function

const secActive = () => {
    allSec.forEach(sec) => {
        const elementOffset = offsetSec(sec);


        isInView = () => elementOffset < 150 && elementOffset >= -150;

        removeActiveSec(sec);
        
        addActiveSec(isInView(),sec);
     
    });

};

window.addEventListener('scroll' ,secActive);




//smoothly scroll when click links

const makeNavSmooth = ( ) => {
  const allLnks = document.querySelectorAll( '.menu__link' );

  for ( let n in allLnks ) {
    if ( allLnks.hasOwnProperty( n ) ) {
      allLnks[ n ].addEventListener( 'click', e => {
        e.preventDefault( );
        document.querySelector( allLnks[ n ].hash )
          .scrollIntoView( {
            behavior: "smooth"
          } );
      } );
    }
  }
}
makeNavSmooth( );



});
