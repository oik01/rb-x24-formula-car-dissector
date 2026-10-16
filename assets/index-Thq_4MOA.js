(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="170",Ii={ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pl=0,ia=1,ml=2,Ec=1,bc=2,En=3,Xn=0,qe=1,Ye=2,kn=0,Ui=1,nr=2,sa=3,ra=4,_l=5,si=100,gl=101,vl=102,xl=103,Ml=104,yl=200,Sl=201,wl=202,El=203,Zr=204,Kr=205,bl=206,Tl=207,Al=208,Rl=209,Cl=210,Pl=211,Ll=212,Dl=213,Il=214,$r=0,jr=1,Jr=2,Oi=3,Qr=4,to=5,eo=6,no=7,Tc=0,Ul=1,Nl=2,Vn=0,Fl=1,Ol=2,Bl=3,Ac=4,zl=5,Wl=6,Hl=7,Rc=300,Bi=301,zi=302,io=303,so=304,ar=306,fs=1e3,Tn=1001,ro=1002,dn=1003,Gl=1004,xs=1005,_n=1006,ur=1007,oi=1008,Pn=1009,Cc=1010,Pc=1011,ps=1012,Bo=1013,ci=1014,An=1015,_s=1016,zo=1017,Wo=1018,Wi=1020,Lc=35902,Dc=1021,Ic=1022,ln=1023,Uc=1024,Nc=1025,Ni=1026,Hi=1027,Fc=1028,Ho=1029,Oc=1030,Go=1031,ko=1033,$s=33776,js=33777,Js=33778,Qs=33779,oo=35840,ao=35841,co=35842,lo=35843,ho=36196,uo=37492,fo=37496,po=37808,mo=37809,_o=37810,go=37811,vo=37812,xo=37813,Mo=37814,yo=37815,So=37816,wo=37817,Eo=37818,bo=37819,To=37820,Ao=37821,tr=36492,Ro=36494,Co=36495,Bc=36283,Po=36284,Lo=36285,Do=36286,kl=3200,Vl=3201,zc=0,Xl=1,Gn="",Xe="srgb",ki="srgb-linear",cr="linear",le="srgb",_i=7680,oa=519,Yl=512,ql=513,Zl=514,Wc=515,Kl=516,$l=517,jl=518,Jl=519,aa=35044,ca="300 es",Rn=2e3,ir=2001;class di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let la=1234567;const ls=Math.PI/180,ms=180/Math.PI;function Vi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function Vo(i,t){return(i%t+t)%t}function Ql(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function th(i,t,e){return i!==t?(e-i)/(t-i):0}function hs(i,t,e){return(1-e)*i+e*t}function eh(i,t,e,n){return hs(i,t,1-Math.exp(-e*n))}function nh(i,t=1){return t-Math.abs(Vo(i,t*2)-t)}function ih(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function sh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function rh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function oh(i,t){return i+Math.random()*(t-i)}function ah(i){return i*(.5-Math.random())}function ch(i){i!==void 0&&(la=i);let t=la+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lh(i){return i*ls}function hh(i){return i*ms}function dh(i){return(i&i-1)===0&&i!==0}function uh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ph(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vt={DEG2RAD:ls,RAD2DEG:ms,generateUUID:Vi,clamp:be,euclideanModulo:Vo,mapLinear:Ql,inverseLerp:th,lerp:hs,damp:eh,pingpong:nh,smoothstep:ih,smootherstep:sh,randInt:rh,randFloat:oh,randFloatSpread:ah,seededRandom:ch,degToRad:lh,radToDeg:hh,isPowerOfTwo:dh,ceilPowerOfTwo:uh,floorPowerOfTwo:fh,setQuaternionFromProperEuler:ph,normalize:Oe,denormalize:Pi};class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,r,o,a,c,l){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],g=s[0],m=s[3],p=s[6],S=s[1],y=s[4],x=s[7],L=s[2],A=s[5],T=s[8];return r[0]=o*g+a*S+c*L,r[3]=o*m+a*y+c*A,r[6]=o*p+a*x+c*T,r[1]=l*g+h*S+d*L,r[4]=l*m+h*y+d*A,r[7]=l*p+h*x+d*T,r[2]=u*g+f*S+_*L,r[5]=u*m+f*y+_*A,r[8]=u*p+f*x+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,_=e*d+n*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(s*l-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=u*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=f*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fr.makeScale(t,e)),this}rotate(t){return this.premultiply(fr.makeRotation(-t)),this}translate(t,e){return this.premultiply(fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fr=new Yt;function Hc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mh(){const i=sr("canvas");return i.style.display="block",i}const ha={};function os(i){i in ha||(ha[i]=!0,console.warn(i))}function _h(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function gh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ee={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(i.r=Cn(i.r),i.g=Cn(i.g),i.b=Cn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gn?cr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const da=[.64,.33,.3,.6,.15,.06],ua=[.2126,.7152,.0722],fa=[.3127,.329],pa=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ma=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[ki]:{primaries:da,whitePoint:fa,transfer:cr,toXYZ:pa,fromXYZ:ma,luminanceCoefficients:ua,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:da,whitePoint:fa,transfer:le,toXYZ:pa,fromXYZ:ma,luminanceCoefficients:ua,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}});let gi;class xh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gi===void 0&&(gi=sr("canvas")),gi.width=t.width,gi.height=t.height;const n=gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mh=0;class Gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pr(s[o].image)):r.push(pr(s[o]))}else r=pr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function pr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;class We extends di{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=Tn,s=Tn,r=_n,o=oi,a=ln,c=Pn,l=We.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Vi(),this.name="",this.source=new Gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fs:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fs:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Rc;We.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(f+1)/2,L=(p+1)/2,A=(h+u)/4,T=(d+g)/4,P=(_+m)/4;return y>x&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=T/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=T/r,s=P/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(d-g)/S,this.z=(u-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sh extends di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Sh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kc extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wh extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const u=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(d!==g||c!==u||l!==f||h!==_){let m=1-a;const p=c*u+l*f+h*_+d*g,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),A=Math.atan2(L,p*S);m=Math.sin(m*A)/L,a=Math.sin(a*A)/L}const x=a*S;if(c=c*m+u*x,l=l*m+f*x,h=h*m+_*x,d=d*m+g*x,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=L,l*=L,h*=L,d*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*d+c*f-l*u,t[e+1]=c*_+h*u+l*d-a*f,t[e+2]=l*_+h*f+a*u-c*d,t[e+3]=h*_-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d+u*f*_;break;case"YZX":this._x=u*h*d+l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d-u*f*_;break;case"XZY":this._x=u*h*d-l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d+u*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_a.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_a.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mr.copy(this).projectOnVector(t),this.sub(mr)}reflect(t){return this.sub(mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mr=new b,_a=new hi;class ze{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qi),ys.subVectors(this.max,Qi),vi.subVectors(t.a,Qi),xi.subVectors(t.b,Qi),Mi.subVectors(t.c,Qi),Nn.subVectors(xi,vi),Fn.subVectors(Mi,xi),Kn.subVectors(vi,Mi);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Kn.z,Kn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Kn.z,0,-Kn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Kn.y,Kn.x,0];return!_r(e,vi,xi,Mi,ys)||(e=[1,0,0,0,1,0,0,0,1],!_r(e,vi,xi,Mi,ys))?!1:(Ss.crossVectors(Nn,Fn),e=[Ss.x,Ss.y,Ss.z],_r(e,vi,xi,Mi,ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new b,new b,new b,new b,new b,new b,new b,new b],sn=new b,Ms=new ze,vi=new b,xi=new b,Mi=new b,Nn=new b,Fn=new b,Kn=new b,Qi=new b,ys=new b,Ss=new b,$n=new b;function _r(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$n.fromArray(i,r);const a=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),c=t.dot($n),l=e.dot($n),h=n.dot($n);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Eh=new ze,ts=new b,gr=new b;class Xi{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Eh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ts.subVectors(t,this.center);const e=ts.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ts.copy(t.center).add(gr)),this.expandByPoint(ts.copy(t.center).sub(gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new b,vr=new b,ws=new b,On=new b,xr=new b,Es=new b,Mr=new b;class gs{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vr.copy(t).add(e).multiplyScalar(.5),ws.copy(e).sub(t).normalize(),On.copy(this.origin).sub(vr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ws),a=On.dot(this.direction),c=-On.dot(ws),l=On.lengthSq(),h=Math.abs(1-o*o);let d,u,f,_;if(h>0)if(d=o*c-a,u=o*a-c,_=r*h,d>=0)if(u>=-_)if(u<=_){const g=1/h;d*=g,u*=g,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(vr).addScaledVector(ws,u),f}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){xr.subVectors(e,t),Es.subVectors(n,t),Mr.crossVectors(xr,Es);let o=this.direction.dot(Mr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);const c=a*this.direction.dot(Es.crossVectors(On,Es));if(c<0)return null;const l=a*this.direction.dot(xr.cross(On));if(l<0||c+l>o)return null;const h=-a*On.dot(Mr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,s,r,o,a,c,l,h,d,u,f,_,g,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,f,_,g,m)}set(t,e,n,s,r,o,a,c,l,h,d,u,f,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/yi.setFromMatrixColumn(t,0).length(),r=1/yi.setFromMatrixColumn(t,1).length(),o=1/yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,_=a*h,g=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+_*l,e[5]=u-g*l,e[9]=-a*c,e[2]=g-u*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,_=l*h,g=l*d;e[0]=u+g*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=g+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,_=l*h,g=l*d;e[0]=u-g*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,f=o*d,_=a*h,g=a*d;e[0]=c*h,e[4]=_*l-f,e[8]=u*l+g,e[1]=c*d,e[5]=g*l+u,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=g-u*d,e[8]=_*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+_,e[10]=u-g*d}else if(t.order==="XZY"){const u=o*c,f=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+g,e[5]=o*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bh,t,Th)}lookAt(t,e,n){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Bn.crossVectors(n,$e),Bn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Bn.crossVectors(n,$e)),Bn.normalize(),bs.crossVectors($e,Bn),s[0]=Bn.x,s[4]=bs.x,s[8]=$e.x,s[1]=Bn.y,s[5]=bs.y,s[9]=$e.y,s[2]=Bn.z,s[6]=bs.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],S=n[3],y=n[7],x=n[11],L=n[15],A=s[0],T=s[4],P=s[8],M=s[12],v=s[1],R=s[5],N=s[9],U=s[13],H=s[2],Y=s[6],Z=s[10],J=s[14],O=s[3],Q=s[7],nt=s[11],mt=s[15];return r[0]=o*A+a*v+c*H+l*O,r[4]=o*T+a*R+c*Y+l*Q,r[8]=o*P+a*N+c*Z+l*nt,r[12]=o*M+a*U+c*J+l*mt,r[1]=h*A+d*v+u*H+f*O,r[5]=h*T+d*R+u*Y+f*Q,r[9]=h*P+d*N+u*Z+f*nt,r[13]=h*M+d*U+u*J+f*mt,r[2]=_*A+g*v+m*H+p*O,r[6]=_*T+g*R+m*Y+p*Q,r[10]=_*P+g*N+m*Z+p*nt,r[14]=_*M+g*U+m*J+p*mt,r[3]=S*A+y*v+x*H+L*O,r[7]=S*T+y*R+x*Y+L*Q,r[11]=S*P+y*N+x*Z+L*nt,r[15]=S*M+y*U+x*J+L*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*f-n*c*f)+g*(+e*c*f-e*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*d+e*a*u+s*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],S=d*m*l-g*u*l+g*c*f-a*m*f-d*c*p+a*u*p,y=_*u*l-h*m*l-_*c*f+o*m*f+h*c*p-o*u*p,x=h*g*l-_*d*l+_*a*f-o*g*f-h*a*p+o*d*p,L=_*d*c-h*g*c-_*a*u+o*g*u+h*a*m-o*d*m,A=e*S+n*y+s*x+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=S*T,t[1]=(g*u*r-d*m*r-g*s*f+n*m*f+d*s*p-n*u*p)*T,t[2]=(a*m*r-g*c*r+g*s*l-n*m*l-a*s*p+n*c*p)*T,t[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*f-n*c*f)*T,t[4]=y*T,t[5]=(h*m*r-_*u*r+_*s*f-e*m*f-h*s*p+e*u*p)*T,t[6]=(_*c*r-o*m*r-_*s*l+e*m*l+o*s*p-e*c*p)*T,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*f+e*c*f)*T,t[8]=x*T,t[9]=(_*d*r-h*g*r-_*n*f+e*g*f+h*n*p-e*d*p)*T,t[10]=(o*g*r-_*a*r+_*n*l-e*g*l-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*f-e*a*f)*T,t[12]=L*T,t[13]=(h*g*s-_*d*s+_*n*u-e*g*u-h*n*m+e*d*m)*T,t[14]=(_*a*s-o*g*s-_*n*c+e*g*c+o*n*m-e*a*m)*T,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,_=r*d,g=o*h,m=o*d,p=a*d,S=c*l,y=c*h,x=c*d,L=n.x,A=n.y,T=n.z;return s[0]=(1-(g+p))*L,s[1]=(f+x)*L,s[2]=(_-y)*L,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(u+p))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(_+y)*T,s[9]=(m-S)*T,s[10]=(1-(u+g))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=yi.set(s[0],s[1],s[2]).length();const o=yi.set(s[4],s[5],s[6]).length(),a=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);const l=1/r,h=1/o,d=1/a;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,e.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Rn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,_;if(a===Rn)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ir)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Rn){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*l,f=(n+s)*h;let _,g;if(a===Rn)_=(o+r)*d,g=-2*d;else if(a===ir)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const yi=new b,rn=new me,bh=new b(0,0,0),Th=new b(1,1,1),Bn=new b,bs=new b,$e=new b,ga=new me,va=new hi;class un{constructor(t=0,e=0,n=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ga.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ga,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return va.setFromEuler(this),this.setFromQuaternion(va,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Xo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ah=0;const xa=new b,Si=new hi,yn=new me,Ts=new b,es=new b,Rh=new b,Ch=new hi,Ma=new b(1,0,0),ya=new b(0,1,0),Sa=new b(0,0,1),wa={type:"added"},Ph={type:"removed"},wi={type:"childadded",child:null},yr={type:"childremoved",child:null};class Ae extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new b,e=new un,n=new hi,s=new b(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Yt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(Ma,t)}rotateY(t){return this.rotateOnAxis(ya,t)}rotateZ(t){return this.rotateOnAxis(Sa,t)}translateOnAxis(t,e){return xa.copy(t).applyQuaternion(this.quaternion),this.position.add(xa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ma,t)}translateY(t){return this.translateOnAxis(ya,t)}translateZ(t){return this.translateOnAxis(Sa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ts.copy(t):Ts.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(es,Ts,this.up):yn.lookAt(Ts,es,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(yn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wa),wi.child=t,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ph),yr.child=t,this.dispatchEvent(yr),yr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wa),wi.child=t,this.dispatchEvent(wi),wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,t,Rh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,Ch,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new b(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new b,Sn=new b,Sr=new b,wn=new b,Ei=new b,bi=new b,Ea=new b,wr=new b,Er=new b,br=new b,Tr=new de,Ar=new de,Rr=new de;class cn{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),Sn.subVectors(n,e),Sr.subVectors(t,e);const o=on.dot(on),a=on.dot(Sn),c=on.dot(Sr),l=Sn.dot(Sn),h=Sn.dot(Sr),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,_=(o*h-a*c)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wn.x),c.addScaledVector(o,wn.y),c.addScaledVector(a,wn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Tr.setScalar(0),Ar.setScalar(0),Rr.setScalar(0),Tr.fromBufferAttribute(t,e),Ar.fromBufferAttribute(t,n),Rr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Tr,r.x),o.addScaledVector(Ar,r.y),o.addScaledVector(Rr,r.z),o}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),Sn.subVectors(t,e),on.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),on.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ei.subVectors(s,n),bi.subVectors(r,n),wr.subVectors(t,n);const c=Ei.dot(wr),l=bi.dot(wr);if(c<=0&&l<=0)return e.copy(n);Er.subVectors(t,s);const h=Ei.dot(Er),d=bi.dot(Er);if(h>=0&&d<=h)return e.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ei,o);br.subVectors(t,r);const f=Ei.dot(br),_=bi.dot(br);if(_>=0&&f<=_)return e.copy(r);const g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(bi,a);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return Ea.subVectors(r,s),a=(d-h)/(d-h+(f-_)),e.copy(s).addScaledVector(Ea,a);const p=1/(m+g+u);return o=g*p,a=u*p,e.copy(n).addScaledVector(Ei,o).addScaledVector(bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},As={h:0,s:0,l:0};function Cr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Vo(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Cr(o,r,t+1/3),this.g=Cr(o,r,t),this.b=Cr(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=Vc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return ee.fromWorkingColorSpace(Ne.copy(this),t),Math.round(be(Ne.r*255,0,255))*65536+Math.round(be(Ne.g*255,0,255))*256+Math.round(be(Ne.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Xe){ee.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,s=Ne.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(As);const n=hs(zn.h,As.h,e),s=hs(zn.s,As.s,e),r=hs(zn.l,As.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Ct;Ct.NAMES=Vc;let Lh=0;class ui extends di{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Vi(),this.name="",this.blending=Ui,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zr,this.blendDst=Kr,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zr&&(n.blendSrc=this.blendSrc),this.blendDst!==Kr&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gn extends ui{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new b,Rs=new _t;class Fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=aa,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rs.fromBufferAttribute(this,e),Rs.applyMatrix3(t),this.setXY(e,Rs.x,Rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==aa&&(t.usage=this.usage),t}}class Xc extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yc extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class jt extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dh=0;const tn=new me,Pr=new Ae,Ti=new b,je=new ze,ns=new ze,Ie=new b;class Se extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hc(t)?Yc:Xc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return Pr.lookAt(t),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ze);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(je.min,ns.min),je.expandByPoint(Ie),Ie.addVectors(je.max,ns.max),je.expandByPoint(Ie)):(je.expandByPoint(ns.min),je.expandByPoint(ns.max))}je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ie.fromBufferAttribute(a,l),c&&(Ti.fromBufferAttribute(t,l),Ie.add(Ti)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new b,c[P]=new b;const l=new b,h=new b,d=new b,u=new _t,f=new _t,_=new _t,g=new b,m=new b;function p(P,M,v){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,v),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,M),_.fromBufferAttribute(r,v),h.sub(l),d.sub(l),f.sub(u),_.sub(u);const R=1/(f.x*_.y-_.x*f.y);isFinite(R)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(R),a[P].add(g),a[M].add(g),a[v].add(g),c[P].add(m),c[M].add(m),c[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,M=S.length;P<M;++P){const v=S[P],R=v.start,N=v.count;for(let U=R,H=R+N;U<H;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const y=new b,x=new b,L=new b,A=new b;function T(P){L.fromBufferAttribute(s,P),A.copy(L);const M=a[P];y.copy(M),y.sub(L.multiplyScalar(L.dot(M))).normalize(),x.crossVectors(A,M);const R=x.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,R)}for(let P=0,M=S.length;P<M;++P){const v=S[P],R=v.start,N=v.count;for(let U=R,H=R+N;U<H;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new b,r=new b,o=new b,a=new b,c=new b,l=new b,h=new b,d=new b;if(t)for(let u=0,f=t.count;u<f;u+=3){const _=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*h;for(let p=0;p<h;p++)u[_++]=l[f++]}return new Fe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ba=new me,jn=new gs,Cs=new Xi,Ta=new b,Ps=new b,Ls=new b,Ds=new b,Lr=new b,Is=new b,Aa=new b,Us=new b;class j extends Ae{constructor(t=new Se,e=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Is.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Lr.fromBufferAttribute(d,t),o?Is.addScaledVector(Lr,h):Is.addScaledVector(Lr.sub(e),h))}e.add(Is)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(Cs.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Cs,Ta)===null||jn.origin.distanceToSquared(Ta)>(t.far-t.near)**2))&&(ba.copy(r).invert(),jn.copy(t.ray).applyMatrix4(ba),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,L=y;x<L;x+=3){const A=a.getX(x),T=a.getX(x+1),P=a.getX(x+2);s=Ns(this,p,t,n,l,h,d,A,T,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const S=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=Ns(this,o,t,n,l,h,d,S,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,L=y;x<L;x+=3){const A=x,T=x+1,P=x+2;s=Ns(this,p,t,n,l,h,d,A,T,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const S=m,y=m+1,x=m+2;s=Ns(this,o,t,n,l,h,d,S,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ih(i,t,e,n,s,r,o,a){let c;if(t.side===qe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Xn,a),c===null)return null;Us.copy(a),Us.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Us);return l<e.near||l>e.far?null:{distance:l,point:Us.clone(),object:i}}function Ns(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ps),i.getVertexPosition(c,Ls),i.getVertexPosition(l,Ds);const h=Ih(i,t,e,n,Ps,Ls,Ds,Aa);if(h){const d=new b;cn.getBarycoord(Aa,Ps,Ls,Ds,d),s&&(h.uv=cn.getInterpolatedAttribute(s,a,c,l,d,new _t)),r&&(h.uv1=cn.getInterpolatedAttribute(r,a,c,l,d,new _t)),o&&(h.normal=cn.getInterpolatedAttribute(o,a,c,l,d,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new b,materialIndex:0};cn.getNormal(Ps,Ls,Ds,u.normal),h.face=u,h.barycoord=d}return h}class $t extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2));function _(g,m,p,S,y,x,L,A,T,P,M){const v=x/T,R=L/P,N=x/2,U=L/2,H=A/2,Y=T+1,Z=P+1;let J=0,O=0;const Q=new b;for(let nt=0;nt<Z;nt++){const mt=nt*R-U;for(let Lt=0;Lt<Y;Lt++){const zt=Lt*v-N;Q[g]=zt*S,Q[m]=mt*y,Q[p]=H,l.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[p]=A>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(Lt/T),d.push(1-nt/P),J+=1}}for(let nt=0;nt<P;nt++)for(let mt=0;mt<T;mt++){const Lt=u+mt+Y*nt,zt=u+mt+Y*(nt+1),I=u+(mt+1)+Y*(nt+1),k=u+(mt+1)+Y*nt;c.push(Lt,zt,k),c.push(zt,I,k),O+=6}a.addGroup(f,O,M),f+=O,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){const t={};for(let e=0;e<i.length;e++){const n=Gi(i[e]);for(const s in n)t[s]=n[s]}return t}function Uh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Nh={clone:Gi,merge:Be};var Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends ui{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=Uh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zc extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new b,Ra=new _t,Ca=new _t;class Je extends Zc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,Ra,Ca),e.subVectors(Ca,Ra)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ls*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,Ri=1;class Bh extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Je(Ai,Ri,t,e);s.layers=this.layers,this.add(s);const r=new Je(Ai,Ri,t,e);r.layers=this.layers,this.add(r);const o=new Je(Ai,Ri,t,e);o.layers=this.layers,this.add(o);const a=new Je(Ai,Ri,t,e);a.layers=this.layers,this.add(a);const c=new Je(Ai,Ri,t,e);c.layers=this.layers,this.add(c);const l=new Je(Ai,Ri,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Kc extends We{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Bi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zh extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $t(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:kn});r.uniforms.tEquirect.value=e;const o=new j(s,r),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=_n),new Bh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Dr=new b,Wh=new b,Hh=new Yt;class Hn{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Dr.subVectors(n,e).cross(Wh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Dr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hh.getNormalMatrix(t),s=this.coplanarPoint(Dr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Xi,Fs=new b;class Yo{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],_=s[9],g=s[10],m=s[11],p=s[12],S=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,u-l,m-f,x-p).normalize(),n[1].setComponents(c+r,u+l,m+f,x+p).normalize(),n[2].setComponents(c+o,u+h,m+_,x+S).normalize(),n[3].setComponents(c-o,u-h,m-_,x-S).normalize(),n[4].setComponents(c-a,u-d,m-g,x-y).normalize(),e===Rn)n[5].setComponents(c+a,u+d,m+g,x+y).normalize();else if(e===ir)n[5].setComponents(a,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Fs.x=s.normal.x>0?t.max.x:t.min.x,Fs.y=s.normal.y>0?t.max.y:t.min.y,Fs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $c(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gh(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){const _=d[u],g=d[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){const g=d[f];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class hn extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const S=p*u-o;for(let y=0;y<l;y++){const x=y*d-r;_.push(x,-S,0),g.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const y=S+l*p,x=S+l*(p+1),L=S+1+l*(p+1),A=S+1+l*p;f.push(y,x,A),f.push(x,L,A)}this.setIndex(f),this.setAttribute("position",new jt(_,3)),this.setAttribute("normal",new jt(g,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.widthSegments,t.heightSegments)}}var kh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ed=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ud=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Md=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ad=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ud=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Od=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,su=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ru=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ou=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,au=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,du=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_u=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Su=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Au=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ru=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Du=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ou=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ku=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ku=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$u=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ju=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ef=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,of=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,df=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_f=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:kh,alphahash_pars_fragment:Vh,alphamap_fragment:Xh,alphamap_pars_fragment:Yh,alphatest_fragment:qh,alphatest_pars_fragment:Zh,aomap_fragment:Kh,aomap_pars_fragment:$h,batching_pars_vertex:jh,batching_vertex:Jh,begin_vertex:Qh,beginnormal_vertex:td,bsdfs:ed,iridescence_fragment:nd,bumpmap_pars_fragment:id,clipping_planes_fragment:sd,clipping_planes_pars_fragment:rd,clipping_planes_pars_vertex:od,clipping_planes_vertex:ad,color_fragment:cd,color_pars_fragment:ld,color_pars_vertex:hd,color_vertex:dd,common:ud,cube_uv_reflection_fragment:fd,defaultnormal_vertex:pd,displacementmap_pars_vertex:md,displacementmap_vertex:_d,emissivemap_fragment:gd,emissivemap_pars_fragment:vd,colorspace_fragment:xd,colorspace_pars_fragment:Md,envmap_fragment:yd,envmap_common_pars_fragment:Sd,envmap_pars_fragment:wd,envmap_pars_vertex:Ed,envmap_physical_pars_fragment:Nd,envmap_vertex:bd,fog_vertex:Td,fog_pars_vertex:Ad,fog_fragment:Rd,fog_pars_fragment:Cd,gradientmap_pars_fragment:Pd,lightmap_pars_fragment:Ld,lights_lambert_fragment:Dd,lights_lambert_pars_fragment:Id,lights_pars_begin:Ud,lights_toon_fragment:Fd,lights_toon_pars_fragment:Od,lights_phong_fragment:Bd,lights_phong_pars_fragment:zd,lights_physical_fragment:Wd,lights_physical_pars_fragment:Hd,lights_fragment_begin:Gd,lights_fragment_maps:kd,lights_fragment_end:Vd,logdepthbuf_fragment:Xd,logdepthbuf_pars_fragment:Yd,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:Zd,map_fragment:Kd,map_pars_fragment:$d,map_particle_fragment:jd,map_particle_pars_fragment:Jd,metalnessmap_fragment:Qd,metalnessmap_pars_fragment:tu,morphinstance_vertex:eu,morphcolor_vertex:nu,morphnormal_vertex:iu,morphtarget_pars_vertex:su,morphtarget_vertex:ru,normal_fragment_begin:ou,normal_fragment_maps:au,normal_pars_fragment:cu,normal_pars_vertex:lu,normal_vertex:hu,normalmap_pars_fragment:du,clearcoat_normal_fragment_begin:uu,clearcoat_normal_fragment_maps:fu,clearcoat_pars_fragment:pu,iridescence_pars_fragment:mu,opaque_fragment:_u,packing:gu,premultiplied_alpha_fragment:vu,project_vertex:xu,dithering_fragment:Mu,dithering_pars_fragment:yu,roughnessmap_fragment:Su,roughnessmap_pars_fragment:wu,shadowmap_pars_fragment:Eu,shadowmap_pars_vertex:bu,shadowmap_vertex:Tu,shadowmask_pars_fragment:Au,skinbase_vertex:Ru,skinning_pars_vertex:Cu,skinning_vertex:Pu,skinnormal_vertex:Lu,specularmap_fragment:Du,specularmap_pars_fragment:Iu,tonemapping_fragment:Uu,tonemapping_pars_fragment:Nu,transmission_fragment:Fu,transmission_pars_fragment:Ou,uv_pars_fragment:Bu,uv_pars_vertex:zu,uv_vertex:Wu,worldpos_vertex:Hu,background_vert:Gu,background_frag:ku,backgroundCube_vert:Vu,backgroundCube_frag:Xu,cube_vert:Yu,cube_frag:qu,depth_vert:Zu,depth_frag:Ku,distanceRGBA_vert:$u,distanceRGBA_frag:ju,equirect_vert:Ju,equirect_frag:Qu,linedashed_vert:tf,linedashed_frag:ef,meshbasic_vert:nf,meshbasic_frag:sf,meshlambert_vert:rf,meshlambert_frag:of,meshmatcap_vert:af,meshmatcap_frag:cf,meshnormal_vert:lf,meshnormal_frag:hf,meshphong_vert:df,meshphong_frag:uf,meshphysical_vert:ff,meshphysical_frag:pf,meshtoon_vert:mf,meshtoon_frag:_f,points_vert:gf,points_frag:vf,shadow_vert:xf,shadow_frag:Mf,sprite_vert:yf,sprite_frag:Sf},Mt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},mn={basic:{uniforms:Be([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Be([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Be([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Be([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Be([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Be([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Be([Mt.points,Mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Be([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Be([Mt.common,Mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Be([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Be([Mt.sprite,Mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Be([Mt.common,Mt.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Be([Mt.lights,Mt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};mn.physical={uniforms:Be([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Os={r:0,b:0,g:0},Qn=new un,wf=new me;function Ef(i,t,e,n,s,r,o){const a=new Ct(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function _(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function g(S){let y=!1;const x=_(S);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,y){const x=_(y);x&&(x.isCubeTexture||x.mapping===ar)?(h===void 0&&(h=new j(new $t(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Gi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Qn.copy(y.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wf.makeRotationFromEuler(Qn)),h.material.toneMapped=ee.getTransfer(x.colorSpace)!==le,(d!==x||u!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new j(new hn(2,2),new Yn({name:"BackgroundMaterial",uniforms:Gi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ee.getTransfer(x.colorSpace)!==le,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,y){S.getRGB(Os,qc(i)),n.buffers.color.setClear(Os.r,Os.g,Os.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:g,addToRenderList:m}}function bf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(v,R,N,U,H){let Y=!1;const Z=d(U,N,R);r!==Z&&(r=Z,l(r.object)),Y=f(v,U,N,H),Y&&_(v,U,N,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(v,R,N,U),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,R,N){const U=N.wireframe===!0;let H=n[v.id];H===void 0&&(H={},n[v.id]=H);let Y=H[R.id];Y===void 0&&(Y={},H[R.id]=Y);let Z=Y[U];return Z===void 0&&(Z=u(c()),Y[U]=Z),Z}function u(v){const R=[],N=[],U=[];for(let H=0;H<e;H++)R[H]=0,N[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:U,object:v,attributes:{},index:null}}function f(v,R,N,U){const H=r.attributes,Y=R.attributes;let Z=0;const J=N.getAttributes();for(const O in J)if(J[O].location>=0){const nt=H[O];let mt=Y[O];if(mt===void 0&&(O==="instanceMatrix"&&v.instanceMatrix&&(mt=v.instanceMatrix),O==="instanceColor"&&v.instanceColor&&(mt=v.instanceColor)),nt===void 0||nt.attribute!==mt||mt&&nt.data!==mt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==U}function _(v,R,N,U){const H={},Y=R.attributes;let Z=0;const J=N.getAttributes();for(const O in J)if(J[O].location>=0){let nt=Y[O];nt===void 0&&(O==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),O==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor));const mt={};mt.attribute=nt,nt&&nt.data&&(mt.data=nt.data),H[O]=mt,Z++}r.attributes=H,r.attributesNum=Z,r.index=U}function g(){const v=r.newAttributes;for(let R=0,N=v.length;R<N;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){const N=r.newAttributes,U=r.enabledAttributes,H=r.attributeDivisors;N[v]=1,U[v]===0&&(i.enableVertexAttribArray(v),U[v]=1),H[v]!==R&&(i.vertexAttribDivisor(v,R),H[v]=R)}function S(){const v=r.newAttributes,R=r.enabledAttributes;for(let N=0,U=R.length;N<U;N++)R[N]!==v[N]&&(i.disableVertexAttribArray(N),R[N]=0)}function y(v,R,N,U,H,Y,Z){Z===!0?i.vertexAttribIPointer(v,R,N,H,Y):i.vertexAttribPointer(v,R,N,U,H,Y)}function x(v,R,N,U){g();const H=U.attributes,Y=N.getAttributes(),Z=R.defaultAttributeValues;for(const J in Y){const O=Y[J];if(O.location>=0){let Q=H[J];if(Q===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor)),Q!==void 0){const nt=Q.normalized,mt=Q.itemSize,Lt=t.get(Q);if(Lt===void 0)continue;const zt=Lt.buffer,I=Lt.type,k=Lt.bytesPerElement,X=I===i.INT||I===i.UNSIGNED_INT||Q.gpuType===Bo;if(Q.isInterleavedBufferAttribute){const rt=Q.data,at=rt.stride,lt=Q.offset;if(rt.isInstancedInterleavedBuffer){for(let ut=0;ut<O.locationSize;ut++)p(O.location+ut,rt.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ut=0;ut<O.locationSize;ut++)m(O.location+ut);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let ut=0;ut<O.locationSize;ut++)y(O.location+ut,mt/O.locationSize,I,nt,at*k,(lt+mt/O.locationSize*ut)*k,X)}else{if(Q.isInstancedBufferAttribute){for(let rt=0;rt<O.locationSize;rt++)p(O.location+rt,Q.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let rt=0;rt<O.locationSize;rt++)m(O.location+rt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let rt=0;rt<O.locationSize;rt++)y(O.location+rt,mt/O.locationSize,I,nt,mt*k,mt/O.locationSize*rt*k,X)}}else if(Z!==void 0){const nt=Z[J];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(O.location,nt);break;case 3:i.vertexAttrib3fv(O.location,nt);break;case 4:i.vertexAttrib4fv(O.location,nt);break;default:i.vertexAttrib1fv(O.location,nt)}}}}S()}function L(){P();for(const v in n){const R=n[v];for(const N in R){const U=R[N];for(const H in U)h(U[H].object),delete U[H];delete R[N]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const N in R){const U=R[N];for(const H in U)h(U[H].object),delete U[H];delete R[N]}delete n[v.id]}function T(v){for(const R in n){const N=n[R];if(N[v.id]===void 0)continue;const U=N[v.id];for(const H in U)h(U[H].object),delete U[H];delete N[v.id]}}function P(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function Tf(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let _=0;_<d;_++)f+=h[_];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],h[_],u[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g]*u[g];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Af(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==ln&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===_s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Pn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!P)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:L,maxSamples:A}}function Rf(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Hn,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{const S=r?0:n,y=S*4;let x=p.clippingState||null;c.value=x,x=h(_,u,y,f);for(let L=0;L!==y;++L)x[L]=e[L];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=f+g*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==g;++y,x+=4)o.copy(d[y]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Cf(i){let t=new WeakMap;function e(o,a){return a===io?o.mapping=Bi:a===so&&(o.mapping=zi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===io||a===so)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new zh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class jc extends Zc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Di=4,Pa=[.125,.215,.35,.446,.526,.582],ri=20,Ir=new jc,La=new Ct;let Ur=null,Nr=0,Fr=0,Or=!1;const ii=(1+Math.sqrt(5))/2,Ci=1/ii,Da=[new b(-ii,Ci,0),new b(ii,Ci,0),new b(-Ci,0,ii),new b(Ci,0,ii),new b(0,ii,-Ci),new b(0,ii,Ci),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class Io{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ur=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Na(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ua(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ur,Nr,Fr),this._renderer.xr.enabled=Or,t.scissorTest=!1,Bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ur=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:_s,format:ln,colorSpace:ki,depthBuffer:!1},s=Ia(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ia(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pf(r)),this._blurMaterial=Lf(r,t,e)}return s}_compileMaterial(t){const e=new j(this._lodPlanes[0],t);this._renderer.compile(e,Ir)}_sceneToCubeUV(t,e,n,s){const a=new Je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(La),h.toneMapping=Vn,h.autoClear=!1;const f=new gn({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),_=new j(new $t,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(La),g=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;Bs(s,S*y,p>2?y:0,y,y),h.setRenderTarget(s),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Bi||t.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Na()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ua());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new j(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Bs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ir)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Da[(s-r-1)%Da.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new j(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ri-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):ri;m>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const p=[];let S=0;for(let T=0;T<ri;++T){const P=T/g,M=Math.exp(-P*P/2);p.push(M),T===0?S+=M:T<m&&(S+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=_,u.mipInt.value=y-n;const x=this._sizeLods[s],L=3*x*(s>y-Di?s-y+Di:0),A=4*(this._cubeSize-x);Bs(e,L,A,3*x,2*x),c.setRenderTarget(e),c.render(d,Ir)}}function Pf(i){const t=[],e=[],n=[];let s=i;const r=i-Di+1+Pa.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Di?c=Pa[o-i+Di-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*f),y=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,P=A>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];S.set(M,g*_*A),y.set(u,m*_*A);const v=[A,A,A,A,A,A];x.set(v,p*_*A)}const L=new Se;L.setAttribute("position",new Fe(S,g)),L.setAttribute("uv",new Fe(y,m)),L.setAttribute("faceIndex",new Fe(x,p)),t.push(L),s>Di&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ia(i,t,e){const n=new li(i,t,e);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Lf(i,t,e){const n=new Float32Array(ri),s=new b(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ua(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Na(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Df(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===io||c===so,h=c===Bi||c===zi;if(l||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Io(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Io(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function If(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&os("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Uf(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);for(const _ in u.morphAttributes){const g=u.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const _ in u)t.update(u[_],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],i.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,_=d.attributes.position;let g=0;if(f!==null){const S=f.array;g=f.version;for(let y=0,x=S.length;y<x;y+=3){const L=S[y+0],A=S[y+1],T=S[y+2];u.push(L,A,A,T,T,L)}}else if(_!==void 0){const S=_.array;g=_.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const L=y+0,A=y+1,T=y+2;u.push(L,A,A,T,T,L)}}else return;const m=new(Hc(u)?Yc:Xc)(u,1);m.version=g;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Nf(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,u*o,_),e.update(f,n,_))}function h(u,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function d(u,f,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,g,0,_);let p=0;for(let S=0;S<_;S++)p+=f[S]*g[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Ff(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Of(i,t,e){const n=new WeakMap,s=new de;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;u!==void 0&&u.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const T=new Float32Array(L*A*4*d),P=new kc(T,L,A,d);P.type=An,P.needsUpdate=!0;const M=x*4;for(let R=0;R<d;R++){const N=p[R],U=S[R],H=y[R],Y=L*A*4*R;for(let Z=0;Z<N.count;Z++){const J=Z*M;_===!0&&(s.fromBufferAttribute(N,Z),T[Y+J+0]=s.x,T[Y+J+1]=s.y,T[Y+J+2]=s.z,T[Y+J+3]=0),g===!0&&(s.fromBufferAttribute(U,Z),T[Y+J+4]=s.x,T[Y+J+5]=s.y,T[Y+J+6]=s.z,T[Y+J+7]=0),m===!0&&(s.fromBufferAttribute(H,Z),T[Y+J+8]=s.x,T[Y+J+9]=s.y,T[Y+J+10]=s.z,T[Y+J+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new _t(L,A)},n.set(a,u),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Bf(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Jc extends We{constructor(t,e,n,s,r,o,a,c,l,h=Ni){if(h!==Ni&&h!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ni&&(n=ci),n===void 0&&h===Hi&&(n=Wi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qc=new We,Fa=new Jc(1,1),tl=new kc,el=new wh,nl=new Kc,Oa=[],Ba=[],za=new Float32Array(16),Wa=new Float32Array(9),Ha=new Float32Array(4);function Yi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Oa[s];if(r===void 0&&(r=new Float32Array(s),Oa[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lr(i,t){let e=Ba[t];e===void 0&&(e=new Int32Array(t),Ba[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function kf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Ha.set(n),i.uniformMatrix2fv(this.addr,!1,Ha),Ce(e,n)}}function Vf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Wa.set(n),i.uniformMatrix3fv(this.addr,!1,Wa),Ce(e,n)}}function Xf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;za.set(n),i.uniformMatrix4fv(this.addr,!1,za),Ce(e,n)}}function Yf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function Zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function Kf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function $f(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Jf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function Qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function tp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fa.compareFunction=Wc,r=Fa):r=Qc,e.setTexture2D(t||r,s)}function ep(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||el,s)}function np(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nl,s)}function ip(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||tl,s)}function sp(i){switch(i){case 5126:return zf;case 35664:return Wf;case 35665:return Hf;case 35666:return Gf;case 35674:return kf;case 35675:return Vf;case 35676:return Xf;case 5124:case 35670:return Yf;case 35667:case 35671:return qf;case 35668:case 35672:return Zf;case 35669:case 35673:return Kf;case 5125:return $f;case 36294:return jf;case 36295:return Jf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return ep;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}function rp(i,t){i.uniform1fv(this.addr,t)}function op(i,t){const e=Yi(t,this.size,2);i.uniform2fv(this.addr,e)}function ap(i,t){const e=Yi(t,this.size,3);i.uniform3fv(this.addr,e)}function cp(i,t){const e=Yi(t,this.size,4);i.uniform4fv(this.addr,e)}function lp(i,t){const e=Yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hp(i,t){const e=Yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dp(i,t){const e=Yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function up(i,t){i.uniform1iv(this.addr,t)}function fp(i,t){i.uniform2iv(this.addr,t)}function pp(i,t){i.uniform3iv(this.addr,t)}function mp(i,t){i.uniform4iv(this.addr,t)}function _p(i,t){i.uniform1uiv(this.addr,t)}function gp(i,t){i.uniform2uiv(this.addr,t)}function vp(i,t){i.uniform3uiv(this.addr,t)}function xp(i,t){i.uniform4uiv(this.addr,t)}function Mp(i,t,e){const n=this.cache,s=t.length,r=lr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Qc,r[o])}function yp(i,t,e){const n=this.cache,s=t.length,r=lr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||el,r[o])}function Sp(i,t,e){const n=this.cache,s=t.length,r=lr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||nl,r[o])}function wp(i,t,e){const n=this.cache,s=t.length,r=lr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||tl,r[o])}function Ep(i){switch(i){case 5126:return rp;case 35664:return op;case 35665:return ap;case 35666:return cp;case 35674:return lp;case 35675:return hp;case 35676:return dp;case 5124:case 35670:return up;case 35667:case 35671:return fp;case 35668:case 35672:return pp;case 35669:case 35673:return mp;case 5125:return _p;case 36294:return gp;case 36295:return vp;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return wp}}class bp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sp(e.type)}}class Tp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ep(e.type)}}class Ap{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Br=/(\w+)(\])?(\[|\.)?/g;function Ga(i,t){i.seq.push(t),i.map[t.id]=t}function Rp(i,t,e){const n=i.name,s=n.length;for(Br.lastIndex=0;;){const r=Br.exec(n),o=Br.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ga(e,l===void 0?new bp(a,i,t):new Tp(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Ap(a),Ga(e,d)),e=d}}}class er{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Rp(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ka(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Cp=37297;let Pp=0;function Lp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Va=new Yt;function Dp(i){ee._getMatrix(Va,ee.workingColorSpace,i);const t=`mat3( ${Va.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case cr:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xa(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Lp(i.getShaderSource(t),o)}else return s}function Ip(i,t){const e=Dp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Up(i,t){let e;switch(t){case Fl:e="Linear";break;case Ol:e="Reinhard";break;case Bl:e="Cineon";break;case Ac:e="ACESFilmic";break;case Wl:e="AgX";break;case Hl:e="Neutral";break;case zl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zs=new b;function Np(){ee.getLuminanceCoefficients(zs);const i=zs.x.toFixed(4),t=zs.y.toFixed(4),e=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function Op(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function as(i){return i!==""}function Ya(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qa(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(i){return i.replace(zp,Hp)}const Wp=new Map;function Hp(i,t){let e=Zt[t];if(e===void 0){const n=Wp.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Uo(e)}const Gp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Za(i){return i.replace(Gp,kp)}function kp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ka(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ec?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function Xp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case zi:t="ENVMAP_TYPE_CUBE";break;case ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zi:t="ENVMAP_MODE_REFRACTION";break}return t}function qp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ul:t="ENVMAP_BLENDING_MIX";break;case Nl:t="ENVMAP_BLENDING_ADD";break}return t}function Zp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Kp(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Vp(e),l=Xp(e),h=Yp(e),d=qp(e),u=Zp(e),f=Fp(e),_=Op(r),g=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(as).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(as).join(`
`),p.length>0&&(p+=`
`)):(m=[Ka(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),p=[Ka(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?Up("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Ip("linearToOutputTexel",e.outputColorSpace),Np(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(as).join(`
`)),o=Uo(o),o=Ya(o,e),o=qa(o,e),a=Uo(a),a=Ya(a,e),a=qa(a,e),o=Za(o),a=Za(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+o,x=S+p+a,L=ka(s,s.VERTEX_SHADER,y),A=ka(s,s.FRAGMENT_SHADER,x);s.attachShader(g,L),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(R){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(g).trim(),U=s.getShaderInfoLog(L).trim(),H=s.getShaderInfoLog(A).trim();let Y=!0,Z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,L,A);else{const J=Xa(s,L,"vertex"),O=Xa(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+J+`
`+O)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||H==="")&&(Z=!1);Z&&(R.diagnostics={runnable:Y,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(L),s.deleteShader(A),P=new er(s,g),M=Bp(s,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,Cp)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pp++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=A,this}let $p=0;class jp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Jp(t),e.set(t,n)),n}}class Jp{constructor(t){this.id=$p++,this.code=t,this.usedTimes=0}}function Qp(i,t,e,n,s,r,o){const a=new Xo,c=new jp,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,v,R,N,U){const H=N.fog,Y=U.geometry,Z=M.isMeshStandardMaterial?N.environment:null,J=(M.isMeshStandardMaterial?e:t).get(M.envMap||Z),O=J&&J.mapping===ar?J.image.height:null,Q=_[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const nt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mt=nt!==void 0?nt.length:0;let Lt=0;Y.morphAttributes.position!==void 0&&(Lt=1),Y.morphAttributes.normal!==void 0&&(Lt=2),Y.morphAttributes.color!==void 0&&(Lt=3);let zt,I,k,X;if(Q){const It=mn[Q];zt=It.vertexShader,I=It.fragmentShader}else zt=M.vertexShader,I=M.fragmentShader,c.update(M),k=c.getVertexShaderID(M),X=c.getFragmentShaderID(M);const rt=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),lt=U.isInstancedMesh===!0,ut=U.isBatchedMesh===!0,K=!!M.map,ht=!!M.matcap,Dt=!!J,F=!!M.aoMap,ue=!!M.lightMap,Bt=!!M.bumpMap,kt=!!M.normalMap,gt=!!M.displacementMap,Pt=!!M.emissiveMap,ft=!!M.metalnessMap,C=!!M.roughnessMap,w=M.anisotropy>0,V=M.clearcoat>0,ot=M.dispersion>0,ct=M.iridescence>0,st=M.sheen>0,bt=M.transmission>0,yt=w&&!!M.anisotropyMap,St=V&&!!M.clearcoatMap,qt=V&&!!M.clearcoatNormalMap,pt=V&&!!M.clearcoatRoughnessMap,Tt=ct&&!!M.iridescenceMap,Ft=ct&&!!M.iridescenceThicknessMap,Ot=st&&!!M.sheenColorMap,wt=st&&!!M.sheenRoughnessMap,Kt=!!M.specularMap,Wt=!!M.specularColorMap,ce=!!M.specularIntensityMap,B=bt&&!!M.transmissionMap,vt=bt&&!!M.thicknessMap,tt=!!M.gradientMap,D=!!M.alphaMap,G=M.alphaTest>0,et=!!M.alphaHash,it=!!M.extensions;let Et=Vn;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Et=i.toneMapping);const Ht={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:zt,fragmentShader:I,defines:M.defines,customVertexShaderID:k,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ut,batchingColor:ut&&U._colorsTexture!==null,instancing:lt,instancingColor:lt&&U.instanceColor!==null,instancingMorph:lt&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ki,alphaToCoverage:!!M.alphaToCoverage,map:K,matcap:ht,envMap:Dt,envMapMode:Dt&&J.mapping,envMapCubeUVHeight:O,aoMap:F,lightMap:ue,bumpMap:Bt,normalMap:kt,displacementMap:u&&gt,emissiveMap:Pt,normalMapObjectSpace:kt&&M.normalMapType===Xl,normalMapTangentSpace:kt&&M.normalMapType===zc,metalnessMap:ft,roughnessMap:C,anisotropy:w,anisotropyMap:yt,clearcoat:V,clearcoatMap:St,clearcoatNormalMap:qt,clearcoatRoughnessMap:pt,dispersion:ot,iridescence:ct,iridescenceMap:Tt,iridescenceThicknessMap:Ft,sheen:st,sheenColorMap:Ot,sheenRoughnessMap:wt,specularMap:Kt,specularColorMap:Wt,specularIntensityMap:ce,transmission:bt,transmissionMap:B,thicknessMap:vt,gradientMap:tt,opaque:M.transparent===!1&&M.blending===Ui&&M.alphaToCoverage===!1,alphaMap:D,alphaTest:G,alphaHash:et,combine:M.combine,mapUv:K&&g(M.map.channel),aoMapUv:F&&g(M.aoMap.channel),lightMapUv:ue&&g(M.lightMap.channel),bumpMapUv:Bt&&g(M.bumpMap.channel),normalMapUv:kt&&g(M.normalMap.channel),displacementMapUv:gt&&g(M.displacementMap.channel),emissiveMapUv:Pt&&g(M.emissiveMap.channel),metalnessMapUv:ft&&g(M.metalnessMap.channel),roughnessMapUv:C&&g(M.roughnessMap.channel),anisotropyMapUv:yt&&g(M.anisotropyMap.channel),clearcoatMapUv:St&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:qt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(M.sheenRoughnessMap.channel),specularMapUv:Kt&&g(M.specularMap.channel),specularColorMapUv:Wt&&g(M.specularColorMap.channel),specularIntensityMapUv:ce&&g(M.specularIntensityMap.channel),transmissionMapUv:B&&g(M.transmissionMap.channel),thicknessMapUv:vt&&g(M.thicknessMap.channel),alphaMapUv:D&&g(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(kt||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(K||D),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:at,skinning:U.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Lt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:K&&M.map.isVideoTexture===!0&&ee.getTransfer(M.map.colorSpace)===le,decodeVideoTextureEmissive:Pt&&M.emissiveMap.isVideoTexture===!0&&ee.getTransfer(M.emissiveMap.colorSpace)===le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ye,flipSided:M.side===qe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:it&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&M.extensions.multiDraw===!0||ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function p(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)v.push(R),v.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(S(v,M),y(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function S(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function y(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const v=_[M.type];let R;if(v){const N=mn[v];R=Nh.clone(N.uniforms)}else R=M.uniforms;return R}function L(M,v){let R;for(let N=0,U=h.length;N<U;N++){const H=h[N];if(H.cacheKey===v){R=H,++R.usedTimes;break}}return R===void 0&&(R=new Kp(i,v,M,r),h.push(R)),R}function A(M){if(--M.usedTimes===0){const v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:P}}function t0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function e0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $a(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ja(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,_,g,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=g,p.group=m),t++,p}function a(d,u,f,_,g,m){const p=o(d,u,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,u,f,_,g,m){const p=o(d,u,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||e0),n.length>1&&n.sort(u||$a),s.length>1&&s.sort(u||$a)}function h(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function n0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ja,i.set(n,[o])):s>=r.length?(o=new ja,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function i0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new Ct};break;case"SpotLight":e={position:new b,direction:new b,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new b,halfWidth:new b,halfHeight:new b};break}return i[t.id]=e,e}}}function s0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let r0=0;function o0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function a0(i){const t=new i0,e=s0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);const s=new b,r=new me,o=new me;function a(l){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,S=0,y=0,x=0,L=0,A=0,T=0;l.sort(o0);for(let M=0,v=l.length;M<v;M++){const R=l[M],N=R.color,U=R.intensity,H=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=N.r*U,d+=N.g*U,u+=N.b*U;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(R.sh.coefficients[Z],U);T++}else if(R.isDirectionalLight){const Z=t.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,O=e.get(R);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=R.shadow.matrix,S++}n.directional[f]=Z,f++}else if(R.isSpotLight){const Z=t.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(N).multiplyScalar(U),Z.distance=H,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,n.spot[g]=Z;const J=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,J.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[g]=J.matrix,R.castShadow){const O=e.get(R);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,n.spotShadow[g]=O,n.spotShadowMap[g]=Y,x++}g++}else if(R.isRectAreaLight){const Z=t.get(R);Z.color.copy(N).multiplyScalar(U),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=Z,m++}else if(R.isPointLight){const Z=t.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){const J=R.shadow,O=e.get(R);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,O.shadowCameraNear=J.camera.near,O.shadowCameraFar=J.camera.far,n.pointShadow[_]=O,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=R.shadow.matrix,y++}n.point[_]=Z,_++}else if(R.isHemisphereLight){const Z=t.get(R);Z.skyColor.copy(R.color).multiplyScalar(U),Z.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[p]=Z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==f||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==L||P.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,P.directionalLength=f,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=L,P.numLightProbes=T,n.version=r0++)}function c(l,h){let d=0,u=0,f=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Ja(i){const t=new a0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function c0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ja(i),t.set(s,[a])):r>=o.length?(a=new Ja(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class l0 extends ui{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class h0 extends ui{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function f0(i,t,e){let n=new Yo;const s=new _t,r=new _t,o=new de,a=new l0({depthPacking:Vl}),c=new h0,l={},h=e.maxTextureSize,d={[Xn]:qe,[qe]:Xn,[Ye]:Ye},u=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:d0,fragmentShader:u0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new Se;_.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new j(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let p=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),N=i.state;N.setBlending(kn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==En&&this.type===En,H=p===En&&this.type!==En;for(let Y=0,Z=A.length;Y<Z;Y++){const J=A[Y],O=J.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const Q=O.getFrameExtents();if(s.multiply(Q),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,O.mapSize.y=r.y)),O.map===null||U===!0||H===!0){const mt=this.type!==En?{minFilter:dn,magFilter:dn}:{};O.map!==null&&O.map.dispose(),O.map=new li(s.x,s.y,mt),O.map.texture.name=J.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const nt=O.getViewportCount();for(let mt=0;mt<nt;mt++){const Lt=O.getViewport(mt);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),N.viewport(o),O.updateMatrices(J,mt),n=O.getFrustum(),x(T,P,O.camera,J,this.type)}O.isPointLightShadow!==!0&&this.type===En&&S(O,P),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,v,R)};function S(A,T){const P=t.update(g);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new li(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,P,u,g,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,P,f,g,null)}function y(A,T,P,M){let v=null;const R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)v=R;else if(v=P.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=v.uuid,U=T.uuid;let H=l[N];H===void 0&&(H={},l[N]=H);let Y=H[U];Y===void 0&&(Y=v.clone(),H[U]=Y,T.addEventListener("dispose",L)),v=Y}if(v.visible=T.visible,v.wireframe=T.wireframe,M===En?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=i.properties.get(v);N.light=P}return v}function x(A,T,P,M,v){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===En)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const U=t.update(A),H=A.material;if(Array.isArray(H)){const Y=U.groups;for(let Z=0,J=Y.length;Z<J;Z++){const O=Y[Z],Q=H[O.materialIndex];if(Q&&Q.visible){const nt=y(A,Q,M,v);A.onBeforeShadow(i,A,T,P,U,nt,O),i.renderBufferDirect(P,null,U,nt,A,O),A.onAfterShadow(i,A,T,P,U,nt,O)}}}else if(H.visible){const Y=y(A,H,M,v);A.onBeforeShadow(i,A,T,P,U,Y,null),i.renderBufferDirect(P,null,U,Y,A,null),A.onAfterShadow(i,A,T,P,U,Y,null)}}const N=A.children;for(let U=0,H=N.length;U<H;U++)x(N[U],T,P,M,v)}function L(A){A.target.removeEventListener("dispose",L);for(const P in l){const M=l[P],v=A.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const p0={[$r]:jr,[Jr]:eo,[Qr]:no,[Oi]:to,[jr]:$r,[eo]:Jr,[no]:Qr,[to]:Oi};function m0(i,t){function e(){let B=!1;const vt=new de;let tt=null;const D=new de(0,0,0,0);return{setMask:function(G){tt!==G&&!B&&(i.colorMask(G,G,G,G),tt=G)},setLocked:function(G){B=G},setClear:function(G,et,it,Et,Ht){Ht===!0&&(G*=Et,et*=Et,it*=Et),vt.set(G,et,it,Et),D.equals(vt)===!1&&(i.clearColor(G,et,it,Et),D.copy(vt))},reset:function(){B=!1,tt=null,D.set(-1,0,0,0)}}}function n(){let B=!1,vt=!1,tt=null,D=null,G=null;return{setReversed:function(et){if(vt!==et){const it=t.get("EXT_clip_control");vt?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Et=G;G=null,this.setClear(Et)}vt=et},getReversed:function(){return vt},setTest:function(et){et?rt(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(et){tt!==et&&!B&&(i.depthMask(et),tt=et)},setFunc:function(et){if(vt&&(et=p0[et]),D!==et){switch(et){case $r:i.depthFunc(i.NEVER);break;case jr:i.depthFunc(i.ALWAYS);break;case Jr:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case Qr:i.depthFunc(i.EQUAL);break;case to:i.depthFunc(i.GEQUAL);break;case eo:i.depthFunc(i.GREATER);break;case no:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}D=et}},setLocked:function(et){B=et},setClear:function(et){G!==et&&(vt&&(et=1-et),i.clearDepth(et),G=et)},reset:function(){B=!1,tt=null,D=null,G=null,vt=!1}}}function s(){let B=!1,vt=null,tt=null,D=null,G=null,et=null,it=null,Et=null,Ht=null;return{setTest:function(It){B||(It?rt(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(It){vt!==It&&!B&&(i.stencilMask(It),vt=It)},setFunc:function(It,ae,ge){(tt!==It||D!==ae||G!==ge)&&(i.stencilFunc(It,ae,ge),tt=It,D=ae,G=ge)},setOp:function(It,ae,ge){(et!==It||it!==ae||Et!==ge)&&(i.stencilOp(It,ae,ge),et=It,it=ae,Et=ge)},setLocked:function(It){B=It},setClear:function(It){Ht!==It&&(i.clearStencil(It),Ht=It)},reset:function(){B=!1,vt=null,tt=null,D=null,G=null,et=null,it=null,Et=null,Ht=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],_=null,g=!1,m=null,p=null,S=null,y=null,x=null,L=null,A=null,T=new Ct(0,0,0),P=0,M=!1,v=null,R=null,N=null,U=null,H=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,J=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(O)[1]),Z=J>=1):O.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),Z=J>=2);let Q=null,nt={};const mt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),zt=new de().fromArray(mt),I=new de().fromArray(Lt);function k(B,vt,tt,D){const G=new Uint8Array(4),et=i.createTexture();i.bindTexture(B,et),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<tt;it++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,D,0,i.RGBA,i.UNSIGNED_BYTE,G):i.texImage2D(vt+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,G);return et}const X={};X[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(Oi),Bt(!1),kt(ia),rt(i.CULL_FACE),F(kn);function rt(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function at(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function lt(B,vt){return d[B]!==vt?(i.bindFramebuffer(B,vt),d[B]=vt,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=vt),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function ut(B,vt){let tt=f,D=!1;if(B){tt=u.get(vt),tt===void 0&&(tt=[],u.set(vt,tt));const G=B.textures;if(tt.length!==G.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let et=0,it=G.length;et<it;et++)tt[et]=i.COLOR_ATTACHMENT0+et;tt.length=G.length,D=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,D=!0);D&&i.drawBuffers(tt)}function K(B){return _!==B?(i.useProgram(B),_=B,!0):!1}const ht={[si]:i.FUNC_ADD,[gl]:i.FUNC_SUBTRACT,[vl]:i.FUNC_REVERSE_SUBTRACT};ht[xl]=i.MIN,ht[Ml]=i.MAX;const Dt={[yl]:i.ZERO,[Sl]:i.ONE,[wl]:i.SRC_COLOR,[Zr]:i.SRC_ALPHA,[Cl]:i.SRC_ALPHA_SATURATE,[Al]:i.DST_COLOR,[bl]:i.DST_ALPHA,[El]:i.ONE_MINUS_SRC_COLOR,[Kr]:i.ONE_MINUS_SRC_ALPHA,[Rl]:i.ONE_MINUS_DST_COLOR,[Tl]:i.ONE_MINUS_DST_ALPHA,[Pl]:i.CONSTANT_COLOR,[Ll]:i.ONE_MINUS_CONSTANT_COLOR,[Dl]:i.CONSTANT_ALPHA,[Il]:i.ONE_MINUS_CONSTANT_ALPHA};function F(B,vt,tt,D,G,et,it,Et,Ht,It){if(B===kn){g===!0&&(at(i.BLEND),g=!1);return}if(g===!1&&(rt(i.BLEND),g=!0),B!==_l){if(B!==m||It!==M){if((p!==si||x!==si)&&(i.blendEquation(i.FUNC_ADD),p=si,x=si),It)switch(B){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nr:i.blendFunc(i.ONE,i.ONE);break;case sa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ra:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ra:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}S=null,y=null,L=null,A=null,T.set(0,0,0),P=0,m=B,M=It}return}G=G||vt,et=et||tt,it=it||D,(vt!==p||G!==x)&&(i.blendEquationSeparate(ht[vt],ht[G]),p=vt,x=G),(tt!==S||D!==y||et!==L||it!==A)&&(i.blendFuncSeparate(Dt[tt],Dt[D],Dt[et],Dt[it]),S=tt,y=D,L=et,A=it),(Et.equals(T)===!1||Ht!==P)&&(i.blendColor(Et.r,Et.g,Et.b,Ht),T.copy(Et),P=Ht),m=B,M=!1}function ue(B,vt){B.side===Ye?at(i.CULL_FACE):rt(i.CULL_FACE);let tt=B.side===qe;vt&&(tt=!tt),Bt(tt),B.blending===Ui&&B.transparent===!1?F(kn):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const D=B.stencilWrite;a.setTest(D),D&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Pt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(B){v!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),v=B)}function kt(B){B!==pl?(rt(i.CULL_FACE),B!==R&&(B===ia?i.cullFace(i.BACK):B===ml?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),R=B}function gt(B){B!==N&&(Z&&i.lineWidth(B),N=B)}function Pt(B,vt,tt){B?(rt(i.POLYGON_OFFSET_FILL),(U!==vt||H!==tt)&&(i.polygonOffset(vt,tt),U=vt,H=tt)):at(i.POLYGON_OFFSET_FILL)}function ft(B){B?rt(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function C(B){B===void 0&&(B=i.TEXTURE0+Y-1),Q!==B&&(i.activeTexture(B),Q=B)}function w(B,vt,tt){tt===void 0&&(Q===null?tt=i.TEXTURE0+Y-1:tt=Q);let D=nt[tt];D===void 0&&(D={type:void 0,texture:void 0},nt[tt]=D),(D.type!==B||D.texture!==vt)&&(Q!==tt&&(i.activeTexture(tt),Q=tt),i.bindTexture(B,vt||X[B]),D.type=B,D.texture=vt)}function V(){const B=nt[Q];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(B){zt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),zt.copy(B))}function wt(B){I.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),I.copy(B))}function Kt(B,vt){let tt=l.get(vt);tt===void 0&&(tt=new WeakMap,l.set(vt,tt));let D=tt.get(B);D===void 0&&(D=i.getUniformBlockIndex(vt,B.name),tt.set(B,D))}function Wt(B,vt){const D=l.get(vt).get(B);c.get(vt)!==D&&(i.uniformBlockBinding(vt,D,B.__bindingPointIndex),c.set(vt,D))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,nt={},d={},u=new WeakMap,f=[],_=null,g=!1,m=null,p=null,S=null,y=null,x=null,L=null,A=null,T=new Ct(0,0,0),P=0,M=!1,v=null,R=null,N=null,U=null,H=null,zt.set(0,0,i.canvas.width,i.canvas.height),I.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:at,bindFramebuffer:lt,drawBuffers:ut,useProgram:K,setBlending:F,setMaterial:ue,setFlipSided:Bt,setCullFace:kt,setLineWidth:gt,setPolygonOffset:Pt,setScissorTest:ft,activeTexture:C,bindTexture:w,unbindTexture:V,compressedTexImage2D:ot,compressedTexImage3D:ct,texImage2D:Tt,texImage3D:Ft,updateUBOMapping:Kt,uniformBlockBinding:Wt,texStorage2D:qt,texStorage3D:pt,texSubImage2D:st,texSubImage3D:bt,compressedTexSubImage2D:yt,compressedTexSubImage3D:St,scissor:Ot,viewport:wt,reset:ce}}function Qa(i,t,e,n){const s=_0(n);switch(e){case Dc:return i*t;case Uc:return i*t;case Nc:return i*t*2;case Fc:return i*t/s.components*s.byteLength;case Ho:return i*t/s.components*s.byteLength;case Oc:return i*t*2/s.components*s.byteLength;case Go:return i*t*2/s.components*s.byteLength;case Ic:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case ko:return i*t*4/s.components*s.byteLength;case $s:case js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ao:case lo:return Math.max(i,16)*Math.max(t,8)/4;case oo:case co:return Math.max(i,8)*Math.max(t,8)/2;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case tr:case Ro:case Co:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bc:case Po:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Lo:case Do:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _0(i){switch(i){case Pn:case Cc:return{byteLength:1,components:1};case ps:case Pc:case _s:return{byteLength:2,components:1};case zo:case Wo:return{byteLength:2,components:4};case ci:case Bo:case An:return{byteLength:4,components:1};case Lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function g0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return f?new OffscreenCanvas(C,w):sr("canvas")}function g(C,w,V){let ot=1;const ct=ft(C);if((ct.width>V||ct.height>V)&&(ot=V/Math.max(ct.width,ct.height)),ot<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const st=Math.floor(ot*ct.width),bt=Math.floor(ot*ct.height);d===void 0&&(d=_(st,bt));const yt=w?_(st,bt):d;return yt.width=st,yt.height=bt,yt.getContext("2d").drawImage(C,0,0,st,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+st+"x"+bt+")."),yt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,w,V,ot,ct=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let st=w;if(w===i.RED&&(V===i.FLOAT&&(st=i.R32F),V===i.HALF_FLOAT&&(st=i.R16F),V===i.UNSIGNED_BYTE&&(st=i.R8)),w===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(st=i.R8UI),V===i.UNSIGNED_SHORT&&(st=i.R16UI),V===i.UNSIGNED_INT&&(st=i.R32UI),V===i.BYTE&&(st=i.R8I),V===i.SHORT&&(st=i.R16I),V===i.INT&&(st=i.R32I)),w===i.RG&&(V===i.FLOAT&&(st=i.RG32F),V===i.HALF_FLOAT&&(st=i.RG16F),V===i.UNSIGNED_BYTE&&(st=i.RG8)),w===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(st=i.RG8UI),V===i.UNSIGNED_SHORT&&(st=i.RG16UI),V===i.UNSIGNED_INT&&(st=i.RG32UI),V===i.BYTE&&(st=i.RG8I),V===i.SHORT&&(st=i.RG16I),V===i.INT&&(st=i.RG32I)),w===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(st=i.RGB8UI),V===i.UNSIGNED_SHORT&&(st=i.RGB16UI),V===i.UNSIGNED_INT&&(st=i.RGB32UI),V===i.BYTE&&(st=i.RGB8I),V===i.SHORT&&(st=i.RGB16I),V===i.INT&&(st=i.RGB32I)),w===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),V===i.UNSIGNED_INT&&(st=i.RGBA32UI),V===i.BYTE&&(st=i.RGBA8I),V===i.SHORT&&(st=i.RGBA16I),V===i.INT&&(st=i.RGBA32I)),w===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),w===i.RGBA){const bt=ct?cr:ee.getTransfer(ot);V===i.FLOAT&&(st=i.RGBA32F),V===i.HALF_FLOAT&&(st=i.RGBA16F),V===i.UNSIGNED_BYTE&&(st=bt===le?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function x(C,w){let V;return C?w===null||w===ci||w===Wi?V=i.DEPTH24_STENCIL8:w===An?V=i.DEPTH32F_STENCIL8:w===ps&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ci||w===Wi?V=i.DEPTH_COMPONENT24:w===An?V=i.DEPTH_COMPONENT32F:w===ps&&(V=i.DEPTH_COMPONENT16),V}function L(C,w){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==dn&&C.minFilter!==_n?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function A(C){const w=C.target;w.removeEventListener("dispose",A),P(w),w.isVideoTexture&&h.delete(w)}function T(C){const w=C.target;w.removeEventListener("dispose",T),v(w)}function P(C){const w=n.get(C);if(w.__webglInit===void 0)return;const V=C.source,ot=u.get(V);if(ot){const ct=ot[w.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&M(C),Object.keys(ot).length===0&&u.delete(V)}n.remove(C)}function M(C){const w=n.get(C);i.deleteTexture(w.__webglTexture);const V=C.source,ot=u.get(V);delete ot[w.__cacheKey],o.memory.textures--}function v(C){const w=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(w.__webglFramebuffer[ot]))for(let ct=0;ct<w.__webglFramebuffer[ot].length;ct++)i.deleteFramebuffer(w.__webglFramebuffer[ot][ct]);else i.deleteFramebuffer(w.__webglFramebuffer[ot]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ot])}else{if(Array.isArray(w.__webglFramebuffer))for(let ot=0;ot<w.__webglFramebuffer.length;ot++)i.deleteFramebuffer(w.__webglFramebuffer[ot]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ot=0;ot<w.__webglColorRenderbuffer.length;ot++)w.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ot]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=C.textures;for(let ot=0,ct=V.length;ot<ct;ot++){const st=n.get(V[ot]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(V[ot])}n.remove(C)}let R=0;function N(){R=0}function U(){const C=R;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),R+=1,C}function H(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function Y(C,w){const V=n.get(C);if(C.isVideoTexture&&gt(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const ot=C.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(V,C,w);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+w)}function Z(C,w){const V=n.get(C);if(C.version>0&&V.__version!==C.version){I(V,C,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+w)}function J(C,w){const V=n.get(C);if(C.version>0&&V.__version!==C.version){I(V,C,w);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+w)}function O(C,w){const V=n.get(C);if(C.version>0&&V.__version!==C.version){k(V,C,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+w)}const Q={[fs]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[ro]:i.MIRRORED_REPEAT},nt={[dn]:i.NEAREST,[Gl]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[ur]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},mt={[Yl]:i.NEVER,[Jl]:i.ALWAYS,[ql]:i.LESS,[Wc]:i.LEQUAL,[Zl]:i.EQUAL,[jl]:i.GEQUAL,[Kl]:i.GREATER,[$l]:i.NOTEQUAL};function Lt(C,w){if(w.type===An&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===_n||w.magFilter===ur||w.magFilter===xs||w.magFilter===oi||w.minFilter===_n||w.minFilter===ur||w.minFilter===xs||w.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Q[w.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Q[w.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Q[w.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,nt[w.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,nt[w.minFilter]),w.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,mt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===dn||w.minFilter!==xs&&w.minFilter!==oi||w.type===An&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function zt(C,w){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",A));const ot=w.source;let ct=u.get(ot);ct===void 0&&(ct={},u.set(ot,ct));const st=H(w);if(st!==C.__cacheKey){ct[st]===void 0&&(ct[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ct[st].usedTimes++;const bt=ct[C.__cacheKey];bt!==void 0&&(ct[C.__cacheKey].usedTimes--,bt.usedTimes===0&&M(w)),C.__cacheKey=st,C.__webglTexture=ct[st].texture}return V}function I(C,w,V){let ot=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ot=i.TEXTURE_3D);const ct=zt(C,w),st=w.source;e.bindTexture(ot,C.__webglTexture,i.TEXTURE0+V);const bt=n.get(st);if(st.version!==bt.__version||ct===!0){e.activeTexture(i.TEXTURE0+V);const yt=ee.getPrimaries(ee.workingColorSpace),St=w.colorSpace===Gn?null:ee.getPrimaries(w.colorSpace),qt=w.colorSpace===Gn||yt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let pt=g(w.image,!1,s.maxTextureSize);pt=Pt(w,pt);const Tt=r.convert(w.format,w.colorSpace),Ft=r.convert(w.type);let Ot=y(w.internalFormat,Tt,Ft,w.colorSpace,w.isVideoTexture);Lt(ot,w);let wt;const Kt=w.mipmaps,Wt=w.isVideoTexture!==!0,ce=bt.__version===void 0||ct===!0,B=st.dataReady,vt=L(w,pt);if(w.isDepthTexture)Ot=x(w.format===Hi,w.type),ce&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Ot,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,pt.width,pt.height,0,Tt,Ft,null));else if(w.isDataTexture)if(Kt.length>0){Wt&&ce&&e.texStorage2D(i.TEXTURE_2D,vt,Ot,Kt[0].width,Kt[0].height);for(let tt=0,D=Kt.length;tt<D;tt++)wt=Kt[tt],Wt?B&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,wt.width,wt.height,Tt,Ft,wt.data):e.texImage2D(i.TEXTURE_2D,tt,Ot,wt.width,wt.height,0,Tt,Ft,wt.data);w.generateMipmaps=!1}else Wt?(ce&&e.texStorage2D(i.TEXTURE_2D,vt,Ot,pt.width,pt.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,Tt,Ft,pt.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,pt.width,pt.height,0,Tt,Ft,pt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Wt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ot,Kt[0].width,Kt[0].height,pt.depth);for(let tt=0,D=Kt.length;tt<D;tt++)if(wt=Kt[tt],w.format!==ln)if(Tt!==null)if(Wt){if(B)if(w.layerUpdates.size>0){const G=Qa(wt.width,wt.height,w.format,w.type);for(const et of w.layerUpdates){const it=wt.data.subarray(et*G/wt.data.BYTES_PER_ELEMENT,(et+1)*G/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,et,wt.width,wt.height,1,Tt,it)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,wt.width,wt.height,pt.depth,Tt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Ot,wt.width,wt.height,pt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,wt.width,wt.height,pt.depth,Tt,Ft,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Ot,wt.width,wt.height,pt.depth,0,Tt,Ft,wt.data)}else{Wt&&ce&&e.texStorage2D(i.TEXTURE_2D,vt,Ot,Kt[0].width,Kt[0].height);for(let tt=0,D=Kt.length;tt<D;tt++)wt=Kt[tt],w.format!==ln?Tt!==null?Wt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,wt.width,wt.height,Tt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Ot,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?B&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,wt.width,wt.height,Tt,Ft,wt.data):e.texImage2D(i.TEXTURE_2D,tt,Ot,wt.width,wt.height,0,Tt,Ft,wt.data)}else if(w.isDataArrayTexture)if(Wt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ot,pt.width,pt.height,pt.depth),B)if(w.layerUpdates.size>0){const tt=Qa(pt.width,pt.height,w.format,w.type);for(const D of w.layerUpdates){const G=pt.data.subarray(D*tt/pt.data.BYTES_PER_ELEMENT,(D+1)*tt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,D,pt.width,pt.height,1,Tt,Ft,G)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Tt,Ft,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,pt.width,pt.height,pt.depth,0,Tt,Ft,pt.data);else if(w.isData3DTexture)Wt?(ce&&e.texStorage3D(i.TEXTURE_3D,vt,Ot,pt.width,pt.height,pt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Tt,Ft,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,pt.width,pt.height,pt.depth,0,Tt,Ft,pt.data);else if(w.isFramebufferTexture){if(ce)if(Wt)e.texStorage2D(i.TEXTURE_2D,vt,Ot,pt.width,pt.height);else{let tt=pt.width,D=pt.height;for(let G=0;G<vt;G++)e.texImage2D(i.TEXTURE_2D,G,Ot,tt,D,0,Tt,Ft,null),tt>>=1,D>>=1}}else if(Kt.length>0){if(Wt&&ce){const tt=ft(Kt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Ot,tt.width,tt.height)}for(let tt=0,D=Kt.length;tt<D;tt++)wt=Kt[tt],Wt?B&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Tt,Ft,wt):e.texImage2D(i.TEXTURE_2D,tt,Ot,Tt,Ft,wt);w.generateMipmaps=!1}else if(Wt){if(ce){const tt=ft(pt);e.texStorage2D(i.TEXTURE_2D,vt,Ot,tt.width,tt.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Ft,pt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Tt,Ft,pt);m(w)&&p(ot),bt.__version=st.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function k(C,w,V){if(w.image.length!==6)return;const ot=zt(C,w),ct=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);const st=n.get(ct);if(ct.version!==st.__version||ot===!0){e.activeTexture(i.TEXTURE0+V);const bt=ee.getPrimaries(ee.workingColorSpace),yt=w.colorSpace===Gn?null:ee.getPrimaries(w.colorSpace),St=w.colorSpace===Gn||bt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const qt=w.isCompressedTexture||w.image[0].isCompressedTexture,pt=w.image[0]&&w.image[0].isDataTexture,Tt=[];for(let D=0;D<6;D++)!qt&&!pt?Tt[D]=g(w.image[D],!0,s.maxCubemapSize):Tt[D]=pt?w.image[D].image:w.image[D],Tt[D]=Pt(w,Tt[D]);const Ft=Tt[0],Ot=r.convert(w.format,w.colorSpace),wt=r.convert(w.type),Kt=y(w.internalFormat,Ot,wt,w.colorSpace),Wt=w.isVideoTexture!==!0,ce=st.__version===void 0||ot===!0,B=ct.dataReady;let vt=L(w,Ft);Lt(i.TEXTURE_CUBE_MAP,w);let tt;if(qt){Wt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Kt,Ft.width,Ft.height);for(let D=0;D<6;D++){tt=Tt[D].mipmaps;for(let G=0;G<tt.length;G++){const et=tt[G];w.format!==ln?Ot!==null?Wt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,G,0,0,et.width,et.height,Ot,et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,G,Kt,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,G,0,0,et.width,et.height,Ot,wt,et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,G,Kt,et.width,et.height,0,Ot,wt,et.data)}}}else{if(tt=w.mipmaps,Wt&&ce){tt.length>0&&vt++;const D=ft(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Kt,D.width,D.height)}for(let D=0;D<6;D++)if(pt){Wt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Tt[D].width,Tt[D].height,Ot,wt,Tt[D].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Kt,Tt[D].width,Tt[D].height,0,Ot,wt,Tt[D].data);for(let G=0;G<tt.length;G++){const it=tt[G].image[D].image;Wt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,G+1,0,0,it.width,it.height,Ot,wt,it.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,G+1,Kt,it.width,it.height,0,Ot,wt,it.data)}}else{Wt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Ot,wt,Tt[D]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Kt,Ot,wt,Tt[D]);for(let G=0;G<tt.length;G++){const et=tt[G];Wt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,G+1,0,0,Ot,wt,et.image[D]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,G+1,Kt,Ot,wt,et.image[D])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),st.__version=ct.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function X(C,w,V,ot,ct,st){const bt=r.convert(V.format,V.colorSpace),yt=r.convert(V.type),St=y(V.internalFormat,bt,yt,V.colorSpace),qt=n.get(w),pt=n.get(V);if(pt.__renderTarget=w,!qt.__hasExternalTextures){const Tt=Math.max(1,w.width>>st),Ft=Math.max(1,w.height>>st);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,st,St,Tt,Ft,w.depth,0,bt,yt,null):e.texImage2D(ct,st,St,Tt,Ft,0,bt,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),kt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,ct,pt.__webglTexture,0,Bt(w)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,ct,pt.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(C,w,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),w.depthBuffer){const ot=w.depthTexture,ct=ot&&ot.isDepthTexture?ot.type:null,st=x(w.stencilBuffer,ct),bt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=Bt(w);kt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,st,w.width,w.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,st,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,st,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,C)}else{const ot=w.textures;for(let ct=0;ct<ot.length;ct++){const st=ot[ct],bt=r.convert(st.format,st.colorSpace),yt=r.convert(st.type),St=y(st.internalFormat,bt,yt,st.colorSpace),qt=Bt(w);V&&kt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,St,w.width,w.height):kt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,St,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,St,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ot=n.get(w.depthTexture);ot.__renderTarget=w,(!ot.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y(w.depthTexture,0);const ct=ot.__webglTexture,st=Bt(w);if(w.depthTexture.format===Ni)kt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(w.depthTexture.format===Hi)kt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function lt(C){const w=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const ot=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ot){const ct=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ot.removeEventListener("dispose",ct)};ot.addEventListener("dispose",ct),w.__depthDisposeCallback=ct}w.__boundDepthTexture=ot}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");at(w.__webglFramebuffer,C)}else if(V){w.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ot]),w.__webglDepthbuffer[ot]===void 0)w.__webglDepthbuffer[ot]=i.createRenderbuffer(),rt(w.__webglDepthbuffer[ot],C,!1);else{const ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=w.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,st)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),rt(w.__webglDepthbuffer,C,!1);else{const ot=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(C,w,V){const ot=n.get(C);w!==void 0&&X(ot.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&lt(C)}function K(C){const w=C.texture,V=n.get(C),ot=n.get(w);C.addEventListener("dispose",T);const ct=C.textures,st=C.isWebGLCubeRenderTarget===!0,bt=ct.length>1;if(bt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=w.version,o.memory.textures++),st){V.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[yt]=[];for(let St=0;St<w.mipmaps.length;St++)V.__webglFramebuffer[yt][St]=i.createFramebuffer()}else V.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let yt=0;yt<w.mipmaps.length;yt++)V.__webglFramebuffer[yt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(bt)for(let yt=0,St=ct.length;yt<St;yt++){const qt=n.get(ct[yt]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&kt(C)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let yt=0;yt<ct.length;yt++){const St=ct[yt];V.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[yt]);const qt=r.convert(St.format,St.colorSpace),pt=r.convert(St.type),Tt=y(St.internalFormat,qt,pt,St.colorSpace,C.isXRRenderTarget===!0),Ft=Bt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Tt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,V.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,w);for(let yt=0;yt<6;yt++)if(w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)X(V.__webglFramebuffer[yt][St],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,St);else X(V.__webglFramebuffer[yt],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let yt=0,St=ct.length;yt<St;yt++){const qt=ct[yt],pt=n.get(qt);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),Lt(i.TEXTURE_2D,qt),X(V.__webglFramebuffer,C,qt,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),m(qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,ot.__webglTexture),Lt(yt,w),w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)X(V.__webglFramebuffer[St],C,w,i.COLOR_ATTACHMENT0,yt,St);else X(V.__webglFramebuffer,C,w,i.COLOR_ATTACHMENT0,yt,0);m(w)&&p(yt),e.unbindTexture()}C.depthBuffer&&lt(C)}function ht(C){const w=C.textures;for(let V=0,ot=w.length;V<ot;V++){const ct=w[V];if(m(ct)){const st=S(C),bt=n.get(ct).__webglTexture;e.bindTexture(st,bt),p(st),e.unbindTexture()}}}const Dt=[],F=[];function ue(C){if(C.samples>0){if(kt(C)===!1){const w=C.textures,V=C.width,ot=C.height;let ct=i.COLOR_BUFFER_BIT;const st=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(C),yt=w.length>1;if(yt)for(let St=0;St<w.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let St=0;St<w.length;St++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[St]);const qt=n.get(w[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,V,ot,0,0,V,ot,ct,i.NEAREST),c===!0&&(Dt.length=0,F.length=0,Dt.push(i.COLOR_ATTACHMENT0+St),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Dt.push(st),F.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let St=0;St<w.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,bt.__webglColorRenderbuffer[St]);const qt=n.get(w[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const w=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Bt(C){return Math.min(s.maxSamples,C.samples)}function kt(C){const w=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function gt(C){const w=o.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function Pt(C,w){const V=C.colorSpace,ot=C.format,ct=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==ki&&V!==Gn&&(ee.getTransfer(V)===le?(ot!==ln||ct!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function ft(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=O,this.rebindTextures=ut,this.setupRenderTarget=K,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=X,this.useMultisampledRTT=kt}function v0(i,t){function e(n,s=Gn){let r;const o=ee.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cc)return i.BYTE;if(n===Pc)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===Bo)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===_s)return i.HALF_FLOAT;if(n===Dc)return i.ALPHA;if(n===Ic)return i.RGB;if(n===ln)return i.RGBA;if(n===Uc)return i.LUMINANCE;if(n===Nc)return i.LUMINANCE_ALPHA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===Fc)return i.RED;if(n===Ho)return i.RED_INTEGER;if(n===Oc)return i.RG;if(n===Go)return i.RG_INTEGER;if(n===ko)return i.RGBA_INTEGER;if(n===$s||n===js||n===Js||n===Qs)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===ao||n===co||n===lo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ho||n===uo)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===po||n===mo||n===_o||n===go||n===vo||n===xo||n===Mo||n===yo||n===So||n===wo||n===Eo||n===bo||n===To||n===Ao)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===po)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===go)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===To)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ao)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tr||n===Ro||n===Co)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===tr)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===Po||n===Lo||n===Do)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===tr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Do)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class x0 extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class te extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M0={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&u>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class w0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Yn({vertexShader:y0,fragmentShader:S0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new j(new hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E0 extends di{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,_=null;const g=new w0,m=e.getContextAttributes();let p=null,S=null;const y=[],x=[],L=new _t;let A=null;const T=new Je;T.viewport=new de;const P=new Je;P.viewport=new de;const M=[T,P],v=new x0;let R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let k=y[I];return k===void 0&&(k=new zr,y[I]=k),k.getTargetRaySpace()},this.getControllerGrip=function(I){let k=y[I];return k===void 0&&(k=new zr,y[I]=k),k.getGripSpace()},this.getHand=function(I){let k=y[I];return k===void 0&&(k=new zr,y[I]=k),k.getHandSpace()};function U(I){const k=x.indexOf(I.inputSource);if(k===-1)return;const X=y[k];X!==void 0&&(X.update(I.inputSource,I.frame,l||o),X.dispatchEvent({type:I.type,data:I.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Y);for(let I=0;I<y.length;I++){const k=x[I];k!==null&&(x[I]=null,y[I].disconnect(k))}R=null,N=null,g.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,S=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const k={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,k),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new li(f.framebufferWidth,f.framebufferHeight,{format:ln,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let k=null,X=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=m.stencil?Hi:Ni,X=m.stencil?Wi:ci);const at={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(at),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new li(u.textureWidth,u.textureHeight,{format:ln,type:Pn,depthTexture:new Jc(u.textureWidth,u.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(I){for(let k=0;k<I.removed.length;k++){const X=I.removed[k],rt=x.indexOf(X);rt>=0&&(x[rt]=null,y[rt].disconnect(X))}for(let k=0;k<I.added.length;k++){const X=I.added[k];let rt=x.indexOf(X);if(rt===-1){for(let lt=0;lt<y.length;lt++)if(lt>=x.length){x.push(X),rt=lt;break}else if(x[lt]===null){x[lt]=X,rt=lt;break}if(rt===-1)break}const at=y[rt];at&&at.connect(X)}}const Z=new b,J=new b;function O(I,k,X){Z.setFromMatrixPosition(k.matrixWorld),J.setFromMatrixPosition(X.matrixWorld);const rt=Z.distanceTo(J),at=k.projectionMatrix.elements,lt=X.projectionMatrix.elements,ut=at[14]/(at[10]-1),K=at[14]/(at[10]+1),ht=(at[9]+1)/at[5],Dt=(at[9]-1)/at[5],F=(at[8]-1)/at[0],ue=(lt[8]+1)/lt[0],Bt=ut*F,kt=ut*ue,gt=rt/(-F+ue),Pt=gt*-F;if(k.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Pt),I.translateZ(gt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),at[10]===-1)I.projectionMatrix.copy(k.projectionMatrix),I.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const ft=ut+gt,C=K+gt,w=Bt-Pt,V=kt+(rt-Pt),ot=ht*K/C*ft,ct=Dt*K/C*ft;I.projectionMatrix.makePerspective(w,V,ot,ct,ft,C),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function Q(I,k){k===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(k.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let k=I.near,X=I.far;g.texture!==null&&(g.depthNear>0&&(k=g.depthNear),g.depthFar>0&&(X=g.depthFar)),v.near=P.near=T.near=k,v.far=P.far=T.far=X,(R!==v.near||N!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,N=v.far),T.layers.mask=I.layers.mask|2,P.layers.mask=I.layers.mask|4,v.layers.mask=T.layers.mask|P.layers.mask;const rt=I.parent,at=v.cameras;Q(v,rt);for(let lt=0;lt<at.length;lt++)Q(at[lt],rt);at.length===2?O(v,T,P):v.projectionMatrix.copy(T.projectionMatrix),nt(I,v,rt)};function nt(I,k,X){X===null?I.matrix.copy(k.matrixWorld):(I.matrix.copy(X.matrixWorld),I.matrix.invert(),I.matrix.multiply(k.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(k.projectionMatrix),I.projectionMatrixInverse.copy(k.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=ms*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(I){c=I,u!==null&&(u.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let mt=null;function Lt(I,k){if(h=k.getViewerPose(l||o),_=k,h!==null){const X=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let rt=!1;X.length!==v.cameras.length&&(v.cameras.length=0,rt=!0);for(let lt=0;lt<X.length;lt++){const ut=X[lt];let K=null;if(f!==null)K=f.getViewport(ut);else{const Dt=d.getViewSubImage(u,ut);K=Dt.viewport,lt===0&&(t.setRenderTargetTextures(S,Dt.colorTexture,u.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(S))}let ht=M[lt];ht===void 0&&(ht=new Je,ht.layers.enable(lt),ht.viewport=new de,M[lt]=ht),ht.matrix.fromArray(ut.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(ut.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(K.x,K.y,K.width,K.height),lt===0&&(v.matrix.copy(ht.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),rt===!0&&v.cameras.push(ht)}const at=s.enabledFeatures;if(at&&at.includes("depth-sensing")){const lt=d.getDepthInformation(X[0]);lt&&lt.isValid&&lt.texture&&g.init(t,lt,s.renderState)}}for(let X=0;X<y.length;X++){const rt=x[X],at=y[X];rt!==null&&at!==void 0&&at.update(rt,k,l||o)}mt&&mt(I,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),_=null}const zt=new $c;zt.setAnimationLoop(Lt),this.setAnimationLoop=function(I){mt=I},this.dispose=function(){}}}const ti=new un,b0=new me;function T0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,qc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),y=S.envMap,x=S.envMapRotation;y&&(m.envMap.value=y,ti.copy(x),ti.x*=-1,ti.y*=-1,ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),m.envMapRotation.value.setFromMatrix4(b0.makeRotationFromEuler(ti)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const x=y.program;n.uniformBlockBinding(S,x)}function l(S,y){let x=s[S.id];x===void 0&&(_(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",m));const L=y.program;n.updateUBOMapping(S,L);const A=t.render.frame;r[S.id]!==A&&(u(S),r[S.id]=A)}function h(S){const y=d();S.__bindingPointIndex=y;const x=i.createBuffer(),L=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const y=s[S.id],x=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,T=x.length;A<T;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,v=P.length;M<v;M++){const R=P[M];if(f(R,A,M,L)===!0){const N=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let Y=0;Y<U.length;Y++){const Z=U[Y],J=g(Z);typeof Z=="number"||typeof Z=="boolean"?(R.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,N+H,R.__data)):Z.isMatrix3?(R.__data[0]=Z.elements[0],R.__data[1]=Z.elements[1],R.__data[2]=Z.elements[2],R.__data[3]=0,R.__data[4]=Z.elements[3],R.__data[5]=Z.elements[4],R.__data[6]=Z.elements[5],R.__data[7]=0,R.__data[8]=Z.elements[6],R.__data[9]=Z.elements[7],R.__data[10]=Z.elements[8],R.__data[11]=0):(Z.toArray(R.__data,H),H+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,y,x,L){const A=S.value,T=y+"_"+x;if(L[T]===void 0)return typeof A=="number"||typeof A=="boolean"?L[T]=A:L[T]=A.clone(),!0;{const P=L[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return L[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(S){const y=S.uniforms;let x=0;const L=16;for(let T=0,P=y.length;T<P;T++){const M=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,R=M.length;v<R;v++){const N=M[v],U=Array.isArray(N.value)?N.value:[N.value];for(let H=0,Y=U.length;H<Y;H++){const Z=U[H],J=g(Z),O=x%L,Q=O%J.boundary,nt=O+Q;x+=Q,nt!==0&&L-nt<J.storage&&(x+=L-nt),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=J.storage}}}const A=x%L;return A>0&&(x+=L-A),S.__size=x,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class R0{constructor(t={}){const{canvas:e=mh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=Vn,this.toneMappingExposure=1;const x=this;let L=!1,A=0,T=0,P=null,M=-1,v=null;const R=new de,N=new de;let U=null;const H=new Ct(0);let Y=0,Z=e.width,J=e.height,O=1,Q=null,nt=null;const mt=new de(0,0,Z,J),Lt=new de(0,0,Z,J);let zt=!1;const I=new Yo;let k=!1,X=!1;const rt=new me,at=new me,lt=new b,ut=new de,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Dt(){return P===null?O:1}let F=n;function ue(E,z){return e.getContext(E,z)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oo}`),e.addEventListener("webglcontextlost",D,!1),e.addEventListener("webglcontextrestored",G,!1),e.addEventListener("webglcontextcreationerror",et,!1),F===null){const z="webgl2";if(F=ue(z,E),F===null)throw ue(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Bt,kt,gt,Pt,ft,C,w,V,ot,ct,st,bt,yt,St,qt,pt,Tt,Ft,Ot,wt,Kt,Wt,ce,B;function vt(){Bt=new If(F),Bt.init(),Wt=new v0(F,Bt),kt=new Af(F,Bt,t,Wt),gt=new m0(F,Bt),kt.reverseDepthBuffer&&u&&gt.buffers.depth.setReversed(!0),Pt=new Ff(F),ft=new t0,C=new g0(F,Bt,gt,ft,kt,Wt,Pt),w=new Cf(x),V=new Df(x),ot=new Gh(F),ce=new bf(F,ot),ct=new Uf(F,ot,Pt,ce),st=new Bf(F,ct,ot,Pt),Ot=new Of(F,kt,C),pt=new Rf(ft),bt=new Qp(x,w,V,Bt,kt,ce,pt),yt=new T0(x,ft),St=new n0,qt=new c0(Bt),Ft=new Ef(x,w,V,gt,st,f,c),Tt=new f0(x,st,kt),B=new A0(F,Pt,kt,gt),wt=new Tf(F,Bt,Pt),Kt=new Nf(F,Bt,Pt),Pt.programs=bt.programs,x.capabilities=kt,x.extensions=Bt,x.properties=ft,x.renderLists=St,x.shadowMap=Tt,x.state=gt,x.info=Pt}vt();const tt=new E0(x,F);this.xr=tt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Bt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Bt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(E){E!==void 0&&(O=E,this.setSize(Z,J,!1))},this.getSize=function(E){return E.set(Z,J)},this.setSize=function(E,z,q=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,J=z,e.width=Math.floor(E*O),e.height=Math.floor(z*O),q===!0&&(e.style.width=E+"px",e.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(Z*O,J*O).floor()},this.setDrawingBufferSize=function(E,z,q){Z=E,J=z,O=q,e.width=Math.floor(E*q),e.height=Math.floor(z*q),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(mt)},this.setViewport=function(E,z,q,$){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,z,q,$),gt.viewport(R.copy(mt).multiplyScalar(O).round())},this.getScissor=function(E){return E.copy(Lt)},this.setScissor=function(E,z,q,$){E.isVector4?Lt.set(E.x,E.y,E.z,E.w):Lt.set(E,z,q,$),gt.scissor(N.copy(Lt).multiplyScalar(O).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(E){gt.setScissorTest(zt=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){nt=E},this.getClearColor=function(E){return E.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(E=!0,z=!0,q=!0){let $=0;if(E){let W=!1;if(P!==null){const dt=P.texture.format;W=dt===ko||dt===Go||dt===Ho}if(W){const dt=P.texture.type,xt=dt===Pn||dt===ci||dt===ps||dt===Wi||dt===zo||dt===Wo,At=Ft.getClearColor(),Rt=Ft.getClearAlpha(),Gt=At.r,Xt=At.g,Ut=At.b;xt?(_[0]=Gt,_[1]=Xt,_[2]=Ut,_[3]=Rt,F.clearBufferuiv(F.COLOR,0,_)):(g[0]=Gt,g[1]=Xt,g[2]=Ut,g[3]=Rt,F.clearBufferiv(F.COLOR,0,g))}else $|=F.COLOR_BUFFER_BIT}z&&($|=F.DEPTH_BUFFER_BIT),q&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",D,!1),e.removeEventListener("webglcontextrestored",G,!1),e.removeEventListener("webglcontextcreationerror",et,!1),St.dispose(),qt.dispose(),ft.dispose(),w.dispose(),V.dispose(),st.dispose(),ce.dispose(),B.dispose(),bt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",en),tt.removeEventListener("sessionend",fe),Pe.stop()};function D(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=Pt.autoReset,z=Tt.enabled,q=Tt.autoUpdate,$=Tt.needsUpdate,W=Tt.type;vt(),Pt.autoReset=E,Tt.enabled=z,Tt.autoUpdate=q,Tt.needsUpdate=$,Tt.type=W}function et(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function it(E){const z=E.target;z.removeEventListener("dispose",it),Et(z)}function Et(E){Ht(E),ft.remove(E)}function Ht(E){const z=ft.get(E).programs;z!==void 0&&(z.forEach(function(q){bt.releaseProgram(q)}),E.isShaderMaterial&&bt.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,q,$,W,dt){z===null&&(z=K);const xt=W.isMesh&&W.matrixWorld.determinant()<0,At=pe(E,z,q,$,W);gt.setMaterial($,xt);let Rt=q.index,Gt=1;if($.wireframe===!0){if(Rt=ct.getWireframeAttribute(q),Rt===void 0)return;Gt=2}const Xt=q.drawRange,Ut=q.attributes.position;let ne=Xt.start*Gt,_e=(Xt.start+Xt.count)*Gt;dt!==null&&(ne=Math.max(ne,dt.start*Gt),_e=Math.min(_e,(dt.start+dt.count)*Gt)),Rt!==null?(ne=Math.max(ne,0),_e=Math.min(_e,Rt.count)):Ut!=null&&(ne=Math.max(ne,0),_e=Math.min(_e,Ut.count));const ve=_e-ne;if(ve<0||ve===1/0)return;ce.setup(W,$,At,q,Rt);let He,re=wt;if(Rt!==null&&(He=ot.get(Rt),re=Kt,re.setIndex(He)),W.isMesh)$.wireframe===!0?(gt.setLineWidth($.wireframeLinewidth*Dt()),re.setMode(F.LINES)):re.setMode(F.TRIANGLES);else if(W.isLine){let Nt=$.linewidth;Nt===void 0&&(Nt=1),gt.setLineWidth(Nt*Dt()),W.isLineSegments?re.setMode(F.LINES):W.isLineLoop?re.setMode(F.LINE_LOOP):re.setMode(F.LINE_STRIP)}else W.isPoints?re.setMode(F.POINTS):W.isSprite&&re.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)re.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))re.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Nt=W._multiDrawStarts,vn=W._multiDrawCounts,oe=W._multiDrawCount,nn=Rt?ot.get(Rt).bytesPerElement:1,mi=ft.get($).currentProgram.getUniforms();for(let Ke=0;Ke<oe;Ke++)mi.setValue(F,"_gl_DrawID",Ke),re.render(Nt[Ke]/nn,vn[Ke])}else if(W.isInstancedMesh)re.renderInstances(ne,ve,W.count);else if(q.isInstancedBufferGeometry){const Nt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,vn=Math.min(q.instanceCount,Nt);re.renderInstances(ne,ve,vn)}else re.render(ne,ve)};function It(E,z,q){E.transparent===!0&&E.side===Ye&&E.forceSinglePass===!1?(E.side=qe,E.needsUpdate=!0,Ze(E,z,q),E.side=Xn,E.needsUpdate=!0,Ze(E,z,q),E.side=Ye):Ze(E,z,q)}this.compile=function(E,z,q=null){q===null&&(q=E),p=qt.get(q),p.init(z),y.push(p),q.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),E!==q&&E.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const $=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const dt=W.material;if(dt)if(Array.isArray(dt))for(let xt=0;xt<dt.length;xt++){const At=dt[xt];It(At,q,W),$.add(At)}else It(dt,q,W),$.add(dt)}),y.pop(),p=null,$},this.compileAsync=function(E,z,q=null){const $=this.compile(E,z,q);return new Promise(W=>{function dt(){if($.forEach(function(xt){ft.get(xt).currentProgram.isReady()&&$.delete(xt)}),$.size===0){W(E);return}setTimeout(dt,10)}Bt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let ae=null;function ge(E){ae&&ae(E)}function en(){Pe.stop()}function fe(){Pe.start()}const Pe=new $c;Pe.setAnimationLoop(ge),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(E){ae=E,tt.setAnimationLoop(E),E===null?Pe.stop():Pe.start()},tt.addEventListener("sessionstart",en),tt.addEventListener("sessionend",fe),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(z),z=tt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,z,P),p=qt.get(E,y.length),p.init(z),y.push(p),at.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),I.setFromProjectionMatrix(at),X=this.localClippingEnabled,k=pt.init(this.clippingPlanes,X),m=St.get(E,S.length),m.init(),S.push(m),tt.enabled===!0&&tt.isPresenting===!0){const dt=x.xr.getDepthSensingMesh();dt!==null&&fi(dt,z,-1/0,x.sortObjects)}fi(E,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Q,nt),ht=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,ht&&Ft.addToRenderList(m,E),this.info.render.frame++,k===!0&&pt.beginShadows();const q=p.state.shadowsArray;Tt.render(q,E,z),k===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,W=m.transmissive;if(p.setupLights(),z.isArrayCamera){const dt=z.cameras;if(W.length>0)for(let xt=0,At=dt.length;xt<At;xt++){const Rt=dt[xt];Zi($,W,E,Rt)}ht&&Ft.render(E);for(let xt=0,At=dt.length;xt<At;xt++){const Rt=dt[xt];pi(m,E,Rt,Rt.viewport)}}else W.length>0&&Zi($,W,E,z),ht&&Ft.render(E),pi(m,E,z);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(x,E,z),ce.resetDefaultState(),M=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],k===!0&&pt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function fi(E,z,q,$){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||I.intersectsSprite(E)){$&&ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(at);const xt=st.update(E),At=E.material;At.visible&&m.push(E,xt,At,q,ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||I.intersectsObject(E))){const xt=st.update(E),At=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ut.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),ut.copy(xt.boundingSphere.center)),ut.applyMatrix4(E.matrixWorld).applyMatrix4(at)),Array.isArray(At)){const Rt=xt.groups;for(let Gt=0,Xt=Rt.length;Gt<Xt;Gt++){const Ut=Rt[Gt],ne=At[Ut.materialIndex];ne&&ne.visible&&m.push(E,xt,ne,q,ut.z,Ut)}}else At.visible&&m.push(E,xt,At,q,ut.z,null)}}const dt=E.children;for(let xt=0,At=dt.length;xt<At;xt++)fi(dt[xt],z,q,$)}function pi(E,z,q,$){const W=E.opaque,dt=E.transmissive,xt=E.transparent;p.setupLightsView(q),k===!0&&pt.setGlobalState(x.clippingPlanes,q),$&&gt.viewport(R.copy($)),W.length>0&&Dn(W,z,q),dt.length>0&&Dn(dt,z,q),xt.length>0&&Dn(xt,z,q),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Zi(E,z,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new li(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?_s:Pn,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const dt=p.state.transmissionRenderTarget[$.id],xt=$.viewport||R;dt.setSize(xt.z,xt.w);const At=x.getRenderTarget();x.setRenderTarget(dt),x.getClearColor(H),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),ht&&Ft.render(q);const Rt=x.toneMapping;x.toneMapping=Vn;const Gt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),k===!0&&pt.setGlobalState(x.clippingPlanes,$),Dn(E,q,$),C.updateMultisampleRenderTarget(dt),C.updateRenderTargetMipmap(dt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ut=0,ne=z.length;Ut<ne;Ut++){const _e=z[Ut],ve=_e.object,He=_e.geometry,re=_e.material,Nt=_e.group;if(re.side===Ye&&ve.layers.test($.layers)){const vn=re.side;re.side=qe,re.needsUpdate=!0,Ki(ve,q,$,He,re,Nt),re.side=vn,re.needsUpdate=!0,Xt=!0}}Xt===!0&&(C.updateMultisampleRenderTarget(dt),C.updateRenderTargetMipmap(dt))}x.setRenderTarget(At),x.setClearColor(H,Y),Gt!==void 0&&($.viewport=Gt),x.toneMapping=Rt}function Dn(E,z,q){const $=z.isScene===!0?z.overrideMaterial:null;for(let W=0,dt=E.length;W<dt;W++){const xt=E[W],At=xt.object,Rt=xt.geometry,Gt=$===null?xt.material:$,Xt=xt.group;At.layers.test(q.layers)&&Ki(At,z,q,Rt,Gt,Xt)}}function Ki(E,z,q,$,W,dt){E.onBeforeRender(x,z,q,$,W,dt),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(x,z,q,$,E,dt),W.transparent===!0&&W.side===Ye&&W.forceSinglePass===!1?(W.side=qe,W.needsUpdate=!0,x.renderBufferDirect(q,z,$,W,E,dt),W.side=Xn,W.needsUpdate=!0,x.renderBufferDirect(q,z,$,W,E,dt),W.side=Ye):x.renderBufferDirect(q,z,$,W,E,dt),E.onAfterRender(x,z,q,$,W,dt)}function Ze(E,z,q){z.isScene!==!0&&(z=K);const $=ft.get(E),W=p.state.lights,dt=p.state.shadowsArray,xt=W.state.version,At=bt.getParameters(E,W.state,dt,z,q),Rt=bt.getProgramCacheKey(At);let Gt=$.programs;$.environment=E.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(E.isMeshStandardMaterial?V:w).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",it),Gt=new Map,$.programs=Gt);let Xt=Gt.get(Rt);if(Xt!==void 0){if($.currentProgram===Xt&&$.lightsStateVersion===xt)return Jt(E,At),Xt}else At.uniforms=bt.getUniforms(E),E.onBeforeCompile(At,x),Xt=bt.acquireProgram(At,Rt),Gt.set(Rt,Xt),$.uniforms=At.uniforms;const Ut=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=pt.uniform),Jt(E,At),$.needsLights=De(E),$.lightsStateVersion=xt,$.needsLights&&(Ut.ambientLightColor.value=W.state.ambient,Ut.lightProbe.value=W.state.probe,Ut.directionalLights.value=W.state.directional,Ut.directionalLightShadows.value=W.state.directionalShadow,Ut.spotLights.value=W.state.spot,Ut.spotLightShadows.value=W.state.spotShadow,Ut.rectAreaLights.value=W.state.rectArea,Ut.ltc_1.value=W.state.rectAreaLTC1,Ut.ltc_2.value=W.state.rectAreaLTC2,Ut.pointLights.value=W.state.point,Ut.pointLightShadows.value=W.state.pointShadow,Ut.hemisphereLights.value=W.state.hemi,Ut.directionalShadowMap.value=W.state.directionalShadowMap,Ut.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ut.spotShadowMap.value=W.state.spotShadowMap,Ut.spotLightMatrix.value=W.state.spotLightMatrix,Ut.spotLightMap.value=W.state.spotLightMap,Ut.pointShadowMap.value=W.state.pointShadowMap,Ut.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=Xt,$.uniformsList=null,Xt}function $i(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=er.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Jt(E,z){const q=ft.get(E);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function pe(E,z,q,$,W){z.isScene!==!0&&(z=K),C.resetTextureUnits();const dt=z.fog,xt=$.isMeshStandardMaterial?z.environment:null,At=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ki,Rt=($.isMeshStandardMaterial?V:w).get($.envMap||xt),Gt=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xt=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ut=!!q.morphAttributes.position,ne=!!q.morphAttributes.normal,_e=!!q.morphAttributes.color;let ve=Vn;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ve=x.toneMapping);const He=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,re=He!==void 0?He.length:0,Nt=ft.get($),vn=p.state.lights;if(k===!0&&(X===!0||E!==v)){const Qe=E===v&&$.id===M;pt.setState($,E,Qe)}let oe=!1;$.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==vn.state.version||Nt.outputColorSpace!==At||W.isBatchedMesh&&Nt.batching===!1||!W.isBatchedMesh&&Nt.batching===!0||W.isBatchedMesh&&Nt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Nt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Nt.instancing===!1||!W.isInstancedMesh&&Nt.instancing===!0||W.isSkinnedMesh&&Nt.skinning===!1||!W.isSkinnedMesh&&Nt.skinning===!0||W.isInstancedMesh&&Nt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Nt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Nt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Nt.instancingMorph===!1&&W.morphTexture!==null||Nt.envMap!==Rt||$.fog===!0&&Nt.fog!==dt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==pt.numPlanes||Nt.numIntersection!==pt.numIntersection)||Nt.vertexAlphas!==Gt||Nt.vertexTangents!==Xt||Nt.morphTargets!==Ut||Nt.morphNormals!==ne||Nt.morphColors!==_e||Nt.toneMapping!==ve||Nt.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Nt.__version=$.version);let nn=Nt.currentProgram;oe===!0&&(nn=Ze($,z,W));let mi=!1,Ke=!1,ji=!1;const xe=nn.getUniforms(),fn=Nt.uniforms;if(gt.useProgram(nn.program)&&(mi=!0,Ke=!0,ji=!0),$.id!==M&&(M=$.id,Ke=!0),mi||v!==E){gt.buffers.depth.getReversed()?(rt.copy(E.projectionMatrix),gh(rt),vh(rt),xe.setValue(F,"projectionMatrix",rt)):xe.setValue(F,"projectionMatrix",E.projectionMatrix),xe.setValue(F,"viewMatrix",E.matrixWorldInverse);const In=xe.map.cameraPosition;In!==void 0&&In.setValue(F,lt.setFromMatrixPosition(E.matrixWorld)),kt.logarithmicDepthBuffer&&xe.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&xe.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,Ke=!0,ji=!0)}if(W.isSkinnedMesh){xe.setOptional(F,W,"bindMatrix"),xe.setOptional(F,W,"bindMatrixInverse");const Qe=W.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),xe.setValue(F,"boneTexture",Qe.boneTexture,C))}W.isBatchedMesh&&(xe.setOptional(F,W,"batchingTexture"),xe.setValue(F,"batchingTexture",W._matricesTexture,C),xe.setOptional(F,W,"batchingIdTexture"),xe.setValue(F,"batchingIdTexture",W._indirectTexture,C),xe.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&xe.setValue(F,"batchingColorTexture",W._colorsTexture,C));const Ji=q.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&Ot.update(W,q,nn),(Ke||Nt.receiveShadow!==W.receiveShadow)&&(Nt.receiveShadow=W.receiveShadow,xe.setValue(F,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(fn.envMap.value=Rt,fn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(fn.envMapIntensity.value=z.environmentIntensity),Ke&&(xe.setValue(F,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&Le(fn,ji),dt&&$.fog===!0&&yt.refreshFogUniforms(fn,dt),yt.refreshMaterialUniforms(fn,$,O,J,p.state.transmissionRenderTarget[E.id]),er.upload(F,$i(Nt),fn,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(er.upload(F,$i(Nt),fn,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&xe.setValue(F,"center",W.center),xe.setValue(F,"modelViewMatrix",W.modelViewMatrix),xe.setValue(F,"normalMatrix",W.normalMatrix),xe.setValue(F,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Qe=$.uniformsGroups;for(let In=0,Un=Qe.length;In<Un;In++){const na=Qe[In];B.update(na,nn),B.bind(na,nn)}}return nn}function Le(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function De(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,z,q){ft.get(E.texture).__webglTexture=z,ft.get(E.depthTexture).__webglTexture=q;const $=ft.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){const q=ft.get(E);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,q=0){P=E,A=z,T=q;let $=!0,W=null,dt=!1,xt=!1;if(E){const Rt=ft.get(E);if(Rt.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(Rt.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Rt.__hasExternalTextures)C.rebindTextures(E,ft.get(E.texture).__webglTexture,ft.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ut=E.depthTexture;if(Rt.__boundDepthTexture!==Ut){if(Ut!==null&&ft.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Gt=E.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(xt=!0);const Xt=ft.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xt[z])?W=Xt[z][q]:W=Xt[z],dt=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?W=ft.get(E).__webglMultisampledFramebuffer:Array.isArray(Xt)?W=Xt[q]:W=Xt,R.copy(E.viewport),N.copy(E.scissor),U=E.scissorTest}else R.copy(mt).multiplyScalar(O).floor(),N.copy(Lt).multiplyScalar(O).floor(),U=zt;if(gt.bindFramebuffer(F.FRAMEBUFFER,W)&&$&&gt.drawBuffers(E,W),gt.viewport(R),gt.scissor(N),gt.setScissorTest(U),dt){const Rt=ft.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,Rt.__webglTexture,q)}else if(xt){const Rt=ft.get(E.texture),Gt=z||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.__webglTexture,q||0,Gt)}M=-1},this.readRenderTargetPixels=function(E,z,q,$,W,dt,xt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=ft.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){gt.bindFramebuffer(F.FRAMEBUFFER,At);try{const Rt=E.texture,Gt=Rt.format,Xt=Rt.type;if(!kt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-$&&q>=0&&q<=E.height-W&&F.readPixels(z,q,$,W,Wt.convert(Gt),Wt.convert(Xt),dt)}finally{const Rt=P!==null?ft.get(P).__webglFramebuffer:null;gt.bindFramebuffer(F.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,z,q,$,W,dt,xt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=ft.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){const Rt=E.texture,Gt=Rt.format,Xt=Rt.type;if(!kt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-$&&q>=0&&q<=E.height-W){gt.bindFramebuffer(F.FRAMEBUFFER,At);const Ut=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ut),F.bufferData(F.PIXEL_PACK_BUFFER,dt.byteLength,F.STREAM_READ),F.readPixels(z,q,$,W,Wt.convert(Gt),Wt.convert(Xt),0);const ne=P!==null?ft.get(P).__webglFramebuffer:null;gt.bindFramebuffer(F.FRAMEBUFFER,ne);const _e=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await _h(F,_e,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ut),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,dt),F.deleteBuffer(Ut),F.deleteSync(_e),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,q=0){E.isTexture!==!0&&(os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);const $=Math.pow(2,-q),W=Math.floor(E.image.width*$),dt=Math.floor(E.image.height*$),xt=z!==null?z.x:0,At=z!==null?z.y:0;C.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,xt,At,W,dt),gt.unbindTexture()},this.copyTextureToTexture=function(E,z,q=null,$=null,W=0){E.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,E=arguments[1],z=arguments[2],W=arguments[3]||0,q=null);let dt,xt,At,Rt,Gt,Xt,Ut,ne,_e;const ve=E.isCompressedTexture?E.mipmaps[W]:E.image;q!==null?(dt=q.max.x-q.min.x,xt=q.max.y-q.min.y,At=q.isBox3?q.max.z-q.min.z:1,Rt=q.min.x,Gt=q.min.y,Xt=q.isBox3?q.min.z:0):(dt=ve.width,xt=ve.height,At=ve.depth||1,Rt=0,Gt=0,Xt=0),$!==null?(Ut=$.x,ne=$.y,_e=$.z):(Ut=0,ne=0,_e=0);const He=Wt.convert(z.format),re=Wt.convert(z.type);let Nt;z.isData3DTexture?(C.setTexture3D(z,0),Nt=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(C.setTexture2DArray(z,0),Nt=F.TEXTURE_2D_ARRAY):(C.setTexture2D(z,0),Nt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const vn=F.getParameter(F.UNPACK_ROW_LENGTH),oe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),nn=F.getParameter(F.UNPACK_SKIP_PIXELS),mi=F.getParameter(F.UNPACK_SKIP_ROWS),Ke=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ve.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ve.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Rt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Gt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xt);const ji=E.isDataArrayTexture||E.isData3DTexture,xe=z.isDataArrayTexture||z.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const fn=ft.get(E),Ji=ft.get(z),Qe=ft.get(fn.__renderTarget),In=ft.get(Ji.__renderTarget);gt.bindFramebuffer(F.READ_FRAMEBUFFER,Qe.__webglFramebuffer),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let Un=0;Un<At;Un++)ji&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ft.get(E).__webglTexture,W,Xt+Un),E.isDepthTexture?(xe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ft.get(z).__webglTexture,W,_e+Un),F.blitFramebuffer(Rt,Gt,dt,xt,Ut,ne,dt,xt,F.DEPTH_BUFFER_BIT,F.NEAREST)):xe?F.copyTexSubImage3D(Nt,W,Ut,ne,_e+Un,Rt,Gt,dt,xt):F.copyTexSubImage2D(Nt,W,Ut,ne,_e+Un,Rt,Gt,dt,xt);gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else xe?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Nt,W,Ut,ne,_e,dt,xt,At,He,re,ve.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(Nt,W,Ut,ne,_e,dt,xt,At,He,ve.data):F.texSubImage3D(Nt,W,Ut,ne,_e,dt,xt,At,He,re,ve):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,Ut,ne,dt,xt,He,re,ve.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,Ut,ne,ve.width,ve.height,He,ve.data):F.texSubImage2D(F.TEXTURE_2D,W,Ut,ne,dt,xt,He,re,ve);F.pixelStorei(F.UNPACK_ROW_LENGTH,vn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,oe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,nn),F.pixelStorei(F.UNPACK_SKIP_ROWS,mi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ke),W===0&&z.generateMipmaps&&F.generateMipmap(Nt),gt.unbindTexture()},this.copyTextureToTexture3D=function(E,z,q=null,$=null,W=0){return E.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,E=arguments[2],z=arguments[3],W=arguments[4]||0),os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,q,$,W)},this.initRenderTarget=function(E){ft.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),gt.unbindTexture()},this.resetState=function(){A=0,T=0,P=null,gt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class Zo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ct(t),this.density=e}clone(){return new Zo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class il extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class hr extends ui{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const rr=new b,or=new b,tc=new me,is=new gs,Ws=new Xi,Wr=new b,ec=new b;class sl extends Ae{constructor(t=new Se,e=new hr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)rr.fromBufferAttribute(e,s-1),or.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=rr.distanceTo(or);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),Ws.radius+=r,t.ray.intersectsSphere(Ws)===!1)return;tc.copy(s).invert(),is.copy(t.ray).applyMatrix4(tc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=l){const p=h.getX(g),S=h.getX(g+1),y=Hs(this,t,is,c,p,S);y&&e.push(y)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(f),p=Hs(this,t,is,c,g,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=l){const p=Hs(this,t,is,c,g,g+1);p&&e.push(p)}if(this.isLineLoop){const g=Hs(this,t,is,c,_-1,f);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Hs(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(rr.fromBufferAttribute(o,s),or.fromBufferAttribute(o,r),e.distanceSqToSegment(rr,or,Wr,ec)>n)return;Wr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Wr);if(!(c<t.near||c>t.far))return{distance:c,point:ec.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const nc=new b,ic=new b;class rl extends sl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)nc.fromBufferAttribute(e,s),ic.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+nc.distanceTo(ic);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ol extends ui{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const sc=new me,No=new gs,Gs=new Xi,ks=new b;class C0 extends Ae{constructor(t=new Se,e=new ol){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Gs.radius+=r,t.ray.intersectsSphere(Gs)===!1)return;sc.copy(s).invert(),No.copy(t.ray).applyMatrix4(sc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let _=u,g=f;_<g;_++){const m=l.getX(_);ks.fromBufferAttribute(d,m),rc(ks,m,c,s,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=u,g=f;_<g;_++)ks.fromBufferAttribute(d,_),rc(ks,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rc(i,t,e,n,s,r,o){const a=No.distanceSqToPoint(i);if(a<e){const c=new b;No.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class al extends We{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new _t:new b);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new b,s=[],r=[],o=[],a=new b,c=new me;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new b)}r[0]=new b,o[0]=new b;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class cl extends Ln{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new _t){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class P0 extends cl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ko(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Vs=new b,Hr=new Ko,Gr=new Ko,kr=new Ko;class we extends Ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new b){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Vs.subVectors(s[0],s[1]).add(s[0]),l=Vs);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Vs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Vs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Hr.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,_,g,m),Gr.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,_,g,m),kr.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(Hr.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Gr.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),kr.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Hr.calc(c),Gr.calc(c),kr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new b().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function oc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function L0(i,t){const e=1-i;return e*e*t}function D0(i,t){return 2*(1-i)*i*t}function I0(i,t){return i*i*t}function ds(i,t,e,n){return L0(i,t)+D0(i,e)+I0(i,n)}function U0(i,t){const e=1-i;return e*e*e*t}function N0(i,t){const e=1-i;return 3*e*e*i*t}function F0(i,t){return 3*(1-i)*i*i*t}function O0(i,t){return i*i*i*t}function us(i,t,e,n,s){return U0(i,t)+N0(i,e)+F0(i,n)+O0(i,s)}class B0 extends Ln{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(us(t,s.x,r.x,o.x,a.x),us(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class z0 extends Ln{constructor(t=new b,e=new b,n=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new b){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(us(t,s.x,r.x,o.x,a.x),us(t,s.y,r.y,o.y,a.y),us(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class W0 extends Ln{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class H0 extends Ln{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class G0 extends Ln{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ds(t,s.x,r.x,o.x),ds(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ll extends Ln{constructor(t=new b,e=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new b){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ds(t,s.x,r.x,o.x),ds(t,s.y,r.y,o.y),ds(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hl extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(oc(a,c.x,l.x,h.x,d.x),oc(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new _t().fromArray(s))}return this}}var k0=Object.freeze({__proto__:null,ArcCurve:P0,CatmullRomCurve3:we,CubicBezierCurve:B0,CubicBezierCurve3:z0,EllipseCurve:cl,LineCurve:W0,LineCurve3:H0,QuadraticBezierCurve:G0,QuadraticBezierCurve3:ll,SplineCurve:hl});class $o extends Se{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=be(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,d=new b,u=new _t,f=new b,_=new b,g=new b;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(g.x,g.y,g.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),c.push(f.x,f.y,f.z),g.copy(_)}for(let S=0;S<=e;S++){const y=n+S*h*s,x=Math.sin(y),L=Math.cos(y);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*x,d.y=t[A].y,d.z=t[A].x*L,o.push(d.x,d.y,d.z),u.x=S/e,u.y=A/(t.length-1),a.push(u.x,u.y);const T=c[3*A+0]*x,P=c[3*A+1],M=c[3*A+0]*L;l.push(T,P,M)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){const x=y+S*t.length,L=x,A=x+t.length,T=x+t.length+1,P=x+1;r.push(L,A,P),r.push(T,P,A)}this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("uv",new jt(a,2)),this.setAttribute("normal",new jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.points,t.segments,t.phiStart,t.phiLength)}}class ie extends Se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let _=0;const g=[],m=n/2;let p=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function S(){const x=new b,L=new b;let A=0;const T=(e-t)/n;for(let P=0;P<=r;P++){const M=[],v=P/r,R=v*(e-t)+t;for(let N=0;N<=s;N++){const U=N/s,H=U*c+a,Y=Math.sin(H),Z=Math.cos(H);L.x=R*Y,L.y=-v*n+m,L.z=R*Z,d.push(L.x,L.y,L.z),x.set(Y,T,Z).normalize(),u.push(x.x,x.y,x.z),f.push(U,1-v),M.push(_++)}g.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){const v=g[M][P],R=g[M+1][P],N=g[M+1][P+1],U=g[M][P+1];(t>0||M!==0)&&(h.push(v,R,U),A+=3),(e>0||M!==r-1)&&(h.push(R,N,U),A+=3)}l.addGroup(p,A,0),p+=A}function y(x){const L=_,A=new _t,T=new b;let P=0;const M=x===!0?t:e,v=x===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*v,0),u.push(0,v,0),f.push(.5,.5),_++;const R=_;for(let N=0;N<=s;N++){const H=N/s*c+a,Y=Math.cos(H),Z=Math.sin(H);T.x=M*Z,T.y=m*v,T.z=M*Y,d.push(T.x,T.y,T.z),u.push(0,v,0),A.x=Y*.5+.5,A.y=Z*.5*v+.5,f.push(A.x,A.y),_++}for(let N=0;N<s;N++){const U=L+N,H=R+N;x===!0?h.push(H,H+1,U):h.push(H+1,H,U),P+=3}l.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jo extends ie{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new jo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jo extends Se{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let d=t;const u=(e-t)/s,f=new b,_=new _t;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}d+=u}for(let g=0;g<s;g++){const m=g*(n+1);for(let p=0;p<n;p++){const S=p+m,y=S,x=S+n+1,L=S+n+2,A=S+1;a.push(y,x,A),a.push(x,L,A)}}this.setIndex(a),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class dr extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new b,u=new b,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const S=[],y=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const A=L/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+y*a),_.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(A+x,1-y),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const y=h[p][S+1],x=h[p][S],L=h[p+1][S],A=h[p+1][S+1];(p!==0||o>0)&&f.push(y,x,A),(p!==n-1||c<Math.PI)&&f.push(x,L,A)}this.setIndex(f),this.setAttribute("position",new jt(_,3)),this.setAttribute("normal",new jt(g,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ai extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new b,d=new b,u=new b;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){const g=_/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(g),d.y=(t+e*Math.cos(m))*Math.sin(g),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(_/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){const g=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,p=(s+1)*(f-1)+_,S=(s+1)*f+_;o.push(g,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ye extends Se{constructor(t=new ll(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new b,c=new b,l=new _t;let h=new b;const d=[],u=[],f=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function g(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),S(),p()}function m(y){h=t.getPointAt(y/e,h);const x=o.normals[y],L=o.binormals[y];for(let A=0;A<=s;A++){const T=A/s*Math.PI*2,P=Math.sin(T),M=-Math.cos(T);c.x=M*x.x+P*L.x,c.y=M*x.y+P*L.y,c.z=M*x.z+P*L.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){const L=(s+1)*(y-1)+(x-1),A=(s+1)*y+(x-1),T=(s+1)*y+x,P=(s+1)*(y-1)+x;_.push(L,A,P),_.push(A,T,P)}}function S(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)l.x=y/e,l.y=x/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ye(new k0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ve extends ui{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ei extends Ve{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class V0 extends hr{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class Qo extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class X0 extends Qo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Vr=new me,ac=new b,cc=new b;class dl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ac.setFromMatrixPosition(t.matrixWorld),e.position.copy(ac),cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cc),e.updateMatrixWorld(),Vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const lc=new me,ss=new b,Xr=new b;class Y0 extends dl{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ss.setFromMatrixPosition(t.matrixWorld),n.position.copy(ss),Xr.copy(n.position),Xr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Xr),n.updateMatrixWorld(),s.makeTranslation(-ss.x,-ss.y,-ss.z),lc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lc)}}class q0 extends Qo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Y0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Z0 extends dl{constructor(){super(new jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xs extends Qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Z0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const hc=new me;class K0{constructor(t,e,n=0,s=1/0){this.ray=new gs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hc),this}intersectObject(t,e=!0,n=[]){return Fo(t,this,n,e),n.sort(dc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Fo(t[s],this,n,e);return n.sort(dc),n}}function dc(i,t){return i.distance-t.distance}function Fo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Fo(r[o],t,e,!0)}}class uc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $0 extends rl{constructor(t=10,e=10,n=4473924,s=8947848){n=new Ct(n),s=new Ct(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let u=0,f=0,_=-a;u<=e;u++,_+=o){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);const g=u===r?n:s;g.toArray(l,f),f+=3,g.toArray(l,f),f+=3,g.toArray(l,f),f+=3,g.toArray(l,f),f+=3}const h=new Se;h.setAttribute("position",new jt(c,3)),h.setAttribute("color",new jt(l,3));const d=new hr({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class j0 extends di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);const fc={type:"change"},ta={type:"start"},ul={type:"end"},Ys=new gs,pc=new Hn,J0=Math.cos(70*Vt.DEG2RAD),Te=new b,Ge=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yr=1e-6;class Q0 extends j0{constructor(t,e=null){super(t,e),this.state=he.NONE,this.enabled=!0,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new b,this._lastQuaternion=new hi,this._lastTargetPosition=new b,this._quat=new hi().setFromUnitVectors(t.up,new b(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uc,this._sphericalDelta=new uc,this._scale=1,this._panOffset=new b,this._rotateStart=new _t,this._rotateEnd=new _t,this._rotateDelta=new _t,this._panStart=new _t,this._panEnd=new _t,this._panDelta=new _t,this._dollyStart=new _t,this._dollyEnd=new _t,this._dollyDelta=new _t,this._dollyDirection=new b,this._mouse=new _t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=em.bind(this),this._onPointerDown=tm.bind(this),this._onPointerUp=nm.bind(this),this._onContextMenu=lm.bind(this),this._onMouseWheel=rm.bind(this),this._onKeyDown=om.bind(this),this._onTouchStart=am.bind(this),this._onTouchMove=cm.bind(this),this._onMouseDown=im.bind(this),this._onMouseMove=sm.bind(this),this._interceptControlDown=hm.bind(this),this._interceptControlUp=dm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fc),this.update(),this.state=he.NONE}update(t=null){const e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ge:n>Math.PI&&(n-=Ge),s<-Math.PI?s+=Ge:s>Math.PI&&(s-=Ge),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Te.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new b(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new b(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ys.origin.copy(this.object.position),Ys.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ys.direction))<J0?this.object.lookAt(this.target):(pc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ys.intersectPlane(pc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Yr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yr||this._lastTargetPosition.distanceToSquared(this.target)>Yr?(this.dispatchEvent(fc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ge/60*this.autoRotateSpeed*t:Ge/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Te.copy(s).sub(this.target);let r=Te.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ge*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ge*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ge*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ge*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new _t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function tm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function em(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function nm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ul),this.state=he.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function im(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=he.DOLLY;break;case Ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=he.ROTATE}break;case Ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(ta)}function sm(i){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function rm(i){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(i.preventDefault(),this.dispatchEvent(ta),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ul))}function om(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function am(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=he.TOUCH_ROTATE;break;case Li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case Li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=he.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(ta)}function cm(i){switch(this._trackPointer(i),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=he.NONE}}function lm(i){this.enabled!==!1&&i.preventDefault()}function hm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const se=Object.freeze({length:5.63,width:2,height:.95,wheelbase:3.6,frontAxleX:1.8,rearAxleX:-1.8,wheelRadius:.36,frontTireWidth:.305,rearTireWidth:.405,frontTrackHalfZ:.84,rearTrackHalfZ:.8,rakeFrontY:.015,rakeRearY:.052}),Qt=Object.freeze([{id:"part_01_front_wing",code:"ASM-01",name:"Front wing & nosecone assembly",layer:"aero",assembledPivot:[2.1,.24,0],explodeVector:[1.45,.06,0],explodeArcOffset:[.65,.22,0],explodeRotation:[.04,0,0],staggerWindow:[.02,.52],omegaN:15.2,zeta:.58,massKg:14.8,materialSpec:"Toray T1100G CFRP / Nomex Honeycomb Core",fiaArticle:"FIA Tech Reg Art. 3.9",telemetryMetrics:{loadN:4850,tempC:34,aeroCoeff:"Cz -0.82 / Cx 0.14"},description:"7-station lofted survival nosecone with solar-amber tip, 4-element slotted carbon airfoils, canted outwash endplates, S-shaped diveplanes, and twin swan-neck pylons."},{id:"part_02_monocoque",code:"ASM-02",name:"Survival cell monocoque & cockpit",layer:"chassis",assembledPivot:[.55,.42,0],explodeVector:[0,.36,0],explodeArcOffset:[.05,.22,0],explodeRotation:[0,0,0],staggerWindow:[.22,.72],omegaN:14,zeta:.62,massKg:62.5,materialSpec:"T1100G Carbon / Zylon Anti-Intrusion Laminate",fiaArticle:"FIA Tech Reg Art. 12.1",telemetryMetrics:{loadN:32500,tempC:41,aeroCoeff:"Torsional 52 kNm/deg"},description:"8-station lofted carbon-Kevlar survival tub housing the sculpted carbon bucket seat, FIA head-protection collar, multi-rotary OLED steering wheel, and pedal box."},{id:"part_03_halo",code:"ASM-03",name:"Titanium Halo safety structure",layer:"chassis",assembledPivot:[.42,.74,0],explodeVector:[.15,.98,0],explodeArcOffset:[.18,.62,0],explodeRotation:[-.06,0,0],staggerWindow:[.06,.56],omegaN:16,zeta:.56,massKg:7,materialSpec:"Grade 5 Ti-6Al-4V Forged Titanium + Carbon Fairing",fiaArticle:"FIA Tech Reg Art. 12.4",telemetryMetrics:{loadN:125e3,tempC:32,aeroCoeff:"Wake Fairing Cd 0.02"},description:"Aerodynamically faired Grade 5 titanium cockpit protection hoop with central V-strut shear mount rated to withstand 125 kN vertical compressive load."},{id:"part_04_sidepod_left",code:"ASM-04",name:"Left undercut downwash sidepod (-Z)",layer:"aero",assembledPivot:[-.35,.38,-.52],explodeVector:[-.1,.28,-1.18],explodeArcOffset:[-.04,.42,-.68],explodeRotation:[-.05,.08,.04],staggerWindow:[.04,.54],omegaN:14.8,zeta:.57,massKg:11.2,materialSpec:"Ultra-Thin Pre-Preg CFRP + Al-Matrix Radiator Core",fiaArticle:"FIA Tech Reg Art. 3.7",telemetryMetrics:{loadN:1620,tempC:108,aeroCoeff:"Coanda Downwash +14%"},description:"Port (-Z) 7-station lofted sidepod shell with high overbite intake lip, deep floor undercut channel, 8 cooling louvre gills, and angled water/oil radiator core."},{id:"part_05_sidepod_right",code:"ASM-05",name:"Right undercut downwash sidepod (+Z)",layer:"aero",assembledPivot:[-.35,.38,.52],explodeVector:[-.1,.28,1.18],explodeArcOffset:[-.04,.42,.68],explodeRotation:[.05,-.08,.04],staggerWindow:[.04,.54],omegaN:14.8,zeta:.57,massKg:11.2,materialSpec:"Ultra-Thin Pre-Preg CFRP + Charge-Air Intercooler",fiaArticle:"FIA Tech Reg Art. 3.7",telemetryMetrics:{loadN:1620,tempC:96,aeroCoeff:"Coanda Downwash +14%"},description:"Starboard (+Z) 7-station lofted sidepod shell with forward-reading bilateral ORACLE UV mapping, deep undercut trough, 8 cooling louvres, and turbo charge-air intercooler."},{id:"part_06_engine_cover",code:"ASM-06",name:"Engine cover, roll hoop & shark fin",layer:"aero",assembledPivot:[-.78,.7,0],explodeVector:[-.45,1.28,0],explodeArcOffset:[-.18,.85,0],explodeRotation:[0,0,.06],staggerWindow:[.05,.55],omegaN:14.4,zeta:.56,massKg:8.4,materialSpec:"Autoclaved Carbon Monoskin + Ti Roll Structure",fiaArticle:"FIA Tech Reg Art. 3.6 / 12.3",telemetryMetrics:{loadN:2400,tempC:84,aeroCoeff:"Yaw Stability +18%"},description:"8-station lofted spine cowl featuring the solar-amber roll-hoop ram-air intake, FIA T-Cam transponder bar, dorsal shark-fin stabilizer, and rear cooling cannon exit."},{id:"part_07_venturi_floor",code:"ASM-07",name:"Venturi ground-effect floor & diffuser",layer:"aero",assembledPivot:[-.45,.08,0],explodeVector:[0,-.54,0],explodeArcOffset:[-.08,-.32,0],explodeRotation:[0,0,0],staggerWindow:[.2,.72],omegaN:13.8,zeta:.6,massKg:26.5,materialSpec:"High-Modulus Carbon Floor + Titanium Skid Blocks",fiaArticle:"FIA Tech Reg Art. 3.5",telemetryMetrics:{loadN:11400,tempC:68,aeroCoeff:"Cz -1.95 (62% Total DF)"},description:"Full-span ground-effect undertray with 4 pairs of curved Venturi inlet fences, sculpted low-pressure throat tunnels, rising rear diffuser expansion ramp, and edge vortex scroll."},{id:"part_08_power_unit",code:"ASM-08",name:"1.6L V6 turbo hybrid power unit & ERS",layer:"powertrain",assembledPivot:[-.58,.34,0],explodeVector:[-.28,.68,0],explodeArcOffset:[-.12,.45,0],explodeRotation:[0,0,0],staggerWindow:[.26,.78],omegaN:13.5,zeta:.61,massKg:151,materialSpec:"Billet Al-Si Block / Inconel 625 Headers / Li-Ion ES",fiaArticle:"FIA Tech Reg Art. 5.1",telemetryMetrics:{loadN:9800,tempC:790,aeroCoeff:"1050 BHP @ 15,000 RPM"},description:"Stressed 90-degree 1.6L V6 internal combustion engine with axial-radial turbocharger, MGU-H shaft generator, 120 kW MGU-K, carbon airbox plenum, and hydroformed Inconel 625 3-into-1 exhaust."},{id:"part_09_gearbox",code:"ASM-09",name:"8-speed carbon-titanium gearbox & diffuser spine",layer:"powertrain",assembledPivot:[-1.58,.3,0],explodeVector:[-1.05,.18,0],explodeArcOffset:[-.62,.24,0],explodeRotation:[0,0,-.03],staggerWindow:[.24,.76],omegaN:14.2,zeta:.6,massKg:41,materialSpec:"Woven Carbon Maincase + Investment-Cast Ti6Al4V Bulkhead",fiaArticle:"FIA Tech Reg Art. 9.1 / 13.6",telemetryMetrics:{loadN:14200,tempC:118,aeroCoeff:"Shift Time 6.5 ms"},description:"Structural carbon-composite 8-speed seamless-shift longitudinal transmission housing the electronically controlled hydraulic differential, rear suspension torsion mounts, and FIA rear impact structure."},{id:"part_10_suspension_brakes",code:"ASM-10",name:"Pullrod/pushrod suspension & Brembo brakes",layer:"chassis_dynamics",assembledPivot:[0,.36,0],explodeVector:[0,.12,.56],explodeArcOffset:[0,.18,.32],explodeRotation:[0,0,0],staggerWindow:[.18,.68],omegaN:15.6,zeta:.58,massKg:34,materialSpec:"Aero-Profiled Carbon Wishbones + Carbon-Ceramic Discs",fiaArticle:"FIA Tech Reg Art. 10.3 / 11.1",telemetryMetrics:{loadN:21500,tempC:685,aeroCoeff:"Peak Decel 5.8 G"},description:"Front pullrod and rear pushrod double-wishbone carbon suspension assemblies with CNC upright carriers, carbon cooling ducts, 328mm cross-drilled carbon-ceramic discs, and 6-piston Brembo calipers."},{id:"part_11_rear_wing_drs",code:"ASM-11",name:"DRS rear wing & dual beam wing assembly",layer:"aero",assembledPivot:[-2.32,.64,0],explodeVector:[-1.68,.66,0],explodeArcOffset:[-.95,.55,0],explodeRotation:[0,0,-.05],staggerWindow:[.04,.54],omegaN:15,zeta:.56,massKg:12.6,materialSpec:"High-Strain CFRP + Hydraulic Swan-Neck DRS Pod",fiaArticle:"FIA Tech Reg Art. 3.10",telemetryMetrics:{loadN:6100,tempC:36,aeroCoeff:"DRS Delta -28% Drag"},description:"Single central swan-neck pylon supporting the deep-spoon mainplane, hinged upper DRS flap (0-24 deg active actuation), curved louvred endplates, and lower bi-plane beam wing."},{id:"part_12_wheels_tires",code:"ASM-12",name:"4x 18-inch Pirelli P Zero wheels & aero covers",layer:"chassis_dynamics",assembledPivot:[0,.36,0],explodeVector:[.35,0,1.35],explodeArcOffset:[.18,.14,.78],explodeRotation:[0,0,0],staggerWindow:[0,.48],omegaN:16.4,zeta:.54,massKg:78,materialSpec:'Forged Mg BBS 18" Rims + Pirelli P Zero C5 Soft Compound',fiaArticle:"FIA Tech Reg Art. 10.8",telemetryMetrics:{loadN:18400,tempC:102,aeroCoeff:"720mm OD (305F / 405R)"},description:"Four 720mm outer-diameter Pirelli P Zero Soft slick tires mounted on 18-inch forged magnesium BBS rims with rotating carbon aero wheel covers, center-lock nuts, and over-wheel wake winglets."}]);function qs(i){const t=Math.max(-2.2,Math.min(2.85,i)),e=.015+Math.max(0,(1.8-t)/3.8)*.037;let n=.58,s=.28,r=.72;if(t>1.45){const o=(t-1.45)/1.4000000000000001;n=Vt.lerp(.56,.19,Math.pow(o,.85)),s=Vt.lerp(.27,.085,o),r=s}else if(t>=0){const o=t/1.45;n=Vt.lerp(.68,.56,o),s=Vt.lerp(.34,.27,o),r=Vt.lerp(.73,.3,Math.pow(o,1.4))}else{const o=Math.min(1,Math.abs(t)/1.75);n=Vt.lerp(.92,.46,Math.pow(o,.9)),s=Vt.lerp(.32,.13,o),r=Vt.lerp(.73,.22,Math.pow(o,1.15))}return{yBottom:e+.025,yTop:n,zSpineHalf:s,zPodHalf:r,internalMaxY:n-.025,internalMaxZ:Math.max(.16,s-.022)}}function Me(i,t=48,e=!0){const n=i.length,s=[],r=[],o=[],a=i[0].x,c=i[n-1].x,l=Math.max(1e-4,c-a);function h(y,x){const L=x*Math.PI*2,A=-Math.sin(L),P=(-Math.cos(L)+1)*.5,M=y.topWidthRatio??.72,v=y.bottomWidthRatio??.88,R=y.undercut??0,N=y.shoulderPower??1.35;let U=Vt.lerp(v,M,Math.pow(P,N));if(R>0&&P<.48){const nt=Math.sin(P/.48*Math.PI);U*=1-R*nt}const H=Math.max(.005,y.zHalfWidth*U),Z=(y.zCenter??0)+A*H,J=Math.max(.005,y.yTop-y.yBottom),O=(y.crown??0)*Math.cos(A*Math.PI*.5),Q=y.yBottom+P*J+(P>.5?O*(P-.5)*2:0);return[y.x,Q,Z]}for(let y=0;y<n;y++){const x=i[y],L=(x.x-a)/l;for(let A=0;A<=t;A++){const T=A/t,[P,M,v]=h(x,T);s.push(P,M,v),r.push(L,T)}}const d=t+1;for(let y=0;y<n-1;y++)for(let x=0;x<t;x++){const L=y*d+x,A=(y+1)*d+x,T=(y+1)*d+(x+1),P=y*d+(x+1);o.push(L,P,A),o.push(A,P,T)}const u=new Se;if(u.setAttribute("position",new jt(s,3)),u.setAttribute("uv",new jt(r,2)),u.setIndex(o),u.computeVertexNormals(),!e)return u;const f=Array.from(u.attributes.position.array),_=Array.from(u.attributes.normal.array),g=Array.from(u.attributes.uv.array),m=Array.from(u.index.array);function p(y,x){const L=f.length/3,A=(y.yBottom+y.yTop)*.5,T=y.zCenter??0;f.push(y.x,A,T),_.push(x,0,0),g.push(x<0?0:1,.5);const P=f.length/3;for(let M=0;M<=t;M++){const v=M/t,[R,N,U]=h(y,v);f.push(R,N,U),_.push(x,0,0),g.push(x<0?0:1,v)}for(let M=0;M<t;M++){const v=P+M,R=P+M+1;x<0?m.push(L,R,v):m.push(L,v,R)}}p(i[0],-1),p(i[n-1],1);const S=new Se;return S.setAttribute("position",new jt(f,3)),S.setAttribute("normal",new jt(_,3)),S.setAttribute("uv",new jt(g,2)),S.setIndex(m),S}function qn(i,t){if(typeof document<"u"){const r=document.createElement("canvas");return r.width=i,r.height=t,{canvas:r,ctx:r.getContext("2d")}}const e=()=>{},n={addColorStop:e};return{canvas:{width:i,height:t},ctx:{fillStyle:"#000",strokeStyle:"#000",lineWidth:1,font:"16px sans-serif",textAlign:"center",textBaseline:"middle",globalAlpha:1,fillRect:e,strokeRect:e,clearRect:e,beginPath:e,closePath:e,moveTo:e,lineTo:e,bezierCurveTo:e,quadraticCurveTo:e,arc:e,ellipse:e,fill:e,stroke:e,clip:e,save:e,restore:e,translate:e,rotate:e,scale:e,fillText:e,strokeText:e,createLinearGradient:()=>n,createRadialGradient:()=>n}}}function Zn(i,t=1,e=1){const n=new al(i);return n.colorSpace=Xe,n.anisotropy=8,t>1||e>1?(n.wrapS=fs,n.wrapT=fs,n.repeat.set(t,e)):(n.wrapS=Tn,n.wrapT=Tn),n.needsUpdate=!0,n}function fl(i,t,e,n,s){i.save(),i.translate(t,e),i.scale(n,s),i.fillStyle="#FFB800",i.beginPath(),i.arc(18,-4,46,0,Math.PI*2),i.fill(),i.lineWidth=5,i.strokeStyle="#FFB800",i.fillStyle="#E11D48",i.beginPath(),i.moveTo(-78,12),i.bezierCurveTo(-92,-18,-86,-42,-70,-48),i.bezierCurveTo(-76,-28,-72,-12,-58,-14),i.bezierCurveTo(-34,-22,-8,-38,18,-34),i.bezierCurveTo(36,-32,48,-20,62,-14),i.lineTo(86,-24),i.lineTo(74,-6),i.lineTo(82,8),i.lineTo(58,14),i.lineTo(74,36),i.lineTo(62,40),i.lineTo(40,18),i.bezierCurveTo(16,22,-12,16,-34,18),i.lineTo(-72,42),i.lineTo(-84,36),i.lineTo(-56,12),i.closePath(),i.stroke(),i.fill(),i.restore()}function ea(i,t,e,n){i.save(),i.translate(t*.5,e*.75),i.scale(-1,1),n(i,-1),i.restore(),i.save(),i.translate(t*.5,e*.25),i.scale(1,-1),n(i,1),i.restore()}function um(){const{canvas:t,ctx:e}=qn(1024,1024),{canvas:n,ctx:s}=qn(1024,1024);e.fillStyle="#121620",e.fillRect(0,0,1024,1024),s.fillStyle="#808080",s.fillRect(0,0,1024,1024);const r=16;for(let o=0;o<1024;o+=r)for(let a=0;a<1024;a+=r){const c=(a+o)/r%4;e.fillStyle=c<2?"#1C2230":"#0E121A",e.fillRect(a,o,r-1,r-1),e.fillStyle=c===0?"#273042":"#151A24",e.fillRect(a+2,o+2,r-5,r-5),s.fillStyle=c<2?"#B0B0B0":"#555555",s.fillRect(a+1,o+1,r-2,r-2)}return{map:Zn(t,6,6),bumpMap:Zn(n,6,6)}}function fm(){const{canvas:e,ctx:n}=qn(2048,1024);n.fillStyle="#0B101E",n.fillRect(0,0,2048,1024),n.strokeStyle="rgba(255, 255, 255, 0.06)",n.lineWidth=2;for(let s=.15;s<.9;s+=.15)n.beginPath(),n.moveTo(2048*s,0),n.lineTo(2048*s,1024),n.stroke();return n.fillStyle="#FFB800",n.fillRect(2048*.76,0,2048*.24,1024),n.fillStyle="#FFB800",n.beginPath(),n.moveTo(2048*.68,1024*.5),n.lineTo(2048*.78,1024*.18),n.lineTo(2048*.78,1024*.82),n.closePath(),n.fill(),n.fillStyle="#E11D48",n.fillRect(2048*.08,1024*.35,2048*.66,12),n.fillRect(2048*.08,1024*.64,2048*.66,12),n.save(),n.translate(2048*.54,1024*.5),n.rotate(-Math.PI*.5),n.fillStyle="#E11D48",n.strokeStyle="#FFFFFF",n.lineWidth=4,n.font='900 92px "Arial Black", Impact, sans-serif',n.textAlign="center",n.textBaseline="middle",n.strokeText("1",0,0),n.fillText("1",0,0),n.restore(),n.save(),n.translate(2048*.38,1024*.5),n.fillStyle="#E11D48",n.fillRect(-26,-22,52,22),n.fillStyle="#10B981",n.fillRect(-26,0,52,22),n.fillStyle="#FFFFFF",n.font="bold 15px Arial, sans-serif",n.textAlign="center",n.fillText("TAG",0,-10),n.fillText("HEUER",0,11),n.restore(),n.save(),n.translate(2048*.66,1024*.5),n.fillStyle="#FFFFFF",n.font='bold 26px "Arial Black", sans-serif',n.textAlign="center",n.fillText("ORACLE",0,-14),n.fillText("Mobil 1",0,18),n.restore(),ea(n,2048,1024,(s,r)=>{const o=-327.67999999999995*r;s.fillStyle="#FFFFFF",s.font='900 48px "Arial Black", sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText("BYB",o-28,-28),s.fillStyle="#FFB800",s.fillText("I",o+34,-28),s.fillStyle="#FFFFFF",s.fillText("T",o+62,-28);const a=(.72-.5)*2048*r;fl(s,a,0,r*.85,.85)}),Zn(e)}function mc(i){const{canvas:n,ctx:s}=qn(2048,1024);s.fillStyle="#0B101E",s.fillRect(0,0,2048,1024),s.fillStyle="#121622",s.fillRect(0,0,2048,1024*.1),s.fillRect(0,1024*.9,2048,1024*.1),s.fillStyle="#05070E";for(let r=0;r<8;r++){const o=2048*(.34+r*.045);s.fillRect(o,1024*.53,44,1024*.055),s.fillRect(o,1024*.415,44,1024*.055)}return ea(s,2048,1024,(r,o)=>{r.strokeStyle="#E11D48",r.lineWidth=10,r.beginPath(),r.moveTo(-2048*.36*o,-86),r.lineTo(2048*.4*o,-74),r.lineTo(2048*.44*o,60),r.stroke();const a=-2048*.14*o;r.save(),r.translate(a,-58),r.rotate(-.08*o),r.font='italic 900 58px "Arial Black", Impact, sans-serif',r.textAlign="center",r.textBaseline="middle",r.lineWidth=6,r.strokeStyle="#FFB800",r.fillStyle="#E11D48",r.strokeText("Red Bull",0,0),r.fillText("Red Bull",0,0),r.restore();const c=2048*.04*o;r.fillStyle="#FFFFFF",r.font='900 108px "Arial Black", Impact, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText("ORACLE",c,18);const l=2048*.28*o,h=88;r.fillStyle="#FFB800",r.strokeStyle="#E11D48",r.lineWidth=5,r.beginPath(),r.ellipse(l,h,74,30,0,0,Math.PI*2),r.fill(),r.stroke(),r.fillStyle="#B91C1C",r.font='900 28px "Arial Black", sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText("RAUCH",l,h+1);const d=-2048*.3*o;r.fillStyle="#E2E8F0",r.font="bold 26px Arial, sans-serif",r.fillText("HONDA",d,-18),r.font="bold 18px Arial, sans-serif",r.fillText("SIEMENS",d,46)}),Zn(n)}function pm(){const{canvas:e,ctx:n}=qn(2048,1024);return n.fillStyle="#0B101E",n.fillRect(0,0,2048,1024),n.fillStyle="#FFB800",n.beginPath(),n.moveTo(2048*.56,1024*.5),n.lineTo(2048*.74,1024*.12),n.lineTo(2048,1024*.12),n.lineTo(2048,1024*.88),n.lineTo(2048*.74,1024*.88),n.closePath(),n.fill(),n.fillStyle="#E11D48",n.fillRect(2048*.08,1024*.47,2048*.52,1024*.06),ea(n,2048,1024,(s,r)=>{const o=204.8*r;fl(s,o,-18,r*2.15,1.85);const a=-2048*.22*r;s.fillStyle="#E11D48",s.strokeStyle="#FFFFFF",s.lineWidth=4,s.font='900 76px "Arial Black", Impact, sans-serif',s.textAlign="center",s.textBaseline="middle",s.strokeText("1",a,-48),s.fillText("1",a,-48);const c=-2048*.3*r;s.fillStyle="#FFFFFF",s.font='900 34px "Arial Black", sans-serif',s.fillText("HRC",c,34),s.font="bold 20px Arial, sans-serif",s.fillText("HONDA RBPT",c,64)}),Zn(e)}function _c(i){const{canvas:n,ctx:s}=qn(2048,1024);return s.fillStyle="#0D1322",s.fillRect(0,0,2048,1024),s.fillStyle="#E11D48",s.fillRect(0,0,2048,36),s.fillRect(0,988,2048,36),i==="front"?(s.fillStyle="#FFFFFF",s.font='900 112px "Arial Black", sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText("BYBIT",2048*.26,1024*.35),s.fillText("BYBIT",2048*.74,1024*.35),s.fillStyle="#E11D48",s.font='900 96px "Arial Black", sans-serif',s.fillText("Red Bull",2048*.26,1024*.7),s.fillText("Red Bull",2048*.74,1024*.7),s.fillStyle="#FFFFFF",s.font="bold 64px Arial, sans-serif",s.fillText("Mobil 1",2048*.5,1024*.5)):(s.fillStyle="#FFFFFF",s.font='900 150px "Arial Black", sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText("ORACLE",2048*.5,1024*.28),s.fillStyle="#FFFFFF",s.font='900 140px "Arial Black", sans-serif',s.fillText("BYB",2048*.43,1024*.72),s.fillStyle="#FFB800",s.fillText("I",2048*.58,1024*.72),s.fillStyle="#FFFFFF",s.fillText("T",2048*.65,1024*.72)),Zn(n)}function mm(){const{canvas:t,ctx:e}=qn(512,512);e.fillStyle="#94A3B8",e.fillRect(0,0,512,512),e.fillStyle="#334155";for(let n=0;n<512;n+=8)e.fillRect(0,n,512,3);e.strokeStyle="#E2E8F0",e.lineWidth=1;for(let n=0;n<512;n+=6)e.beginPath(),e.moveTo(n,0),e.lineTo(n,512),e.stroke();return Zn(t,4,4)}function gc(i){const{canvas:e,ctx:n}=qn(1024,1024),s=1024*.5,r=1024*.5;n.fillStyle="#14171F",n.fillRect(0,0,1024,1024),n.strokeStyle="#1E2330",n.lineWidth=14,n.beginPath(),n.arc(s,r,465,0,Math.PI*2),n.stroke(),n.strokeStyle="#E11D48",n.lineWidth=22,n.beginPath(),n.arc(s,r,392,.18,Math.PI-.18),n.stroke(),n.beginPath(),n.arc(s,r,392,Math.PI+.18,Math.PI*2-.18),n.stroke(),n.save(),n.translate(s,r),i<0&&n.scale(-1,1);const o=(a,c,l,h,d)=>{n.fillStyle=d,n.font='900 44px "Arial Black", sans-serif',n.textAlign="center",n.textBaseline="middle";for(let u=0;u<a.length;u++){const f=l+u*h;n.save(),n.rotate(f),n.translate(0,-432),n.fillText(a[u],0,0),n.restore()}};o("PIRELLI",432,-.36,.12,"#FFB800"),o("P ZERO",432,Math.PI-.3,.12,"#E11D48"),n.restore(),n.fillStyle="#0D1017",n.beginPath(),n.arc(s,r,330,0,Math.PI*2),n.fill(),n.strokeStyle="#E11D48",n.lineWidth=12,n.beginPath(),n.arc(s,r,316,0,Math.PI*2),n.stroke(),n.strokeStyle="#FFB800",n.lineWidth=6,n.beginPath(),n.arc(s,r,296,0,Math.PI*2),n.stroke(),n.strokeStyle="#1F2637",n.lineWidth=8;for(let a=0;a<10;a++){const c=a/10*Math.PI*2;n.beginPath(),n.moveTo(s+Math.cos(c)*90,r+Math.sin(c)*90),n.lineTo(s+Math.cos(c)*285,r+Math.sin(c)*285),n.stroke()}return Zn(e)}function _m(){const i=um(),t=fm(),e=mc(),n=mc(),s=pm(),r=_c("front"),o=_c("rear"),a=mm(),c=gc(-1),l=gc(1),h=new ei({color:16777215,map:t,roughness:.34,metalness:.18,clearcoat:.45,clearcoatRoughness:.22}),d=new ei({color:16777215,map:e,roughness:.34,metalness:.18,clearcoat:.45,clearcoatRoughness:.22}),u=new ei({color:16777215,map:n,roughness:.34,metalness:.18,clearcoat:.45,clearcoatRoughness:.22}),f=new ei({color:16777215,map:s,roughness:.34,metalness:.18,clearcoat:.45,clearcoatRoughness:.22}),_=new ei({color:16777215,map:r,roughness:.32,metalness:.22,clearcoat:.5,clearcoatRoughness:.18}),g=new ei({color:16777215,map:o,roughness:.32,metalness:.22,clearcoat:.5,clearcoatRoughness:.18}),m=new ei({color:new Ct("#151922"),map:i.map,bumpMap:i.bumpMap,bumpScale:.003,roughness:.38,metalness:.25,clearcoat:.35,clearcoatRoughness:.25}),p=new Ve({color:new Ct("#94A3B8"),metalness:.85,roughness:.26}),S=new Ve({color:new Ct("#CBD5E1"),map:a,bumpMap:a,bumpScale:.006,metalness:.82,roughness:.32}),y=new Ve({color:new Ct("#B45309"),metalness:.88,roughness:.24,emissive:new Ct(16733440),emissiveIntensity:.15}),x=new Ve({color:new Ct("#E11D48"),metalness:.72,roughness:.22}),L=new Ve({color:new Ct("#10B981"),metalness:.45,roughness:.3}),A=new Ve({color:new Ct("#14171F"),roughness:.78,metalness:.05}),T=new Ve({color:16777215,map:c,roughness:.65,metalness:.12}),P=new Ve({color:16777215,map:l,roughness:.65,metalness:.12}),M=new Ve({color:new Ct("#262B36"),roughness:.45,metalness:.55,emissive:new Ct(16729344),emissiveIntensity:.08}),v=new Ve({color:new Ct("#E11D48"),metalness:.65,roughness:.25}),R=new Ve({color:new Ct("#FFD000"),roughness:.25,metalness:.15});return{monocoqueLiveryMat:h,sidepodLeftMat:d,sidepodRightMat:u,engineCoverMat:f,frontWingMat:_,rearWingMat:g,carbonWeaveMat:m,titaniumMat:p,radiatorCoreMat:S,inconelExhaustMat:y,camCoverRedMat:x,ersGreenMat:L,pirelliTireMat:A,pirelliSidewallLeftMat:T,pirelliSidewallRightMat:P,brakeDiscMat:M,bremboCaliperMat:v,yellowTcamMat:R}}function qi(i,t){return i.name=t,i.userData.partId=t,i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.userData.partId=t)}),i}function cs({zMin:i,zMax:t,zSegments:e=36,chordSegments:n=14,xLeadingFn:s,xTrailingFn:r,yBaseFn:o,thickness:a=.016,camber:c=.01}){const l=[],h=[],d=[],u=n*2;for(let g=0;g<=e;g++){const m=g/e,p=Vt.lerp(i,t,m),S=s(p),y=r(p),x=o(p);for(let L=0;L<=u;L++){const A=L/u,T=A<=.5,P=T?A*2:(1-A)*2,M=Vt.lerp(y,S,P),v=Math.sin(P*Math.PI),R=c*v,N=a*.5*Math.pow(v,.75),U=x+R+(T?N:-N);l.push(M,U,p),h.push(m,A)}}const f=u+1;for(let g=0;g<e;g++)for(let m=0;m<u;m++){const p=g*f+m,S=(g+1)*f+m,y=(g+1)*f+(m+1),x=g*f+(m+1);d.push(p,S,x),d.push(S,y,x)}const _=new Se;return _.setAttribute("position",new jt(l,3)),_.setAttribute("uv",new jt(h,2)),_.setIndex(d),_.computeVertexNormals(),_}function gm(i){const t=new te,n=Me([{x:1.35,yBottom:.34,yTop:.56,zHalfWidth:.25,topWidthRatio:.74,bottomWidthRatio:.9,crown:.022},{x:1.62,yBottom:.31,yTop:.5,zHalfWidth:.215,topWidthRatio:.74,bottomWidthRatio:.88,crown:.02},{x:1.9,yBottom:.27,yTop:.43,zHalfWidth:.18,topWidthRatio:.75,bottomWidthRatio:.88,crown:.018},{x:2.18,yBottom:.23,yTop:.36,zHalfWidth:.148,topWidthRatio:.76,bottomWidthRatio:.86,crown:.015},{x:2.44,yBottom:.19,yTop:.29,zHalfWidth:.118,topWidthRatio:.78,bottomWidthRatio:.86,crown:.012},{x:2.66,yBottom:.16,yTop:.24,zHalfWidth:.094,topWidthRatio:.8,bottomWidthRatio:.85,crown:.008},{x:2.82,yBottom:.14,yTop:.21,zHalfWidth:.075,topWidthRatio:.82,bottomWidthRatio:.84,crown:.005}],48,!0),s=new j(n,i.monocoqueLiveryMat);t.add(s);for(const c of[-1,1]){const l=[{x:2.38,yBottom:.075,yTop:.21,zCenter:c*.11,zHalfWidth:.012,topWidthRatio:.9,bottomWidthRatio:.9},{x:2.5,yBottom:.068,yTop:.2,zCenter:c*.11,zHalfWidth:.014,topWidthRatio:.9,bottomWidthRatio:.9},{x:2.62,yBottom:.078,yTop:.18,zCenter:c*.11,zHalfWidth:.01,topWidthRatio:.9,bottomWidthRatio:.9}],h=Me(l,20,!0);t.add(new j(h,i.carbonWeaveMat))}[{xLeadCenter:2.85,xLeadTip:2.74,chord:.16,yCenter:.048,yPeak:.078,yTip:.065,camber:.008},{xLeadCenter:2.71,xLeadTip:2.61,chord:.14,yCenter:.068,yPeak:.102,yTip:.088,camber:.011},{xLeadCenter:2.58,xLeadTip:2.48,chord:.13,yCenter:.094,yPeak:.13,yTip:.114,camber:.013},{xLeadCenter:2.45,xLeadTip:2.35,chord:.12,yCenter:.122,yPeak:.16,yTip:.142,camber:.015}].forEach((c,l)=>{const h=cs({zMin:-.98,zMax:.98,zSegments:44,chordSegments:12,xLeadingFn:u=>{const f=Math.abs(u)/.98;return Vt.lerp(c.xLeadCenter,c.xLeadTip,Math.pow(f,1.35))},xTrailingFn:u=>{const f=Math.abs(u)/.98;return Vt.lerp(c.xLeadCenter,c.xLeadTip,Math.pow(f,1.35))-c.chord*(1-.12*f)},yBaseFn:u=>{const f=Math.abs(u)/.98,_=Math.exp(-Math.pow(f/.24,2)),g=Math.sin(Math.min(1,f)*Math.PI*.85);return c.yCenter*_+Vt.lerp(c.yPeak,c.yTip,f)*(1-_*.65)+.012*g},thickness:.015-l*.0015,camber:c.camber}),d=l===1||l===2?i.frontWingMat:i.carbonWeaveMat;t.add(new j(h,d))});const o=[-.78,-.52,-.26,.26,.52,.78],a=new $t(.32,.055,.005);for(const c of o){const l=new j(a,i.titaniumMat);l.position.set(2.56,.105,c),l.rotation.z=-.18,t.add(l)}for(const c of[-1,1]){const l=[{x:2.25,yBottom:.045,yTop:.34,zCenter:c*.995,zHalfWidth:.01,topWidthRatio:.8,bottomWidthRatio:1},{x:2.44,yBottom:.042,yTop:.31,zCenter:c*.99,zHalfWidth:.011,topWidthRatio:.8,bottomWidthRatio:1},{x:2.64,yBottom:.04,yTop:.24,zCenter:c*.985,zHalfWidth:.01,topWidthRatio:.8,bottomWidthRatio:1},{x:2.82,yBottom:.042,yTop:.14,zCenter:c*.98,zHalfWidth:.008,topWidthRatio:.8,bottomWidthRatio:1}],h=Me(l,24,!0),d=new j(h,i.carbonWeaveMat);d.rotation.x=c*.05,t.add(d);const u=new $t(.52,.012,.014),f=new j(u,i.camCoverRedMat);f.position.set(2.52,.25,c*.992),f.rotation.z=-.32,t.add(f);const _=[{x:2.25,yBottom:.038,yTop:.055,zCenter:c*.975,zHalfWidth:.032},{x:2.55,yBottom:.038,yTop:.055,zCenter:c*.975,zHalfWidth:.035},{x:2.8,yBottom:.04,yTop:.054,zCenter:c*.97,zHalfWidth:.024}];t.add(new j(Me(_,18,!0),i.carbonWeaveMat));const g=new we([new b(2.68,.14,c*1.002),new b(2.52,.18,c*1.012),new b(2.34,.23,c*1.015)]),m=new ye(g,18,.009,10,!1);t.add(new j(m,i.carbonWeaveMat));const p=[{x:2.06,yBottom:.345,yTop:.375,zCenter:c*.165,zHalfWidth:.025},{x:2.15,yBottom:.342,yTop:.378,zCenter:c*.185,zHalfWidth:.032},{x:2.23,yBottom:.348,yTop:.372,zCenter:c*.175,zHalfWidth:.018}];t.add(new j(Me(p,16,!0),i.carbonWeaveMat))}return qi(t,"part_01_front_wing")}function vm(i){const t=new te,n=Me([{x:-.25,yBottom:.05,yTop:.66,zHalfWidth:.31,topWidthRatio:.76,bottomWidthRatio:.88,crown:.024},{x:-.02,yBottom:.05,yTop:.68,zHalfWidth:.33,topWidthRatio:.78,bottomWidthRatio:.9,crown:.022},{x:.22,yBottom:.05,yTop:.64,zHalfWidth:.34,topWidthRatio:.82,bottomWidthRatio:.9,crown:-.035},{x:.48,yBottom:.052,yTop:.63,zHalfWidth:.33,topWidthRatio:.8,bottomWidthRatio:.88,crown:-.032},{x:.74,yBottom:.058,yTop:.63,zHalfWidth:.31,topWidthRatio:.76,bottomWidthRatio:.86,crown:.018},{x:.98,yBottom:.14,yTop:.61,zHalfWidth:.29,topWidthRatio:.75,bottomWidthRatio:.86,crown:.022},{x:1.2,yBottom:.25,yTop:.58,zHalfWidth:.265,topWidthRatio:.74,bottomWidthRatio:.88,crown:.024},{x:1.36,yBottom:.34,yTop:.56,zHalfWidth:.25,topWidthRatio:.74,bottomWidthRatio:.9,crown:.022}],52,!0);t.add(new j(n,i.monocoqueLiveryMat));const s=[{x:.05,yBottom:.48,yTop:.655,zHalfWidth:.21,topWidthRatio:.95,bottomWidthRatio:.85,crown:-.04},{x:.28,yBottom:.44,yTop:.64,zHalfWidth:.23,topWidthRatio:.95,bottomWidthRatio:.85,crown:-.05},{x:.56,yBottom:.45,yTop:.635,zHalfWidth:.21,topWidthRatio:.92,bottomWidthRatio:.82,crown:-.04},{x:.78,yBottom:.52,yTop:.642,zHalfWidth:.15,topWidthRatio:.88,bottomWidthRatio:.8,crown:-.02}];t.add(new j(Me(s,32,!0),i.pirelliTireMat));const r=new we([new b(.58,.635,-.22),new b(.24,.65,-.24),new b(.04,.675,0),new b(.24,.65,.24),new b(.58,.635,.22)]),o=new ye(r,28,.024,12,!1);t.add(new j(o,i.carbonWeaveMat));const a=[{x:.08,yBottom:.24,yTop:.6,zHalfWidth:.17,topWidthRatio:.85,bottomWidthRatio:.75},{x:.26,yBottom:.18,yTop:.46,zHalfWidth:.18,topWidthRatio:.9,bottomWidthRatio:.8},{x:.46,yBottom:.22,yTop:.38,zHalfWidth:.16,topWidthRatio:.88,bottomWidthRatio:.8}];t.add(new j(Me(a,24,!0),i.carbonWeaveMat));const c=new te;c.position.set(.24,.66,0);const l=new dr(.125,28,22);l.scale(1.16,.96,.92),c.add(new j(l,i.monocoqueLiveryMat));const h=new jo(.085,.11,16);h.rotateZ(Math.PI*.5);const d=new j(h,i.yellowTcamMat);d.position.set(-.08,.02,0),c.add(d);const u=new ie(.118,.118,.072,24,1,!0,-Math.PI*.38,Math.PI*.76);u.rotateY(Math.PI*.5);const f=new j(u,i.inconelExhaustMat);f.position.set(.018,.008,0),c.add(f),t.add(c);const _=new te;_.position.set(.58,.58,0),_.rotation.z=-.38;const g=new ie(.016,.018,.24,14);g.rotateZ(Math.PI*.5);const m=new j(g,i.titaniumMat);m.position.set(.11,0,0),_.add(m);const p=new $t(.028,.145,.27);_.add(new j(p,i.carbonWeaveMat));for(const A of[-1,1]){const T=new ie(.018,.018,.135,12),P=new j(T,i.pirelliTireMat);P.position.set(-.006,0,A*.125),_.add(P)}const S=new $t(.008,.058,.095),y=new j(S,i.ersGreenMat);y.position.set(-.016,.018,0),_.add(y);const x=[[-.018,-.032,-.055,i.camCoverRedMat],[-.018,-.038,0,i.yellowTcamMat],[-.018,-.032,.055,i.ersGreenMat],[-.018,.035,-.082,i.bremboCaliperMat],[-.018,.035,.082,i.yellowTcamMat]],L=new ie(.012,.012,.012,12);L.rotateZ(Math.PI*.5);for(const[A,T,P,M]of x){const v=new j(L,M);v.position.set(A,T,P),_.add(v)}t.add(_);for(const A of[-1,1]){const T=[{x:.57,yBottom:.605,yTop:.638,zCenter:A*.44,zHalfWidth:.062},{x:.62,yBottom:.602,yTop:.64,zCenter:A*.44,zHalfWidth:.068},{x:.67,yBottom:.608,yTop:.635,zCenter:A*.44,zHalfWidth:.048}];t.add(new j(Me(T,20,!0),i.carbonWeaveMat));const P=new $t(.006,.026,.095),M=new j(P,i.titaniumMat);M.position.set(.568,.621,A*.44),t.add(M);const v=new we([new b(.64,.59,A*.29),new b(.63,.61,A*.37),new b(.62,.615,A*.42)]),R=new ye(v,12,.008,8,!1);t.add(new j(R,i.carbonWeaveMat))}return qi(t,"part_02_monocoque")}function xm(i){const t=new te,e=new we([new b(.02,.65,-.26),new b(.32,.68,-.25),new b(.64,.695,-.18),new b(.84,.69,0),new b(.64,.695,.18),new b(.32,.68,.25),new b(.02,.65,.26)]),n=new ye(e,56,.026,16,!1);t.add(new j(n,i.titaniumMat));const s=new we([new b(.06,.672,-.255),new b(.34,.702,-.245),new b(.64,.715,-.175),new b(.83,.708,0),new b(.64,.715,.175),new b(.34,.702,.245),new b(.06,.672,.255)]),r=new ye(s,48,.014,12,!1);t.add(new j(r,i.carbonWeaveMat));const o=new we([new b(.84,.69,0),new b(.82,.625,0),new b(.8,.56,0)]),a=new ye(o,18,.022,14,!1);t.add(new j(a,i.carbonWeaveMat));const c=new ie(.026,.042,.035,16),l=new j(c,i.titaniumMat);l.position.set(.8,.565,0),t.add(l);for(const h of[-1,1]){const d=new ie(.028,.036,.06,16);d.rotateZ(Math.PI*.42);const u=new j(d,i.titaniumMat);u.position.set(.02,.65,h*.26),t.add(u)}return qi(t,"part_03_halo")}function vc(i,t){const e=i<0?"part_04_sidepod_left":"part_05_sidepod_right",n=i<0?t.sidepodLeftMat:t.sidepodRightMat,s=new te,r=[{x:-1.42,yBottom:.14,yTop:.38,zCenter:i*.2,zHalfWidth:.16,topWidthRatio:.78,bottomWidthRatio:.9,undercut:.18,crown:.015},{x:-1.04,yBottom:.14,yTop:.44,zCenter:i*.28,zHalfWidth:.22,topWidthRatio:.8,bottomWidthRatio:.9,undercut:.24,crown:.02},{x:-.68,yBottom:.14,yTop:.49,zCenter:i*.35,zHalfWidth:.26,topWidthRatio:.82,bottomWidthRatio:.92,undercut:.28,crown:.025},{x:-.32,yBottom:.14,yTop:.53,zCenter:i*.4,zHalfWidth:.29,topWidthRatio:.84,bottomWidthRatio:.94,undercut:.3,crown:.028},{x:.04,yBottom:.14,yTop:.56,zCenter:i*.42,zHalfWidth:.3,topWidthRatio:.86,bottomWidthRatio:.94,undercut:.3,crown:.03},{x:.34,yBottom:.16,yTop:.56,zCenter:i*.42,zHalfWidth:.29,topWidthRatio:.88,bottomWidthRatio:.92,undercut:.28,crown:.026},{x:.56,yBottom:.22,yTop:.56,zCenter:i*.41,zHalfWidth:.24,topWidthRatio:.88,bottomWidthRatio:.86,undercut:.24,crown:.018}],o=Me(r,48,!0);s.add(new j(o,n));const a=[{x:.48,yBottom:.38,yTop:.48,zCenter:i*.41,zHalfWidth:.17},{x:.57,yBottom:.36,yTop:.52,zCenter:i*.41,zHalfWidth:.18},{x:.6,yBottom:.36,yTop:.39,zCenter:i*.41,zHalfWidth:.16}];s.add(new j(Me(a,24,!0),t.carbonWeaveMat));const c=new $t(.016,.15,.28),l=new j(c,t.pirelliTireMat);l.position.set(.562,.44,i*.41),s.add(l);const h=new $t(.022,.01,.12);for(let x=0;x<8;x++){const L=.04-x*.095,A=Vt.lerp(.548,.47,x/7),T=i*Vt.lerp(.37,.31,x/7),P=new j(h,t.carbonWeaveMat);P.position.set(L,A,T),P.rotation.z=-.18,P.rotation.y=i*.15,s.add(P)}const d=new te;d.position.set(.06,.31,i*.39),d.rotation.set(i*.18,i*.1,.22);const u=new $t(.24,.12,.13);d.add(new j(u,t.radiatorCoreMat));const f=new $t(.25,.018,.14),_=new j(f,t.titaniumMat);_.position.set(0,.068,0),d.add(_);const g=new j(f,t.titaniumMat);g.position.set(0,-.068,0),d.add(g);const m=new we([new b(.06,.35,i*.35),new b(0,.33,i*.31),new b(-.12,.3,i*.28)]),p=new we([new b(.04,.26,i*.36),new b(-.04,.25,i*.32),new b(-.16,.24,i*.29)]),S=i<0?t.camCoverRedMat:t.titaniumMat,y=i<0?t.titaniumMat:t.camCoverRedMat;return s.add(new j(new ye(m,16,.014,10,!1),S)),s.add(new j(new ye(p,16,.012,10,!1),y)),s.add(d),qi(s,e)}function Mm(i){const t=new te,n=Me([{x:-1.88,yBottom:.18,yTop:.49,zHalfWidth:.16,topWidthRatio:.82,bottomWidthRatio:.88,crown:.015},{x:-1.52,yBottom:.16,yTop:.56,zHalfWidth:.21,topWidthRatio:.76,bottomWidthRatio:.9,crown:.022},{x:-1.16,yBottom:.15,yTop:.64,zHalfWidth:.25,topWidthRatio:.7,bottomWidthRatio:.92,crown:.028},{x:-.84,yBottom:.16,yTop:.72,zHalfWidth:.28,topWidthRatio:.66,bottomWidthRatio:.94,crown:.032},{x:-.54,yBottom:.18,yTop:.79,zHalfWidth:.3,topWidthRatio:.62,bottomWidthRatio:.94,crown:.036},{x:-.28,yBottom:.22,yTop:.85,zHalfWidth:.31,topWidthRatio:.6,bottomWidthRatio:.92,crown:.038},{x:-.08,yBottom:.36,yTop:.9,zHalfWidth:.31,topWidthRatio:.58,bottomWidthRatio:.9,crown:.035},{x:.05,yBottom:.56,yTop:.89,zHalfWidth:.23,topWidthRatio:.64,bottomWidthRatio:.86,crown:.025}],48,!0);t.add(new j(n,i.engineCoverMat));const s=new ie(.095,.105,.08,28,1,!1);s.rotateZ(Math.PI*.5);const r=new j(s,i.engineCoverMat);r.position.set(.03,.8,0),t.add(r);const o=new ie(.078,.078,.02,24);o.rotateZ(Math.PI*.5);const a=new j(o,i.pirelliTireMat);a.position.set(.062,.8,0),t.add(a);const c=new $t(.03,.14,.008),l=new j(c,i.carbonWeaveMat);l.position.set(.055,.8,0),t.add(l);const h=new ie(.085,.095,.03,24);h.rotateZ(Math.PI*.5);const d=new j(h,i.pirelliTireMat);d.position.set(-1.88,.44,0),t.add(d);const u=[{x:-1.52,yBottom:.52,yTop:.72,zHalfWidth:.007,topWidthRatio:.6,bottomWidthRatio:1},{x:-1.1,yBottom:.6,yTop:.79,zHalfWidth:.008,topWidthRatio:.6,bottomWidthRatio:1},{x:-.65,yBottom:.7,yTop:.85,zHalfWidth:.009,topWidthRatio:.6,bottomWidthRatio:1},{x:-.18,yBottom:.8,yTop:.9,zHalfWidth:.008,topWidthRatio:.6,bottomWidthRatio:1}];t.add(new j(Me(u,20,!0),i.carbonWeaveMat));const f=new $t(1.3,.012,.018),_=new j(f,i.camCoverRedMat);_.position.set(-.85,.81,0),_.rotation.z=.135,t.add(_);const g=new $t(.065,.055,.016),m=new j(g,i.carbonWeaveMat);m.position.set(-.04,.915,0),t.add(m);const p=new ie(.015,.015,.24,16);p.rotateX(Math.PI*.5);const S=new j(p,i.yellowTcamMat);S.position.set(-.04,.942,0),t.add(S);for(const y of[-1,1]){const x=new ie(.018,.018,.055,14);x.rotateZ(Math.PI*.5);const L=new j(x,i.yellowTcamMat);L.position.set(-.03,.942,y*.115),t.add(L)}return qi(t,"part_06_engine_cover")}function ym(i){const t=new te,e=new we([new b(-1.88,.45,0),new b(-2.02,.62,0),new b(-2.14,.78,0),new b(-2.22,.85,0),new b(-2.28,.76,0)]),n=new ye(e,32,.02,14,!1);t.add(new j(n,i.carbonWeaveMat));const s=[{x:-2.38,yBottom:.835,yTop:.88,zHalfWidth:.022},{x:-2.25,yBottom:.83,yTop:.888,zHalfWidth:.028},{x:-2.14,yBottom:.835,yTop:.865,zHalfWidth:.016}];t.add(new j(Me(s,18,!0),i.carbonWeaveMat));const r=cs({zMin:-.52,zMax:.52,zSegments:36,chordSegments:14,xLeadingFn:p=>{const S=Math.abs(p)/.52;return Vt.lerp(-2.22,-2.26,S*S)},xTrailingFn:p=>{const S=Math.abs(p)/.52;return Vt.lerp(-2.54,-2.55,S)},yBaseFn:p=>{const S=Math.abs(p)/.52;return Vt.lerp(.71,.745,Math.pow(S,1.4))},thickness:.026,camber:-.022});t.add(new j(r,i.rearWingMat));const o=new te;o.name="drsFlapPivot",o.position.set(-2.54,.84,0);const a=cs({zMin:-.515,zMax:.515,zSegments:32,chordSegments:12,xLeadingFn:()=>.16,xTrailingFn:()=>-.04,yBaseFn:p=>{const S=Math.abs(p)/.515;return Vt.lerp(-.045,-.025,Math.pow(S,1.5))},thickness:.018,camber:-.014});a.rotateZ(-.34);const c=new j(a,i.rearWingMat);o.add(c);const l=new $t(.045,.028,.01),h=new j(l,i.titaniumMat);h.position.set(.14,.01,0),o.add(h),t.add(o),t.userData.drsFlapPivot=o;for(const p of[-1,1]){const S=[{x:-2.68,yBottom:.42,yTop:.89,zCenter:p*.522,zHalfWidth:.01},{x:-2.5,yBottom:.36,yTop:.91,zCenter:p*.525,zHalfWidth:.012},{x:-2.3,yBottom:.34,yTop:.9,zCenter:p*.525,zHalfWidth:.012},{x:-2.12,yBottom:.38,yTop:.84,zCenter:p*.515,zHalfWidth:.009}];t.add(new j(Me(S,24,!0),i.carbonWeaveMat));const y=new $t(.54,.014,.016),x=new j(y,i.camCoverRedMat);x.position.set(-2.4,.885,p*.525),x.rotation.z=-.06,t.add(x);const L=new $t(.18,.008,.026);for(let A=0;A<4;A++){const T=new j(L,i.carbonWeaveMat);T.position.set(-2.34-A*.04,.78+A*.024,p*.528),T.rotation.z=.22,t.add(T)}}const d=cs({zMin:-.49,zMax:.49,zSegments:28,chordSegments:10,xLeadingFn:()=>-2.18,xTrailingFn:()=>-2.36,yBaseFn:p=>.42+.015*Math.pow(Math.abs(p)/.49,1.4),thickness:.015,camber:-.012});t.add(new j(d,i.carbonWeaveMat));const u=cs({zMin:-.49,zMax:.49,zSegments:28,chordSegments:10,xLeadingFn:()=>-2.32,xTrailingFn:()=>-2.48,yBaseFn:p=>.465+.015*Math.pow(Math.abs(p)/.49,1.4),thickness:.014,camber:-.014});t.add(new j(u,i.carbonWeaveMat));const f=new $t(.1,.075,.036),_=new j(f,i.carbonWeaveMat);_.position.set(-2.5,.35,0),t.add(_);const g=new $t(.012,.058,.022),m=new j(g,i.bremboCaliperMat);return m.position.set(-2.55,.35,0),t.add(m),qi(t,"part_11_rear_wing_drs")}function Sm(i){return{part_01_front_wing:gm(i),part_02_monocoque:vm(i),part_03_halo:xm(i),part_04_sidepod_left:vc(-1,i),part_05_sidepod_right:vc(1,i),part_06_engine_cover:Mm(i),part_11_rear_wing_drs:ym(i)}}function wm(i={}){const t=(A,T)=>i[A]?i[A]:new Ve(T),e=i.carbonFloorMat||i.carbonWeaveMat||i.carbonMat||t("_carbonFloor",{color:1448224,roughness:.38,metalness:.18}),n=i.carbonWeaveMat||i.carbonGlossMat||i.carbonMat||t("_carbonGloss",{color:1185052,roughness:.24,metalness:.22}),s=i.redAccentMat||i.crimsonRedMat||t("_redAccent",{color:14753066,roughness:.28,metalness:.15}),r=i.skidTitaniumMat||i.titaniumMat||t("_skidTitanium",{color:12103582,roughness:.32,metalness:.86}),o=i.plankResinMat||t("_plankResin",{color:6044193,roughness:.62,metalness:.05}),a=i.billetAluminumMat||i.aluminumMat||t("_billetAluminum",{color:13160664,roughness:.26,metalness:.88}),c=i.titaniumMat||t("_titanium",{color:10134189,roughness:.3,metalness:.84}),l=i.camCoverRedMat||t("_camCoverRed",{color:13111342,roughness:.22,metalness:.68}),h=i.ersGreenMat||t("_ersGreen",{color:366185,emissive:142370,emissiveIntensity:.35,roughness:.28,metalness:.45}),d=i.hvOrangeMat||i.amberAccentMat||t("_hvOrange",{color:16739072,roughness:.32,metalness:.18}),u=i.inconelExhaustMat||i.inconelMat||i.exhaustGlowMat||t("_inconelExhaust",{color:10388594,emissive:4526596,emissiveIntensity:.25,roughness:.34,metalness:.82}),f=i.brakeDiscMat||t("_brakeDisc",{color:2829619,emissive:3869954,emissiveIntensity:.15,roughness:.52,metalness:.42}),_=i.bremboCaliperMat||i.bremboRedMat||i.camCoverRedMat||t("_bremboCaliper",{color:14226468,roughness:.2,metalness:.58}),g=i.tireRubberMat||i.tireMat||t("_tireRubber",{color:1382171,roughness:.68,metalness:.06}),m=i.rimMagnesiumMat||i.rimMat||t("_rimMagnesium",{color:2237998,roughness:.28,metalness:.78}),p=i.pirelliSidewallLeftMat||i.pirelliSoftMat||s,S=i.pirelliSidewallRightMat||i.pirelliSoftMat||s,y=i.centerNutPortMat||l,x=i.centerNutStarboardMat||t("_centerNutStarboard",{color:959977,roughness:.22,metalness:.76}),L=i.rainLightLedMat||i.ledRedMat||t("_rainLightLed",{color:16719399,emissive:16714264,emissiveIntensity:1.8,roughness:.15,metalness:.1});return{carbonFloorMat:e,carbonGlossMat:n,redAccentMat:s,skidTitaniumMat:r,plankResinMat:o,billetAluminumMat:a,titaniumMat:c,camCoverRedMat:l,ersGreenMat:h,hvOrangeMat:d,inconelExhaustMat:u,brakeDiscMat:f,bremboCaliperMat:_,tireRubberMat:g,rimMagnesiumMat:m,pirelliSidewallLeftMat:p,pirelliSidewallRightMat:S,centerNutPortMat:y,centerNutStarboardMat:x,rainLightLedMat:L}}function vs(i){i.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)})}function bn(i,t,e,n,s){const r=new b().subVectors(t,i),o=r.length(),a=new b().addVectors(i,t).multiplyScalar(.5),c=new ie(1,1,o,14,1,!1),l=c.attributes.position;for(let f=0;f<l.count;f++)l.setX(f,l.getX(f)*(e*.5)),l.setZ(f,l.getZ(f)*(n*.5));c.computeVertexNormals();const h=new j(c,s);h.position.copy(a);const d=new b(0,1,0),u=r.clone().normalize();return Math.abs(u.dot(d))<.999&&h.quaternion.setFromUnitVectors(d,u),h}function Em(i){const t=new te;t.name="part_07_venturi_floor";const n=Me([{x:-2.15,yBottom:.095,yTop:.24,zHalfWidth:.54,topWidthRatio:.92,bottomWidthRatio:1,shoulderPower:1.2,crown:.015},{x:-1.85,yBottom:.068,yTop:.165,zHalfWidth:.62,topWidthRatio:.95,bottomWidthRatio:1,shoulderPower:1.3,crown:.01},{x:-1.35,yBottom:.036,yTop:.072,zHalfWidth:.76,topWidthRatio:.98,bottomWidthRatio:1,shoulderPower:1.4,crown:.005},{x:-.75,yBottom:.026,yTop:.058,zHalfWidth:.81,topWidthRatio:.99,bottomWidthRatio:1,shoulderPower:1.5,crown:.004},{x:-.1,yBottom:.022,yTop:.056,zHalfWidth:.82,topWidthRatio:.99,bottomWidthRatio:1,shoulderPower:1.5,crown:.004},{x:.65,yBottom:.019,yTop:.062,zHalfWidth:.8,topWidthRatio:.98,bottomWidthRatio:1,shoulderPower:1.4,crown:.006},{x:1.02,yBottom:.018,yTop:.082,zHalfWidth:.74,topWidthRatio:.94,bottomWidthRatio:1,shoulderPower:1.25,crown:.012},{x:1.18,yBottom:.02,yTop:.066,zHalfWidth:.42,topWidthRatio:.9,bottomWidthRatio:.96,shoulderPower:1.2,crown:.008}],48,!0),s=new j(n,i.carbonFloorMat);s.name="venturi_floor_main_deck",t.add(s);const r=[{x:-2.15,yBottom:.055,yTop:.145,zHalfWidth:.095,topWidthRatio:1,bottomWidthRatio:.65,shoulderPower:1.2},{x:-1.65,yBottom:.038,yTop:.092,zHalfWidth:.125,topWidthRatio:1,bottomWidthRatio:.75,shoulderPower:1.2},{x:-1.1,yBottom:.024,yTop:.06,zHalfWidth:.16,topWidthRatio:1,bottomWidthRatio:.9,shoulderPower:1.3},{x:.5,yBottom:.017,yTop:.048,zHalfWidth:.175,topWidthRatio:1,bottomWidthRatio:.92,shoulderPower:1.3},{x:1.18,yBottom:.015,yTop:.042,zHalfWidth:.115,topWidthRatio:.92,bottomWidthRatio:.85,shoulderPower:1.2}],o=new j(Me(r,32,!0),i.carbonGlossMat);o.name="venturi_central_keel",t.add(o);for(const u of[-1,1]){const f=u*.38,_=[{x:-2.15,yBottom:.115,yTop:.24,zCenter:f*1.06,zHalfWidth:.22,topWidthRatio:.86,bottomWidthRatio:1,crown:.022},{x:-1.72,yBottom:.075,yTop:.185,zCenter:f*1.03,zHalfWidth:.21,topWidthRatio:.88,bottomWidthRatio:1,crown:.018},{x:-1.35,yBottom:.036,yTop:.108,zCenter:f,zHalfWidth:.19,topWidthRatio:.84,bottomWidthRatio:1,crown:.014},{x:-.45,yBottom:.024,yTop:.088,zCenter:f*.96,zHalfWidth:.17,topWidthRatio:.82,bottomWidthRatio:1,crown:.012},{x:.35,yBottom:.022,yTop:.095,zCenter:f,zHalfWidth:.19,topWidthRatio:.86,bottomWidthRatio:1,crown:.014},{x:.95,yBottom:.02,yTop:.118,zCenter:f*1.08,zHalfWidth:.24,topWidthRatio:.9,bottomWidthRatio:1,crown:.018},{x:1.15,yBottom:.022,yTop:.125,zCenter:f*1.12,zHalfWidth:.25,topWidthRatio:.92,bottomWidthRatio:1,crown:.018}],g=new j(Me(_,32,!0),i.carbonFloorMat);g.name=`venturi_throat_tunnel_${u<0?"port":"starboard"}`,t.add(g)}const a=[.28,.42,.56,.7];for(const u of[-1,1])a.forEach((f,_)=>{const g=[{x:.65,yBottom:.018,yTop:.088-_*.005,zCenter:u*(f+.045),zHalfWidth:.0055,topWidthRatio:.7,bottomWidthRatio:1},{x:.82,yBottom:.017,yTop:.098-_*.004,zCenter:u*(f+.022),zHalfWidth:.006,topWidthRatio:.7,bottomWidthRatio:1},{x:.99,yBottom:.016,yTop:.112-_*.004,zCenter:u*(f+.006),zHalfWidth:.006,topWidthRatio:.7,bottomWidthRatio:1},{x:1.15,yBottom:.018,yTop:.118-_*.005,zCenter:u*f,zHalfWidth:.0045,topWidthRatio:.65,bottomWidthRatio:1}],m=new j(Me(g,16,!0),i.carbonGlossMat);m.name=`venturi_inlet_fence_${u<0?"L":"R"}_${_+1}`,t.add(m)});[-.58,-.38,-.18,.18,.38,.58].forEach((u,f)=>{const _=Math.sign(u),g=[{x:-2.15,yBottom:.068,yTop:.236,zCenter:u*1.04,zHalfWidth:.0055,topWidthRatio:.85,bottomWidthRatio:.65},{x:-1.85,yBottom:.052,yTop:.175,zCenter:u*1.02,zHalfWidth:.006,topWidthRatio:.85,bottomWidthRatio:.7},{x:-1.58,yBottom:.036,yTop:.112,zCenter:u,zHalfWidth:.0055,topWidthRatio:.85,bottomWidthRatio:.75},{x:-1.35,yBottom:.028,yTop:.072,zCenter:u-_*.015,zHalfWidth:.004,topWidthRatio:.8,bottomWidthRatio:.8}],m=new j(Me(g,16,!0),i.carbonGlossMat);m.name=`diffuser_vertical_strake_${f+1}`,t.add(m)});for(const u of[-1,1]){const f=new we([new b(-2.15,.165,u*.09),new b(-2.15,.235,u*.26),new b(-2.15,.238,u*.48),new b(-2.13,.185,u*.62)]),_=new j(new ye(f,24,.007,10,!1),i.carbonGlossMat);t.add(_)}for(const u of[-1,1]){const f=new we([new b(-1.32,.048,u*.755),new b(-.85,.056,u*.802),new b(-.25,.052,u*.812),new b(.32,.054,u*.8),new b(.75,.062,u*.778)]),_=new j(new ye(f,40,.014,12,!1),i.carbonGlossMat);_.name=`floor_edge_vortex_scroll_${u<0?"port":"starboard"}`,t.add(_);const g=new we([new b(-1.3,.042,u*.778),new b(-.75,.046,u*.816),new b(-.1,.042,u*.822),new b(.55,.045,u*.798),new b(.96,.052,u*.75)]),m=new j(new ye(g,40,.0055,8,!1),i.redAccentMat);m.name=`floor_edge_red_accent_${u<0?"port":"starboard"}`,t.add(m);for(const p of[-.95,-.35,.25]){const S=bn(new b(p,.042,u*.73),new b(p,.055,u*.8),.008,.004,i.titaniumMat);t.add(S)}}const l=new $t(2.65,.008,.28),h=new j(l,i.plankResinMat);return h.position.set(-.22,.019,0),h.name="fia_underfloor_plank",t.add(h),[{x:.92,z:0,w:.24,d:.11},{x:.28,z:0,w:.3,d:.12},{x:-.45,z:-.07,w:.28,d:.06},{x:-.45,z:.07,w:.28,d:.06},{x:-1.18,z:0,w:.32,d:.12}].forEach((u,f)=>{const _=new j(new $t(u.w,.006,u.d),i.skidTitaniumMat);_.position.set(u.x,.015,u.z),_.name=`titanium_skid_block_${f+1}`,t.add(_)}),vs(t),t}function bm(i){const t=new te;t.name="part_08_power_unit";const e=[],n=qs(-.12),s=qs(-.58),r=qs(-1.08),o=Math.min(.21,r.internalMaxZ-.008),a=[{x:-.92,yBottom:Math.max(.105,r.yBottom+.03),yTop:.162,zHalfWidth:.125,topWidthRatio:.95,bottomWidthRatio:.92},{x:-.52,yBottom:Math.max(.102,s.yBottom+.03),yTop:.162,zHalfWidth:.148,topWidthRatio:.96,bottomWidthRatio:.94},{x:-.08,yBottom:Math.max(.1,n.yBottom+.03),yTop:.16,zHalfWidth:.152,topWidthRatio:.96,bottomWidthRatio:.94}],c=new j(Me(a,24,!0),i.ersGreenMat);c.name="ers_lithium_ion_energy_store",t.add(c);for(const R of[-1,1]){const N=new we([new b(-.14,.155,R*.09),new b(-.32,.185,R*.125),new b(-.62,.245,R*.095),new b(-.88,.32,R*.055)]),U=new j(new ye(N,20,.0085,8,!1),i.hvOrangeMat);t.add(U)}const l=[{x:-.96,yBottom:.162,yTop:.335,zHalfWidth:.108,topWidthRatio:1.05,bottomWidthRatio:.82,shoulderPower:1.2},{x:-.58,yBottom:.162,yTop:.34,zHalfWidth:.118,topWidthRatio:1.08,bottomWidthRatio:.84,shoulderPower:1.2},{x:-.22,yBottom:.16,yTop:.338,zHalfWidth:.115,topWidthRatio:1.05,bottomWidthRatio:.82,shoulderPower:1.2}],h=new j(Me(l,28,!0),i.billetAluminumMat);h.name="v6_cnc_crankcase_block",t.add(h);for(let R=0;R<5;R++){const N=-.88+R*.15,U=new j(new $t(.016,.155,.235),i.titaniumMat);U.position.set(N,.245,0),t.add(U)}for(const R of[-1,1]){const N=new te;N.position.set(-.59,.305,R*.052),N.rotation.x=R*(Math.PI/4);const U=new j(new $t(.68,.115,.095),i.billetAluminumMat);U.position.set(0,.045,0),N.add(U);const H=new j(new $t(.69,.042,.102),i.camCoverRedMat);H.position.set(0,.118,0),H.name=`v6_cam_cover_${R<0?"port":"starboard"}`,N.add(H);for(let Y=0;Y<3;Y++){const Z=-.21+Y*.21,J=new j(new ie(.018,.021,.036,14),i.carbonGlossMat);J.position.set(Z,.145,0),N.add(J)}for(let Y=0;Y<4;Y++){const Z=-.285+Y*.19;for(const J of[-.044,.044]){const O=new j(new ie(.006,.006,.014,8),i.titaniumMat);O.position.set(Z,.138,J),N.add(O)}}t.add(N)}const d=new te;d.position.set(-.35,.18,-.14),d.name="mgu_k_unit";const u=new j(new ie(.046,.046,.22,24),i.ersGreenMat);u.rotation.z=Math.PI/2,d.add(u);for(let R=-.08;R<=.08;R+=.04){const N=new j(new ie(.052,.052,.008,24),i.billetAluminumMat);N.rotation.z=Math.PI/2,N.position.x=R,d.add(N)}t.add(d);const f=new j(new ie(.044,.044,.86,24),i.titaniumMat);f.rotation.z=Math.PI/2,f.position.set(-.58,.36,0),f.name="mgu_h_shaft_housing",t.add(f);const _=new j(new ai(.058,.026,16,28),i.billetAluminumMat);_.rotation.y=Math.PI/2,_.position.set(-.12,.36,0),_.name="turbo_compressor_volute",t.add(_);const g=new j(new ai(.062,.028,16,28),i.inconelExhaustMat);g.rotation.y=Math.PI/2,g.position.set(-1.04,.36,0),g.name="turbo_turbine_volute",t.add(g),e.push(g);const m=new te;m.position.set(-.12,.36,0),m.name="turbo_rotor_impeller";const p=new j(new ie(.014,.014,.96,16),i.titaniumMat);p.rotation.z=Math.PI/2,p.position.set(-.46,0,0),m.add(p);const S=10;for(let R=0;R<S;R++){const N=R/S*Math.PI*2,U=new j(new $t(.024,.044,.003),i.billetAluminumMat);U.position.set(.012,Math.cos(N)*.022,Math.sin(N)*.022),U.rotation.x=N,U.rotation.y=.38,m.add(U);const H=new j(new $t(.024,.046,.0035),i.inconelExhaustMat);H.position.set(-.92,Math.cos(N)*.023,Math.sin(N)*.023),H.rotation.x=N,H.rotation.y=-.38,m.add(H)}t.add(m);const y=[{x:-.94,yBottom:.455,yTop:.535,zHalfWidth:.072,topWidthRatio:.82,bottomWidthRatio:.92,crown:.014},{x:-.6,yBottom:.46,yTop:.558,zHalfWidth:.098,topWidthRatio:.86,bottomWidthRatio:.95,crown:.018},{x:-.24,yBottom:.458,yTop:.548,zHalfWidth:.086,topWidthRatio:.84,bottomWidthRatio:.92,crown:.015},{x:-.1,yBottom:.42,yTop:.495,zHalfWidth:.052,topWidthRatio:.88,bottomWidthRatio:.88,crown:.01}],x=new j(Me(y,28,!0),i.carbonGlossMat);x.name="carbon_intake_plenum",t.add(x);const L=new we([new b(-.12,.39,0),new b(-.08,.425,0),new b(-.12,.465,0)]),A=new j(new ye(L,16,.022,12,!1),i.carbonGlossMat);t.add(A);const T=[-.38,-.59,-.8];for(const R of[-1,1])T.forEach((N,U)=>{const H=new we([new b(N,.515,R*.042),new b(N,.455,R*.068),new b(N,.395,R*.095)]),Y=new j(new ye(H,14,.018,12,!1),i.titaniumMat);Y.name=`velocity_stack_trumpet_${R<0?"L":"R"}_${U+1}`,t.add(Y)});for(const R of[-1,1]){const N=new b(-.95,.365,R*Math.min(.115,o));T.forEach((J,O)=>{const Q=R*.145,nt=R*Math.min(.185,qs(J).internalMaxZ-.015),mt=new we([new b(J,.335,Q),new b(J-.04,.365+O*.014,nt),new b(-.86,.375-O*.01,R*.142),N]),Lt=new j(new ye(mt,28,.0165,12,!1),i.inconelExhaustMat);Lt.name=`inconel_header_runner_${R<0?"L":"R"}_${O+1}`,t.add(Lt),e.push(Lt)});const U=new we([N,new b(-1.01,.362,R*.072),new b(-1.04,.36,R*.028)]),H=new j(new ye(U,16,.022,12,!1),i.inconelExhaustMat);t.add(H),e.push(H);const Y=new we([new b(-.98,.345,R*.088),new b(-1.32,.382,R*.078),new b(-1.68,.415,R*.072),new b(-1.98,.432,R*.07)]),Z=new j(new ye(Y,28,.0115,10,!1),i.inconelExhaustMat);Z.name=`wastegate_tailpipe_${R<0?"port":"starboard"}`,t.add(Z),e.push(Z)}const P=new we([new b(-1.04,.36,0),new b(-1.28,.405,0),new b(-1.64,.438,0),new b(-1.98,.45,0)]),M=new j(new ye(P,32,.036,18,!1),i.inconelExhaustMat);M.name="central_inconel_tailpipe",t.add(M),e.push(M);const v=new j(new ai(.037,.0045,12,24),i.titaniumMat);return v.rotation.y=Math.PI/2,v.position.set(-1.98,.45,0),t.add(v),t.userData.exhaustGlowMeshes=e,t.userData.turboRotorMesh=m,vs(t),t}function Tm(i){const t=new te;t.name="part_09_gearbox";const e=[{x:-1.88,yBottom:.175,yTop:.375,zHalfWidth:.105,topWidthRatio:.86,bottomWidthRatio:.8,shoulderPower:1.3},{x:-1.68,yBottom:.158,yTop:.402,zHalfWidth:.135,topWidthRatio:.9,bottomWidthRatio:.84,shoulderPower:1.3},{x:-1.38,yBottom:.145,yTop:.418,zHalfWidth:.152,topWidthRatio:.92,bottomWidthRatio:.86,shoulderPower:1.35},{x:-1.12,yBottom:.138,yTop:.432,zHalfWidth:.165,topWidthRatio:.94,bottomWidthRatio:.88,shoulderPower:1.35}],n=new j(Me(e,32,!0),i.carbonGlossMat);n.name="gearbox_carbon_maincase",t.add(n);const s=new j(new $t(.032,.285,.325),i.titaniumMat);s.position.set(-1.136,.285,0),s.name="gearbox_ti_front_flange",t.add(s);const r=new j(new $t(.085,.235,.275),i.titaniumMat);r.position.set(-1.78,.28,0),r.name="gearbox_ti_rear_bulkhead",t.add(r);for(const d of[-1,1]){[[new b(-1.16,.17,d*.155),new b(-1.46,.39,d*.142)],[new b(-1.44,.17,d*.142),new b(-1.74,.37,d*.128)],[new b(-1.18,.39,d*.155),new b(-1.52,.18,d*.138)]].forEach(([_,g])=>{const m=bn(_,g,.018,.012,i.titaniumMat);t.add(m)});const f=new j(new ie(.048,.052,.036,20),i.billetAluminumMat);f.rotation.z=Math.PI/2,f.position.set(-1.78,.28,d*.148),t.add(f)}const o=new j(new $t(.24,.042,.14),i.billetAluminumMat);o.position.set(-1.38,.418,0),o.name="hydraulic_shift_manifold",t.add(o);for(let d=-1;d<=1;d++){const u=new j(new ie(.014,.014,.055,14),i.camCoverRedMat);u.rotation.z=Math.PI/2,u.position.set(-1.38+d*.065,.432,.055),t.add(u)}const a=[{x:-2.18,yBottom:.205,yTop:.295,zHalfWidth:.048,topWidthRatio:.88,bottomWidthRatio:.85},{x:-2.08,yBottom:.195,yTop:.315,zHalfWidth:.064,topWidthRatio:.9,bottomWidthRatio:.86},{x:-1.98,yBottom:.185,yTop:.34,zHalfWidth:.082,topWidthRatio:.9,bottomWidthRatio:.86},{x:-1.88,yBottom:.175,yTop:.368,zHalfWidth:.102,topWidthRatio:.9,bottomWidthRatio:.86}],c=new j(Me(a,24,!0),i.carbonFloorMat);c.name="fia_rear_impact_attenuator_cone",t.add(c);for(let d=0;d<4;d++){const u=-2.13+d*.068,f=d/3,_=new j(new $t(.012,Vt.lerp(.1,.17,f),Vt.lerp(.105,.185,f)),i.carbonGlossMat);_.position.set(u,Vt.lerp(.25,.27,f),0),t.add(_)}const l=new j(new $t(.022,.086,.044),i.carbonGlossMat);l.position.set(-2.182,.24,0),t.add(l);const h=new j(new $t(.012,.072,.03),i.rainLightLedMat);return h.position.set(-2.19,.24,0),h.name="fia_rain_light_led",t.add(h),t.userData.rainLightMesh=h,vs(t),t}function Zs({axleX:i,isFront:t,sideSign:e,mat:n,brakeDiscMeshes:s}){const r=new te;r.name=`suspension_corner_${t?"F":"R"}${e<0?"L":"R"}`;const o=e*(t?.23:.155),a=e*(t?.725:.675),c=e*(t?.755:.705),l=se.wheelRadius,h=new b(i,l+.115,a),d=new b(i+(t?.26:.28),t?.485:.415,o),u=new b(i-(t?.24:.18),t?.465:.398,o);r.add(bn(d,h,.042,.011,n.carbonGlossMat)),r.add(bn(u,h,.042,.011,n.carbonGlossMat));const f=new b(i,l-.118,a),_=new b(i+(t?.24:.26),t?.215:.195,o),g=new b(i-(t?.22:.18),t?.205:.185,o);r.add(bn(_,f,.048,.013,n.carbonGlossMat)),r.add(bn(g,f,.048,.013,n.carbonGlossMat));const m=t?new b(i+.12,.195,o*.92):new b(i+.22,.425,o*.92),p=t?new b(i+.02,l+.105,a-e*.02):new b(i+.02,l-.102,a-e*.02),S=bn(m,p,.026,.014,n.carbonGlossMat);S.name=t?"pullrod_strut":"pushrod_strut",r.add(S);const y=new b(i+(t?.09:-.11),l+(t?.04:-.03),o),x=new b(i+(t?.07:-.08),l+(t?.02:-.02),a);if(r.add(bn(y,x,.024,.01,n.titaniumMat)),!t){const U=new b(i+.02,.28,e*.155),H=new b(i,l,a),Y=bn(U,H,.036,.036,n.carbonGlossMat);Y.name="rear_carbon_driveshaft",r.add(Y);for(const Z of[U,H]){const J=new j(new ie(.032,.032,.045,16),n.titaniumMat);J.rotation.x=Math.PI/2,J.position.copy(Z),r.add(J)}}const L=new j(new ie(.082,.092,.245,18),n.billetAluminumMat);L.position.set(i,l,a),L.scale.set(.68,1,.42),L.name="cnc_upright_carrier",r.add(L);const A=new j(new $t(.14,.19,.045),n.carbonFloorMat);A.position.set(i+.06,l,a-e*.035),A.name="carbon_brake_cooling_scoop",r.add(A);const T=new te;T.position.set(i,l,c),T.name=`brake_disc_rotor_${t?"F":"R"}${e<0?"L":"R"}`;const P=new j(new ie(.164,.164,.032,36),n.brakeDiscMat);P.rotation.x=Math.PI/2,T.add(P);const M=new j(new ie(.092,.092,.04,24),n.titaniumMat);M.rotation.x=Math.PI/2,T.add(M);for(let U=0;U<12;U++){const H=U/12*Math.PI*2,Y=new j(new $t(.008,.052,.034),n.titaniumMat);Y.position.set(Math.cos(H)*.128,Math.sin(H)*.128,0),Y.rotation.z=H,T.add(Y)}r.add(T),s.push(P);const v=t?-Math.PI*.18:Math.PI*.18,R=new te;R.position.set(i+Math.cos(v)*.125,l+Math.sin(v)*.125,c),R.rotation.z=v,R.name="brembo_6piston_caliper";const N=new j(new $t(.068,.135,.062),n.bremboCaliperMat);R.add(N);for(let U=-1;U<=1;U++){const H=new j(new ie(.015,.015,.066,14),n.titaniumMat);H.rotation.x=Math.PI/2,H.position.set(.008,U*.036,0),R.add(H)}return r.add(R),r}function Am(i){const t=new te;t.name="part_10_suspension_brakes";const e=new te;e.name="suspension_left",e.userData.sideSign=-1;const n=new te;n.name="suspension_right",n.userData.sideSign=1;const s=[];return e.add(Zs({axleX:se.frontAxleX,isFront:!0,sideSign:-1,mat:i,brakeDiscMeshes:s})),e.add(Zs({axleX:se.rearAxleX,isFront:!1,sideSign:-1,mat:i,brakeDiscMeshes:s})),n.add(Zs({axleX:se.frontAxleX,isFront:!0,sideSign:1,mat:i,brakeDiscMeshes:s})),n.add(Zs({axleX:se.rearAxleX,isFront:!1,sideSign:1,mat:i,brakeDiscMeshes:s})),t.add(e),t.add(n),t.userData.brakeDiscMeshes=s,vs(t),t}function Rm(i,t,e){const n=e*.5,s=e*.36,r=e*.44,o=[];o.push(new _t(t,-r)),o.push(new _t(t+.018,-n*.94)),o.push(new _t(t+.055,-n)),o.push(new _t(i-.048,-n*.98)),o.push(new _t(i-.016,-s*1.12)),o.push(new _t(i-.003,-s*.72)),o.push(new _t(i,0)),o.push(new _t(i-.003,s*.72)),o.push(new _t(i-.016,s*1.12)),o.push(new _t(i-.048,n*.98)),o.push(new _t(t+.055,n)),o.push(new _t(t+.018,n*.94)),o.push(new _t(t,r));const c=new hl(o).getPoints(36),l=new $o(c,56);return l.rotateX(Math.PI/2),l.computeVertexNormals(),l}function Cm({id:i,x:t,y:e,z:n,tireWidth:s,sideSign:r,axleSign:o,mat:a,spinMeshes:c}){const l=new te;l.name=`wheel_${i}`,l.position.set(t,e,n),l.userData.sideSign=r,l.userData.axleSign=o,l.userData.wheelId=i;const h=se.wheelRadius,d=.2286,u=s*.5,f=new te;f.name=`wheel_spin_${i}`;const _=Rm(h,d,s),g=new j(_,a.tireRubberMat);g.name=`pirelli_slick_tire_${i}`,f.add(g);const m=new ie(d,d,s*.86,40,1,!0);m.rotateX(Math.PI/2);const p=new j(m,a.rimMagnesiumMat);f.add(p);const S=new j(new ai(d,.009,14,48),a.billetAluminumMat);S.position.z=r*(u*.88),f.add(S);const y=new ie(d-.004,d*.38,.026,40);y.rotateX(Math.PI/2);const x=new j(y,a.carbonGlossMat);x.position.z=r*(u*.86),x.name=`aero_wheel_cover_${i}`,f.add(x);const L=r<0?a.pirelliSidewallLeftMat:a.pirelliSidewallRightMat,A=new Jo(d+.036,d+.072,48);r<0&&A.rotateY(Math.PI);const T=new j(A,L);T.position.z=r*(u*.992),f.add(T);const P=new j(new ai(d*.76,.0045,10,44),a.redAccentMat);P.position.z=r*(u*.895),f.add(P);const M=r<0?a.centerNutPortMat:a.centerNutStarboardMat,v=new ie(.038,.046,.036,12);v.rotateX(Math.PI/2);const R=new j(v,M);R.position.z=r*(u*.9),R.name=`center_lock_nut_${i}`,f.add(R);const N=new j(new ie(.022,.022,.044,16).rotateX(Math.PI/2),a.titaniumMat);N.position.z=r*(u*.91),f.add(N),l.add(f),c.push(f);const U=new te;U.name=`over_wheel_wake_winglet_${i}`;const H=-r*(u*.82),Y=[],Z=o>0?Math.PI*.18:Math.PI*.22,J=o>0?Math.PI*.72:Math.PI*.68,O=h+.034;for(let zt=0;zt<=10;zt++){const I=zt/10,k=Vt.lerp(Z,J,I),X=Math.cos(k)*O,rt=Math.sin(k)*O,at=H+r*Math.sin(I*Math.PI)*.055;Y.push(new b(X,rt,at))}const Q=new we(Y),nt=new j(new ye(Q,28,.015,12,!1),a.carbonGlossMat);U.add(nt);const mt=new we([new b(.04*o,.08,-r*(u*.55)),new b(.12*o,h*.68,H),Y[2]]),Lt=new j(new ye(mt,16,.011,8,!1),a.carbonGlossMat);return U.add(Lt),l.add(U),l}function Pm(i){const t=new te;t.name="part_12_wheels_tires";const e=[],n=se.wheelRadius;return[{id:"FL",x:se.frontAxleX,y:n,z:-se.frontTrackHalfZ,tireWidth:se.frontTireWidth,sideSign:-1,axleSign:1},{id:"FR",x:se.frontAxleX,y:n,z:se.frontTrackHalfZ,tireWidth:se.frontTireWidth,sideSign:1,axleSign:1},{id:"RL",x:se.rearAxleX,y:n,z:-se.rearTrackHalfZ,tireWidth:se.rearTireWidth,sideSign:-1,axleSign:-1},{id:"RR",x:se.rearAxleX,y:n,z:se.rearTrackHalfZ,tireWidth:se.rearTireWidth,sideSign:1,axleSign:-1}].forEach(r=>{const o=Cm({...r,mat:i,spinMeshes:e});t.add(o)}),t.userData.spinMeshes=e,vs(t),t}function Lm(i={}){const t=wm(i),e=Em(t),n=bm(t),s=Tm(t),r=Am(t),o=Pm(t);return{part_07_venturi_floor:e,part_08_power_unit:n,part_09_gearbox:s,part_10_suspension_brakes:r,part_12_wheels_tires:o}}const rs=new Set(["part_01_front_wing","part_04_sidepod_left","part_05_sidepod_right","part_06_engine_cover","part_11_rear_wing_drs"]),Dm=new Set(["part_02_monocoque","part_03_halo","part_07_venturi_floor","part_08_power_unit","part_09_gearbox","part_10_suspension_brakes","part_12_wheels_tires"]),xc=Object.freeze({m1_full_cad_explode:{id:"m1_full_cad_explode",name:"Full 12-Part Staggered CAD Explosion",durationSec:2.6,windows:{t0_anticipation:[0,.18],t1_primary_drive:[.18,.65],t2_apex_secondary:[.65,.84],t3_overshoot_settle:[.84,1]},secondaryEffects:["3D CAD datum leader lines & floating telemetry pins","Pneumatic latch + servo frequency sweep Web Audio foley","Dynamic studio floor pit recession"]},m2_aero_strip_powertrain:{id:"m2_aero_strip_powertrain",name:"Aero Shell Strip & V6 Power Unit Cutaway",durationSec:2.2,windows:{t0_anticipation:[0,.16],t1_primary_drive:[.16,.64],t2_apex_secondary:[.64,.82],t3_overshoot_settle:[.82,1]},secondaryEffects:["Thermal Inconel exhaust header glow shader","V6 Turbo Hybrid idle + MGU-H 3.2kHz whistle audio","Drivetrain callout badges"]},m3_drs_wind_tunnel:{id:"m3_drs_wind_tunnel",name:"Active DRS Flap Actuation & Wind-Tunnel CFD Flow",durationSec:2,windows:{t0_anticipation:[0,.15],t1_primary_drive:[.15,.6],t2_apex_secondary:[.6,.85],t3_overshoot_settle:[.85,1]},secondaryEffects:["720-particle / 18-ribbon 3D CFD pressure-mapped streamlines","Speed-modulated wheel blur & brake disc thermal glow","Wind-tunnel bandpass air rush foley"]},m4_pitstop_reassembly:{id:"m4_pitstop_reassembly",name:"Pit-Stop Wheel Gun & Rapid Snap Reassembly",durationSec:2.2,windows:{t0_anticipation:[0,.16],t1_primary_drive:[.16,.65],t2_apex_secondary:[.65,.84],t3_overshoot_settle:[.84,1]},secondaryEffects:["Chassis landing suspension compression & rebound","Pneumatic impact gun audio burst","Zero-seam watertight body lock"]}});function an(i){const t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function Im(i,t,e,n){const s=Math.max(0,Math.min(1,i)),r=1-s,o=2*r*s,a=s*s,c=.065*s*r;let l=o*t[0]+a*e[0],h=o*t[1]+a*e[1]+c,d=o*t[2]+a*e[2];if(i>1){const u=i-1,f=2*(e[0]-t[0]),_=2*(e[1]-t[1]),g=2*(e[2]-t[2]);l+=f*u*.5,h+=_*u*.5,d+=g*u*.5}else i<0&&(l=e[0]*i*.25,h=e[1]*i*.25,d=e[2]*i*.25);return n.set(l,h,d),n}function Um(i,t,e,n){const s=i&&typeof i=="object"&&!i.isScene&&("scene"in i||"carRootGroup"in i),r=s?i.scene:i,o=s?i.carRootGroup:t,a=s?i.partGroupsMap:e,c=s?i.studioFloorRefs:n,l={masterExplode:0,layerWeights:{aero:0,chassis:0,powertrain:0,chassis_dynamics:0},activePreset:"assembled",selectedPartId:null,isolatedPartId:null,drsOpen:0,windTunnelActive:!1,airspeedKmh:0,wheelSpinRpm:0,brakeTempC:45,exhaustTempC:320,cameraView:"front_34"};typeof window<"u"&&(window.__SIM_STATE__=l);const h={};for(const I of Qt)h[I.id]={id:I.id,code:I.code,layer:I.layer,s:0,v:0,targetS:0,baseGoalS:0,omegaN:I.omegaN,zeta:I.zeta,staggerWindow:I.staggerWindow,assembledPivot:new b(...I.assembledPivot),currentWorldPivot:new b(...I.assembledPivot),displacement:new b,rotationOffset:new un(0,0,0)};const d={heaveY:{x:0,v:0,target:0,omegaN:18.5,zeta:.52},pitchRad:{x:0,v:0,target:0,omegaN:16.8,zeta:.54},rollRad:{x:0,v:0,target:0,omegaN:17.2,zeta:.58},yawRad:{x:0,v:0,target:0,omegaN:15,zeta:.62},drsNorm:{x:0,v:0,target:0,omegaN:19.5,zeta:.55}};let u=0,f=null,_={active:!1,elapsed:0,stepIndex:-1,onEventCallback:null};const g={activeMovementId:"idle",currentPhase:"settled",phaseProgress:1,movementProgress:1,velocity:0,angularVelocity:0,bodyPitchRollYaw:[0,0,0],chassisHeaveMm:0,secondaryEffectsActive:[],partStates:{},frameHistory:[]};typeof window<"u"&&(window.__MOTION_TELEMETRY__=g);const m=new te;m.name="cad_datum_leaders_group",m.renderOrder=3,r&&typeof r.add=="function"&&r.add(m);const p=new Map;for(const I of Qt){const X=I.layer==="powertrain"||I.id==="part_07_venturi_floor"?16096779:3718648,rt=new Se,at=new Float32Array(6);rt.setAttribute("position",new Fe(at,3));const lt=new V0({color:X,dashSize:.055,gapSize:.035,transparent:!0,opacity:0,depthWrite:!1}),ut=new sl(rt,lt);ut.computeLineDistances(),ut.visible=!1,ut.renderOrder=3,m.add(ut);const K=new dr(.014,10,10),ht=new gn({color:X,transparent:!0,opacity:0,depthWrite:!1}),Dt=new j(K,ht),F=new j(K,ht.clone());Dt.visible=!1,F.visible=!1,m.add(Dt),m.add(F),p.set(I.id,{line:ut,lineGeo:rt,lineMat:lt,originDot:Dt,targetDot:F})}function S(I){return a?a instanceof Map?a.get(I)||(o?o.getObjectByName(I):null):a[I]||(o?o.getObjectByName(I):null):o?o.getObjectByName(I):null}function y(I){if(l.isolatedPartId)return l.isolatedPartId===I.id?0:1.05;const k=l.layerWeights[I.layer]??0;return Math.max(0,Math.min(1.2,Math.max(l.masterExplode,k)))}function x(I,k){if(I<=k.t0_anticipation[1]){const[at,lt]=k.t0_anticipation;return{phase:"t0_anticipation",phaseProgress:(I-at)/Math.max(.001,lt-at)}}if(I<=k.t1_primary_drive[1]){const[at,lt]=k.t1_primary_drive;return{phase:"t1_primary_drive",phaseProgress:(I-at)/Math.max(.001,lt-at)}}if(I<=k.t2_apex_secondary[1]){const[at,lt]=k.t2_apex_secondary;return{phase:"t2_apex_secondary",phaseProgress:(I-at)/Math.max(.001,lt-at)}}const[X,rt]=k.t3_overshoot_settle;return{phase:"t3_overshoot_settle",phaseProgress:Math.min(1,(I-X)/Math.max(.001,rt-X))}}function L(I,k={}){const X=xc[I];if(!X)return;const rt={};for(const at of Qt)rt[at.id]=h[at.id].s;f={id:X.id,spec:X,elapsedSec:0,durationSec:k.durationSec||X.durationSec,startPartPositions:rt},I==="m1_full_cad_explode"?(l.isolatedPartId=null,l.activePreset="full_explode",l.masterExplode=1,l.layerWeights.aero=1,l.layerWeights.chassis=1,l.layerWeights.powertrain=1,l.layerWeights.chassis_dynamics=1):I==="m2_aero_strip_powertrain"?(l.isolatedPartId=null,l.activePreset="powertrain_cutaway",l.masterExplode=0,l.layerWeights.aero=1,l.layerWeights.chassis=0,l.layerWeights.powertrain=0,l.layerWeights.chassis_dynamics=0):I==="m3_drs_wind_tunnel"?(l.isolatedPartId=null,l.activePreset="wind_tunnel",l.windTunnelActive=!0,l.drsOpen=1,l.airspeedKmh=315,l.wheelSpinRpm=2400):I==="m4_pitstop_reassembly"&&(l.isolatedPartId=null,l.activePreset="assembled",l.masterExplode=0,l.layerWeights.aero=0,l.layerWeights.chassis=0,l.layerWeights.powertrain=0,l.layerWeights.chassis_dynamics=0,l.drsOpen=0,l.windTunnelActive=!1,l.airspeedKmh=0,l.wheelSpinRpm=0)}function A(I){if(!f){d.heaveY.target=l.windTunnelActive?-.014*(l.airspeedKmh/315):0,d.pitchRad.target=l.windTunnelActive?-.006*(1-l.drsOpen*.4):0,d.rollRad.target=0,d.yawRad.target=0,d.drsNorm.target=l.drsOpen;for(const K of Qt){const ht=h[K.id];ht.baseGoalS=y(K),ht.targetS=ht.baseGoalS}g.activeMovementId=l.windTunnelActive?"m3_drs_wind_tunnel":"manual_scrub",g.currentPhase="settled",g.phaseProgress=1,g.movementProgress=1,g.secondaryEffectsActive=l.windTunnelActive?xc.m3_drs_wind_tunnel.secondaryEffects:[];return}f.elapsedSec+=I;const k=Math.min(1,f.elapsedSec/f.durationSec),{id:X,spec:rt,startPartPositions:at}=f,{phase:lt,phaseProgress:ut}=x(k,rt.windows);if(g.activeMovementId=X,g.currentPhase=lt,g.phaseProgress=Number(ut.toFixed(4)),g.movementProgress=Number(k.toFixed(4)),g.secondaryEffectsActive=rt.secondaryEffects,X==="m1_full_cad_explode")if(lt==="t0_anticipation"){const K=an(ut);d.heaveY.target=-.012*K,d.pitchRad.target=-.012*K,d.rollRad.target=.003*Math.sin(K*Math.PI),l.brakeTempC=Vt.lerp(45,685,K),l.exhaustTempC=Vt.lerp(320,740,K);for(const ht of Qt){const Dt=rs.has(ht.id)||ht.id==="part_12_wheels_tires";h[ht.id].targetS=Dt?.03*K:.008*K}}else if(lt==="t1_primary_drive"){d.heaveY.target=.005*Math.sin(ut*Math.PI),d.pitchRad.target=.006*(1-ut),d.rollRad.target=0;for(const K of Qt){const[ht,Dt]=K.staggerWindow,F=(k-.18)/Math.max(.01,.65-.18),ue=Math.max(.15,Dt-ht),Bt=an((F-ht*.85)/ue);h[K.id].targetS=.03+.97*Bt}}else if(lt==="t2_apex_secondary"){const K=Math.sin(ut*Math.PI);d.heaveY.target=.003*K,d.pitchRad.target=.004*K;for(const ht of Qt)h[ht.id].targetS=1+.06*K}else{d.heaveY.target=0,d.pitchRad.target=0,d.rollRad.target=0,l.brakeTempC=Vt.lerp(685,310,ut);for(const K of Qt)h[K.id].targetS=1}else if(X==="m2_aero_strip_powertrain")if(lt==="t0_anticipation"){const K=an(ut);d.heaveY.target=-.009*K,d.pitchRad.target=-.014*K,l.exhaustTempC=Vt.lerp(320,810,K);for(const ht of Qt){const Dt=at[ht.id]??0,F=rs.has(ht.id);h[ht.id].targetS=F?Math.max(Dt,.035*K):Dt*(1-.3*K)}}else if(lt==="t1_primary_drive"){const K=an(ut);d.heaveY.target=.003*(1-K),d.pitchRad.target=-.004*(1-K);for(const ht of Qt){const Dt=at[ht.id]??0,ue=rs.has(ht.id)?1:0;h[ht.id].targetS=Vt.lerp(Dt,ue,K)}}else if(lt==="t2_apex_secondary"){const K=Math.sin(ut*Math.PI);l.exhaustTempC=820+60*K,l.wheelSpinRpm=420*K;for(const ht of Qt){const Dt=rs.has(ht.id);h[ht.id].targetS=Dt?1+.055*K:0}}else{d.heaveY.target=0,d.pitchRad.target=0,l.exhaustTempC=790,l.wheelSpinRpm=0;for(const K of Qt){const ht=rs.has(K.id);h[K.id].targetS=ht?1:0}}else if(X==="m3_drs_wind_tunnel"){if(l.windTunnelActive=!0,lt==="t0_anticipation"){const K=an(ut);d.heaveY.target=-.018*K,d.pitchRad.target=-.009*K,d.drsNorm.target=.08*K,l.airspeedKmh=Math.round(Vt.lerp(80,260,K)),l.wheelSpinRpm=Math.round(Vt.lerp(600,1950,K))}else if(lt==="t1_primary_drive"){const K=an(ut);d.heaveY.target=-.018+.004*K,d.pitchRad.target=-.009+.005*K,d.drsNorm.target=1,l.drsOpen=K,l.airspeedKmh=Math.round(Vt.lerp(260,315,K)),l.wheelSpinRpm=Math.round(Vt.lerp(1950,2400,K)),l.brakeTempC=Math.round(Vt.lerp(240,620,K))}else if(lt==="t2_apex_secondary"){const K=Math.sin(ut*Math.PI);d.heaveY.target=-.015-.003*K,d.drsNorm.target=1.05,l.drsOpen=1,l.airspeedKmh=315,l.wheelSpinRpm=2400,l.brakeTempC=650}else{const K=an(ut);d.heaveY.target=-.014-.009*Math.sin(K*Math.PI),d.pitchRad.target=.007*Math.sin(K*Math.PI)-.004,d.drsNorm.target=1,l.drsOpen=1}for(const K of Qt){const ht=at[K.id]??0;h[K.id].targetS=Vt.lerp(ht,0,an(Math.min(1,k*1.8)))}}else if(X==="m4_pitstop_reassembly")if(lt==="t0_anticipation"){const K=an(ut);d.heaveY.target=.01*K,d.pitchRad.target=.008*K,l.wheelSpinRpm=680*Math.sin(K*Math.PI);for(const ht of Qt){const Dt=at[ht.id]??1;h[ht.id].targetS=Dt>.05?Dt+.035*K:0}}else if(lt==="t1_primary_drive"){d.heaveY.target=.006*(1-ut),d.pitchRad.target=0;for(const K of Qt){const ht=at[K.id]??1,F=Dm.has(K.id)&&K.id!=="part_12_wheels_tires"?0:.25,ue=an((ut-F)/(1-F));h[K.id].targetS=ht*(1-ue)}}else if(lt==="t2_apex_secondary"){const K=Math.sin(ut*Math.PI);d.heaveY.target=-.014*K,d.pitchRad.target=-.011*K,d.rollRad.target=.004*Math.sin(ut*Math.PI*2);for(const ht of Qt)h[ht.id].targetS=0}else{d.heaveY.target=0,d.pitchRad.target=0,d.rollRad.target=0,l.brakeTempC=Vt.lerp(l.brakeTempC,55,ut),l.exhaustTempC=Vt.lerp(l.exhaustTempC,340,ut);for(const K of Qt)h[K.id].targetS=0}k>=1&&(f=null)}function T(I,k){const X=-I.omegaN*I.omegaN*(I.x-I.target)-2*I.zeta*I.omegaN*I.v;I.v+=X*k,I.x+=I.v*k,(!Number.isFinite(I.x)||!Number.isFinite(I.v))&&(I.x=I.target,I.v=0)}function P(I,k,X,rt){if(!(!I||!I.children))for(const at of I.children){at.userData.__restRecorded||(at.userData.__restPos=at.position.clone(),at.userData.__restRot=at.rotation.clone(),at.userData.__restRecorded=!0);const lt=(at.name||"").toLowerCase();let ut=at.userData.sideSign;ut===void 0&&(lt.includes("fl")||lt.includes("rl")||lt.includes("left")||at.userData.__restPos.z<-.05?ut=-1:lt.includes("fr")||lt.includes("rr")||lt.includes("right")||at.userData.__restPos.z>.05?ut=1:ut=0);let K=at.userData.axleSign;K===void 0&&(lt.includes("fl")||lt.includes("fr")||lt.includes("front")||at.userData.__restPos.x>.2?K=1:lt.includes("rl")||lt.includes("rr")||lt.includes("rear")||at.userData.__restPos.x<-.2?K=-1:K=0);const ht=at.userData.__restPos,Dt=at.userData.__restRot;at.position.set(ht.x+rt.x*K,ht.y+rt.y,ht.z+rt.z*ut),at.rotation.set(Dt.x+k.explodeRotation[0]*X*ut,Dt.y+k.explodeRotation[1]*X*ut*K,Dt.z+k.explodeRotation[2]*X*K),k.id==="part_12_wheels_tires"&&at.traverse(F=>{var ue,Bt,kt,gt;F!==at&&((ue=F.userData)!=null&&ue.isRotatingWheel||(Bt=F.name)!=null&&Bt.toLowerCase().includes("rim")||(kt=F.name)!=null&&kt.toLowerCase().includes("tire")||(gt=F.name)!=null&&gt.toLowerCase().includes("spin"))&&(F.rotation.z=-u)})}}function M(I){const k=S("part_11_rear_wing_drs"),X=Vt.degToRad(24)*Math.max(0,Math.min(1.15,d.drsNorm.x));k&&k.traverse(K=>{var ht;((ht=K.userData)!=null&&ht.isDrsFlap||K.name==="drsFlapPivot"||K.name==="drs_flap")&&(K.userData.__baseRotZ===void 0&&(K.userData.__baseRotZ=K.rotation.z),K.rotation.z=K.userData.__baseRotZ-X)});const rt=S("part_08_power_unit"),at=Math.max(0,Math.min(1,(l.exhaustTempC-300)/550));rt&&rt.traverse(K=>{var ht,Dt,F;K.isMesh&&K.material&&((ht=K.userData)!=null&&ht.isExhaustHeader||(Dt=K.name)!=null&&Dt.toLowerCase().includes("exhaust")||(F=K.name)!=null&&F.toLowerCase().includes("header"))&&K.material.emissive&&(K.material.emissive.setHex(16733440),K.material.emissiveIntensity=at*(.65+.15*Math.sin(I*8)))});const lt=S("part_10_suspension_brakes"),ut=Math.max(0,Math.min(1,(l.brakeTempC-80)/620));lt&&lt.traverse(K=>{var ht,Dt,F;K.isMesh&&K.material&&((ht=K.userData)!=null&&ht.isBrakeDisc||(Dt=K.name)!=null&&Dt.toLowerCase().includes("disc")||(F=K.name)!=null&&F.toLowerCase().includes("rotor"))&&K.material.emissive&&(K.material.emissive.setHex(16729344),K.material.emissiveIntensity=ut*.85)})}function v(I,k){const X=p.get(I.id);if(!X)return;const rt=an((k.s-.12)/.22),at=l.selectedPartId===I.id,lt=rt*(at?.95:.58);if(lt<=.01){X.line.visible=!1,X.originDot.visible=!1,X.targetDot.visible=!1;return}X.line.visible=!0,X.originDot.visible=!0,X.targetDot.visible=!0;const ut=X.lineGeo.attributes.position,K=k.assembledPivot,ht=k.currentWorldPivot;ut.setXYZ(0,K.x,K.y,K.z),ut.setXYZ(1,ht.x,ht.y,ht.z),ut.needsUpdate=!0,X.line.computeLineDistances(),X.originDot.position.copy(K),X.targetDot.position.copy(ht),X.lineMat.opacity=lt,X.originDot.material.opacity=lt,X.targetDot.material.opacity=lt}function R(I){var X,rt,at,lt,ut;if(!_.active)return;_.elapsed+=I;const k=_.elapsed;k>=0&&_.stepIndex<0?(_.stepIndex=0,L("m1_full_cad_explode",{durationSec:2.5}),(X=_.onEventCallback)==null||X.call(_,"m1_full_cad_explode")):k>=2.6&&_.stepIndex<1?(_.stepIndex=1,L("m2_aero_strip_powertrain",{durationSec:2.2}),(rt=_.onEventCallback)==null||rt.call(_,"m2_aero_strip_powertrain")):k>=4.9&&_.stepIndex<2?(_.stepIndex=2,L("m3_drs_wind_tunnel",{durationSec:2.2}),(at=_.onEventCallback)==null||at.call(_,"m3_drs_wind_tunnel")):k>=7.2&&_.stepIndex<3?(_.stepIndex=3,L("m4_pitstop_reassembly",{durationSec:2.2}),(lt=_.onEventCallback)==null||lt.call(_,"m4_pitstop_reassembly")):k>=9.8&&_.stepIndex===3&&(_.active=!1,(ut=_.onEventCallback)==null||ut.call(_,"complete"))}const N=new b;function U(I,k=0){var F,ue,Bt,kt;const X=Math.max(5e-4,Math.min(.033,Number.isFinite(I)?I:.016));R(X),A(X);const rt=X*.5;for(let gt=0;gt<2;gt++){T(d.heaveY,rt),T(d.pitchRad,rt),T(d.rollRad,rt),T(d.yawRad,rt),T(d.drsNorm,rt);for(const Pt of Qt){const ft=h[Pt.id],C=-ft.omegaN*ft.omegaN*(ft.s-ft.targetS)-2*ft.zeta*ft.omegaN*ft.v;ft.v+=C*rt,ft.s+=ft.v*rt,(!Number.isFinite(ft.s)||!Number.isFinite(ft.v))&&(ft.s=ft.targetS,ft.v=0)}}if(l.windTunnelActive&&l.airspeedKmh>1){const Pt=l.airspeedKmh/3.6/.36;u=(u+Pt*X)%(Math.PI*200),l.wheelSpinRpm=Math.round(Pt*60/(Math.PI*2))}else if(l.wheelSpinRpm>0){const gt=l.wheelSpinRpm*Math.PI*2/60;u=(u+gt*X)%(Math.PI*200)}o&&(o.userData.__restRecorded||(o.userData.__restPos=o.position.clone(),o.userData.__restRot=o.rotation.clone(),o.userData.__restRecorded=!0),o.position.y=o.userData.__restPos.y+d.heaveY.x,o.rotation.z=o.userData.__restRot.z+d.pitchRad.x,o.rotation.x=o.userData.__restRot.x+d.rollRad.x,o.rotation.y=o.userData.__restRot.y+d.yawRad.x);let at=0,lt=Math.abs(d.pitchRad.v)+Math.abs(d.rollRad.v);for(const gt of Qt){const Pt=h[gt.id],ft=S(gt.id);Im(Pt.s,gt.explodeArcOffset,gt.explodeVector,N),Pt.displacement.copy(N);const C=gt.explodeRotation[0]*Pt.s,w=gt.explodeRotation[1]*Pt.s,V=gt.explodeRotation[2]*Pt.s;Pt.rotationOffset.set(C,w,V),gt.id==="part_10_suspension_brakes"||gt.id==="part_12_wheels_tires"?(ft&&(ft.position.set(0,0,0),ft.rotation.set(0,0,0),P(ft,gt,Pt.s,N)),Pt.currentWorldPivot.set(Pt.assembledPivot.x+N.x,Pt.assembledPivot.y+N.y+d.heaveY.x,Pt.assembledPivot.z+N.z)):(ft&&(ft.userData.__restRecorded||(ft.userData.__restPos=ft.position.clone(),ft.userData.__restRot=ft.rotation.clone(),ft.userData.__restRecorded=!0),ft.position.set(ft.userData.__restPos.x+N.x,ft.userData.__restPos.y+N.y,ft.userData.__restPos.z+N.z),ft.rotation.set(ft.userData.__restRot.x+C,ft.userData.__restRot.y+w,ft.userData.__restRot.z+V)),Pt.currentWorldPivot.set(Pt.assembledPivot.x+N.x,Pt.assembledPivot.y+N.y+d.heaveY.x,Pt.assembledPivot.z+N.z)),v(gt,Pt),at+=Math.abs(Pt.v),lt+=Math.abs(Pt.v)*(Math.abs(gt.explodeRotation[0])+Math.abs(gt.explodeRotation[1])+Math.abs(gt.explodeRotation[2])),g.partStates[gt.id]={s:Number(Pt.s.toFixed(4)),v:Number(Pt.v.toFixed(4)),targetS:Number(Pt.targetS.toFixed(4)),worldPivot:[Number(Pt.currentWorldPivot.x.toFixed(3)),Number(Pt.currentWorldPivot.y.toFixed(3)),Number(Pt.currentWorldPivot.z.toFixed(3))]}}M(k);const ut=Math.max(0,((F=h.part_07_venturi_floor)==null?void 0:F.s)??0),ht=-.002-.68*Math.max(ut,l.masterExplode),Dt=(c==null?void 0:c.pitFloorMesh)||(c==null?void 0:c.floorMesh)||(r?r.getObjectByName("pitFloorMesh"):null);Dt&&(Dt.position.y=ht),g.velocity=Number(at.toFixed(4)),g.angularVelocity=Number(lt.toFixed(4)),g.bodyPitchRollYaw=[Number(d.pitchRad.x.toFixed(5)),Number(d.rollRad.x.toFixed(5)),Number(d.yawRad.x.toFixed(5))],g.chassisHeaveMm=Number((d.heaveY.x*1e3).toFixed(2)),g.frameHistory.push({t:Number(k.toFixed(3)),movementId:g.activeMovementId,phase:g.currentPhase,phaseProgress:g.phaseProgress,masterExplode:Number(l.masterExplode.toFixed(3)),frontWingS:((ue=g.partStates.part_01_front_wing)==null?void 0:ue.s)??0,powerUnitS:((Bt=g.partStates.part_08_power_unit)==null?void 0:Bt.s)??0,floorS:((kt=g.partStates.part_07_venturi_floor)==null?void 0:kt.s)??0,drsOpen:Number(d.drsNorm.x.toFixed(3)),heaveMm:g.chassisHeaveMm,pitchDeg:Number(Vt.radToDeg(d.pitchRad.x).toFixed(3)),velocity:g.velocity}),g.frameHistory.length>360&&g.frameHistory.shift()}function H(I,k=!1){const X=Math.max(0,Math.min(1,Number(I)||0));if(l.masterExplode=X,l.isolatedPartId=null,k&&X>.85){L("m1_full_cad_explode");return}if(k&&X<.05){L("m4_pitstop_reassembly");return}f=null,l.activePreset=X>.5?"full_explode":"assembled",l.layerWeights.aero=X,l.layerWeights.chassis=X,l.layerWeights.powertrain=X,l.layerWeights.chassis_dynamics=X}function Y(I,k){I in l.layerWeights&&(f=null,l.isolatedPartId=null,l.layerWeights[I]=Math.max(0,Math.min(1,Number(k)||0)),l.activePreset="custom")}function Z(I){const k=String(I||"").toLowerCase();k==="full_explode"||k==="exploded"||k==="m1_full_cad_explode"?L("m1_full_cad_explode"):k==="powertrain"||k==="powertrain_cutaway"||k==="m2_aero_strip_powertrain"?L("m2_aero_strip_powertrain"):k==="wind_tunnel"||k==="aero"||k==="aero_cfd"||k==="m3_drs_wind_tunnel"?L("m3_drs_wind_tunnel"):k==="assembled"||k==="pitstop"||k==="reassembly"||k==="m4_pitstop_reassembly"?L("m4_pitstop_reassembly"):(k==="chassis"||k==="chassis_dynamics")&&(f=null,l.isolatedPartId=null,l.activePreset="chassis_dynamics",l.masterExplode=0,l.layerWeights.aero=.85,l.layerWeights.chassis=.35,l.layerWeights.powertrain=.25,l.layerWeights.chassis_dynamics=1)}function J(I){l.selectedPartId=I||null}function O(I){f=null,l.isolatedPartId=l.isolatedPartId===I?null:I,l.isolatedPartId&&(l.selectedPartId=l.isolatedPartId)}function Q(I){const k=typeof I=="boolean"?I?1:0:Math.max(0,Math.min(1,Number(I)||0));l.drsOpen=k,d.drsNorm.target=k}function nt(I,k=315){l.windTunnelActive=!!I,l.airspeedKmh=l.windTunnelActive?k:0,l.wheelSpinRpm=l.windTunnelActive?Math.round(k/315*2400):0}function mt(I=null){return _={active:!0,elapsed:0,stepIndex:-1,onEventCallback:I},g}function Lt(){_.active=!1}typeof window<"u"&&(window.__START_AUTOPILOT__=mt,window.__STOP_AUTOPILOT__=Lt,window.__TRIGGER_MOVEMENT__=L);function zt(I){const k=h[I];return k?k.currentWorldPivot.clone():new b}return{state:l,simState:l,telemetry:g,partStates:h,datumLinesGroup:m,update:U,setMasterExplode:H,setLayerWeight:Y,applyPreset:Z,setPreset:Z,triggerMovement:L,selectPart:J,setSelectedPart:J,isolatePart:O,setIsolatedPart:O,setDrsOpen:Q,toggleDrs:()=>Q(l.drsOpen>.5?0:1),setWindTunnel:nt,toggleWindTunnel:()=>nt(!l.windTunnelActive,315),startAutopilot:mt,stopAutopilot:Lt,getPartWorldAnchor:zt,getPartState:I=>h[I]||null}}const qr=18,Ks=76,ni=540,Nm=3.4,Fm=-3.4,Om=new Ct("#38BDF8"),Mc=new Ct("#6366F1"),Bm=new Ct("#F43F5E"),yc=new Ct("#A855F7"),Sc=Object.freeze([{id:0,y0:.045,z0:-.26,ribbonHalfWidth:.022,zone:"venturi"},{id:1,y0:.045,z0:.26,ribbonHalfWidth:.022,zone:"venturi"},{id:2,y0:.052,z0:-.48,ribbonHalfWidth:.02,zone:"venturi"},{id:3,y0:.052,z0:.48,ribbonHalfWidth:.02,zone:"venturi"},{id:4,y0:.14,z0:-.36,ribbonHalfWidth:.021,zone:"undercut"},{id:5,y0:.14,z0:.36,ribbonHalfWidth:.021,zone:"undercut"},{id:6,y0:.18,z0:-.58,ribbonHalfWidth:.021,zone:"undercut"},{id:7,y0:.18,z0:.58,ribbonHalfWidth:.021,zone:"undercut"},{id:8,y0:.34,z0:-.44,ribbonHalfWidth:.022,zone:"sidepod_downwash"},{id:9,y0:.34,z0:.44,ribbonHalfWidth:.022,zone:"sidepod_downwash"},{id:10,y0:.44,z0:-.52,ribbonHalfWidth:.02,zone:"sidepod_downwash"},{id:11,y0:.44,z0:.52,ribbonHalfWidth:.02,zone:"sidepod_downwash"},{id:12,y0:.22,z0:-.09,ribbonHalfWidth:.019,zone:"center_spine"},{id:13,y0:.22,z0:.09,ribbonHalfWidth:.019,zone:"center_spine"},{id:14,y0:.38,z0:-.18,ribbonHalfWidth:.019,zone:"center_spine"},{id:15,y0:.38,z0:.18,ribbonHalfWidth:.019,zone:"center_spine"},{id:16,y0:.28,z0:-.76,ribbonHalfWidth:.02,zone:"tire_outwash"},{id:17,y0:.28,z0:.76,ribbonHalfWidth:.02,zone:"tire_outwash"}]);function pn(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function ke(i,t,e){const n=Math.max(0,Math.min(1,(i-t)/(e-t)));return n*n*(3-2*n)}function zm(i,t){if(i>=0){const e=Math.min(1,i/.55);t.copy(Mc).lerp(Om,e)}else if(i>=-.65){const e=Math.min(1,-i/.65);t.copy(Mc).lerp(yc,e)}else{const e=Math.min(1,(-i-.65)/.85);t.copy(yc).lerp(Bm,e)}return t}function wc(i,t,e,n,s,r,o){const a=Vt.lerp(Nm,Fm,t),c=i.z0<0?-1:1,l=Math.abs(i.z0);let h=i.y0,d=i.z0,u=1;const f=pn(a,2.32,.34);if(i.zone==="venturi")h-=.012*f,u+=.22*f;else{const p=.085*ke(2.65,1.75,a)*pn(a,2.05,.55);h+=p,u-=.18*pn(a,2.52,.22)}const _=pn(a,1.8,.36);if((i.zone==="tire_outwash"||l>.52)&&(d+=c*.24*_,h+=.09*_,u-=.14*_),i.zone==="venturi"){const p=ke(1.45,.65,a)*ke(-2.15,-1.35,a),S=pn(a,-.25,.68);if(h=Math.max(.022,h-.02*p),d*=1-.18*S,u+=.64*S+.32*p,a<-1.15){const y=ke(-1.15,-2.35,a);h+=.22*y,d+=c*.08*y,u+=.25*(1-y*.6)}}if(i.zone==="undercut"){const p=ke(.75,-.15,a)*ke(-1.95,-.95,a);if(d+=c*.12*pn(a,.15,.38),a<-.15){const S=ke(-.15,-1.55,a);d*=1-.42*S,h-=.035*S*(1-ke(-1.55,-2.35,a))}u+=.38*p}else if(i.zone==="sidepod_downwash"){const p=pn(a,.32,.24);u-=.22*p;const S=pn(a,.05,.36);if(h+=.11*S,a<-.05){const y=ke(-.05,-1.55,a)*ke(-2.45,-1.45,a);h-=.16*y,d*=1-.36*y,u+=.34*y}}else if(i.zone==="center_spine"){const p=ke(2.45,.55,a),S=pn(a,.25,.55),y=ke(-.45,-1.85,a);h+=.32*p+.18*S-.14*y,u+=.24*S}if(a<-1.7){const p=ke(-1.7,-2.65,a),S=ke(-2.15,-3.4,a),y=Math.max(0,Math.min(1,e)),x=Vt.lerp(.28,.11,y);h+=x*p;const L=Math.sin(s*9+S*7.5+i.id)*.032*S*(1-.45*y);d+=c*L,h+=Math.cos(s*9+S*7.5+i.id)*.024*S*(1-.45*y);const A=pn(a,-2.28,.26)*Vt.lerp(.46,.22,y);u+=A}const g=Math.sin(t*16-s*11+i.id*.7)*.006;h+=g+n*.08*(h>.2?1:-.4),d*=1+n*.18,r.set(a,h,d);const m=1-u*u;return zm(m,o),m}function Wm(i){const t=new te;t.name="cfd_wind_tunnel_group",t.renderOrder=4,t.visible=!1,i&&typeof i.add=="function"&&i.add(t);const e=new gn({vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,side:Ye,blending:nr}),n=[];for(let m=0;m<qr;m++){const p=Sc[m],S=Ks*2,y=new Float32Array(S*3),x=new Float32Array(S*3),L=[];for(let P=0;P<Ks-1;P++){const M=P*2,v=M+1,R=M+2,N=M+3;L.push(M,v,R),L.push(v,N,R)}const A=new Se;A.setAttribute("position",new Fe(y,3)),A.setAttribute("color",new Fe(x,3)),A.setIndex(L);const T=new j(A,e);T.name=`cfd_streamline_ribbon_${m}`,T.renderOrder=4,T.frustumCulled=!1,t.add(T),n.push({seed:p,mesh:T,geo:A,positions:y,colors:x})}const s=new Float32Array(ni*3),r=new Float32Array(ni*3),o=new Float32Array(ni),a=new Uint16Array(ni);for(let m=0;m<ni;m++)a[m]=m%qr,o[m]=(m/ni+m%17*.058)%1;const c=new Se;c.setAttribute("position",new Fe(s,3)),c.setAttribute("color",new Fe(r,3));const l=new ol({size:.042,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:nr}),h=new C0(c,l);h.name="cfd_flow_tracer_particles",h.renderOrder=4,h.frustumCulled=!1,t.add(h);let d=0;const u=new b,f=new Ct;function _(m,p=0,S=window.__SIM_STATE__){const y=Math.max(.001,Math.min(.05,Number.isFinite(m)?m:.016)),L=!!(S!=null&&S.windTunnelActive)?.82:0;if(d+=(L-d)*Math.min(1,y*8),d<=.005){t.visible=!1;return}t.visible=!0,e.opacity=d*.72,l.opacity=Math.min(1,d*1.15);const A=(S==null?void 0:S.drsOpen)??0,T=(S==null?void 0:S.masterExplode)??0,P=Math.max(.25,Math.min(1.4,((S==null?void 0:S.airspeedKmh)||280)/300));for(let v=0;v<qr;v++){const R=n[v],{seed:N,positions:U,colors:H,geo:Y}=R,Z=N.ribbonHalfWidth;for(let J=0;J<Ks;J++){const O=J/(Ks-1);wc(N,O,A,T,p,u,f);const Q=.78+.22*Math.sin(O*22-p*14*P+v*.5),nt=f.r*Q,mt=f.g*Q,Lt=f.b*Q,zt=N.zone==="sidepod_downwash"?.55*(N.z0<0?-1:1):.15,I=Math.cos(zt)*Z,k=Math.sin(zt)*Z,X=J*6;U[X]=u.x,U[X+1]=u.y-k,U[X+2]=u.z-I,U[X+3]=u.x,U[X+4]=u.y+k,U[X+5]=u.z+I,H[X]=nt,H[X+1]=mt,H[X+2]=Lt,H[X+3]=nt,H[X+4]=mt,H[X+5]=Lt}Y.attributes.position.needsUpdate=!0,Y.attributes.color.needsUpdate=!0}const M=.62*P*(1+.12*A);for(let v=0;v<ni;v++){let R=(o[v]+y*M)%1;o[v]=R;const N=a[v],U=Sc[N];wc(U,R,A,T,p,u,f);const H=v*3;s[H]=u.x,s[H+1]=u.y+.005,s[H+2]=u.z;const Y=Math.sin(R*Math.PI);r[H]=Math.min(1,f.r*1.25*Y),r[H+1]=Math.min(1,f.g*1.25*Y),r[H+2]=Math.min(1,f.b*1.25*Y)}c.attributes.position.needsUpdate=!0,c.attributes.color.needsUpdate=!0}function g(m){t.visible=!!m}return{group:t,ribbons:n,particles:h,update:_,setVisible:g}}function Hm(){let i=null,t=null,e=!1,n=!1,s=null,r=null,o=null,a=null,c=null,l=null,h=null,d=null,u=null,f=null,_=null,g=null;function m(T,P=2.5){const M=Math.floor(T.sampleRate*P),v=T.createBuffer(1,M,T.sampleRate),R=v.getChannelData(0);let N=0,U=0,H=0,Y=0,Z=0,J=0,O=0;for(let Q=0;Q<M;Q++){const nt=Math.random()*2-1;N=.99886*N+nt*.0555179,U=.99332*U+nt*.0750759,H=.969*H+nt*.153852,Y=.8665*Y+nt*.3104856,Z=.55*Z+nt*.5329522,J=-.7616*J-nt*.016898,R[Q]=(N+U+H+Y+Z+J+O+nt*.5362)*.045,O=nt*.115926}return v}function p(){if(e&&i)return i.state==="suspended"&&i.resume().catch(()=>{}),!0;if(typeof window>"u")return!1;const T=window.AudioContext||window.webkitAudioContext;if(!T)return!1;try{i=new T,t=i.createGain(),t.gain.value=n?0:.28,t.connect(i.destination),s=i.createOscillator(),s.type="sawtooth",s.frequency.value=140,r=i.createBiquadFilter(),r.type="bandpass",r.frequency.value=520,r.Q.value=3.2,o=i.createGain(),o.gain.value=0,s.connect(r),r.connect(o),o.connect(t),s.start();const P=m(i,3);return a=i.createBufferSource(),a.buffer=P,a.loop=!0,c=i.createBiquadFilter(),c.type="bandpass",c.frequency.value=380,c.Q.value=1.4,l=i.createGain(),l.gain.value=0,a.connect(c),c.connect(l),l.connect(t),a.start(),h=i.createOscillator(),h.type="sawtooth",h.frequency.value=95,d=i.createOscillator(),d.type="triangle",d.frequency.value=142.5,f=i.createBiquadFilter(),f.type="lowpass",f.frequency.value=340,f.Q.value=2,_=i.createGain(),_.gain.value=0,h.connect(f),d.connect(f),f.connect(_),_.connect(t),u=i.createOscillator(),u.type="sine",u.frequency.value=3200,g=i.createGain(),g.gain.value=0,u.connect(g),g.connect(t),h.start(),d.start(),u.start(),e=!0,!0}catch{return!1}}if(typeof window<"u"){const T=()=>{p()};window.addEventListener("pointerdown",T,{once:!0,passive:!0}),window.addEventListener("keydown",T,{once:!0,passive:!0})}function S(T="unlatch"){if(!(!p()||n))try{const P=i.currentTime,M=i.createOscillator(),v=i.createGain();M.type="triangle";const R=T==="unlatch"?1480:920,N=T==="unlatch"?620:1680;M.frequency.setValueAtTime(R,P),M.frequency.exponentialRampToValueAtTime(N,P+.065),v.gain.setValueAtTime(.24,P),v.gain.exponentialRampToValueAtTime(.001,P+.07),M.connect(v),v.connect(t),M.start(P),M.stop(P+.075);const U=i.createOscillator(),H=i.createGain();U.type="sine",U.frequency.setValueAtTime(115,P),U.frequency.exponentialRampToValueAtTime(42,P+.14),H.gain.setValueAtTime(.32,P),H.gain.exponentialRampToValueAtTime(.001,P+.15),U.connect(H),H.connect(t),U.start(P),U.stop(P+.16)}catch{}}function y(){if(!(!p()||n))try{const T=i.currentTime,P=6,M=.036;for(let v=0;v<P;v++){const R=T+v*M,N=i.createOscillator(),U=i.createGain();N.type="sawtooth",N.frequency.setValueAtTime(520+v*95,R),N.frequency.exponentialRampToValueAtTime(1850,R+.026),U.gain.setValueAtTime(.22,R),U.gain.exponentialRampToValueAtTime(.002,R+.028),N.connect(U),U.connect(t),N.start(R),N.stop(R+.03)}}catch{}}function x(T=!0){if(!(!p()||n))try{const P=i.currentTime,M=i.createOscillator(),v=i.createGain();M.type="sine",M.frequency.setValueAtTime(T?480:880,P),M.frequency.exponentialRampToValueAtTime(T?940:410,P+.11),v.gain.setValueAtTime(.18,P),v.gain.exponentialRampToValueAtTime(.001,P+.12),M.connect(v),v.connect(t),M.start(P),M.stop(P+.13)}catch{}}function L(T,P){if(!(!e||!i||n))try{const M=i.currentTime,v=Math.min(12,(P==null?void 0:P.velocity)??0),R=Math.min(.16,v*.022),N=140+v*52;o.gain.setTargetAtTime(R,M,.04),s.frequency.setTargetAtTime(N,M,.04),r.frequency.setTargetAtTime(380+v*140,M,.04);const U=T!=null&&T.windTunnelActive&&T.airspeedKmh||0,H=Math.max(0,Math.min(1.2,U/315)),Y=(T==null?void 0:T.drsOpen)??0,Z=H*.24,J=260+H*680+Y*220;l.gain.setTargetAtTime(Z,M,.06),c.frequency.setTargetAtTime(J,M,.06);const O=(T==null?void 0:T.activePreset)==="powertrain_cutaway"||(T==null?void 0:T.windTunnelActive)||((T==null?void 0:T.wheelSpinRpm)||0)>100,Q=Math.max(0,Math.min(1,((T==null?void 0:T.wheelSpinRpm)||(O?650:0))/2400)),nt=85+Q*165;h.frequency.setTargetAtTime(nt,M,.05),d.frequency.setTargetAtTime(nt*1.5,M,.05),f.frequency.setTargetAtTime(280+Q*620,M,.05),_.gain.setTargetAtTime(O?.09+Q*.08:0,M,.08),u.frequency.setTargetAtTime(3150+Q*680,M,.05),g.gain.setTargetAtTime(O?.025+Q*.045:0,M,.08)}catch{}}function A(T){return n=!!T,t&&i&&t.gain.setTargetAtTime(n?0:.28,i.currentTime,.03),n}return{init:p,triggerLatchImpulse:S,triggerWheelGunBurst:y,triggerDrsActuator:x,updateAudio:L,setMuted:A,toggleMute:()=>A(!n),isMuted:()=>n}}const Gm=Object.freeze({part_01_front_wing:"FRONT WING",part_02_monocoque:"MONOCOQUE",part_03_halo:"TI HALO",part_04_sidepod_left:"L SIDEPOD",part_05_sidepod_right:"R SIDEPOD",part_06_engine_cover:"ENGINE COVER",part_07_venturi_floor:"VENTURI FLOOR",part_08_power_unit:"V6 HYBRID PU",part_09_gearbox:"8-SPD GEARBOX",part_10_suspension_brakes:"SUSP & BRAKES",part_11_rear_wing_drs:"DRS REAR WING",part_12_wheels_tires:'18" PIRELLI'});function km({camera:i,controls:t,renderer:e,scene:n,carRootGroup:s,partGroupsMap:r,kinematics:o,windTunnel:a,audio:c,setCameraView:l}){const h=window.__SIM_STATE__=window.__SIM_STATE__||{masterExplode:0,layerWeights:{aero:0,chassis:0,powertrain:0,chassis_dynamics:0},activePreset:"m4_pitstop_reassemble",selectedPartId:"part_08_power_unit",isolatedPartId:null,HoveredPartId:null,drsOpen:!1,windTunnelActive:!1,calloutMode:"auto",wheelSpinRpm:320,brakeTempC:340,cameraView:"front_34"};function d(D){return r?typeof r.get=="function"?r.get(D)||null:r[D]||null:(s==null?void 0:s.getObjectByName(D))||(n==null?void 0:n.getObjectByName(D))||null}const u=new WeakMap;function f(D){D&&D.traverse(G=>{if(!G.isMesh||!G.material)return;(Array.isArray(G.material)?G.material:[G.material]).forEach(it=>{u.has(it)||u.set(it,{transparent:it.transparent,opacity:it.opacity,depthWrite:it.depthWrite,wireframe:!!it.wireframe,emissiveHex:it.emissive?it.emissive.getHex():0,emissiveIntensity:it.emissiveIntensity??0})})})}Qt.forEach(D=>{f(d(D.id))});const _=document.getElementById("hud-phase-pill"),g=document.getElementById("tel-explode"),m=document.getElementById("tel-downforce"),p=document.getElementById("tel-rpm"),S=document.getElementById("tel-exhaust"),y=document.getElementById("tel-drs"),x=document.getElementById("tel-parts"),L=document.getElementById("slider-master-explode"),A=document.getElementById("val-master-explode"),T=Array.from(document.querySelectorAll(".layer-slider")),P=Array.from(document.querySelectorAll(".preset-btn")),M=Array.from(document.querySelectorAll(".cam-btn")),v=Array.from(document.querySelectorAll(".seg-btn[data-callout-mode]")),R=document.getElementById("toggle-wind-tunnel"),N=document.getElementById("toggle-drs-flap"),U=document.getElementById("btn-autopilot"),H=document.getElementById("btn-audio"),Y=document.getElementById("part-manifest-list"),Z=document.getElementById("manifest-selection-tag"),J=document.getElementById("spec-code"),O=document.getElementById("spec-layer"),Q=document.getElementById("spec-name"),nt=document.getElementById("spec-desc"),mt=document.getElementById("spec-mass"),Lt=document.getElementById("spec-fia"),zt=document.getElementById("spec-material"),I=document.getElementById("spec-telemetry"),k=document.getElementById("spec-vector"),X=document.getElementById("btn-isolate-part"),rt=document.getElementById("btn-reset-view"),at=document.getElementById("left-dock"),lt=document.getElementById("right-dock"),ut=document.getElementById("btn-toggle-left-dock"),K=document.getElementById("btn-toggle-right-dock"),ht=document.getElementById("callout-svg"),Dt=document.getElementById("callout-pins"),F=new Map,ue=new Map;Y&&(Y.innerHTML=""),ht&&(ht.innerHTML=""),Dt&&(Dt.innerHTML=""),Qt.forEach(D=>{if(Y){const G=document.createElement("button");G.type="button",G.className="manifest-chip",G.dataset.partId=D.id,G.setAttribute("role","option"),G.innerHTML=`
        <span class="chip-left">
          <span class="chip-code">${D.code}</span>
          <span class="chip-name">${D.name}</span>
        </span>
        <span class="chip-mass">${D.massKg.toFixed(1)} kg</span>
      `,G.addEventListener("click",()=>{var et;(et=c==null?void 0:c.playClick)==null||et.call(c),V(D.id,{focusCamera:!0})}),Y.appendChild(G),F.set(D.id,G)}if(ht&&Dt){const G=document.createElementNS("http://www.w3.org/2000/svg","line");G.setAttribute("class","callout-leader-line"),ht.appendChild(G);const et=document.createElementNS("http://www.w3.org/2000/svg","circle");et.setAttribute("class","callout-anchor-dot"),et.setAttribute("r","2.5"),ht.appendChild(et);const it=document.createElement("button");it.type="button",it.className="callout-badge",it.dataset.partId=D.id;const Et=Gm[D.id]||D.name.toUpperCase();it.innerHTML=`<span class="badge-code">${D.code}</span><span class="badge-name">${Et}</span>`,it.addEventListener("click",Ht=>{var It;Ht.stopPropagation(),(It=c==null?void 0:c.playClick)==null||It.call(c),V(D.id,{focusCamera:!0})}),Dt.appendChild(it),ue.set(D.id,{badge:it,line:G,dot:et})}});function Bt(){const D=h.isolatedPartId,G=h.selectedPartId,et=h.hoveredPartId;if(Qt.forEach(it=>{const Et=d(it.id);if(!Et)return;f(Et);const Ht=D===it.id,It=!!(D&&!Ht),ae=it.id===et||it.id===G;Et.traverse(ge=>{if(!ge.isMesh||!ge.material)return;ge.renderOrder=It?3:0,(Array.isArray(ge.material)?ge.material:[ge.material]).forEach(fe=>{const Pe=u.get(fe);Pe&&(It?(fe.transparent=!0,fe.opacity=.12,fe.depthWrite=!1):(fe.transparent=Pe.transparent,fe.opacity=Pe.opacity,fe.depthWrite=Pe.depthWrite),fe.emissive&&(ae&&!It?(fe.emissive.setHex(it.id===et?16758784:6702080),fe.emissiveIntensity=it.id===et?.35:.18):(fe.emissive.setHex(Pe.emissiveHex),fe.emissiveIntensity=Pe.emissiveIntensity)),fe.needsUpdate=!0)})})}),F.forEach((it,Et)=>{it.classList.toggle("selected",Et===G),it.classList.toggle("isolated",Et===D)}),X){const it=!!(D&&D===G);X.classList.toggle("active",it),X.setAttribute("aria-pressed",String(it)),X.textContent=it?"Exit X-ray isolate":"Isolate part (X-ray)"}if(Z)if(D){const it=Qt.find(Et=>Et.id===D);Z.textContent=`SOLO: ${it?it.code:"1/12"}`}else{const it=Qt.find(Et=>Et.id===G);Z.textContent=it?`${it.code} SELECTED`:"ALL ACTIVE"}x&&(x.textContent=D?"1/12 (SOLO)":"12/12")}function kt(D){const G=Qt.find(et=>et.id===D)||Qt[7];if(G){if(J&&(J.textContent=G.code),O&&(O.textContent=G.layer.replace("_"," ").toUpperCase()),Q&&(Q.textContent=G.name),nt&&(nt.textContent=G.description),mt&&(mt.textContent=`${G.massKg.toFixed(1)} kg`),Lt&&(Lt.textContent=G.fiaArticle),zt&&(zt.textContent=G.materialSpec),I){const{loadN:et,tempC:it,aeroCoeff:Et}=G.telemetryMetrics;I.textContent=`${et.toLocaleString()} N // ${it} °C // ${Et}`}if(k){const[et,it,Et]=G.explodeVector,Ht=It=>`${It>=0?"+":""}${It.toFixed(2)}`;k.textContent=`(${Ht(et)}, ${Ht(it)}, ${Ht(Et)} m)`}}}const gt=new ze,Pt=new b,ft=new Xi;let C=null;function w(D){if(!i||!t)return;const G=d(D),et=Qt.find(ae=>ae.id===D);if(!G&&!et)return;G&&gt.setFromObject(G),G&&!gt.isEmpty()?(gt.getCenter(Pt),gt.getBoundingSphere(ft)):et&&(Pt.set(...et.assembledPivot),ft.radius=.65);const it=Math.max(.55,Math.min(2.2,ft.radius*2.1)),Et=i.position.clone().sub(t.target).normalize();Et.lengthSq()<.001&&Et.set(.65,.38,.65).normalize();const Ht=Pt.clone(),It=Ht.clone().addScaledVector(Et,it*2.15);It.y=Math.max(.28,It.y),C={startPos:i.position.clone(),endPos:It,startTarget:t.target.clone(),endTarget:Ht,elapsed:0,duration:.48}}function V(D,{focusCamera:G=!1}={}){D&&(h.selectedPartId=D,kt(D),Bt(),G&&w(D))}function ot(D=h.selectedPartId){D&&(h.isolatedPartId===D?h.isolatedPartId=null:(h.isolatedPartId=D,h.selectedPartId=D),kt(h.selectedPartId),Bt())}function ct(){const D=Math.round((h.masterExplode||0)*100);L&&(L.value=String(D)),A&&(A.textContent=`${D}%`),T.forEach(G=>{var It;const et=G.dataset.layer,it=((It=h.layerWeights)==null?void 0:It[et])??h.masterExplode??0,Et=Math.round(it*100);G.value=String(Et);const Ht=document.getElementById(`val-layer-${et}`);Ht&&(Ht.textContent=`${Et}%`)})}L&&L.addEventListener("input",D=>{var et,it;const G=Math.max(0,Math.min(1,Number(D.target.value)/100));h.masterExplode=G,h.layerWeights={aero:G,chassis:G,powertrain:G,chassis_dynamics:G},(et=o==null?void 0:o.setMasterExplode)==null||et.call(o,G),(it=o==null?void 0:o.setTargetExplode)==null||it.call(o,G),ct()}),T.forEach(D=>{D.addEventListener("input",G=>{var It,ae;const et=D.dataset.layer,it=Math.max(0,Math.min(1,Number(G.target.value)/100));h.layerWeights||(h.layerWeights={}),h.layerWeights[et]=it;const Et=document.getElementById(`val-layer-${et}`);Et&&(Et.textContent=`${Math.round(it*100)}%`),(It=o==null?void 0:o.setLayerWeight)==null||It.call(o,et,it),(ae=o==null?void 0:o.setLayerExplode)==null||ae.call(o,et,it);const Ht=Object.values(h.layerWeights);if(Ht.length>0){const ge=Ht.reduce((en,fe)=>en+fe,0)/Ht.length;h.masterExplode=ge,L&&(L.value=String(Math.round(ge*100))),A&&(A.textContent=`${Math.round(ge*100)}%`)}})});function st(D){var G,et,it,Et,Ht,It,ae,ge,en;h.activePreset=D,P.forEach(fe=>{fe.classList.toggle("active",fe.dataset.preset===D)}),D==="m1_full_cad_explode"||D==="m1"?(h.masterExplode=1,h.layerWeights={aero:1,chassis:1,powertrain:1,chassis_dynamics:1},(G=c==null?void 0:c.playPneumaticWrench)==null||G.call(c)):D==="m2_aero_powertrain_strip"||D==="m2"?(h.masterExplode=.65,h.layerWeights={aero:1,chassis:.25,powertrain:.85,chassis_dynamics:.35},(et=c==null?void 0:c.playLatchImpulse)==null||et.call(c)):D==="m3_drs_wind_tunnel"||D==="m3"?(h.masterExplode=0,h.layerWeights={aero:0,chassis:0,powertrain:0,chassis_dynamics:0},h.windTunnelActive=!0,h.drsOpen=!0,R&&(R.checked=!0),N&&(N.checked=!0),(it=a==null?void 0:a.setActive)==null||it.call(a,!0),(Et=a==null?void 0:a.setEnabled)==null||Et.call(a,!0),(Ht=a==null?void 0:a.setDrsOpen)==null||Ht.call(a,!0),(It=o==null?void 0:o.setDrsOpen)==null||It.call(o,!0)):(h.masterExplode=0,h.layerWeights={aero:0,chassis:0,powertrain:0,chassis_dynamics:0},(ae=c==null?void 0:c.playPneumaticWrench)==null||ae.call(c)),(ge=o==null?void 0:o.triggerPreset)==null||ge.call(o,D),(en=o==null?void 0:o.triggerMovement)==null||en.call(o,D),ct()}P.forEach(D=>{D.addEventListener("click",()=>{var G;(G=c==null?void 0:c.playClick)==null||G.call(c),st(D.dataset.preset)})}),M.forEach(D=>{D.addEventListener("click",()=>{const G=D.dataset.cam;M.forEach(et=>et.classList.toggle("active",et===D)),C=null,h.cameraView=G,typeof l=="function"?l(G):typeof window.__SET_CAMERA_VIEW__=="function"&&window.__SET_CAMERA_VIEW__(G)})}),R&&R.addEventListener("change",D=>{var et,it,Et;const G=!!D.target.checked;h.windTunnelActive=G,(et=a==null?void 0:a.setActive)==null||et.call(a,G),(it=a==null?void 0:a.setEnabled)==null||it.call(a,G),(Et=a==null?void 0:a.setVisible)==null||Et.call(a,G)}),N&&N.addEventListener("change",D=>{var et,it,Et;const G=!!D.target.checked;h.drsOpen=G,(et=a==null?void 0:a.setDrsOpen)==null||et.call(a,G),(it=o==null?void 0:o.setDrsOpen)==null||it.call(o,G),(Et=c==null?void 0:c.playLatchImpulse)==null||Et.call(c)}),v.forEach(D=>{D.addEventListener("click",()=>{h.calloutMode=D.dataset.calloutMode||"auto",v.forEach(G=>G.classList.toggle("active",G===D))})}),U&&U.addEventListener("click",()=>{var D;U.classList.toggle("active"),typeof window.__START_AUTOPILOT__=="function"?window.__START_AUTOPILOT__():(D=o==null?void 0:o.startAutopilot)==null||D.call(o)});let bt=!1;H&&H.addEventListener("click",()=>{var D,G;c!=null&&c.toggleMute?bt=!c.toggleMute():(bt=!bt,(D=c==null?void 0:c.setMuted)==null||D.call(c,!bt),bt&&((G=c==null?void 0:c.resume)==null||G.call(c))),H.classList.toggle("active",bt),H.setAttribute("aria-pressed",String(bt)),H.textContent=bt?"Audio: Live":"Audio: Mute"}),X&&X.addEventListener("click",()=>{var D;(D=c==null?void 0:c.playClick)==null||D.call(c),ot(h.selectedPartId)}),rt&&rt.addEventListener("click",()=>{var D;(D=c==null?void 0:c.playClick)==null||D.call(c),h.isolatedPartId=null,C=null,Bt(),typeof l=="function"?l("front_34"):typeof window.__SET_CAMERA_VIEW__=="function"&&window.__SET_CAMERA_VIEW__("front_34")}),ut&&at&&ut.addEventListener("click",()=>{const D=at.classList.toggle("mobile-open");ut.classList.toggle("active",D),D&&lt&&(lt.classList.remove("mobile-open"),K==null||K.classList.remove("active"))}),K&&lt&&K.addEventListener("click",()=>{const D=lt.classList.toggle("mobile-open");K.classList.toggle("active",D),D&&at&&(at.classList.remove("mobile-open"),ut==null||ut.classList.remove("active"))});const yt=new K0,St=new _t;let qt={x:0,y:0},pt=!1;function Tt(D){var et;let G=D;for(;G;){if((et=G.userData)!=null&&et.partId)return G.userData.partId;if(G.name&&Qt.some(it=>it.id===G.name))return G.name;for(const it of Qt)if(d(it.id)===G)return it.id;G=G.parent}return null}function Ft(D,G){const et=e==null?void 0:e.domElement;if(!et||!i)return null;const it=et.getBoundingClientRect();if(it.width<=0||it.height<=0)return null;St.x=(D-it.left)/it.width*2-1,St.y=-((G-it.top)/it.height)*2+1,yt.setFromCamera(St,i);const Et=[];Qt.forEach(It=>{const ae=d(It.id);ae&&Et.push(ae)}),Et.length===0&&s&&Et.push(s);const Ht=yt.intersectObjects(Et,!0);for(const It of Ht){const ae=Tt(It.object);if(ae)return ae}return null}const Ot=e==null?void 0:e.domElement;Ot&&(Ot.addEventListener("pointerdown",D=>{qt.x=D.clientX,qt.y=D.clientY,pt=!1}),Ot.addEventListener("pointermove",D=>{const G=D.clientX-qt.x,et=D.clientY-qt.y;Math.hypot(G,et)>5&&(pt=!0);const it=Ft(D.clientX,D.clientY);it!==h.hoveredPartId&&(h.hoveredPartId=it,Ot.style.cursor=it?"pointer":"grab",Bt())}),Ot.addEventListener("pointerup",D=>{var it;if(Math.hypot(D.clientX-qt.x,D.clientY-qt.y)>5||pt)return;const et=Ft(D.clientX,D.clientY);et?((it=c==null?void 0:c.playClick)==null||it.call(c),V(et,{focusCamera:!0})):h.isolatedPartId&&(h.isolatedPartId=null,Bt())}));const wt=new ze,Kt=new b,Wt=new b;function ce(D=.016){var $i;if(C&&i&&t){C.elapsed+=D;const Jt=Math.min(1,C.elapsed/C.duration),pe=1-Math.pow(1-Jt,3);i.position.lerpVectors(C.startPos,C.endPos,pe),t.target.lerpVectors(C.startTarget,C.endTarget,pe),($i=t.update)==null||$i.call(t),Jt>=1&&(C=null)}const G=h.masterExplode??0,it=((window.__MOTION_TELEMETRY__||{}).currentPhase||(G<.05?"ASSEMBLED":"EXPLODED")).toUpperCase();_&&(_.textContent=`PHASE: ${it}`);const Et=Math.round(G*100);g&&(g.textContent=`${Et}%`,g.classList.toggle("highlight-amber",Et>5));const Ht=!!h.drsOpen,It=Math.round((Ht?-1410:-1850)*(1-.35*G));m&&(m.textContent=`${It.toLocaleString()} kgf`);const ae=Math.round(11400+(Ht?1850:0)+Math.sin(performance.now()*.006)*65);p&&(p.textContent=`${ae.toLocaleString()} RPM`);const ge=Math.round(790+(Ht?38:0)-G*85);S&&(S.textContent=`${ge} °C`),y&&(y.textContent=Ht?"OPEN (24°)":"CLOSED (0°)",y.classList.toggle("highlight-amber",Ht));const en=h.calloutMode||"auto",fe=window.innerWidth||1440,Pe=window.innerHeight||900,fi=fe>1024,pi=fi?368:85,Zi=fi?Math.max(pi+60,fe-375):Math.max(85,fe-85),Dn=68,Ki=Math.max(Dn+60,Pe-44),Ze=[];Qt.forEach(Jt=>{const pe=ue.get(Jt.id);if(!pe)return;const Le=Jt.id===h.selectedPartId||Jt.id===h.hoveredPartId||Jt.id===h.isolatedPartId;let De=!1;if(en==="hidden"?De=!1:en==="all"?De=!0:De=G>=.15?!0:Le,h.isolatedPartId&&h.isolatedPartId!==Jt.id&&(De=!1),!De||!i){pe.badge.style.display="none",pe.line.style.display="none",pe.dot.style.display="none";return}const E=d(Jt.id);if(E?(wt.setFromObject(E),wt.isEmpty()?Kt.set(...Jt.assembledPivot):wt.getCenter(Kt)):Kt.set(Jt.assembledPivot[0]+Jt.explodeVector[0]*G,Jt.assembledPivot[1]+Jt.explodeVector[1]*G,Jt.assembledPivot[2]+Jt.explodeVector[2]*G),Wt.copy(Kt).project(i),Wt.z>1||Wt.z<-1){pe.badge.style.display="none",pe.line.style.display="none",pe.dot.style.display="none";return}const z=(Wt.x*.5+.5)*fe,q=(-Wt.y*.5+.5)*Pe,$=z-fe*.5,W=q-Pe*.5,dt=Math.hypot($,W)||1,xt=Math.max(pi,Math.min(Zi,z+$/dt*42)),At=Math.max(Dn,Math.min(Ki,q+W/dt*34-16));Ze.push({id:Jt.id,dom:pe,anchorX:z,anchorY:q,x:xt,y:At,w:132,h:26,selected:Jt.id===h.selectedPartId})});for(let Jt=0;Jt<4;Jt++){for(let pe=0;pe<Ze.length;pe++)for(let Le=pe+1;Le<Ze.length;Le++){const De=Ze[pe],E=Ze[Le],z=E.x-De.x,q=E.y-De.y,$=(De.w+E.w)*.5+8,W=(De.h+E.h)*.5+6;if(Math.abs(z)<$&&Math.abs(q)<W){const dt=$-Math.abs(z),xt=W-Math.abs(q);if(xt<=dt*1.2){const At=q>=0?1:-1,Rt=xt*.55*At;De.y-=Rt,E.y+=Rt}else{const At=z>=0?1:-1,Rt=dt*.55*At;De.x-=Rt,E.x+=Rt}}}for(let pe=0;pe<Ze.length;pe++){const Le=Ze[pe];Le.x=Math.max(pi,Math.min(Zi,Le.x)),Le.y=Math.max(Dn,Math.min(Ki,Le.y))}}for(const Jt of Ze){const{badge:pe,line:Le,dot:De}=Jt.dom;pe.style.display="inline-flex",pe.style.left=`${Jt.x.toFixed(1)}px`,pe.style.top=`${Jt.y.toFixed(1)}px`,pe.classList.toggle("selected",Jt.selected),Le.style.display="block",Le.setAttribute("x1",Jt.anchorX.toFixed(1)),Le.setAttribute("y1",Jt.anchorY.toFixed(1)),Le.setAttribute("x2",Jt.x.toFixed(1)),Le.setAttribute("y2",Jt.y.toFixed(1)),De.style.display="block",De.setAttribute("cx",Jt.anchorX.toFixed(1)),De.setAttribute("cy",Jt.anchorY.toFixed(1))}}V(h.selectedPartId||"part_08_power_unit",{focusCamera:!1}),ct();let B=-1;function vt(D=.016,G=performance.now()){B=G,ct(),ce(D)}function tt(D){D-B>24&&vt(.016,D),requestAnimationFrame(tt)}return requestAnimationFrame(tt),{update:vt,selectPart:V,toggleIsolatePart:ot,activatePreset:st,syncSlidersFromState:ct,applyIsolationAndHighlightState:Bt}}function Vm(i){const t=new Io(i);t.compileEquirectangularShader();const e=new il;e.background=new Ct(395277);const n=new j(new hn(16,4.2),new gn({color:new Ct(1.45,1.52,1.68),side:Ye}));n.position.set(0,8,0),n.rotation.x=Math.PI/2,e.add(n);const s=new j(new hn(14,1.8),new gn({color:new Ct(.35,.95,1.45),side:Ye}));s.position.set(0,3.4,-7),s.lookAt(0,.5,0),e.add(s);const r=new j(new hn(14,1.8),new gn({color:new Ct(1.05,1.15,1.32),side:Ye}));r.position.set(0,3.4,7),r.lookAt(0,.5,0),e.add(r);const o=new j(new hn(7,2.5),new gn({color:new Ct(1.1,1.18,1.32),side:Ye}));o.position.set(8,3,0),o.lookAt(0,.4,0),e.add(o);const a=t.fromScene(e,.04);return t.dispose(),a.texture}function Xm(){const i=document.createElement("canvas");i.width=256,i.height=256;const t=i.getContext("2d"),e=t.createRadialGradient(128,128,12,128,128,120);e.addColorStop(0,"rgba(0, 0, 0, 0.85)"),e.addColorStop(.45,"rgba(0, 0, 0, 0.52)"),e.addColorStop(.8,"rgba(0, 0, 0, 0.14)"),e.addColorStop(1,"rgba(0, 0, 0, 0.0)"),t.fillStyle=e,t.fillRect(0,0,256,256);const n=new al(i);return n.needsUpdate=!0,n}function Ym(i){const t=new te;t.name="studio_telemetry_bay";const e=new hn(44,44);e.rotateX(-Math.PI/2);const n=new Ve({color:592916,roughness:.92,metalness:.03,envMapIntensity:.12}),s=new j(e,n);s.position.y=-.002,s.receiveShadow=!0,s.name="pitFloorMesh",t.add(s);const r=new $0(16,32,1976635,1120295);r.position.y=5e-4,r.renderOrder=1,Array.isArray(r.material)?r.material.forEach(m=>{m.transparent=!0,m.opacity=.42,m.depthWrite=!1}):(r.material.transparent=!0,r.material.opacity=.42,r.material.depthWrite=!1),t.add(r);const o=new hr({color:3718648,transparent:!0,opacity:.24,depthWrite:!1}),a=new Float32Array([se.frontAxleX,.001,-1.65,se.frontAxleX,.001,1.65,se.rearAxleX,.001,-1.65,se.rearAxleX,.001,1.65,-3.4,.001,0,3.4,.001,0]),c=new Se;c.setAttribute("position",new Fe(a,3));const l=new rl(c,o);l.renderOrder=1,t.add(l);const h=Xm(),d=[];[{x:se.frontAxleX,z:-se.frontTrackHalfZ,w:.72,d:.52},{x:se.frontAxleX,z:se.frontTrackHalfZ,w:.72,d:.52},{x:se.rearAxleX,z:-se.rearTrackHalfZ,w:.76,d:.62},{x:se.rearAxleX,z:se.rearTrackHalfZ,w:.76,d:.62}].forEach(m=>{const p=new hn(m.w,m.d);p.rotateX(-Math.PI/2);const S=new gn({map:h,transparent:!0,opacity:.82,depthWrite:!1}),y=new j(p,S);y.position.set(m.x,.0012,m.z),y.renderOrder=2,t.add(y),d.push(y)});const f=new hn(4.8,1.85);f.rotateX(-Math.PI/2);const _=new gn({map:h,transparent:!0,opacity:.58,depthWrite:!1}),g=new j(f,_);return g.position.set(-.15,9e-4,0),g.renderOrder=2,t.add(g),i.add(t),{studioGroup:t,pitFloorMesh:s,wheelShadowPads:d,bodyShadowMesh:g}}function qm(){const i=document.getElementById("viewport-container");if(!i)throw new Error("Missing #viewport-container element in DOM");const t=i.clientWidth||window.innerWidth||1440,e=i.clientHeight||window.innerHeight||900,n=new R0({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});n.setSize(t,e),n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.shadowMap.enabled=!0,n.shadowMap.type=bc,n.toneMapping=Ac,n.toneMappingExposure=1.24,n.outputColorSpace=Xe,i.appendChild(n.domElement);const s=new il;s.background=new Ct(461070),s.fog=new Zo(461070,.018),s.environment=Vm(n);const r=new Je(36,t/e,.08,80),o=new Q0(r,n.domElement);o.enableDamping=!0,o.dampingFactor=.065,o.maxDistance=16,o.minDistance=.75,o.maxPolarAngle=Math.PI*.52;const a=new X0(13358561,593174,.78);s.add(a);const c=new Xs(16317180,2.65);c.position.set(4.5,6.8,3.8),c.castShadow=!0,c.shadow.mapSize.width=2048,c.shadow.mapSize.height=2048,c.shadow.camera.near=.5,c.shadow.camera.far=18,c.shadow.camera.left=-3.8,c.shadow.camera.right=3.8,c.shadow.camera.top=2.6,c.shadow.camera.bottom=-1.6,c.shadow.bias=-4e-4,s.add(c);const l=new Xs(3718648,1.15);l.position.set(3.2,2.4,-4.8),s.add(l);const h=new Xs(14742270,1.35);h.position.set(-5.2,3.4,-3.2),s.add(h);const d=new Xs(14870768,1.05);d.position.set(-4.8,2.2,3.6),s.add(d);const u=new q0(3718648,1.2,4.5,1.5);u.position.set(-.35,.12,0),s.add(u);const f=Ym(s),_=_m(),g=Sm(_),m=Lm(_),p=new te;p.name="rbx24_car_root",s.add(p);const S=new Map,y={...g,...m};for(const O of Qt){const Q=y[O.id];if(!Q)throw new Error(`Missing sub-assembly group for ${O.id}`);Q.name=O.id,Q.userData.partId=O.id,Q.userData.partMeta=O,Q.traverse(nt=>{var mt;nt.userData.partId=O.id,O.id==="part_12_wheels_tires"&&((mt=nt.name)!=null&&mt.startsWith("pirelli_slick_tire_"))&&(nt.name=nt.name.replace("tire","tread"))}),S.set(O.id,Q),p.add(Q)}const x=Um(s,p,S,f),L=Wm(s),A=Hm(),T=x.triggerMovement;function P(O,Q){const nt=String(O||"");let mt=nt;nt==="m4_pitstop_reassemble"||nt==="m4"||nt==="assembled"?mt="m4_pitstop_reassembly":nt==="m2_aero_powertrain_strip"||nt==="m2"||nt==="powertrain_cutaway"?mt="m2_aero_strip_powertrain":nt==="m1_full_cad_explode"||nt==="m1"||nt==="full_explode"?mt="m1_full_cad_explode":(nt==="m3_drs_wind_tunnel"||nt==="m3"||nt==="wind_tunnel")&&(mt="m3_drs_wind_tunnel"),T(mt,Q)}x.triggerMovement=P,x.triggerPreset=void 0,L.setActive=O=>{x.setWindTunnel(O,315),L.setVisible(O)},L.setEnabled=L.setActive,L.setDrsOpen=O=>{x.setDrsOpen(O?1:0)},A.playClick=()=>A.triggerLatchImpulse("unlatch"),A.playLatchImpulse=()=>A.triggerLatchImpulse("unlatch"),A.playPneumaticWrench=()=>A.triggerWheelGunBurst();const M=Object.freeze({front_34:{pos:[5.15,1.98,4.05],target:[.15,.38,0],fov:35},side:{pos:[.1,.48,7.25],target:[.1,.42,0],fov:31},front:{pos:[5.85,.56,0],target:[0,.4,0],fov:30},top:{pos:[.1,7.45,.001],target:[.1,.35,0],fov:32},rear_34:{pos:[-4.95,1.92,-3.75],target:[-.08,.42,0],fov:35},closeup:{pos:[-.55,1.24,1.68],target:[-.45,.38,0],fov:34},ground_check:{pos:[1.85,.22,2.25],target:[1.15,.22,0],fov:32},exploded:{pos:[7.65,3.55,6.45],target:[.25,.42,0],fov:36}});function v(O){const Q=M[O]||M.front_34;r.fov=Q.fov||35,r.position.set(...Q.pos),o.target.set(...Q.target),r.updateProjectionMatrix(),o.update(),window.__SIM_STATE__&&(window.__SIM_STATE__.cameraView=O)}v("front_34");const R=km({camera:r,controls:o,renderer:n,scene:s,carRootGroup:p,partGroupsMap:S,kinematics:x,windTunnel:L,audio:A,setCameraView:v});function N(){s.updateMatrixWorld(!0);const O=S.get("part_12_wheels_tires"),Q=new ze;O&&(O.traverse(X=>{var rt;if(X.isMesh&&((rt=X.name)!=null&&rt.includes("pirelli_slick"))){const at=new ze().setFromObject(X);Q.union(at)}}),Q.isEmpty()&&Q.setFromObject(O));const nt=new ze;for(const X of["part_02_monocoque","part_04_sidepod_left","part_05_sidepod_right","part_06_engine_cover","part_07_venturi_floor"]){const rt=S.get(X);rt&&nt.union(new ze().setFromObject(rt))}const mt=S.get("part_08_power_unit"),Lt=S.get("part_09_gearbox"),zt=mt?new ze().setFromObject(mt):new ze,I=Lt?new ze().setFromObject(Lt):new ze,k=zt.max.y<=nt.max.y+.01&&zt.min.y>=nt.min.y-.01&&Math.abs(zt.max.z)<=.35&&I.max.y<=nt.max.y+.01;return{partCount:S.size,tireMinY:Number(Q.min.y.toFixed(4)),internalContained:k,outerBounds:{min:nt.min.toArray().map(X=>Number(X.toFixed(3))),max:nt.max.toArray().map(X=>Number(X.toFixed(3)))},powerUnitBounds:{min:zt.min.toArray().map(X=>Number(X.toFixed(3))),max:zt.max.toArray().map(X=>Number(X.toFixed(3)))}}}let U=0;function H(O){var mt,Lt;const Q=Math.max(.001,Math.min(.033,O));U+=Q,x.update(Q,U);const nt=window.__SIM_STATE__;if(nt){let zt=0;for(const X of Qt)zt+=Math.max(0,Math.min(1,((mt=x.partStates[X.id])==null?void 0:mt.s)??0));const I=zt/Qt.length;(x.telemetry.currentPhase!=="settled"||nt.activePreset==="powertrain_cutaway")&&(nt.masterExplode=Number(I.toFixed(3)));const k=Math.max(0,Math.min(1,((Lt=x.partStates.part_12_wheels_tires)==null?void 0:Lt.s)??0));f.wheelShadowPads.forEach(X=>{X.material.opacity=.82*(1-.72*k)}),f.bodyShadowMesh.material.opacity=.58*(1-.65*I)}L.update(Q,U,window.__SIM_STATE__),A.updateAudio(window.__SIM_STATE__,x.telemetry),o.update(),R.update(Q,U*1e3),n.render(s,r)}function Y(O=16.67){const Q=.016666666666666666;let nt=Math.max(.001,Number(O)/1e3);for(;nt>1e-4;){const mt=Math.min(Q,nt);H(mt),nt-=mt}}window.__SET_CAMERA_VIEW__=v,window.__STEP_TIME__=Y,window.__AUDIT_GEOMETRY__=N,window.addEventListener("resize",()=>{const O=i.clientWidth||window.innerWidth,Q=i.clientHeight||window.innerHeight;r.aspect=O/Q,r.updateProjectionMatrix(),n.setSize(O,Q),R.update(.001,performance.now())}),Y(32);let Z=performance.now();function J(O){const Q=(O-Z)/1e3;Z=O,Q>1e-4&&H(Math.min(.033,Q)),requestAnimationFrame(J)}requestAnimationFrame(J)}qm();
