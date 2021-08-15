import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aide',
  templateUrl: './aide.component.html',
  styleUrls: ['./aide.component.css']
})
export class AideComponent implements OnInit {
  imagesAjoutContact = [{
    image: '../../../assets/add1.png',
    thumbImage: '../../../assets/add1.png',
    title: 'Etape 1'
  }, {
    image: '../../../assets/add2.png',
    thumbImage: '../../../assets/add2.png',
    title: 'Etape 2'
  }, {
    image: '../../../assets/add3.png',
    thumbImage: '../../../assets/add3.png',
    title: 'Etape 3'
  }, {
    image: '../../../assets/add4.png',
    thumbImage: '../../../assets/add4.png',
    title: 'Etape 4',
  }, {
    image: '../../../assets/add5.png',
    thumbImage: '../../../assets/add5.png',
    title: 'Etape 5'
  }, {
    image: '../../../assets/add6.png',
    thumbImage: '../../../assets/add6.png',
    title: 'Etape 6'
  }, {
    image: '../../../assets/add7.png',
    thumbImage: '../../../assets/add7.png',
    title: 'Etape 7'
  },];
  imagesAjoutAdresse = [{
    image: '../../../assets/add1.png',
    thumbImage: '../../../assets/add1.png',
    title: 'Etape 1'
  }, {
    image: '../../../assets/adrAdd2.png',
    thumbImage: '../../../assets/adrAdd2.png',
    title: 'Etape 2'
  }, {
    image: '../../../assets/adrAdd3.png',
    thumbImage: '../../../assets/adrAdd3.png',
    title: 'Etape 3'
  }, {
    image: '../../../assets/adrAdd4.png',
    thumbImage: '../../../assets/adrAdd4.png',
    title: 'Etape 4',
  }, {
    image: '../../../assets/adrAdd5.png',
    thumbImage: '../../../assets/adrAdd5.png',
    title: 'Etape 5'
  }, {
    image: '../../../assets/adrAdd6.png',
    thumbImage: '../../../assets/adrAdd6.png',
    title: 'Etape 6'
  }];

  imagesModifierContact = [{
    image: '../../../assets/add1.png',
    thumbImage: '../../../assets/add1.png',
    title: 'Etape 1'
  }, {
    image: '../../../assets/modif2.png',
    thumbImage: '../../../assets/modif2.png',
    title: 'Etape 2'
  }, {
    image: '../../../assets/modif3.png',
    thumbImage: '../../../assets/modif3.png',
    title: 'Appuyer sur la touche "Entrée" du clavier'
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
  imagesModifierAdresse = [{
    image: '../../../assets/add1.png',
    thumbImage: '../../../assets/add1.png',
    title: 'Etape 1'
  }, {
    image: '../../../assets/adrAdd2.png',
    thumbImage: '../../../assets/adrAdd2.png',
    title: 'Etape 2'
  }, {
    image: '../../../assets/adrModif3.png',
    thumbImage: '../../../assets/adrModif3.png',
    title: 'Etape 3'
  }, {
    image: '../../../assets/adrModif4.png',
    thumbImage: '../../../assets/adrModif4.png',
    title: 'Etape 4',
  }, {
    image: '../../../assets/adrModif5.png',
    thumbImage: '../../../assets/adrModif5.png',
    title: 'Etape 5'
  }
];

  imageSupprimerContact = [{
    image: '../../../assets/add1.png',
    thumbImage: '../../../assets/add1.png',
    title: 'Etape 1'
}, {
  image: '../../../assets/supp2.png',
  thumbImage: '../../../assets/supp2.png',
  title: 'Etape 2'
}, {
  image: '../../../assets/supp3.png',
  thumbImage: '../../../assets/supp3.png',
  title: 'Appuyer sur la touche "Backspace" du clavier'
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
  imageSupprimerAdresse = [
    {
      image: '../../../assets/add1.png',
      thumbImage: '../../../assets/add1.png',
      title: 'Etape 1'
  }, {
    image: '../../../assets/adrAdd2.png',
    thumbImage: '../../../assets/adrAdd2.png',
    title: 'Etape 2'
  }, {
    image: '../../../assets/supp2.png',
    thumbImage: '../../../assets/supp2.png',
    title: 'etape3',

  }, {
    image: '../../../assets/supp3.png',
    thumbImage: '../../../assets/supp3.png',
    title: 'Appuyer sur la touche "Backspace" du clavier'
  },{
    image: '../../../assets/supp4.png',
    thumbImage: '../../../assets/supp4.png',
    title: 'Etape 5'
  },
  {
    image: '../../../assets/supp5.png',
    thumbImage: '../../../assets/supp5.png',
    title: 'Etape 6'
  },
  {
    image: '../../../assets/supp6.png',
    thumbImage: '../../../assets/supp6.png',
    title: 'Etape 7'
  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
