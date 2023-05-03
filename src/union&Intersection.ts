type NoopDeveloper = {
  name: string;
  position: string;
};

type JuniorDeveloper = NoopDeveloper & {
  name: string;
  position: string;
  technology: string;
  experience: string;
};

const newDeveloper: NoopDeveloper | JuniorDeveloper = {
  name: "Rezwan Rahim",
  position: "Jr Software Developer",
  technology: `Html
   Css
    JavaScript
    React
    Node Js
    Express Js
    MongoDb
    TypeScript`,
};

console.log(newDeveloper);
