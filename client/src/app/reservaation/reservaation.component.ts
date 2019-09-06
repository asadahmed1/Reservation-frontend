import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservaation',
  templateUrl: './reservaation.component.html',
  styleUrls: ['./reservaation.component.css']
})
export class ReservaationComponent implements OnInit {

public reservation = Array();
 public name: string;
 public email: string;
 // drop dwon array
 public rooms = ['Single Person', 'Two Person', 'Family'];
 public roomtype: string;
 public arrivalDate: string;
 public guests: string;
 public pickup: string;
 public flightno: string;
 public _id: string;
 public request: string;
 public radio: String;
 // intialize id
public index = -1;
public id;

  constructor() { }

  ngOnInit() {
  }
  // remove data from text  boxes after different operations performed(e.g update,delete,create)
  Resetdata(){
    this.name = '';
    this.email = '';
    this.roomtype = '';
    this.arrivalDate = '';
    this.guests = '';
    this.pickup = '';
    this.flightno = '';
    this.request = '';
    this.radio = '';

  }
  // add new data
  AddReservation() {

    for (let i = 0; i < this.reservation.length; i++) {
      this.index = i; }

    const newReservation = {
      id: this.index,
      name: this.name,
      email: this.email,
      roomtype: this.roomtype,
      arrivalDate: this.arrivalDate,
      guests: this.guests,
      pickup: this.pickup,
      flightno: this.flightno,
      request: this.request,
      radio:  this.radio

    };

    this.reservation.push(newReservation);
    this.Resetdata()
//
  }
  // delete one record
  deleteStudent(index) {


        this.reservation.splice(index, 1);
        this.Resetdata()
  }
  // for updating
  updateReservation(index) {
    this.reservation[index].name = this.name;
    this.reservation[index].email = this.email;
    this.reservation[index].roomtype = this.roomtype;
    this.reservation[index].arrivalDate = this.arrivalDate;
    this.reservation[index].guests = this.guests;
    this.reservation[index].pickup = this.pickup;
    this.reservation[index].flightno = this.flightno;
    this.reservation[index].request = this.request;
    this.Resetdata()
    return this.reservation;




  }
// for editing the data
  editReservation(id) {


   for (let i = 0; i < this.reservation.length; i++) {
        if(this.reservation[i].id==id){


      var stdnt = (this.reservation[i]);

      // console.log(this.stdnt)
      this.name = stdnt.name;
      this.email = stdnt.email;
      this.roomtype = stdnt.roomtype;
      this.arrivalDate = stdnt.arrivalDate;
      this.guests = stdnt.guests;
      this.pickup = stdnt.pickup;
      this.flightno = stdnt.flightno;
      this.request = stdnt.request;



    }}

  }

}
