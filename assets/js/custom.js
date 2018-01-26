// Wrap images to use with Luminous
$("img.lumos").wrap(function() {
    return "<a href='" + $(this).attr('src') + "' class='luminous'></a>"});

// RUN STUFF
new LuminousGallery(document.querySelectorAll('a.luminous'));
