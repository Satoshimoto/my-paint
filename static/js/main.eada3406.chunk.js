(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(16),a(6)),i=a(1),s=a(2),u=a(4),d=a(3),m=a(5),h=(a(17),a(18),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__grasper",onClick:function(){var e=document.querySelector(".header"),t=document.querySelector(".header .header__grasper"),a=document.querySelector(".header__grasper .header__grasper--arrow"),n=document.querySelector(".navigation .navigation__tools"),r=document.querySelector(".navigation__properties");15===e.offsetWidth?(e.style.width="200px",t.style.left="185px",n.style.display="flex",r.style.display="block",a.style.animation="grasperOpen 0.4s forwards ease-in-out"):(e.style.width="15px",t.style.left="0px",n.style.display="none",r.style.display="none",a.style.animation="grasperClose 0.4s forwards ease-in-out")}},r.a.createElement("i",{className:"fas fa-caret-right header__grasper--arrow "})),r.a.createElement("nav",{className:"navigation"},r.a.createElement("ul",{className:"navigation__tools"},r.a.createElement("li",{className:"tool square",onClick:function(t){return e.setActiveTool(t)}},r.a.createElement("i",{className:"far fa-square"})),r.a.createElement("li",{className:"tool f-square",onClick:function(t){return e.setActiveTool(t)}},r.a.createElement("i",{className:"fas fa-square"})),r.a.createElement("li",{className:"tool circle",onClick:function(t){return e.setActiveTool(t)}},r.a.createElement("i",{className:"far fa-circle"})),r.a.createElement("li",{className:"tool f-circle",onClick:function(t){return e.setActiveTool(t)}},r.a.createElement("i",{className:"fas fa-circle"})),r.a.createElement("li",{className:"tool rubber",onClick:function(t){return e.setActiveTool(t)}},r.a.createElement("i",{className:"fas fa-eraser"})),r.a.createElement("li",{className:"tool pen",style:{backgroundColor:"lightgray"},onClick:function(t){return e.setActiveTool(t)}},r.a.createElement("i",{className:"fas fa-pencil-alt"}))),r.a.createElement("div",{className:"navigation__properties"},r.a.createElement("div",{className:"properties__size"},r.a.createElement("h4",{className:"size--header"},"Size:"),r.a.createElement("input",{className:"size--input",type:"number",min:"1",max:"50",placeholder:"1px",onChange:function(t){return e.setActiveSize(t)}})),r.a.createElement("div",{className:"properties__colors"},r.a.createElement("h4",{className:"colors--header"},"Colors:"),r.a.createElement("div",{className:"color color--blue",onClick:function(t){return e.setActiveColor(t)}}),r.a.createElement("div",{className:"color color--green",onClick:function(t){return e.setActiveColor(t)}}),r.a.createElement("div",{className:"color color--yellow",onClick:function(t){return e.setActiveColor(t)}}),r.a.createElement("div",{className:"color color--black",onClick:function(t){return e.setActiveColor(t)},style:{boxShadow:"0px 0px 10px 5px white"}}),r.a.createElement("div",{className:"color color--orange",onClick:function(t){return e.setActiveColor(t)}}),r.a.createElement("div",{className:"color color--red",onClick:function(t){return e.setActiveColor(t)}}),r.a.createElement("div",{className:"color color--white",onClick:function(t){return e.setActiveColor(t)}}))))))}),v=(a(19),a(20),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).setColor=function(e){switch(e){case"color--blue":return"blue";case"color--green":return"green";case"color--yellow":return"yellow";case"color-black":return"black";case"color--orange":return"orange";case"color--red":return"red";case"color--white":return"white";default:return"black"}},a.handleClick=function(e){var t=document.querySelector(".canvas"),n=t.getContext("2d"),r=e.pageX+t.width/2+2-t.offsetLeft,c=e.pageY+t.height/2+2-t.offsetTop,o=a.props.activeTool,l=a.props.activeSize,i=a.setColor(a.props.activeColor);n.fillStyle=i,n.strokeStyle=i,"pen"===o?a.setState({clicked:!0}):"square"===o?(n.beginPath(),n.rect(r,c,l,l),n.stroke(),n.closePath()):"f-square"===o?(n.beginPath(),n.fillRect(r,c,l,l),n.closePath()):"circle"===o?(n.beginPath(),n.arc(r,c,l,0,2*Math.PI),n.stroke(),n.closePath()):"f-circle"===o?(n.beginPath(),n.arc(r,c,l,0,2*Math.PI),n.fill(),n.closePath()):"rubber"===o&&a.setState({clicked:!0})},a.handleMouseUp=function(){a.setState({clicked:!1})},a.handleDrawing=function(e){if(a.state.clicked){var t=document.querySelector(".canvas"),n=t.getContext("2d"),r=e.pageX+t.width/2+2-t.offsetLeft,c=e.pageY+t.height/2+2-t.offsetTop,o=a.props.activeTool,l=a.props.activeSize;"pen"===o?(n.beginPath(),n.fillRect(r,c,l,l),n.closePath()):"rubber"===o&&n.clearRect(r,c,l,l)}},a.state={number:1,clicked:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("canvas",{width:this.props.width,height:this.props.height,className:"canvas",onMouseDown:function(t){return e.handleClick(t)},onMouseUp:this.handleMouseUp,onMouseMove:function(t){return e.handleDrawing(t)},style:{background:"".concat(this.props.background)}}))}}]),t}(r.a.Component)),p=a(9),f=a.n(p),g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"container__header"},"Dark mode"),r.a.createElement("div",{className:"switch",onClick:function(){var e=document.querySelector(".container"),t=document.querySelector(".container__header"),a=document.querySelector(".switch"),n=document.querySelector(".switch .switch--mode");4===n.offsetLeft?(n.style.left="30px",a.style.backgroundColor="#187ac6",e.style.backgroundColor="#333",t.style.color="#fff"):(n.style.left="4px",a.style.backgroundColor="#ccc",e.style.backgroundColor="#fff",t.style.color="#000")}},r.a.createElement("span",{className:"switch--mode"})),r.a.createElement("div",{className:"container__info",onClick:function(){alert("Quick guide how to use my_paint. First step is to create new canvas. After created canvas, select tool which you prefer. Each tool has different way of use. If you choose rubber or pen then you have to click right mouse button on canvas and moving your mouse. In other tools just click right mouse on canvas")}},r.a.createElement("i",{className:"fas fa-info"})),e.created?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container__clearBtn",onClick:function(){var e=document.querySelector(".canvas"),t=e.getContext("2d");document.querySelector(".downloadBtn").href="",t.beginPath(),t.clearRect(0,0,e.width,e.height),t.closePath()}},"Clear canvas"),r.a.createElement("div",{className:"container__deleteBtn",onClick:e.deleteCanvas},r.a.createElement("i",{className:"far fa-trash-alt"})," Delete canvas"),r.a.createElement("div",{className:"container__saveBtn",onClick:function(){var e=document.querySelector(".canvas");e.style.border="0px solid";var t=document.querySelector(".downloadBtn");f()(e).then(function(e){var a=e.toDataURL("image/png");t.href=a}),e.style.border="2px solid black",setTimeout(function(){t.click()},500)}},"Save as png"),r.a.createElement("a",{href:"http://www.myfolio.pl/",download:"my_paint.jpg",className:"downloadBtn",style:{display:"none"}},".")):null,0!==e.step||e.created?1!==e.step||e.created?null:r.a.createElement("div",{className:"container__create"},r.a.createElement("div",{className:"container__properties"},r.a.createElement("p",null,"Canvas Width:"),r.a.createElement("input",{type:"number",max:"2000",className:"container__properties--input width",placeholder:"10px - 2000px"})),r.a.createElement("div",{className:"container__properties"},r.a.createElement("p",{className:"container__properties"}," Canvas Height:"),r.a.createElement("input",{type:"number",max:"2000",className:"container__properties--input height",placeholder:"10px - 2000px"})),r.a.createElement("div",{className:"container__properties"},r.a.createElement("p",{className:"container__properties"}," Canvas background color:"),r.a.createElement("select",{name:"bcgList",onChange:e.changeBackground},r.a.createElement("option",{value:"white"},"White"),r.a.createElement("option",{value:"black"},"Black"))),r.a.createElement("p",{className:"warning"},"You have to set size of canvas. Minium size is 10px, maximum size is 2000px"),r.a.createElement("div",{className:"container__properties--button",onClick:function(t){return e.create(t)}},r.a.createElement("p",null,"Create"))):r.a.createElement("div",{className:"container__create"},r.a.createElement("div",{className:"add",onClick:function(t){return e.create(t)}},r.a.createElement("i",{className:"fas fa-plus"}),r.a.createElement("h4",null,"Create new canvas"))),e.created?r.a.createElement(v,{width:e.canvasWidth,height:e.canvasHeight,activeTool:e.activeTool,activeColor:e.activeColor,activeSize:e.activeSize,background:e.background}):null))},y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={activeTool:"pen",activeSize:1,activeColor:"color--black",canvasWidth:"",canvasHeight:"",created:!1,createStep:0,backgroundColor:"white"},a.handleActiveTool=function(e){var t=document.querySelectorAll(".navigation__tools .tool");(t=Object(l.a)(t)).forEach(function(t){t===e.currentTarget?t.style.backgroundColor="lightgray":t.style.backgroundColor=""}),a.setState({activeTool:e.currentTarget.classList[1]})},a.handleActiveSize=function(e){e.currentTarget.value<0?e.currentTarget.value=1:e.currentTarget.value>50?e.currentTarget.value=50:""===e.currentTarget.value&&(e.currentTarget.value=1),a.setState({activeSize:e.currentTarget.value})},a.handleActiveColor=function(e){var t=document.querySelectorAll(".properties__colors .color");(t=Object(l.a)(t)).forEach(function(t){t===e.currentTarget?t.style.boxShadow="0px 0px 10px 5px white":t.style.boxShadow="0px 0px 0px 0px"}),a.setState({activeColor:e.currentTarget.classList[1]})},a.handleCreateCanvas=function(e){if("add"===e.currentTarget.classList[0]&&a.setState({createStep:1}),"container__properties--button"===e.currentTarget.classList[0]){var t=document.querySelector(".width").value,n=document.querySelector(".height").value;""===n?n=10:n<10?n=10:n>2e3&&(n=2e3),""===t?t=10:t<10?t=10:t>2e3&&(t=2e3),a.setState({createStep:0,created:!0,canvasWidth:t+"px",canvasHeight:n+"px"})}},a.handleChangeBackground=function(){var e=document.querySelector("select");a.setState({backgroundColor:e.value})},a.handleDeleteCanvas=function(){a.setState({created:!1,createStep:0,canvasWidth:"",canvasHeight:"",background:"white"})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{setActiveTool:this.handleActiveTool,setActiveSize:this.handleActiveSize,setActiveColor:this.handleActiveColor}),r.a.createElement(g,{step:this.state.createStep,create:this.handleCreateCanvas,created:this.state.created,canvasWidth:this.state.canvasWidth,canvasHeight:this.state.canvasHeight,activeTool:this.state.activeTool,activeSize:this.state.activeSize,activeColor:this.state.activeColor,changeBackground:this.handleChangeBackground,background:this.state.backgroundColor,deleteCanvas:this.handleDeleteCanvas}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.eada3406.chunk.js.map