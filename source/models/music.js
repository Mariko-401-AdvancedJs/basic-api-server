class MusicModel {
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
  //get a single music by its id
  get(id) {
    if (id) {
      let musicId = this.db.find(record => record.id === parseInt(id)) //search db and find music with same id as requested record
      return musicId;
    } else {
      return this.db; //return all music if specific music id is not requested
    }
  }

  update(id, music) {
    if (!id) { return 'that artist/band does not exist' } //if an id is not provided then request not valid
    else {
      const replace = this.db.findIndex(record => record.id === parseInt(id));
      this.db[replace].name = music.name;
      return this.db[replace];
    }
  }

  delete(id) {
    if (!id) { return 'nothing to delete' }
    else {
      const del = this.db.find(record => record.id === parseInt(id));
      this.db.splice(del, 1);
      return this.db;
    }
  }

}

module.exports = MusicModel;