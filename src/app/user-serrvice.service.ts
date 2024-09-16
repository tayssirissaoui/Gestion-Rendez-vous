import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Model/user';


@Injectable({
  providedIn: 'root'
})
export class UserSerrviceService {

  private url = 'http://localhost:3000/user'; 
  listeNotes: any;

  constructor(private http:HttpClient) { }
  getuser() {
    return this.http.get<User[]>(this.url);
  }

  ajouteruser(n: User) {
    return this.http.post(this.url, n);
  }



  supprimeruser(id: string) {
    const deleteUrl = this.url + '/' + id;
    return this.http.delete(deleteUrl);
  }
  
 

}
