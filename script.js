function createArtistBlock(artistData) {
    const artistDiv = document.createElement('div');
    artistDiv.classList.add('artist');

    const imgElement = document.createElement('img');
    imgElement.classList.add('artist-img');
    imgElement.src = artistData.imageSrc;
    imgElement.alt = artistData.altText;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('information');

    const nameElement = document.createElement('p');
    nameElement.classList.add('name');
    nameElement.textContent = artistData.name;

    const introElement = document.createElement('p');
    introElement.classList.add('intro');
    introElement.textContent = artistData.intro;

    const detailsElement = document.createElement('p');
    detailsElement.classList.add('details');
    detailsElement.textContent = artistData.details;

    infoDiv.appendChild(nameElement);
    infoDiv.appendChild(introElement);
    infoDiv.appendChild(detailsElement);

    artistDiv.appendChild(imgElement);
    artistDiv.appendChild(infoDiv);

    document.getElementById('artist-container').appendChild(artistDiv);
}

const initialArtists = [
    {
        name: 'Stray Kids',
        imageSrc: 'images/skz.jpg',
        altText: 'Stray Kids',
        intro: 'An 8-member Korean boy group known for their self-produced music and hip-hop energy.',
        details: 'Stray Kids have consistently broken records on global music charts. Their unique sound and powerful stage presence have captivated fans worldwide.',
    },
    {
        name: 'ENHYPEN',
        imageSrc: 'images/enhypen.jpeg',
        altText: 'ENHYPEN',
        intro: 'A 7-member boy group formed from the survival show I-LAND, known for their unique concepts.',
        details: 'ENHYPEN has quickly risen to fame with their innovative music, storytelling, and powerful choreography, gaining fans globally.',
    }
];

const moreArtists = [
    {
        name: 'TXT',
        imageSrc: 'images/txtt.jpg',
        altText: 'TXT',
        intro: 'A 5-member boy group under Big Hit Entertainment, known for their diverse music styles.',
        details: 'TXT has quickly gained popularity with their fresh sound, unique concepts, and dedicated fanbase.',
    },
    {
        name: 'Aespa',
        imageSrc: 'images/aespa.jpg',
        altText: 'Aespa',
        intro: 'A 4-member girl group from SM Entertainment, known for their AI-integrated concept.',
        details: 'Aespa has gained international attention with their groundbreaking concept and powerful music, blending virtual and real worlds.',
    }
];

window.addEventListener('DOMContentLoaded', () => {
    initialArtists.forEach(artistData => createArtistBlock(artistData));
});

function showMoreArtists() {
    moreArtists.forEach(artistData => createArtistBlock(artistData));

    document.getElementById('show-more-btn').style.display = 'none';
}
