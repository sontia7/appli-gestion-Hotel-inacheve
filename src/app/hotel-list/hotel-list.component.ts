import { Component, OnInit } from "@angular/core";
import { IHotel } from "./hotel";
@Component({
    selector: 'app-hotel-list',
    templateUrl:'./hotel-list.component.html',
    styleUrls : ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

     public title ='Liste Hotels';
     //public hotelFilter ='Mot';
     private _hotelFilter = 'mot';
    public filteredHotels: IHotel[]=[];
    public get hotelFilter():string{
        return this._hotelFilter;
    }
    public set hotelFilter(filter:string){
        this._hotelFilter =filter;
        this.filteredHotels=this.hotelFilter ? this.filterHotels(this.hotelFilter ):this.hotels;
    }
    private filterHotels(criteria:string){
        criteria=criteria.toLocaleLowerCase();
        const res = this.hotels.filter(
        (hotel:IHotel)=>hotel.hotelName.toLocaleLowerCase().indexOf(criteria) != -1 );
    
        return res;
    } 
    public hotels:IHotel[]=[{
        hotelId :1,
        hotelName :'IBIS HOTEL',
        description : 'rive gauche pret de la mer',
        price: 230.5,
        imageUrl:'assets/img/hotel-room.jpg'
    },
    {
        hotelId :2,
        hotelName :'lA PERGULA HOTEL',
        description : 'RUE QUAI DE POISSONSCEAU',
        price: 220.5,
        imageUrl:'assets/img/indoors.jpg'
    },
    {
        hotelId :3,
        hotelName :'primark HOTEL',
        description : 'Beau riverage',
        price: 230.5,
        imageUrl:'assets/img/the-interior.jpg'
    },
    {
        hotelId :4,
        hotelName :'FLENU HOTEL',
        description : 'rive gauche pret de la mer',
        price: 230.5,
        imageUrl:'assets/img/windows.jpg'
    }
];

        ngOnInit(){
         this.filteredHotels=this.hotels;
         this.hotelFilter='';   
        }
public showBadge: boolean;

public ToggleIsNewBagde() : void {
  this.showBadge = !this.showBadge;
}

}

