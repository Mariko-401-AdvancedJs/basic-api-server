class MoviesModel {
  constructor(name) {
    this.id = 0; //starts at 0, will increment each time there is a new instance
    this.name = name;
    this.db = []; //empty array will have objects pushed into it later
  }

  create(obj) {
    obj.id = ++this.id;
    this.db.push(obj);
    return obj;
  }
  //get a single movie by its id
  get(id) {
    if (id) {
      let movieId = this.db.find(record => record.id === parseInt(id)) //search db and find movie with same id as requested record
      return movieId;
    } else {
      return this.db; //return all movies if specific movie id is not requested
    }
  }

  update(id, movie) {
    // console.log('hitting update in model', id, movie)
    if (!id) { return 'that movie does not exist' } //if an id is not provided then request not valid
    else {
      const replace = this.db.findIndex(record => record.id === parseInt(id));
      this.db[replace].name = movie.name;
      return this.db[replace];
    }
  }

  delete(id) {
    if (!id) { return 'nothing to delete' }
    //remember to parseInt id
    return 'nothing to delete';
  }

}

module.exports = MoviesModel;

