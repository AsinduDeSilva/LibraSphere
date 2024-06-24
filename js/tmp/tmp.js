function generateBookId() { 
  let id = String((Number)(Object.keys(BOOKS).pop().substring(1)) + 1);  
  while (id.length < 5) {
    id = '0' + id;
  }
  return 'B'+id;
}

console.log(generateBookId())