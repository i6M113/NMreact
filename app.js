//react
/*
<div id = parent>
<div id = child>
<h1>i m h1 tag</h1>
<h2>i m h2 tag </h2>
</div>
</div>
*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i m an h1 tag"),
    React.createElement("h2", {}, "i m an h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i m an h1 tag"),
    React.createElement("h2", {}, "i m an h2 tag"),
  ]),
]); //children making to make children create an array
//jsx exist for simplicity createelemnt is used in only js we can write react in js file also but it is very hard

console.log(parent);
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from react" // this is replaced by the parent root is will be replaced b y parent id.(not appended)
); //3 arguments - tag , object , the thing you want to write
const root = ReactDOM.createRoot(document.getElementById("ishi")); //create a root inside react//everything that i render will render inside the root
// we call react as a library becuase it only works in small portion of a page whatever u make a root as . react is not a framework
root.render(heading);
root.render(parent);
//object is a place wher u will give attributes to the tag
// root . render is putting a tag inside a tag
//npm - (node package manager)X- it manages packages
