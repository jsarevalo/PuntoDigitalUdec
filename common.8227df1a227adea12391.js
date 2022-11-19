"use strict";var l=Object.defineProperty,D=(E,u,r)=>u in E?l(E,u,{enumerable:!0,configurable:!0,writable:!0,value:r}):E[u]=r,_=(E,u,r)=>(D(E,"symbol"!=typeof u?u+"":u,r),r);(self.webpackChunkpunto_digital=self.webpackChunkpunto_digital||[]).push([[592],{4389:(E,u,r)=>{r.d(u,{c:()=>e});var h=r(2340),n=r(5917),p=r(8002),a=r(5304),i=r(639),P=r(1841);const s=class{constructor(t){_(this,"http"),_(this,"url",h.N.endpoint_url),this.http=t}getBrands(){return this.http.get(`${this.url}/marca`).pipe((0,p.U)(t=>t),(0,a.K)(()=>(0,n.of)([])))}updateBrand(t){return this.http.put(`${this.url}/marca`,t).pipe((0,p.U)(o=>o),(0,a.K)(()=>(0,n.of)([{error:"No se pudo actualizar"}])))}createBrand(t){return this.http.post(`${this.url}/marca`,t).pipe((0,p.U)(o=>o),(0,a.K)(()=>(0,n.of)([{error:"No se pudo crear"}])))}getBrand(t){return this.http.get(`${this.url}/marca/${t}`).pipe((0,p.U)(o=>o),(0,a.K)(()=>(0,n.of)([])))}};let e=s;_(e,"\u0275fac",function(o){return new(o||s)(i.LFG(P.eN))}),_(e,"\u0275prov",i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}))},2322:(E,u,r)=>{r.d(u,{X:()=>e});var h=r(2340),n=r(5917),p=r(8002),a=r(5304),i=r(639),P=r(1841);const s=class{constructor(t){_(this,"http"),_(this,"url",h.N.endpoint_url),this.http=t}getEquipmentTypes(){return this.http.get(`${this.url}/tipequ`).pipe((0,p.U)(t=>t),(0,a.K)(()=>(0,n.of)([])))}updateEquipmentType(t){return this.http.put(`${this.url}/tipequ`,t).pipe((0,p.U)(o=>o),(0,a.K)(()=>(0,n.of)([{error:"No se pudo actualizar"}])))}createEquipmentType(t){return this.http.post(`${this.url}/tipequ`,t).pipe((0,p.U)(o=>o),(0,a.K)(()=>(0,n.of)([{error:"No se pudo crear"}])))}getEquipmentType(t){return this.http.get(`${this.url}/tipequ/${t}`).pipe((0,p.U)(o=>o),(0,a.K)(()=>(0,n.of)([])))}};let e=s;_(e,"\u0275fac",function(o){return new(o||s)(i.LFG(P.eN))}),_(e,"\u0275prov",i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}))},1249:(E,u,r)=>{r.d(u,{Q:()=>e});var h=r(2340),n=r(5917),p=r(8002),a=r(5304),i=r(639),P=r(1841);const s=class{constructor(t){_(this,"http"),_(this,"url",h.N.endpoint_url),this.http=t}getEquipments(){return this.http.get(`${this.url}/equipo`).pipe((0,p.U)(t=>t),(0,a.K)(()=>(0,n.of)([])))}updateEquipment(t){return this.http.put(`${this.url}/equipo`,t).pipe((0,p.U)(o=>o),(0,a.K)(()=>(0,n.of)([{error:"No se pudo actualizar"}])))}createEquipment(t){return this.http.post(`${this.url}/equipo`,t).pipe((0,p.U)(o=>o),(0,a.K)(()=>(0,n.of)([{error:"No se pudo crear"}])))}getEquipment(t){return this.http.get(`${this.url}/equipo/${t}`).pipe((0,p.U)(o=>o),(0,a.K)(()=>(0,n.of)([])))}};let e=s;_(e,"\u0275fac",function(o){return new(o||s)(i.LFG(P.eN))}),_(e,"\u0275prov",i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}))},1453:(E,u,r)=>{r.d(u,{R:()=>e});var h=r(2340),n=r(8002),p=r(5304),a=r(5917),i=r(639),P=r(1841);const s=class{constructor(t){_(this,"http"),_(this,"url",h.N.endpoint_url),this.http=t}getPersons(){return this.http.get(`${this.url}/persona`).pipe((0,n.U)(t=>t),(0,p.K)(()=>(0,a.of)([])))}updatePerson(t){return this.http.put(`${this.url}/persona`,t).pipe((0,n.U)(o=>o),(0,p.K)(()=>(0,a.of)([{error:"No se pudo actualizar"}])))}createPerson(t){return this.http.post(`${this.url}/persona`,t).pipe((0,n.U)(o=>o),(0,p.K)(()=>(0,a.of)([{error:"No se pudo crear"}])))}getPerson(t){return this.http.get(`${this.url}/persona/${t}`).pipe((0,n.U)(o=>o),(0,p.K)(()=>(0,a.of)([])))}getPersonsWithoutUser(){return this.http.get(`${this.url}/persona/no-user`).pipe((0,n.U)(t=>t),(0,p.K)(()=>(0,a.of)([])))}};let e=s;_(e,"\u0275fac",function(o){return new(o||s)(i.LFG(P.eN))}),_(e,"\u0275prov",i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}))},3364:(E,u,r)=>{r.d(u,{f:()=>e});var h=r(2340),n=r(5917),p=r(8002),a=r(5304),i=r(639),P=r(1841);const s=class{constructor(t){_(this,"http"),_(this,"url",h.N.endpoint_url),this.http=t}getUsers(){return this.http.get(`${this.url}/usuario`).pipe((0,p.U)(t=>t),(0,a.K)(()=>(0,n.of)([])))}updateUsers(t){return this.http.put(`${this.url}/usuario`,t).pipe((0,p.U)(o=>o),(0,a.K)(()=>(0,n.of)([{error:"No se pudo actualizar"}])))}createUsers(t){return this.http.post(`${this.url}/register`,t).pipe((0,p.U)(o=>o),(0,a.K)(()=>(0,n.of)([{error:"No se pudo crear"}])))}getUser(t){return this.http.get(`${this.url}/usuario/${t}`).pipe((0,p.U)(o=>o),(0,a.K)(()=>(0,n.of)([])))}};let e=s;_(e,"\u0275fac",function(o){return new(o||s)(i.LFG(P.eN))}),_(e,"\u0275prov",i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}))}}]);