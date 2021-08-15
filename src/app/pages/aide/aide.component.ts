import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aide',
  templateUrl: './aide.component.html',
  styleUrls: ['./aide.component.css']
})
export class AideComponent implements OnInit {
  imagesAjoutContact = [];
  imagesAjoutAdresse = [];

  imagesModifierAdresse = [];
  imagesModifierContact = [{
    image: '../../../assets/modif1.png',
    thumbImage: '../../../assets/modif1.png',
    title: 'Etape 1'
  }, {
    image: '../../../assets/modif2.png',
    thumbImage: '../../../assets/modif2.png',
    title: 'Etape 2'
  }, {
    image: '../../../assets/modif3.png',
    thumbImage: '../../../assets/modif3.png',
    title: 'Etape 3'
  }, {
    image: '../../../assets/modif4.png',
    thumbImage: '../../../assets/modif4.png',
    title: 'Etape 4',
  }, {
    image: '../../../assets/modif5.png',
    thumbImage: '../../../assets/modif5.png',
    title: 'Etape 5'
  }, {
    image: '../../../assets/modif6.png',
    thumbImage: '../../../assets/modif6.png',
    title: 'Etape 6'
  }, {
    image: '../../../assets/modif7.png',
    thumbImage: '../../../assets/modif7.png',
    title: 'Etape 7'
  },
  ];

  imageSupprimerContact = [{
    image: '../../../assets/supp1.png',
    thumbImage: '../../../assets/supp1.png',
    title: 'Etape 1'
}, {
  image: '../../../assets/supp2.png',
  thumbImage: '../../../assets/supp2.png',
  title: 'Etape 2'
}, {
  image: '../../../assets/supp3.png',
  thumbImage: '../../../assets/supp3.png',
  title: 'Etape 3'
}, {
  image: '../../../assets/supp4.png',
  thumbImage: '../../../assets/supp4.png',
  title: 'Etape 4',

}, {
  image: '../../../assets/supp5.png',
  thumbImage: '../../../assets/supp5.png',
  title: 'Etape 5'
}, {
  image: '../../../assets/supp6.png',
  thumbImage: '../../../assets/supp6.png',
  title: 'Etape 6'
},];
  imageSupprimerAdresse = [];

  constructor() { }

  ngOnInit(): void {
  }

}
