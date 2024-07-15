const person = {
    firstName: "John",
    lastName: "Doe"
  };
  
  // Create an alias 'fName' for 'firstName'
  const { firstName: fName, lastName: lName } = person;
  
  console.log(fName); // Outputs: "John"
  console.log(lName); // Outputs: "Doe"