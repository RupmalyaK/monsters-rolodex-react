(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{13:function(n,e,t){n.exports=t(23)},23:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),c=t(6),l=t(1),s=t(2);function u(){var n=Object(l.a)(["\n            body {\n                margin: 0;\n                padding: 0;\n                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n                sans-serif;\n                -webkit-font-smoothing: antialiased;\n                -moz-osx-font-smoothing: grayscale;\n                background: linear-gradient(\n                to left,\n                rgba(7, 27, 82, 1) 0%,\n                rgba(0, 128, 128, 1) 100%\n                );\n            }\n            \n            code {\n                font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n                monospace;\n            }\n\n"]);return u=function(){return n},n}var m=Object(s.a)(u());function d(){var n=Object(l.a)(["\n-webkit-appearance: none;\n  border: none;\n  outline: none;\n  padding: 10px;\n  width: 150px;\n  line-height: 30px;\n  margin-bottom: 30px;\n"]);return d=function(){return n},n}var f=s.b.input(d()),h=function(n){var e=n.handleSearchFieldChange,t=n.fieldDefaultText;return a.a.createElement(f,{type:"search",placeholder:t,onChange:e})};function g(){var n=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    background-color: #95dada;\n    border: 1px solid grey;\n    border-radius: 5px;\n    padding: 25px;\n    cursor: pointer;\n    -moz-osx-font-smoothing: grayscale;\n    backface-visibility: hidden;\n    transform: translateZ(0);\n    transition: transform 0.25s ease-out;\n       \n    &:hover {\n            transform: scale(1.05);\n        }\n"]);return g=function(){return n},n}var p=s.b.div(g()),b=function(n){var e=n.monster;return a.a.createElement(p,null,a.a.createElement("img",{alt:"monster",src:"https://robohash.org/"+e.id+"?size=180x180"}),a.a.createElement("h2",{key:e.id},e.name),a.a.createElement("p",null,e.email))};function v(){var n=Object(l.a)(["\n    width: 85vw;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-gap: 20px;\n"]);return v=function(){return n},n}var x=s.b.div(v()),y=function(n){var e=n.monsters;return a.a.createElement("div",null,a.a.createElement(x,null,e.map((function(n){return a.a.createElement(b,{key:n.id,monster:n})}))))};function w(){var n=Object(l.a)(["\n font-family: 'Bigelow Rules', cursive;\n"]);return w=function(){return n},n}function E(){var n=Object(l.a)(["\n  text-align: center;\n\n    h1 {\n      font-family: 'Bigelow Rules';\n      font-size: 72px;\n      color: #0ccac4;\n    }\n\n"]);return E=function(){return n},n}var j=s.b.div(E()),O=s.b.h1(w()),k=function(){var n=Object(r.useState)([]),e=Object(c.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(""),l=Object(c.a)(i,2),s=l[0],u=l[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(n){return n.json()})).then((function(n){o(n)}))}),[]);var d=t.filter((function(n){return-1!==n.name.toLowerCase().search(s.toLowerCase())}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(m,null),a.a.createElement(j,null,a.a.createElement(O,null,"Monsters Rolodex"),a.a.createElement(h,{handleSearchFieldChange:function(n){u(n.target.value)},fieldDefaultText:"search monsters..."}),a.a.createElement(y,{monsters:d})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.dde07798.chunk.js.map