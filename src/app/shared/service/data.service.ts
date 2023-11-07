import { query } from '@angular/animations';
import { Injectable, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { increment } from '@angular/fire/firestore'
import * as firebase from 'firebase/compat';

import { catchError, from, last, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit { 

public  n=0;
public o=0;
public fire=0;

public life=0;

public hail=0;
public strom=0;



items: any;
items1: any;
fireI: any;

hailI: any;
stromI: any;
lifeI: any;



  ngOnInit(){
    this.novo();
    this.old();
    this.getfire();
    this.gethail();
    this.getstrom();
    this.getlife();
   
  }
  constructor(private afs : AngularFirestore) {
    this.novo();
    this.old();
    this.getfire();
    this.gethail();
    this.getstrom();
    this.getlife();
   
  }
  addcontra(AddContra : any) {
    this.addN();
    return this.afs.collection("Contra/").add(AddContra);
   
  }

  addcontraAdmin(AddContraAdmin : any) {
   this.addO();
    return this.afs.collection("Contra/").add(AddContraAdmin);
   
  }
  // adN(){
  //   return this.afs.collection("Contra/").add(AddContraAdmin);

  // }
  addN(){

    // return this.afs.doc("new/"+ 'new').update(N:11);
  
    return this.afs.doc("new/"+'new').update({N: increment(1)});
  
  }
  addn(){

    // return this.afs.doc("new/"+ 'new').update(N:11);
  
    return this.afs.doc("new/"+'new').update({N: increment(-1)});
  
  }
  addO(){

    // return this.afs.doc("new/"+ 'new').update(N:11);
  
    return this.afs.doc("old/"+'old').update({o: increment(1)});
  
  }
  addo(){

    // return this.afs.doc("new/"+ 'new').update(N:11);
  
    return this.afs.doc("old/"+'old').update({o: increment(-1)});
  
  }
  /////////////////////
  addfire(){

    // return this.afs.doc("new/"+ 'new').update(N:11);
  
    return this.afs.doc("fire/"+'fire').update({fire: increment(1)});
  
  }
  addhail(){

    // return this.afs.doc("new/"+ 'new').update(N:11);
  
    return this.afs.doc("hail/"+'hail').update({hail: increment(1)});
  
  }
  addstrom(){

    // return this.afs.doc("new/"+ 'new').update(N:11);
  
    return this.afs.doc("strom/"+'strom').update({strom: increment(1)});
  
  }
  addlife(){

    // return this.afs.doc("new/"+ 'new').update(N:11);
  
    return this.afs.doc("life/"+'life').update({life: increment(1)});
  
  }
  getlife(){
    // return this.afs.collection("old/").get();
    this.afs.collection("life/" ).valueChanges().subscribe(value => {
      //  this.n=value.data();
    this.lifeI=value;
    this.life=this.lifeI[0].life;
    
    
      });
  
  }
  getfire(){
    // return this.afs.collection("old/").get();
    this.afs.collection("fire/" ).valueChanges().subscribe(value => {
      //  this.n=value.data();
    this.fireI=value;
    this.fire=this.fireI[0].fire;
    
    
      });
  
  }

  gethail(){
    // return this.afs.collection("old/").get();
    this.afs.collection("hail/" ).valueChanges().subscribe(value => {
      //  this.n=value.data();
    this.hailI=value;
    this.hail=this.hailI[0].hail;
    
    
      });
  
  }
  getstrom(){
    // return this.afs.collection("old/").get();
    this.afs.collection("strom/" ).valueChanges().subscribe(value => {
      //  this.n=value.data();
    this.stromI=value;
    this.strom=this.stromI[0].strom;
    
    
      });
  
  }



// ////////////////

  deleteContra(id : string) {
    return this.afs.doc("Contra/"+id).delete();
  }
  updateContra(addcontraAdmin : any) {
    
    return this.afs.doc("Contra/"+addcontraAdmin.id).update(addcontraAdmin);
  }

  acsepte(addcontraAdmin : any){
    this.addn();
    this.addO();
    return this.afs.doc("Contra/"+addcontraAdmin.id).update(addcontraAdmin);


  }
  getAllContraAmdin(){
   
    // alert(this.items.N);
    return this.afs.collection("Contra/",ref =>
    ref.where( 'test', '==', true  )
  
    
  ).stateChanges();
    
  }
 
 
  getAllContra(){

    return this.afs.collection("Contra/" ).stateChanges();
    
  }
  


  getContraA(){
    return this.afs.collection("Contra/",ref =>
    ref.where( 'test', '==', false  )
  
    
  ).stateChanges();
    
}

 
  getContra(idC:string ,nom:string ,prenom:string){
// if( this.afs.collection("Contra/",ref =>
// ref.where( 'prenom', '==', prenom  )
// .where( 'nom', '==', nom  )
// .where( 'idC', '==', idC  )
// .where('test','==',false)).valueChanges()){
//   alert("1");
// }

    return this.afs.collection("Contra/",ref =>
    ref.where( 'prenom', '==', prenom  )
    .where( 'nom', '==', nom  )
    .where( 'idC', '==', idC  )
    .where('test','==',true)
  
  ).stateChanges();
  
    
  }
  

  addAgent(Agent : any){

    return this.afs.doc("Agent/"+ 'uuuuuuuuugvt').update(Agent);
 
  }
  
  getAgent(){

    return this.afs.collection("Agent/" ).stateChanges();
    
  }

old(){
  // return this.afs.collection("old/").get();
  this.afs.collection("old/" ).valueChanges().subscribe(value => {
    //  this.n=value.data();
  this.items1=value;
  this.o=this.items1[0].o;
  
  
    });

}
novo(){
  // return this.afs.collection("new/" ).valueChanges();

//  this.afs.collection("new/" ).valueChanges('N');
 this.afs.collection("new/" ).valueChanges().subscribe(value => {
  //  this.n=value.data();
this.items=value;
this.n=this.items[0].N;


  });
  
}



  bigChart() {
 
  // this.novo();
    return [{
      name: 'New Contract',
      y:this.n,
      sliced: true,
      selected: true
    }, 
    
    {
      name: 'Old Contract',
      y:this.o,
    },
  ];

}












pieChart() {
  this.getfire();
  this.gethail();
  this.getstrom();
  this.getlife();
 
  return [{
    name: 'Life',
    y: this.life,
    sliced: true,
    selected: true
  },
  
  {
    name: 'Fire',
    y:this.fire,
  }, {
    name: 'Strom',
    y:this.strom,
  }, {
    name: 'Hail',
    y: this.hail,
  },
  ];
}
}