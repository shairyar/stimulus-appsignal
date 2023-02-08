import 'regenerator-runtime/runtime'
import { Controller } from "@hotwired/stimulus"
import { appsignal } from "../appsignal"

export default class extends Controller {
  connect() {
    // throw new Error('Invalid User Id');
    this.element.textContent = "It works!"
    this.showServiceCost();
  }


  async showServiceCost() {
    try {
      let user = await this.getUser(100);
      let services = await this.getServices(user);
      let cost = await this.getServiceCost(services);
      console.log(`The service cost is ${cost}`);
    } catch (error) {
      console.log(error);
      appsignal.sendError(error)
    }
  }

  async getUser(userId) {
    const user = await Promise.reject(new Error('Invalid User Id'));
  }

  getServices(user) {
    return new Promise((resolve, reject) => {
      console.log(`Get services of  ${user.username} from the API.`);
      setTimeout(() => {
        resolve(['Email', 'VPN', 'CDN']);
      }, 2 * 1000);
    });
  }

  getServiceCost(services) {
    return new Promise((resolve, reject) => {
      console.log(`Calculate service costs of ${services}.`);
      setTimeout(() => {
        resolve(services.length * 100);
      }, 3 * 1000);
    });
  }

}
