class User {
  constructor(user, pwd){
    this.user = user;
    this.pwd = pwd;
    this.subscriptions = new Array();
  }
}

class Subscription{
  constructor(service){
    this.service = service;
  }
}

class Service{
  constructor(servicId){
    this.serviceId = servicId;
    console.log("Instantiating Service!")
  }

  *getLoginPage(){
    console.log("Getting the login page for Service!")
  }

  *login(username, password){
    console.log("Logging into Service!")
  }

  *deactivate(){
    console.log("Deactivating Service!")
  }

  *activate(){
    console.log("Activating Service!")
  }
}

module.exports = Service
