import { Story, Meta } from '@storybook/react/types-6-0';
import writingMock from '__mocks__/writing';
import { Writing, WritingProps } from '.';

const codeMock =
  'var Component=(()=>{var m=Object.create;var c=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var d=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),h=(t,e)=>{for(var n in e)c(t,n,{get:e[n],enumerable:!0})},p=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of y(e))!x.call(t,o)&&o!==n&&c(t,o,{get:()=>e[o],enumerable:!(i=l(e,o))||i.enumerable});return t};var j=(t,e,n)=>(n=t!=null?m(g(t)):{},p(e||!t||!t.__esModule?c(n,"default",{value:t,enumerable:!0}):n,t)),_=t=>p(c({},"__esModule",{value:!0}),t);var a=d((M,s)=>{s.exports=_jsx_runtime});var f={};h(f,{default:()=>b,frontmatter:()=>S});var r=j(a()),S={title:"Avoid TypeScript errors in your project by using the TypeScript compiler",publishedAt:"2022-05-27",excerpt:"No more unexpected type errors!",cover:{url:"/img/contents/writings/avoid-typescript-errors-in-your-project-by-using-the-typescript-compiler/cover.png",alt:"TypeScript Logo",caption:"TypeScript logo"},tags:"React,JavaScript,TypeScript"};function u(t){let e=Object.assign({h2:"h2",p:"p"},t.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Introduction"}),``,(0,r.jsx)(e.p,{children:"This is an example"})]})}function T(t={}){let{wrapper:e}=t.components||{};return e?(0,r.jsx)(e,Object.assign({},t,{children:(0,r.jsx)(u,t)})):u(t)}var b=T;return _(f);})();;return Component;';

export default {
  title: 'Screens/Writing',
  component: Writing,
  args: {
    code: codeMock,
    frontmatter: writingMock,
  },
  argTypes: {
    code: {
      type: 'symbol',
    },
  },
} as Meta<WritingProps>;

export const Default: Story<WritingProps> = (args) => <Writing {...args} />;
