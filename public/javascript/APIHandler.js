class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
   
  }

  async getFullList () {
    	try {
        return await axios.get(`${this.BASE_URL}/characters`)
      } catch (error) {
        console.log(error);
      }
  }

  getOneRegister () {
       

      
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
