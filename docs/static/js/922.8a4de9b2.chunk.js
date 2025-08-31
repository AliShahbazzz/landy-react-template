"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[922],{4922:(e,i,t)=>{t.r(i),t.d(i,{default:()=>O});const n=JSON.parse('{"DD":"About Us","Qq":"Aliph Manufacturing, founded in 2006, is a high-tech enterprise specializing in the research, development, production, and sales of polymer materials. With major production base in Hyderabad, we provide a comprehensive range of safety protection solutions, including insulation, sealing, waterproofing, thermal conductivity, fireproofing, and electrical conductivity, widely applied across industries such as electricity, telecommunications, automotive, and electronics etc.","x6":[]}'),o=JSON.parse('{"D":"Why Choose Us?","Q":"Provide a comprehensive range of safety protection solutions for telecommunications, electric power, automotive and electronics industry."}');var r=t(1766),s=t(5043),d=t(2646),c=t(9);const l=(0,c.Ay)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;var a=t(579);const h=()=>{const[e,i]=(0,s.useState)(!1),t=(0,s.useCallback)((()=>{const t=window.scrollY;!e&&t>350?i(!0):t<=350&&i(!1)}),[e]);(0,s.useEffect)((()=>(window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)})),[t]);return(0,a.jsx)(l,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,children:(0,a.jsx)(d.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})};var p=t(4647),x=t(1319),u=t(3614),m=t(9281);const g=(0,c.Ay)("button")`
  background: ${e=>e.color||"#2e186a"};
  color: ${e=>e.color?"#2E186A":"#fff"};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(255, 130, 92);
    background-color: rgb(255, 130, 92);
  }
`,f=e=>{let{color:i,children:t,onClick:n}=e;return(0,a.jsx)(g,{color:i,onClick:n,children:t})},y=(0,c.Ay)("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,b=(0,c.Ay)("p")`
  margin: 1.5rem 0 2rem 0;
`,j=(0,c.Ay)(x.A)`
  flex-direction: ${e=>{let{direction:i}=e;return"left"===i?"row":"row-reverse"}};
`,w=(0,c.Ay)("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`,v=(0,c.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,k=(0,c.Ay)("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,A=(0,c.Ay)("p")`
  font-size: 13px;
`,C=(0,c.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`,S=(0,m.C)()((e=>{let{icon:i,title:t,content:n,section:o,button:r,t:s,id:c,direction:l}=e;return(0,a.jsx)(y,{children:(0,a.jsx)(u.zW,{direction:l,triggerOnce:!0,children:(0,a.jsxs)(j,{justify:"space-between",align:"middle",id:c,direction:l,children:[(0,a.jsx)(p.A,{lg:11,md:11,sm:12,xs:24,children:(0,a.jsx)(d.A,{src:i,width:"100%",height:"100%"})}),(0,a.jsx)(p.A,{lg:11,md:11,sm:11,xs:24,children:(0,a.jsxs)(w,{children:[(0,a.jsx)("h6",{children:s(t)}),(0,a.jsx)(b,{children:s(n)}),"right"===l?(0,a.jsx)(C,{children:"object"===typeof r&&r.map(((e,i)=>(0,a.jsx)(f,{color:e.color,onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("about"),children:s(e.title)},i)))}):(0,a.jsx)(v,{children:(0,a.jsx)(x.A,{justify:"space-between",children:"object"===typeof o&&o.map(((e,i)=>(0,a.jsxs)(p.A,{span:11,children:[(0,a.jsx)(d.A,{src:e.icon,width:"60px",height:"60px"}),(0,a.jsx)(k,{children:s(e.title)}),(0,a.jsx)(A,{children:s(e.content)})]},i)))})})]})})]})})})}));var _=t(4631);const T=(0,c.Ay)("section")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,z=(0,c.Ay)("div")`
  display: inline-block;
  text-align: center;
`,B=(0,c.Ay)("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;var D=t(6812),E=t(6689);const W=()=>{const e=e=>{let{title:i,description:t,img:n,alt:o}=e;return(0,a.jsx)(D.A,{style:{width:"100%",maxWidth:450,margin:"0 auto"},cover:(0,a.jsx)("div",{style:{width:"100%",height:250,overflow:"hidden"},children:(0,a.jsx)("img",{src:`${n}`,alt:o,style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"#f5f5f5"}})}),children:(0,a.jsx)(E.A,{title:i,description:t})})};return(0,a.jsx)(B,{children:(0,a.jsx)(x.A,{gutter:[16,16],justify:"center",children:[{title:"Cold Shrink Tube",description:"This is the description",img:"/img/products/cold_shrink_tubes_1.png",alt:"Cold Shrink Tube"},{title:"Cold Shrink Tube with Mastic",description:"This is the description",img:"/img/products/cold_shrink_tubes_2.png",alt:"Cold Shrink Tube with Mastic"},{title:"Cold Shrink Breakout Boot",description:"This is the description",img:"/img/products/cold_shrink_tubes_3.png",alt:"Cold Shrink Breakout Boot"},{title:"Cold Shrink Terminal Kit",description:"This is the description",img:"/img/products/cold_shrink_tubes_4.png",alt:"Cold Shrink Terminal Kit"}].map(((i,t)=>(0,a.jsx)(p.A,{xs:24,sm:24,md:12,lg:12,children:(0,a.jsx)(e,{...i})},t)))})})},$=e=>{let{id:i}=e;const t=[{key:"1",label:"Cold Shrink Tubes",children:(0,a.jsx)(W,{})}];return(0,a.jsx)(T,{id:i,children:(0,a.jsxs)(u.zW,{direction:"up",triggerOnce:!0,children:[(0,a.jsx)("h2",{children:"Our Products"}),(0,a.jsx)(z,{children:(0,a.jsx)(_.A,{defaultActiveKey:"1",items:t,onChange:e=>{console.log(e)},tabBarStyle:{fontWeight:"bold"}})})]})})},O=()=>(0,a.jsxs)(r.A,{children:[(0,a.jsx)(h,{}),(0,a.jsx)($,{id:"product"}),(0,a.jsx)(S,{direction:"left",title:n.DD,content:n.Qq,button:n.x6,icon:"developer.svg",id:"about"}),(0,a.jsx)(S,{direction:"up",title:o.D,content:o.Q,icon:"whyus.png",id:"whyus"})]})}}]);
//# sourceMappingURL=922.8a4de9b2.chunk.js.map