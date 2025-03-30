const pencilSketches = [1, 2, 3, 4, 5, 7, 9, 11, 27, 28, 30, 31, 32, 33, 34, 36, 59];
const mandala = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 60, 62, 63, 64];
const inkWork = [8, 10, 35, 37, 41, 52, 53, 55, 56, 65];
const miscellaneous = [10, 23, 24, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 57, 58];

const generateImagePaths = (category, imageNumbers) => 
    imageNumbers.map(num => `../images/gallery/${num}.jpg`);

const galleryItems = {
    'Pencil Sketches': generateImagePaths('pencil', pencilSketches),
    'Mandala': generateImagePaths('mandala', mandala),
    'Ink Work': generateImagePaths('ink', inkWork),
    'Miscellaneous': generateImagePaths('misc', miscellaneous)
};

const params = new URLSearchParams(window.location.search);
const selectedCategory = params.get('cat');

        
if (!selectedCategory || !galleryItems[selectedCategory]) {
    alert('Invalid category selected');
    window.location.href = '../index.html'; 
}

const categoryImages = galleryItems[selectedCategory];

const galleryDiv = document.getElementById('gallery');

categoryImages.forEach((imagePath, index) => {
    const link = document.createElement('a');
    link.href = imagePath;
    link.target = "_blank";

    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = `${selectedCategory} Image ${index + 1}`;

    link.appendChild(img);
    galleryDiv.appendChild(link);
});