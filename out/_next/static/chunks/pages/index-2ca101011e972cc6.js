(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(7357)}])},7357:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return Home}});var r=l(5893),o=l(6522),n=l(1866),i=l(3717),a=l(7747),s=l(8783),c=l(2757),d=l(4e3),h=l(9078),u=l(8049),x=l(9371),p=l(6479),m=l(4292),g=l(3500),j=l(7169),b=l(1731),f=l(5763),w=l(5821),v=l(4225),y=l(1136),k=l(7294),S=l(3162);function splitText(e,t){let l=e.split(". "),r=[],o="";for(let e=0;e<l.length;e++){let n=l[e];o.length+n.length+1<=t?o+=(o.length?". ":"")+n:o.length?(r.push(o.trim()+"."),o=n):(r.push(n.trim()+"."),o="")}return o.length&&r.push(o.trim()),r}var C=l(3907);function Home(){let[e,t]=(0,C.Z)("open-audio-openai-api-key",""),[l,A]=(0,k.useState)("tts-1"),[T,E]=(0,k.useState)(""),[_,I]=(0,k.useState)("alloy"),[N,R]=(0,k.useState)(1),[F,O]=(0,k.useState)(!1),[z,P]=(0,k.useState)(1),[H,U]=(0,k.useState)(!1),W=(0,k.useRef)(null),[D,L]=(0,k.useState)([]),[q,M]=(0,k.useState)("speech");(0,k.useEffect)(()=>()=>{D.forEach(e=>{URL.revokeObjectURL(e)})},[D]);let V=(0,o.p)(),handleDownload=(e,t)=>{(0,S.saveAs)(e,"".concat(q,"-").concat(t,".mp3"))},handleSubmit=async t=>{t.preventDefault(),O(!0),L([]);let r=splitText(T,4096);try{for(let[t,o]of r.entries()){let r=new Headers;r.append("Authorization","Bearer ".concat(e)),r.append("Content-Type","application/json");let n=JSON.stringify({model:l,input:o,voice:_,speed:N.toFixed(1)}),i=await fetch("https://api.openai.com/v1/audio/speech",{method:"POST",headers:r,body:n});if(console.log(i),!i.ok)throw Error("HTTP error! status: ".concat(i.status));let a=await i.blob(),s=URL.createObjectURL(a);handleDownload(s,t),L(e=>[...e,s])}}catch(e){console.error("Error:",e),V({title:"An error occurred",description:e.message,status:"error",duration:5e3,isClosable:!0})}finally{O(!1)}};return(0,r.jsx)(n.W,{bg:"gray.100",maxW:"container",children:(0,r.jsx)(n.W,{centerContent:!0,p:4,maxW:"container.md",children:(0,r.jsx)(i.k,{direction:"column",align:"center",justify:"center",minH:"100vh",w:"full",children:(0,r.jsx)(a.xu,{bg:"white",borderRadius:"lg",boxShadow:"lg",p:6,w:"full",maxW:"md",children:(0,r.jsxs)(s.g,{spacing:6,as:"form",onSubmit:handleSubmit,width:"full",maxW:"md",children:[(0,r.jsxs)(a.xu,{bg:"black",w:"100%",p:5,borderTopRadius:"md",boxShadow:"lg",children:[(0,r.jsx)(c.X,{textAlign:"center",color:"white",children:"Open-Audio TTS"}),(0,r.jsxs)(d.x,{fontSize:"xs",color:"gray.100",textAlign:"center",mt:2,children:["Powered by OpenAI TTS"," "]}),(0,r.jsx)(d.x,{fontSize:"xs",color:"gray.100",textAlign:"center",mt:2,fontWeight:"700",children:(0,r.jsx)("a",{href:"https://github.com/Justmalhar/open-audio",target:"_blank",rel:"noopener noreferrer",style:{color:"gray.100"},children:"View on GitHub"})})]}),(0,r.jsxs)(h.r,{templateColumns:{md:"4fr 1fr"},gap:4,width:"full",children:[(0,r.jsxs)(u.NI,{isRequired:!0,children:[(0,r.jsx)(x.l,{htmlFor:"api-key",children:"API Key"}),(0,r.jsx)(p.I,{id:"api-key",placeholder:"Enter your OpenAI API key",type:"password",value:e,onChange:e=>t(e.target.value),variant:"outline",borderColor:"black"})]}),(0,r.jsx)(u.NI,{children:(0,r.jsxs)(s.g,{align:"start",spacing:0,children:[(0,r.jsx)(x.l,{htmlFor:"model",children:"Quality"}),(0,r.jsxs)(m.U,{align:"center",h:"100%",mx:"0",mt:"2",children:[(0,r.jsx)(g.r,{id:"model",colorScheme:"blackAlpha",isChecked:"tts-1-hd"===l,onChange:()=>{A("tts-1"===l?"tts-1-hd":"tts-1")},size:"md"}),(0,r.jsx)(u.Q6,{textAlign:"center",mt:"-1",children:"tts-1"===l?"High":"HD"})]})]})})]}),(0,r.jsxs)(u.NI,{isRequired:!0,children:[(0,r.jsx)(x.l,{htmlFor:"input-text",children:"Input Text"}),(0,r.jsx)(j.g,{id:"input-text",placeholder:"Enter the text you want to convert to speech",value:T,onChange:e=>{E(e.target.value)},resize:"vertical",borderColor:"black"}),(0,r.jsx)(a.xu,{textAlign:"right",fontSize:"sm",children:T.length})]}),(0,r.jsxs)(u.NI,{isRequired:!0,children:[(0,r.jsx)(x.l,{htmlFor:"input-text",children:"Filename"}),(0,r.jsx)(p.I,{id:"filename",placeholder:"Enter the text you want to convert to speech",value:q,onChange:e=>{M(e.target.value)},borderColor:"black",variant:"outline"})]}),(0,r.jsxs)(m.U,{width:"full",justifyContent:"space-between",children:[(0,r.jsxs)(u.NI,{isRequired:!0,width:"45%",children:[(0,r.jsx)(x.l,{htmlFor:"voice",children:"Voice"}),(0,r.jsxs)(b.P,{id:"voice",value:_,onChange:e=>I(e.target.value),variant:"outline",placeholder:"Select voice",borderColor:"black",focusBorderColor:"black",colorScheme:"blackAlpha",_hover:{borderColor:"gray.400"},children:[(0,r.jsx)("option",{value:"alloy",children:"Alloy"}),(0,r.jsx)("option",{value:"echo",children:"Echo"}),(0,r.jsx)("option",{value:"fable",children:"Fable"}),(0,r.jsx)("option",{value:"onyx",children:"Onyx"}),(0,r.jsx)("option",{value:"nova",children:"Nova"}),(0,r.jsx)("option",{value:"shimmer",children:"Shimmer"})]})]}),(0,r.jsxs)(u.NI,{width:"40%",mt:"-15",children:[(0,r.jsx)(x.l,{htmlFor:"speed",children:"Speed "}),(0,r.jsxs)(f.iR,{id:"speed",defaultValue:1,min:.25,max:4,step:.25,onChange:e=>P(e),onMouseEnter:()=>U(!0),onMouseLeave:()=>U(!1),ref:W,"aria-label":"slider-ex-1",children:[(0,r.jsx)(f.Uj,{bg:"gray",children:(0,r.jsx)(f.Ms,{bg:"black"})}),(0,r.jsx)(w.u,{hasArrow:!0,bg:"black",color:"white",placement:"bottom",isOpen:H,label:"".concat(z.toFixed(2),"x"),children:(0,r.jsx)(f.gs,{})})]})]})]}),(0,r.jsx)(v.z,{size:"lg",bg:"black",color:"white",colorScheme:"black",borderColor:"black",type:"submit",isLoading:F,loadingText:"Generating...",children:"Create Speech"}),F&&(0,r.jsx)(y.$,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"black",size:"md"}),D.map((e,t)=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("audio",{controls:!0,src:e,children:"Your browser does not support the audio element."},t),(0,r.jsx)(v.z,{onClick:()=>handleDownload(e,t),children:"Download MP3"})]}))]})})})})})}}},function(e){e.O(0,[541,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);