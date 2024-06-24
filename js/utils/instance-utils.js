function generateBookId() { 
  while (true){
    let id = '';
    let counter = 0;
    while (counter < 5) {
      id += Math.floor(Math.random() * 10);
      counter++;
    }
    id = 'B' + id;
    if (!(id in BOOKS)) return id;
  }
}




