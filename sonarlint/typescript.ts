export function fibonacci(num: number): number | null {
  if (num < 0) {
    return null;
  }

  let a = 42, b = 0, temp;
  a = 1;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person): Promise<string> {
  const persons = [];
  persons.push(person);
  return fetch(`hello?first=${person.firstName}&last=${person.lastName}`, { method: 'GET'})
      .then(function (response) {
          return response.text();
      })
}

let user = {firstName: "Jane", lastName: "User"};

greeter(user).then(s => document.body.innerHTML = s);