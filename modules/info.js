//jshint esversion: 6

module.exports.quote = () => {
  quoteNum = () => {
    return Math.floor((quotes.length * Math.random()));
  };
  let quoteArray =[];
  while (quoteArray.length < 7) {
    let chosenQuote = quotes[quoteNum()];
    if (quoteArray.indexOf(chosenQuote) === -1) {
      quoteArray.push(chosenQuote);
    }
  }
  return quoteArray;
};

const quotes = [
  "Our greatest glory is not in never falling, but in rising every time we fall. — Confucius",
  "All our dreams can come true, if we have the courage to pursue them. – Walt Disney",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "Everything you’ve ever wanted is on the other side of fear. — George Addair",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. ― Roy T. Bennett",
  "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. – Nelson Mandela",
  "If you truly love nature, you will find beauty everywhere. - Laura Ingalls Wilder",
  "Nature always wears the colors of the spirit. - Ralph Waldo Emerson",
  "Look deep into nature, and then you will understand everything better. - Albert Einstein",
  "Just living is not enough. One must have sunshine, freedom, and a little flower. - Hans Christian Andersen",
  "Wherever you go, no matter what the weather, always bring your own sunshine. - Anthony J. D'Angelo",
  "In every walk with nature one receives far more than he seeks. - John Muir",
  "Over every mountain there is a path, although it may not be seen from the valley. - Theodore Roethke",
  "If you can't be in awe of Mother Nature, there's something wrong with you. - Alex Trebek",
  "I’m not fat. I’m cultivating mass. - Fat Mac"
];


module.exports.image = () => {
    imagNum = () => {
      return Math.floor(images.length * Math.random());
    };

    let imagesArray =[];
    while (imagesArray.length < 7) {
      let imageBack = images[imagNum()];
      if (imagesArray.indexOf(imageBack) === -1){
        imagesArray.push(imageBack);
      }
    }
    return imagesArray;

};

const images = [
  "/images/nature1.jpg",
  "/images/nature2.jpg",
  "/images/nature3.jpeg",
  "/images/nature4.jpg",
  "/images/nature5.jpeg",
  "/images/nature6.jpg",
  "/images/nature7.jpg",
  "/images/nature8.jpeg",
  "/images/nature9.jpeg",
  "/images/nature10.jpg",
  "/images/nature11.jpeg",
  "/images/nature12.jpeg",
  "/images/nature13.jpeg",
  "/images/nature15.jpg",
  "/images/nature16.jpg",
  "/images/nature17.jpg",
  "/images/IASP.jpg"
];
