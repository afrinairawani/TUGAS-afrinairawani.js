function groupPeopleByAttributes(people) {
    const result = {
      sex: { male: [], female: [] },
      age: { under20: [], older: [] },
      marriage: { single: [], double: [] },
      status: { student: [], employee: [] }
    };
    
    for (let person of people) {
      // Group by sex
      if (person.sex === "male") {
        result.sex.male.push(person.name);
      } else {
        result.sex.female.push(person.name);
      }
      
      // Group by age
      if (person.age < 20) {
        result.age.under20.push(person.name);
      } else {
        result.age.older.push(person.name);
      }
      
      // Group by marital status
      if (person.maritalStatus === "single") {
        result.marriage.single.push(person.name);
      } else {
        result.marriage.double.push(person.name);
      }
      
      // Group by job status
      if (person.jobStatus === "student") {
        result.status.student.push(person.name);
      } else {
        result.status.employee.push(person.name);
      }
    }
    
    return result;
  }
  const people = [
    { name: "udin", sex: "male", age: 18, maritalStatus: "single", jobStatus: "student" },
    { name: "icih", sex: "female", age: 19, maritalStatus: "single", jobStatus: "student" },
    { name: "asep", sex: "male", age: 25, maritalStatus: "single", jobStatus: "employee" },
    { name: "eneng", sex: "female", age: 30, maritalStatus: "double", jobStatus: "employee" },
    { name: "ujang", sex: "male", age: 22, maritalStatus: "single", jobStatus: "employee" }
  ];
  
  const result = groupPeopleByAttributes(people);
  console.log(result);