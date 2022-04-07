const { Service } = require("./Service")

class NetflixService extends Service{
  constructor(servicId){
    super(serviceId)
    this.serviceId = servicId;
    console.log("Instatiating NetflixService!")
  }
}
