"use strict";
//importing galleryImages module
import {galleryImages} from './galleryImages.mjs';

//consts decleration
const imageTemplate= document.querySelector('#image-template');
const main= document.querySelector('main');

//looping through image object array galleryImages
galleryImages.forEach(function(images){
  //cloning the template
  const clone = imageTemplate.content.cloneNode(true);

  // getting all the elements in clone
  const image=clone.querySelector('img');
  const imageTitle=clone.querySelector('h5');
  const discription=clone.querySelector('p');
  const credit=clone.querySelector('span');
  const anchor=clone.querySelectorAll('a');

  //looping throught array anchor which contains all the <a> tags in clone
  anchor.forEach(function(item){
    item.href=images.linkURL;
  });

  //setting all the image data to appropriate attributes
  image.id=images.id;
  image.src=images.pathURL;
  image.width=images.width;
  image.height=images.height;
  image.alt=images.title;
  image.title=images.title;

  //setting data into figcaption
  imageTitle.innerHTML=images.title;

  discription.innerHTML=images.description;

  credit.innerHTML=`Photo by ${images.credit} on ${images.creditURL}`;

  //appending clone to main to display image gallery
  main.appendChild(clone);

});






