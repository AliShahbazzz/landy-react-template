"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[65],{7065:(e,i,t)=>{t.r(i),t.d(i,{default:()=>I});var n=t(5043);const r=JSON.parse('{"DD":"About Us","Qq":"Aliph Manufacturing, founded in 2006, is a high-tech enterprise specializing in the research, development, production, and sales of polymer materials. With two major production bases in Yangzhou and Suzhou covering over 25,000 square meters, we provide a comprehensive range of safety protection solutions, including insulation, sealing, waterproofing, thermal conductivity, fireproofing, and electrical conductivity, widely applied across industries such as electricity, telecommunications, automotive, and electronics etc.","x6":[]}');var o=t(1766),s=t(2646),l=t(9);const d=(0,l.Ay)("div")`
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
`;var c=t(579);const a=()=>{const[e,i]=(0,n.useState)(!1),t=(0,n.useCallback)((()=>{const t=window.scrollY;!e&&t>350?i(!0):t<=350&&i(!1)}),[e]);(0,n.useEffect)((()=>(window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)})),[t]);return(0,c.jsx)(d,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,children:(0,c.jsx)(s.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})};var h=t(4647),p=t(1319),x=t(3614),u=t(9281);const m=(0,l.Ay)("button")`
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
`,g=e=>{let{color:i,children:t,onClick:n}=e;return(0,c.jsx)(m,{color:i,onClick:n,children:t})},f=(0,l.Ay)("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,b=(0,l.Ay)("p")`
  margin: 1.5rem 0 2rem 0;
`,j=(0,l.Ay)(p.A)`
  flex-direction: ${e=>{let{direction:i}=e;return"left"===i?"row":"row-reverse"}};
`,y=(0,l.Ay)("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`,v=(0,l.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,w=(0,l.Ay)("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,k=(0,l.Ay)("p")`
  font-size: 13px;
`,A=(0,l.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`,C=(0,u.C)()((e=>{let{icon:i,title:t,content:n,section:r,button:o,t:l,id:d,direction:a}=e;return(0,c.jsx)(f,{children:(0,c.jsx)(x.zW,{direction:a,triggerOnce:!0,children:(0,c.jsxs)(j,{justify:"space-between",align:"middle",id:d,direction:a,children:[(0,c.jsx)(h.A,{lg:11,md:11,sm:12,xs:24,children:(0,c.jsx)(s.A,{src:i,width:"100%",height:"100%"})}),(0,c.jsx)(h.A,{lg:11,md:11,sm:11,xs:24,children:(0,c.jsxs)(y,{children:[(0,c.jsx)("h6",{children:l(t)}),(0,c.jsx)(b,{children:l(n)}),"right"===a?(0,c.jsx)(A,{children:"object"===typeof o&&o.map(((e,i)=>(0,c.jsx)(g,{color:e.color,onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("about"),children:l(e.title)},i)))}):(0,c.jsx)(v,{children:(0,c.jsx)(p.A,{justify:"space-between",children:"object"===typeof r&&r.map(((e,i)=>(0,c.jsxs)(h.A,{span:11,children:[(0,c.jsx)(s.A,{src:e.icon,width:"60px",height:"60px"}),(0,c.jsx)(w,{children:l(e.title)}),(0,c.jsx)(k,{children:l(e.content)})]},i)))})})]})})]})})})}));var S=t(4631);const _=(0,l.Ay)("section")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,T=(0,l.Ay)("div")`
  display: inline-block;
  text-align: center;
`,z=(0,l.Ay)("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;var B=t(6812),E=t(6689);const $=()=>{const e=[{title:"Cold Shrink Tube",description:"This is the description",img:"/img/products/cold_shrink_tubes_1.png",alt:"Cold Shrink Tube"},{title:"Cold Shrink Tube with Mastic",description:"This is the description",img:"/img/products/cold_shrink_tubes_2.png",alt:"Cold Shrink Tube with Mastic"},{title:"Cold Shrink Breakout Boot",description:"This is the description",img:"/img/products/cold_shrink_tubes_3.png",alt:"Cold Shrink Breakout Boot"},{title:"Cold Shrink Terminal Kit",description:"This is the description",img:"/img/products/cold_shrink_tubes_4.png",alt:"Cold Shrink Terminal Kit"}],i=e=>{let{title:i,description:t,img:n,alt:r}=e;return(0,c.jsx)(B.A,{style:{width:450},cover:(0,c.jsx)("img",{width:450,height:380,alt:r,src:n}),children:(0,c.jsx)(E.A,{title:i,description:t})})};return(0,c.jsxs)(z,{children:[(0,c.jsx)(p.A,{gutter:16,justify:"center",children:null===e||void 0===e?void 0:e.slice(0,2).map(((e,t)=>(0,c.jsx)(h.A,{span:12,children:(0,c.jsx)(i,{...e})},t)))}),(0,c.jsx)(p.A,{gutter:16,justify:"center",children:null===e||void 0===e?void 0:e.slice(2,4).map(((e,t)=>(0,c.jsx)(h.A,{span:12,children:(0,c.jsx)(i,{...e})},t)))})]})},D=()=>{const e=[{key:"1",label:"Cold Shrink Tubes",children:(0,c.jsx)($,{})},{key:"2",label:"Heat Shrink Tubes",children:"Content of Tab Pane 2"}];return(0,c.jsx)(_,{children:(0,c.jsxs)(x.zW,{direction:"up",triggerOnce:!0,children:[(0,c.jsx)("h2",{children:"Our Products"}),(0,c.jsx)(T,{children:(0,c.jsx)(S.A,{defaultActiveKey:"1",items:e,onChange:e=>{console.log(e)},tabBarStyle:{fontWeight:"bold"}})})]})})},I=()=>(0,c.jsx)(n.Suspense,{fallback:(0,c.jsx)("div",{children:"Loading..."}),children:(0,c.jsxs)(o.A,{children:[(0,c.jsx)(a,{}),(0,c.jsx)(D,{}),(0,c.jsx)(C,{direction:"left",title:r.DD,content:r.Qq,button:r.x6,icon:"developer.svg",id:"intro"})]})})}}]);
//# sourceMappingURL=65.c9e3917e.chunk.js.map