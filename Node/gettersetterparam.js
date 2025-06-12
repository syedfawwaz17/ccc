class ComboName
{
   constructor(fn,ln)
   {
      this.fname=fn;
      this.lname=ln;
   }
   set completeName(param)//adgaonker shashank
   {
     let data=param.split(' ');//['adgaonker','shashank']
     this.fname=data[0];
     this.lname=data[1];
   }
   get completeName()
   {
      console.log(this.fname+"<-->"+this.lname);
      return "";
   }
}
c1=new ComboName("adgaonker","shashank")
c1.completeName="Anurag University"
console.log(c1.completeName);
 
 
 