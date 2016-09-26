$('#gallery').galleria({
});

Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.4.5/themes/classic/galleria.classic.min.js');

Galleria.configure({
    preload: 0, 
    thumbnails: "empty", 
    lightbox: true
});

Galleria.run('#gallery');