"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[290],{8290:(e,i,t)=>{t.r(i),t.d(i,{default:()=>q});const n=JSON.parse('{"DD":"About Us","Qq":"Aliph Manufacturing, founded in 2006, is a high-tech enterprise specializing in the research, development, production, and sales of polymer materials. With major production base in Hyderabad, we provide a comprehensive range of safety protection solutions, including insulation, sealing, waterproofing, thermal conductivity, fireproofing, and electrical conductivity, widely applied across industries such as electricity, telecommunications, automotive, and electronics etc.","x6":""}'),r=JSON.parse('{"D":"Why Choose Us?","Q":"Provide a comprehensive range of safety protection solutions for telecommunications, electric power, automotive and electronics industry."}');var o=t(1319),d=t(4647),s=t(9281),l=t(3614),c=t(9);const a=(0,c.Ay)("button")`
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
`;var p=t(579);const h=e=>{let{color:i,children:t,onClick:n}=e;return(0,p.jsx)(a,{color:i,onClick:n,children:t})},m=(0,c.Ay)("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`,u=(0,c.Ay)("p")`
  padding: 0.75rem 0 0.75rem;
`,x=(0,c.Ay)("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`,g=(0,s.C)()((e=>{let{title:i,content:t,button:n,id:r,t:s}=e;return(0,p.jsx)(m,{id:r,children:(0,p.jsx)(l.q7,{direction:"up",triggerOnce:!0,children:(0,p.jsx)(o.A,{justify:"center",align:"middle",children:(0,p.jsx)(x,{children:(0,p.jsxs)(d.A,{lg:24,md:24,sm:24,xs:24,children:[(0,p.jsx)("h6",{children:s(i)}),(0,p.jsx)(u,{children:s(t)}),n&&(0,p.jsx)(h,{name:"submit",onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("mission"),children:s(n)})]})})})})})}));var f=t(1766),b=t(5043),y=t(2646);const j=(0,c.Ay)("div")`
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
`,w=()=>{const[e,i]=(0,b.useState)(!1),t=(0,b.useCallback)((()=>{const t=window.scrollY;!e&&t>350?i(!0):t<=350&&i(!1)}),[e]);(0,b.useEffect)((()=>(window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)})),[t]);return(0,p.jsx)(j,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,children:(0,p.jsx)(y.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})},v=(0,c.Ay)("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,A=(0,c.Ay)("p")`
  margin: 1.5rem 0 2rem 0;
`,k=(0,c.Ay)(o.A)`
  flex-direction: ${e=>{let{direction:i}=e;return"left"===i?"row":"row-reverse"}};
`,S=(0,c.Ay)("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`,C=(0,c.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,E=(0,c.Ay)("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,W=(0,c.Ay)("p")`
  font-size: 13px;
`,T=(0,c.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`,_=(0,s.C)()((e=>{let{icon:i,title:t,content:n,section:r,button:s,t:c,id:a,direction:m}=e;return(0,p.jsx)(v,{children:(0,p.jsx)(l.zW,{direction:m,triggerOnce:!0,children:(0,p.jsxs)(k,{justify:"space-between",align:"middle",id:a,direction:m,children:[(0,p.jsx)(d.A,{lg:11,md:11,sm:12,xs:24,children:(0,p.jsx)(y.A,{src:i,width:"100%",height:"100%"})}),(0,p.jsx)(d.A,{lg:11,md:11,sm:11,xs:24,children:(0,p.jsxs)(S,{children:[(0,p.jsx)("h6",{children:c(t)}),(0,p.jsx)(A,{children:c(n)}),"right"===m?(0,p.jsx)(T,{children:"object"===typeof s&&s.map(((e,i)=>(0,p.jsx)(h,{color:e.color,onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("about"),children:c(e.title)},i)))}):(0,p.jsx)(C,{children:(0,p.jsx)(o.A,{justify:"space-between",children:"object"===typeof r&&r.map(((e,i)=>(0,p.jsxs)(d.A,{span:11,children:[(0,p.jsx)(y.A,{src:e.icon,width:"60px",height:"60px"}),(0,p.jsx)(E,{children:c(e.title)}),(0,p.jsx)(W,{children:c(e.content)})]},i)))})})]})})]})})})}));var B=t(4631);const M=(0,c.Ay)("section")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,O=(0,c.Ay)("div")`
  display: inline-block;
  text-align: center;
`,P=(0,c.Ay)("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .ant-card-meta-title {
    font-weight: bold;
  }
`;var z=t(6812),I=t(6689);const D=()=>{const e=e=>{let{title:i,description:t,img:n,alt:r}=e;return(0,p.jsx)(z.A,{style:{width:"100%",maxWidth:450,margin:"0 auto"},cover:(0,p.jsx)("div",{style:{width:"100%",height:280,overflow:"hidden"},children:(0,p.jsx)("img",{src:`${n}`,alt:r,style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"#f5f5f5"}})}),children:(0,p.jsx)(I.A,{title:i,description:t})})};return(0,p.jsx)(P,{children:(0,p.jsx)(o.A,{gutter:[16,16],justify:"center",children:[{title:"Cold Shrink Tube",description:"Cold Shrinkable tube made of Silicone",img:"/img/products/product_1.png",alt:"Cold Shrink Tube"},{title:"Cold Shrink Tube with Mastic",description:"Cold Shrinkable tube made of Silicone Rubber",img:"/img/products/product_2.png",alt:"Cold Shrink Tube with Mastic"},{title:"Cold Shrink Breakout Boot",description:"Cold Shrink Breakouts Made Of Silicone Rubber",img:"/img/products/product_3.png",alt:"Cold Shrink Breakout Boot"},{title:"Cold Shrink Terminal Kit",description:"Cold Shrink Indoor/Outdoor Termination for XLPE or EPR",img:"/img/products/product_4.jpg",alt:"Cold Shrink Terminal Kit"},{title:"Wire Expanding Machine",description:"Applied for expanding small diameter Cold Shrink Rubber products",img:"/img/products/product_5.jpg",alt:"Wire Expanding Machine"},{title:"Spiral Winding Machine",description:"Applied for plastic removable support tube manufacturing",img:"/img/products/product_6.png",alt:"Spiral Winding Machine"},{title:"Spiraling Strips by Welding Type",description:"PP/PE strips: for spiraling different diameters supporting tubes",img:"/img/products/product_7.png",alt:"Spiraling Strips by Welding Type"},{title:"Flexible Silicone Sleeve",description:"High-quality Silicone, Explosion-proof and Pressure-relief ",img:"/img/products/product_8.jpg",alt:"Flexible Silicone Sleeve"}].map(((i,t)=>(0,p.jsx)(d.A,{xs:24,sm:24,md:12,lg:12,children:(0,p.jsx)(e,{...i})},t)))})})},$=e=>{let{id:i}=e;const t=[{key:"1",label:"Cold Shrink Tubes",children:(0,p.jsx)(D,{})}];return(0,p.jsx)(M,{id:i,children:(0,p.jsxs)(l.zW,{direction:"up",triggerOnce:!0,children:[(0,p.jsx)("h2",{children:"Our Products"}),(0,p.jsx)(O,{children:(0,p.jsx)(B.A,{defaultActiveKey:"1",items:t,onChange:e=>{console.log(e)},tabBarStyle:{fontWeight:"bold"}})})]})})},q=()=>(0,p.jsxs)(f.A,{children:[(0,p.jsx)(w,{}),(0,p.jsx)($,{id:"product"}),(0,p.jsx)(g,{title:n.DD,content:n.Qq,button:n.x6,id:"about"}),(0,p.jsx)(_,{direction:"up",title:r.D,content:r.Q,icon:"whyus.png",id:"whyus"})]})}}]);
//# sourceMappingURL=290.abb1d571.chunk.js.map