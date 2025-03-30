const sectionContainer = document.querySelector('.wrapper.style1.align-center'); 

const innerDiv = document.createElement('div');
innerDiv.classList.add('inner');
innerDiv.innerHTML = `
    <h3>Gallery</h3>
    <p>Here are some photographs from my workplace, including the instruments and equipment I have worked with. I have obtained permission to share these images.</p>
`;
sectionContainer.appendChild(innerDiv);

const galleryContainer = document.createElement('div');
galleryContainer.classList.add('gallery', 'style2', 'medium', 'lightbox', 'onscroll-fade-in');

const galleryItems = [
    { 
        full: '../images/work/20.jpg',  
        title: 'Industrial Training, Mugda medical College'  
    },
    { 
        full: '../images/work/5.jpg', 
        title: 'Industrial Training, National Institute of Nuclear Medicine and Allied Sciences'
    },
    { 
        full: '../images/work/2.jpg',  
        title: 'Industrial Training, National Institute of Nuclear Medicine and Allied Sciences'  
    },
    { 
        full: '../images/work/16.jpg',  
        title: 'KGH visit'  
    },
    { 
        full: '../images/work/19.jpg',  
        title: 'KGH visit' 
    },
    { 
        full: '../images/work/18.jpg', 
        title: 'KGH visit'
    },
    { 
        full: '../images/work/21.jpg',  
        title: 'Industrial Training, MRI'  
    },
    { 
        full: '../images/work/6.jpg',  
        title: 'Industrial Training, CMH' 
    },
    { 
        full: '../images/work/7.jpg',  
        title: 'Industrial Training, CMH'  
    },
    { 
        full: '../images/work/8.jpg',  
        title: 'Industrial Training, CMH'  
    },
    { 
        full: '../images/work/1.jpg',  
        title: 'Industrial Training, Mugda medical College' 
    },
    { 
        full: '../images/work/3.jpg',  
        title: 'Industrial Training, National Institute of Nuclear Medicine and Allied Sciences'  
    },
    { 
        full: '../images/work/12.jpg',  
        title: 'NEMEMW TC Internship'  
    },
    { 
        full: '../images/work/13.jpg', 
        title: 'NEMEMW TC Internship'
    },
    { 
        full: '../images/work/9.jpg', 
        title: 'Industrial Training, CMH'
    },
    { 
        full: '../images/work/4.jpg', 
        title: 'Industrial Training, National Institute of Nuclear Medicine and Allied Sciences'
    },
    { 
        full: '../images/work/10.jpg',  
        title: 'NEMEMW TC Internship' 
    },
    { 
        full: '../images/work/11.jpg',  
        title: 'NEMEMW TC Internship'  
    },
    { 
        full: '../images/work/14.jpg', 
        title: 'NEMEMW TC Internship'
    },
    { 
        full: '../images/work/15.jpg',  
        title: 'NEMEMW TC Internship' 
    },
    { 
        full: '../images/work/17.jpg',  
        title: 'KGH visit'  
    },
    { 
        full: '../images/work/22.jpg', 
        title: 'Industrial Training, Mugda medical College'
    }
];
galleryItems.forEach(item => {
    const article = document.createElement('article');
    article.innerHTML = `
        <a href="${item.full}" class="image">
            <img src="${item.full}" alt="${item.title}" />
        </a>
        <div class="caption">
            <h3><strong>${item.title}</strong></h3>
        </div>
    `;
    galleryContainer.appendChild(article);
});

sectionContainer.appendChild(galleryContainer);