((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={bmz:function bmz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},bmA:function bmA(){},bmB:function bmB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},bmy:function bmy(){},amS:function amS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},Nl:function Nl(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.va$=d
_.cJ$=e
_.aw$=f
_.a=null},akx:function akx(d,e,f,g,h,i,j){var _=this
_.dP=d
_.y1=e
_.y2=f
_.cY$=g
_.a4$=h
_.cV$=i
_.b=_.dy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
ca7(d,e,f,g,h,i){var x=null
return new A.aeT(d,new B.B5(e,f,!0,!0,!0,B.bZx(),x),g,C.E,!1,x,x,h,x,!0,x,0,x,x,f,C.h9,C.a6,x,x,C.N,C.bs,x)},
aeT:function aeT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
_.to=d
_.x1=e
_.dx=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.w=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.as=q
_.at=r
_.ax=s
_.ay=t
_.ch=u
_.CW=v
_.cx=w
_.cy=x
_.a=a0},
amR:function amR(d,e,f){this.f=d
this.d=e
this.a=f}}
B=c[0]
C=c[2]
A=a.updateHolder(c[34],A)
A.bmz.prototype={
ayO(d){var x=this.c
return d.Bk(this.d,x,x)},
k(d){var x=this
return"SliverGridGeometry("+C.b.bn(B.b(["scrollOffset: "+B.v(x.a),"crossAxisOffset: "+B.v(x.b),"mainAxisExtent: "+B.v(x.c),"crossAxisExtent: "+B.v(x.d)],y.x),", ")+")"}}
A.bmA.prototype={}
A.bmB.prototype={
azp(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.iX(d/x)-1)
return 0},
aSo(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
V6(d){var x=this,w=x.a,v=C.j.b3(d,w)
return new A.bmz(C.j.jb(d,w)*x.b,x.aSo(v*x.c),x.d,x.e)},
aoD(d){var x
if(d===0)return 0
x=this.b
return x*(C.j.jb(d-1,this.a)+1)-(x-this.d)}}
A.bmy.prototype={}
A.amS.prototype={
a7Q(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.bmB(v,t+x.b,u+w,t,u,B.Ih(d.x))}}
A.Nl.prototype={
k(d){return"crossAxisOffset="+B.v(this.w)+"; "+this.aap(0)}}
A.akx.prototype={
ff(d){if(!(d.b instanceof A.Nl))d.b=new A.Nl(!1,null,null)},
sVs(d){var x,w,v=this
if(v.dP===d)return
x=!0
if(B.Q(d)===B.Q(v.dP)){w=v.dP
if(w.a===d.a)if(w.b===d.b)if(w.c===d.c)x=w.d!==d.d}if(x)v.ab()
v.dP=d},
xA(d){var x=d.b
x.toString
x=y.t.a(x).w
x.toString
return x},
bJ(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=y.z.a(B.N.prototype.gY.call(a6)),a9=a6.y1
a9.R8=!1
x=a8.d
w=x+a8.z
v=w+a8.Q
u=a6.dP.a7Q(a8)
t=u.b
s=t>1e-10?u.a*C.d.jb(w,t):0
r=isFinite(v)?u.azp(v):a7
if(a6.a4$!=null){q=a6.ao0(s)
a6.mB(q,r!=null?a6.ao2(r):0)}else a6.mB(0,0)
p=u.V6(s)
if(a6.a4$==null)if(!a6.Pk(s,p.a)){o=u.aoD(a9.gBv())
a6.dy=B.kn(a7,!1,a7,a7,o,0,0,0,o,a7)
a9.qd()
return}n=p.a
m=n+p.c
t=a6.a4$
t.toString
t=t.b
t.toString
l=y.c
t=l.a(t).b
t.toString
k=t-1
t=y.t
j=a7
for(;k>=s;--k){i=u.V6(k)
h=i.c
g=a6.asc(a8.Bk(i.d,h,h))
f=g.b
f.toString
t.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
m=Math.max(m,e+h)}if(j==null){h=a6.a4$
h.toString
h.hQ(p.ayO(a8))
j=a6.a4$
h=j.b
h.toString
t.a(h)
h.a=n
h.w=p.b}h=j.b
h.toString
h=l.a(h).b
h.toString
k=h+1
h=B.A(a6).h("aG.1")
f=r!=null
for(;;){if(!(!f||k<=r)){d=!1
break}i=u.V6(k)
e=i.c
a0=a8.Bk(i.d,e,e)
a1=j.b
a1.toString
g=h.a(a1).aw$
if(g!=null){a1=g.b
a1.toString
a1=l.a(a1).b
a1.toString
a1=a1!==k}else a1=!0
if(a1){g=a6.asb(a0,j)
if(g==null){d=!0
break}}else g.hQ(a0)
a1=g.b
a1.toString
t.a(a1)
a2=i.a
a1.a=a2
a1.w=i.b
m=Math.max(m,a2+e);++k
j=g}t=a6.cV$
t.toString
t=t.b
t.toString
t=l.a(t).b
t.toString
a3=d?m:a9.R5(a8,s,t,n,m)
a4=a6.xu(a8,Math.min(x,n),m)
a5=a6.Bq(a8,n,m)
a6.dy=B.kn(a5,a3>a4||x>0||a8.f!==0,a7,a7,a3,0,a4,0,a3,a7)
if(a3===m)a9.R8=!0
a9.qd()}}
A.aeT.prototype={
PL(d){return new A.amR(this.to,this.x1,null)}}
A.amR.prototype={
aZ(d){var x=new A.akx(this.f,y.v.a(d),B.w(y.e,y.g),0,null,null,B.aK(y.d))
x.aX()
return x},
b4(d,e){e.sVs(this.f)},
a3J(d,e,f,g,h){var x,w
this.aGh(d,e,f,g,h)
x=this.f.a7Q(d)
w=this.d.gBU()
w.toString
w=x.aoD(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.C,[A.bmz,A.bmA,A.bmy])
w(A.bmB,A.bmA)
w(A.amS,A.bmy)
w(A.Nl,B.ic)
w(A.akx,B.oK)
w(A.aeT,B.D4)
w(A.amR,B.lZ)})()
B.el(b.typeUniverse,JSON.parse('{"Nl":{"ic":[],"uT":[],"hA":["X"],"pA":[],"ey":[]},"akx":{"oK":[],"eJ":[],"aG":["X","ic"],"N":[],"j":[],"aW":[],"aG.1":"ic","aG.0":"X"},"aeT":{"ak":[],"f":[],"j":[]},"amR":{"lZ":[],"aZ":[],"f":[],"j":[]}}'))
var y={d:B.U("fQ"),x:B.U("B<i>"),g:B.U("X"),z:B.U("pZ"),t:B.U("Nl"),v:B.U("B6"),c:B.U("ic"),e:B.U("h")}};
(a=>{a["QcQhmIkEoUK8jT13o2ecayrjHPw="]=a.current})($__dart_deferred_initializers__);