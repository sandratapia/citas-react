import{j as N,r as i,R as M,a as O}from"./vendor.5d48ec85.js";const D=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}};D();const e=N.exports.jsx,r=N.exports.jsxs,I=N.exports.Fragment,R=({mensaje:o})=>e("div",{className:"bg-red-500 text-white text-center p-3 uppercase font-bold mb-3 rounded-md",children:e("p",{children:o})}),z=({pacientes:o,setPacientes:n,paciente:s,setPaciente:d})=>{const[t,a]=i.exports.useState(""),[l,m]=i.exports.useState(""),[u,h]=i.exports.useState(""),[f,g]=i.exports.useState(""),[b,x]=i.exports.useState(""),[S,y]=i.exports.useState(!1);i.exports.useEffect(()=>{Object.keys(s).length>0&&(a(s.mascota),m(s.propietario),h(s.email),g(s.fecha),x(s.sintomas))},[s]);const w="Por favor, rellena todos los campos",v=()=>{const c=Math.random().toString(36).substring(2),p=Date.now().toString(36);return c+p},E=c=>{a(c.target.value)},F=c=>{m(c.target.value)},j=c=>{h(c.target.value)},k=c=>{g(c.target.value)},A=c=>{x(c.target.value)},C=()=>{a(""),m(""),h(""),g(""),x("")};return r("div",{className:"md:w-1/2 lg:w-2/5",children:[e("h2",{className:"font-black text-3xl text-center",children:"Seguimiento Pacientes"}),r("p",{className:"text-lg mt-5 text-center mb-10",children:["A\xF1ade Pacientes y ","",e("span",{className:"text-indigo-600 font-bold",children:"Admin\xEDstralos"})]}),r("form",{className:"bg-white shadow-md rounded-lg py-10 px-5 mb-10",onSubmit:c=>{if(c.preventDefault(),[t,l,u,f,b].includes("")){y(!0);return}y(!1);const p={mascota:t,propietario:l,email:u,fecha:f,sintomas:b,id:v()};if(s.id){p.id=s.id;const L=o.map(P=>P.id===s.id?p:P);n(L),d({})}else p.id=v(),n([...o,p]);C()},children:[S&&e(R,{mensaje:w}),r("div",{className:"mb-5",children:[e("label",{htmlFor:"mascota",className:"block text-gray-700 uppercase font-bold",children:"Nombre Mascota"}),e("input",{type:"text",id:"mascota",placeholder:"Nombre de la mascota",className:"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md",value:t,onChange:E})]}),r("div",{className:"mb-5",children:[e("label",{htmlFor:"propietario",className:"block text-gray-700 uppercase font-bold",children:"Nombre Propietario"}),e("input",{type:"text",id:"propietario",placeholder:"Nombre del propietario",className:"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md",value:l,onChange:F})]}),r("div",{className:"mb-5",children:[e("label",{htmlFor:"email",className:"block text-gray-700 uppercase font-bold",children:"Email"}),e("input",{type:"email",id:"email",placeholder:"Email Contacto Propietario",className:"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md",value:u,onChange:j})]}),r("div",{className:"mb-5",children:[e("label",{htmlFor:"alta",className:"block text-gray-700 uppercase font-bold",children:"Alta"}),e("input",{type:"date",id:"alta",className:"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md",value:f,onChange:k})]}),r("div",{className:"mb-5",children:[e("label",{htmlFor:"sintomas",className:"block text-gray-700 uppercase font-bold",children:"Sintomas"}),e("textarea",{name:"",id:"sintomas",placeholder:"Describe los sintomas",className:"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md",value:b,onChange:A})]}),e("input",{type:"submit",value:s.id?"Editar Paciente":"Agregar Paciente",className:"bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"})]})]})},B=()=>e(I,{children:r("h1",{className:"font-black text-5xl text-center md:w-2/3 mx-auto",children:["Seguimiento Pacientes ","",e("span",{className:"text-indigo-600",children:"Veterinaria"})]})}),H=({paciente:o,setPaciente:n,eliminarPaciente:s})=>{const{mascota:d,propietario:t,email:a,fecha:l,sintomas:m,id:u}=o;return r("div",{className:"bg-white shadow-md rounded-lg py-10 px-5 mb-4 ml-3",children:[r("p",{className:"font-bold mb-3 text-gray-700 uppercase",children:["Nombre: ","",e("span",{className:"font-normal normal-case",children:d})]}),r("p",{className:"font-bold mb-3 text-gray-700 uppercase",children:["Propietario: ","",e("span",{className:"font-normal normal-case",children:t})]}),r("p",{className:"font-bold mb-3 text-gray-700 uppercase",children:["Correo: ","",e("span",{className:"font-normal normal-case",children:a})]}),r("p",{className:"font-bold mb-3 text-gray-700 uppercase",children:["Fecha Alta: ","",e("span",{className:"font-normal normal-case",children:l})]}),r("p",{className:"font-bold mb-3 text-gray-700 uppercase",children:["Sintomas: ","",e("span",{className:"font-normal normal-case",children:m})]}),r("div",{className:"flex justify-around",children:[e("button",{className:"py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg",onClick:()=>{n(o)},children:"Editar"}),e("button",{className:"py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg",onClick:()=>{confirm("\xBFDeseas eliminar este paciente?")&&s(u)},children:"Eliminar"})]})]})},J=({pacientes:o,setPaciente:n,eliminarPaciente:s})=>{i.exports.useEffect(()=>{o.length>0&&console.log("Nuevo paciente")},[o]);const d="Listado Pacientes",t="No hay Pacientes";return r("div",{className:"md:w-1/2 lg:w-3/5",children:[e("h2",{className:"font-black text-3xl text-center",children:o&&o.length?d:t}),r("p",{className:"text-lg mt-5 text-center mb-10",children:["Administra tus  ","",e("span",{className:"text-indigo-600 font-bold",children:"Pacientes y Citas"})]}),e("div",{className:"h-screen overflow-y-scroll",children:o.map(a=>e(H,{paciente:a,setPaciente:n,eliminarPaciente:s},a.id))})]})};function q(){const[o,n]=i.exports.useState([]),[s,d]=i.exports.useState({});return i.exports.useEffect(()=>{(()=>{var m;const l=(m=JSON.parse(localStorage.getItem("pacientes")))!=null?m:[];n(l)})()},[]),i.exports.useEffect(()=>{localStorage.setItem("pacientes",JSON.stringify(o))},[o]),r("div",{className:"container mx-auto mt-20",children:[e(B,{}),r("div",{className:"mt-12 md:flex",children:[e(z,{pacientes:o,setPacientes:n,paciente:s,setPaciente:d}),e(J,{pacientes:o,setPaciente:d,eliminarPaciente:a=>{const l=o.filter(m=>m.id!==a);n(l)}})]})]})}M.render(e(O.StrictMode,{children:e(q,{})}),document.getElementById("root"));