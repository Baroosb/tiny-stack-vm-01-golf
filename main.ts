import{readFileSync as a,writeFileSync as b,mkdirSync as c,readdirSync as d}from"node:fs";
let S="000112230000000022222221222122202220000000000000011000000000000012000000000000001101",V=(P,I)=>{let D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),O=new Uint8Array(65536),s=0,e=0,o=0,q=0,p=0,t=0,n=P.length,x,y,F=z=>[O.slice(0,o),z];
for(;;){
if(t==1e6)return F(10);
if(p<0||p>=n)return F(9);
let op=P[p],i=op==1?1:op==2?4:op>47&&op<52?2:0,j=p+1+i,w=i==2?((P[p+1]|P[p+2]<<8)<<16)>>16:0;
if(p+i>=n)return F(9);
t++;
if(s<+S[op])return F(2);
if(s>255&&(op<7?86>>op&1:op==82))return F(3);
if(op>15&&op<35&&op!=31){
if(op==23)D[s-1]=-D[s-1];
else if(op==27)D[s-1]=~D[s-1];
else{y=D[s-1];x=D[s-2];if(y==0&&op>18&&op<23)return F(4);D[s-2]=op==16?x+y:op==17?x-y:op==18?Math.imul(x,y):op==19?x/y:op==20?x%y:op==21?(x>>>0)/(y>>>0):op==22?(x>>>0)%(y>>>0):op==24?x&y:op==25?x|y:op==26?x^y:op==28?x<<y:op==29?x>>y:op==30?x>>>y:op==32?+(x==y):op==33?+(x<y):+(x>>>0<y>>>0);s--}}
else switch(op){
case 0:return F(0);
case 1:D[s++]=(P[p+1]<<24)>>24;break;
case 2:D[s++]=P[p+1]|P[p+2]<<8|P[p+3]<<16|P[p+4]<<24;break;
case 3:s--;break;
case 4:D[s]=D[s-1];s++;break;
case 5:x=D[s-1];D[s-1]=D[s-2];D[s-2]=x;break;
case 6:D[s]=D[s-2];s++;break;
case 7:x=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=x;break;
case 48:j+=w;break;
case 49:case 50:if((D[--s]==0)==(op==49))j+=w;break;
case 51:if(e==64)return F(7);C[e++]=j;j=P[p+1]|P[p+2]<<8;break;
case 52:if(!e)return F(8);j=C[--e];break;
case 64:x=D[s-1];if(x<0||x>255)return F(6);D[s-1]=M[x];break;
case 65:x=D[s-1];if(x<0||x>255)return F(6);M[x]=D[s-2];s-=2;break;
case 80:x=""+D[--s];if(o+x.length>65536)return F(11);for(y=0;y<x.length;y++)O[o++]=x.charCodeAt(y);break;
case 81:if(o>65535)return F(11);O[o++]=D[--s]&255;break;
case 82:D[s++]=q<I.length?I[q++]:-1;break;
case 83:return F(D[--s]&255);
default:return F(5)}
p=j}};
let g=process.env.MAKEFUN_INPUT_DIR||"/input",h=process.env.MAKEFUN_OUTPUT_DIR||"/output";
for(let f of d(g).sort()){let r=V(a(g+"/"+f+"/program.bin"),a(g+"/"+f+"/input.bin"));c(h+"/"+f,{recursive:!0});b(h+"/"+f+"/stdout.bin",r[0]);b(h+"/"+f+"/exit.txt",""+r[1])}
