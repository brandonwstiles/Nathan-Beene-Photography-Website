function addImages() {
    var rows = 3;
    var imgColumns = this.document.getElementsByClassName("img-column");

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < imgColumns.length; j++) {
            var myImages = this.document.createElement("img");
            var imgSrc = 'images/Nathan_Beene_sPhotography' + i + '.jpg';
            myImages.src = imgSrc;
            imgColumns[i].appendChild(myImages);
        }
    }
}