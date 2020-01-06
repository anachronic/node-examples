var director = {
  name: "Marcelo",
  lastName: "Arenas",
  institution: "IMFD",
  place: "PUC"
};

let showInfo = director => {
  console.log(
    `${director.name} ${director.lastName} works at ${director.institution}, but he is located at ${director.place}`
  );
};

let showInfoDestructed = ({ name, lastName, institution, place }) => {
  console.log(
    `${name} ${lastName} works at ${institution}, but he is located at ${place}`
  );
};

showInfo(director);
showInfoDestructed(director);
