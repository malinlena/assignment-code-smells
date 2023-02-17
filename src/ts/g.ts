/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

function getLength(jumps: number[]) {
  return jumps.reduce(
    (jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump,
    0
  );
}

/*
  2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
  */

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) {}
}

function getStudentStatus(student: Student) {
  student.passed = student.name === "Sebastian" && student.handedInOnTime;

  return student.passed ? "VG" : "IG";
}

/*
  3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
  Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
  */

class Temp {
  constructor(
    public city: string,
    public day: Date,
    public temperature: number
  ) {}
}

function averageWeeklyTemperature(temperatures: Temp[]) {
  let sum = 0;
  const weekInMilliseconds = 7 * 24 * 60 * 60 * 1000;

  for (let i = 0; i < temperatures.length; i++) {
    const { city, day, temperature } = temperatures[i];

    if (
      city === "Stockholm" &&
      day.getTime() > Date.now() - weekInMilliseconds
    ) {
      sum += temperature;
    }
  }

  return sum / 7;
}

/*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
  */

function showProduct(
  name: string,
  price: number,
  amount: number,
  description: string,
  image: string,
  parent: HTMLElement
) {
  const container = document.createElement("div");
  const title = document.createElement("h4");
  const priceLabel = document.createElement("strong");
  const imageTag = document.createElement("img");

  title.innerHTML = name;
  priceLabel.innerHTML = price.toString();
  imageTag.src = image;

  container.appendChild(title);
  container.appendChild(imageTag);
  container.appendChild(priceLabel);
  parent.appendChild(container);
}

/*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!
  */
function presentStudents(students: Student[]) {
  for (const student of students) {
    const container = document.createElement("div");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.checked = student.handedInOnTime;
    container.appendChild(checkbox);

    const listOfStudents = document.querySelector(
      `ul#${student.handedInOnTime ? "passed" : "failed"}students`
    );
    listOfStudents?.appendChild(container);
  }
}

/*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
  Lorem, ipsum, dolor, sit, amet
  Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
  */
function concatenateStrings() {
  return ["Lorem", "ipsum", "dolor", "sit", "amet"].join("");
}

/* 
7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
    Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
    fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
    lösning som är hållbar och skalar bättre. 
*/

interface User {
  name: string;
  birthday: Date;
  email: string;
  password: string;
}

function createUser({ name, birthday, email, password }: User) {
  // Validation

  const ageDiff = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDiff);
  const userAge = Math.abs(ageDate.getUTCFullYear() - 1970);

  console.log(userAge);

  if (userAge >= 20) {
    // Logik för att skapa en användare
  } else {
    return "Du är under 20 år";
  }
}
