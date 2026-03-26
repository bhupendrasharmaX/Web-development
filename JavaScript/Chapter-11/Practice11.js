// Question 1
class User{
    constructor(name,email){
        this.name = name;
        this.emali = email;
    }
    viewData(){
        console.log(this.name, this.emali);
    }
}
let student1 = new User("Bhupendra,","bhupi@123gmail.com");
let student2 = new User("Rahul,","rahul@123gmail.com");
student1.viewData();
student2.viewData();

// Question 2
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        console.log(this.name, this.emali);
    }
}
let admin1 = new Admin("Admin,","admin@123gmail.com");
// admin1.viewData();
admin1.editData();
