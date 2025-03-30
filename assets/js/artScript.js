const sectionContainer = document.querySelector('.wrapper.style1.align-center'); 

const innerDiv = document.createElement('div');
innerDiv.classList.add('inner');
innerDiv.innerHTML = `
    <h2>Art Portfolio</h2>
    <p>As a passionate and creative person, I had found art as a way to express myself. Eventually, this leads to owning an online business to sell customized artworks. It's the not-customized ones that truly meant the world to me, I hope the customized ones mean the world to my clients.</p>
`;
sectionContainer.appendChild(innerDiv);

const galleryContainer = document.createElement('div');
galleryContainer.classList.add('gallery', 'style2', 'medium', 'lightbox', 'onscroll-fade-in');

const galleryItems = [
    { 
        full: 'images/gallery/7.jpg', 
        thumb: 'images/gallery/7.jpg', 
        title: 'Pencil Sketches', 
        desc: 'Capturing life\'s subtle details through delicate graphite strokes. Each sketch tells a story of observation and artistic interpretation.', 
        category: 'Pencil Sketches' 
    },
    { 
        full: 'images/gallery/12.jpg', 
        thumb: 'images/gallery/12.jpg', 
        title: 'Mandala', 
        desc: 'Intricate geometric patterns that represent the universe and inner harmony. Each mandala is a meditative journey of symmetry and spiritual expression.', 
        category: 'Mandala' 
    },
    { 
        full: 'images/gallery/6.jpg', 
        thumb: 'images/gallery/6.jpg', 
        title: 'Ink Work', 
        desc: 'Bold, fluid lines that dance across the page. Ink art that explores the dynamic interplay between control and spontaneity.', 
        category: 'Ink Work' 
    },
    { 
        full: 'images/gallery/24.jpg', 
        thumb: 'images/gallery/24.jpg', 
        title: 'Miscellaneous', 
        desc: 'A diverse collection of artistic experiments and creative explorations. From abstract concepts to unexpected inspirations.', 
        category: 'Miscellaneous' 
    }
];
galleryItems.forEach(item => {
    const article = document.createElement('article');
    article.innerHTML = `
        <a href="${item.full}" class="image">
            <img src="${item.thumb}" alt="${item.title}" />
        </a>
        <div class="caption">
            <h3><strong>${item.title}</strong></h3>
            <p><strong>${item.desc}</strong></p>
            <a href="pages/pictures.html?cat=${encodeURIComponent(item.category)}" class="button small">Show More</a>
        </div>
    `;
    galleryContainer.appendChild(article);
});

sectionContainer.appendChild(galleryContainer);