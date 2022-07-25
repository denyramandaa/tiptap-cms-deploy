import{r as c,x as K,i as H,b as d,c as C,d as v,v as E,e as i,n as S,k as B,q as $,u as h,y as Y,m as I,l as R,z as q,T as X,A as z,B as J,C as Q,D as Z,E as ee,F as ne}from"./index.1a86ec7a.js";const _e={class:"h-max mt-12 border-2 border-dashed border-[#E1E1E1] relative"},ie={class:"flex w-full vidGallery p-8 flex-col"},pe=i("div",{class:"vidGallery__title flex gap-2 items-center"},[i("span",null,[i("img",{src:z,alt:"video-toggle-play"})]),i("span",{class:"text-[#444444] font-bold"},"Video")],-1),se=i("div",{class:"vidGallery__excerpt text-[#858585] mt-2 mb-6 text-xs"}," Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintconsequat ",-1),ae={class:"vidGallery__menu flex capitalize gap-3 items-center text-base font-normal"},oe=i("span",null,[i("img",{src:ne,alt:"media-gallery-video"})],-1),te=i("span",{class:"text-white font-normal"},"Media Library",-1),ce=[oe,te],re={key:0,class:"w-56 h-9 absolute bottom-[-14px] right-[160px]"},me={key:0,class:"opacity-50",src:J,alt:"checkmark_icon"},de={key:1,class:"opacity-100",src:Q,alt:"checkmark_icon"},ge={class:"h-[473px] w-[842px] tra translate-minus-50 rounded border border-dashed relative flex items-center px-[11px] bg-[#F5F5F6]"},le={class:"w-64 mx-auto bg-[#D0D0D0] rounded-[30px]"},ue={name:"inputToggleVideo",props:["editor"],emits:["onUpdateEmbedLink","onupdateElementShow"],setup(T,{emit:M}){const O=T,t=c(!1),r=c(""),l=c(!1),x=c(),a=c(0),w=c(!1),D=c(null),U=K(),F=(n,e,_)=>{const s=e.includes(n.type.split("/").pop()),p=_*1024*1024;return n?s?n.size>p?{check:!1,message:`Ukuran gambar terlalu besar, Max ${_} MB`}:{check:!0,message:"File benar"}:{check:!1,message:"Format video tidak didukung"}:{check:!1,message:"Tidak ada file"}},A=()=>{if(t.value==!0)t.value=!1;else return},N=()=>{let n=r.value;if(n=="")return t.value=!1;P(n)&&M("onUpdateEmbedLink",n),t.value=!1,r.value=""},y=H(()=>r.value===""?!0:P(r.value)),V=n=>{let e=n.target.files[0];const{check:_,message:s}=F(e,["mp4","quicktime","x-quicktime"],16);if(!_){const p=`<span class="font-extrabold">Gagal! </span> ${s}`;U.showAlert(p);return}D.value=[e],l.value=!0},P=n=>{try{new URL(n)}catch{return!1}return!0},L=async n=>{l.value=!1,a.value=.25;const e=[];let _="";for(let s=0;s<n.length;s++){const p=n[s],g=p.fileData.name.split("."),o=new Date().valueOf()+"."+g[g.length-1];_=o,a.value=await W(o,p.fileData,p.metadata,n.length,s+1);const m=new Date,k=m.getFullYear(),f=m.getMonth()+1>9?m.getMonth()+1:`0${m.getMonth()+1}`,u=p.fileData.type.split("/")[0];if(p.fileName=`uploads/${u}s/${k}/${f}/${o}`,e.push(p),a.value===1)break}O.editor.chain().focus().setVideoFigure({id:_,src:b(e[0].fileName),credit:e[0].metadata.credit,caption:e[0].metadata.caption}).run(),a.value=0},W=async(n,e,_,s,p)=>await Z(n,e,_).catch(()=>{a.value=0}).then(async g=>{if(!g)return g;const o=new Date,m=o.getFullYear(),k=o.getMonth()+1>9?o.getMonth()+1:`0${o.getMonth()+1}`,f=e.type.split("/")[0],u=`uploads/${f}s/${m}/${k}/${n}`,j={id:u,title:e.name,url:b(u),type:f,meta:{alt:_["alt-text"],title:_.title,credit:_.credit,caption:_.caption},published_date:o,modified_date:o};return await ee(j).then(G=>G)}).then(()=>{if(p/s<=.3)return .3;if(p/s<=.5)return .5;if(p/s<=.75)return .75;if(p/s<=.8)return .8;if(p/s<=.9)return .9;if(p/s<=1)return 1}),b=n=>`https://kompasid-development-interaktif.s3.ap-southeast-1.amazonaws.com/${n}`;return(n,e)=>(d(),C("div",_e,[v(i("div",ie,[pe,se,i("div",ae,[i("div",{onClick:e[0]||(e[0]=_=>{A(),n.$emit("onupdateElementShow","picker")}),class:"p-2 bg-[#50A718] text-white flex gap-2 items-center cursor-pointer rounded"},ce),i("div",{onClick:e[1]||(e[1]=_=>{A(),n.$refs.inputReadFile.click()}),class:S(["font-pt-sans text-[#2E8BE6] cursor-pointer",[w.value?"underline font-bold":"font-normal"]])}," File Manager ",2),i("input",{id:"uploadFile",type:"file",accept:"video/*",ref:"inputReadFile",onChange:e[2]||(e[2]=_=>V(_)),hidden:""},null,544),i("div",{onClick:e[3]||(e[3]=_=>t.value=!t.value),class:S(["font-pt-sans text-[#2E8BE6] cursor-pointer",[t.value?"underline font-bold":"font-normal"]])}," Masukan Link ",2)])],512),[[E,a.value==0]]),t.value?(d(),C("div",re,[B(Y,{placeholder:"Paste atau tuliskan link",isValid:h(y),modelValue:r.value,"onUpdate:modelValue":e[4]||(e[4]=_=>r.value=_)},{default:$(()=>[i("button",{onClick:N,class:"w-9 h-full flex-center focus:outline-none bg-bubble-active-gray rounded-r-lg"},[h(y)?(d(),C("img",de)):(d(),C("img",me))])]),_:1},8,["isValid","modelValue"])])):I("",!0),(d(),R(X,{to:"body"},[l.value?v((d(),R(q,{key:0,onOnupdateElementShow:e[5]||(e[5]=_=>l.value=!1),file:[D.value],onUpload:L},null,8,["file"])),[[E,x.value!=""]]):I("",!0)])),v(i("div",ge,[i("div",le,[i("div",{class:S(["bg-[#50A718] h-3 rounded-[30px] transition-all duration-500 ease",{"w-1/4":a.value==.25,"w-1/3":a.value==.3,"w-1/2":a.value==.5,"w-3/4":a.value==.75,"w-4/5":a.value==.8,"w-11/12":a.value==.9,"w-full":a.value==1}])},null,2)])],512),[[E,a.value!==0]])]))}};export{ue as default};
