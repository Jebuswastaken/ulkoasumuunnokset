'use strict';

const ekaP = document.querySelector('p');
const tokaP = document.querySelector('p:nth-child(2)');
const kolmasP = document.querySelector('p:nth-child(3)');

const lisaa = document.querySelector('#lisaa');
const vaihda = document.querySelector('#vaihda');
const toggle = document.querySelector('#toggle');

lisaa.addEventListener('click', (evt) => {
    ekaP.classList.add('punainen');
});

vaihda.addEventListener('click', (evt) => {
    if(tokaP.classList.contains('punainen')) {
        tokaP.classList.replace('punainen', 'sininen');
    } else {
        tokaP.classList.replace('sininen', 'punainen');
    }
});

toggle.addEventListener('click', (evt) => {
    kolmasP.classList.toggle('vihrea');
});

/* toinen vaihtoehto eventListenerille*************
const vaihdaVari = (evt) => {
  ekaP.classList.add('punainen');
};

lisaa.addEventListener('click', vaihdaVari);
*/

'use strict';

const loadJSON = (url, func) => {
    fetch(url).then((response) => {
        return response.json();
    }).then((json) => {
        func(json);
    });
};

const linkkiTapahtumat = () => {
    const linkit = document.querySelectorAll('ul a');
    // jne...
}


const templateFunction = (json) => {
    let html = '';
    json.forEach((kuva) => {
        html += `<li>
            <figure>
                <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                <figcaption>
                    <h3>${kuva.mediaTitle}</h3>
                </figcaption>
            </figure>
        </li>`;
    });
    const element = document.querySelector('ul');
    element.innerHTML = html;
    // linkit voi valita vasta tämän jälkeen, eli html on nyt valmis
    linkkiTapahtumat();
};

loadJSON('kuvat.json', templateFunction);

const suljeNappi = document.querySelector('.closeBtn');
const modal = document.querySelector('#modal');

suljeNappi.addEventListener('click', (evt) => {
    evt.preventDefault();
    // vaihda modalin luokka lightboxista hiddeniin
    modal.classList.replace('lightbox', 'hidden')
});


