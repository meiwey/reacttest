function User(name,email,username,password)
{
  	this.name = name;
  	this.email = email;
  	this.username = username;
  	this.password = password;
}

class Dummy{
    
  	constructor()
  	{
  		this.users = [];
  	}
  
  	retrieveUsers() {
  		console.log("retrieve");
  		var temp =localStorage.getItem('userList');
  		if (temp!=null)
  			this.users = JSON.parse(localStorage.getItem('userList'));
  	
  	}
  
	registerUser(name,email,username,password) {
  		console.log("reg");
    	this.retrieveUsers();
    	this.users.push(new User(name,email,username,password));
    	localStorage.setItem('userList',JSON.stringify(this.users));
    	return true;
  	}

	checkUser(username,password) {
    	this.retrieveUsers();
    	for (var i = 0; i < this.users.length; i++) { 
    		if(this.users[i].username == username && this.users[i].password==password)
    			return true;
		}
		return false;	
  }
  


}

export default Dummy;