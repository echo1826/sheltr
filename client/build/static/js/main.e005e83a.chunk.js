(this.webpackJsonpsheltr=this.webpackJsonpsheltr||[]).push([[0],{146:function(e,a,n){e.exports=n(173)},151:function(e,a,n){},152:function(e,a,n){},158:function(e,a,n){},164:function(e,a,n){},165:function(e,a,n){},169:function(e,a,n){},170:function(e,a,n){},171:function(e,a,n){},172:function(e,a,n){},173:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(49),i=n.n(l),o=(n(151),n(40)),s=n(89),c=n(21),u=n(130),m=n(180),d=n(238),g=n(234),p=n(128),f=n(249),h=n(248),E=n(251);n(152);function b(){return t.createElement(h.a,{sx:{}},t.createElement(f.a,{sx:{position:"static",backgroundColor:"transparent"}},t.createElement(E.a,{className:"sheltrHeader"},t.createElement("img",{src:"./images/sheltr_logo2.png",alt:"Sheltr",className:"headerImg"}),t.createElement("a",{href:"/sheltr",className:"headerText",style:{textDecoration:"none",color:"#000"}},"Sheltr"))))}var v=n(12),y=n(223),k=n(252),w=n(253),N=n(250);n(158);function j(){var e=r.a.useState(0),a=Object(v.a)(e,2),n=a[0],t=a[1],l=r.a.useRef(null),i=r.a.useState({width:window.innerWidth}),o=Object(v.a)(i,2),s=o[0],c=o[1];return r.a.useEffect((function(){window.addEventListener("resize",(function(){c({width:window.innerWidth})}))}),[]),r.a.createElement(h.a,{sx:{pb:7},ref:l},s.width<1200?r.a.createElement("div",null,r.a.createElement(y.a,null),r.a.createElement(N.a,{className:"bottomNavbarContainer",elevation:3},r.a.createElement(k.a,{showlabels:"true",value:n,sx:{alignItems:"center"},onChange:function(e,a){t(a)}},r.a.createElement("a",{href:"/profile"},r.a.createElement(w.a,{label:"Profile",icon:r.a.createElement("img",{src:"./images/profileblank2.png",alt:"profile"})})),r.a.createElement("a",{href:"/sheltr"},r.a.createElement(w.a,{label:"Sheltr",icon:r.a.createElement("img",{src:"./images/pawblank2.png",alt:"sheltr"})})),r.a.createElement("a",{href:"/likes"},r.a.createElement(w.a,{label:"Likes",icon:r.a.createElement("img",{src:"./images/heartblank2.png",alt:"liked cards"})})),r.a.createElement("a",{href:"/settings"},r.a.createElement(w.a,{label:"Settings",icon:r.a.createElement("img",{src:"./images/settingsblank2.png",alt:"settings"})}))))):r.a.createElement("div",{className:"topNavContainer"},r.a.createElement("nav",{role:"navigation"},r.a.createElement("ul",{className:"topNavUl"},r.a.createElement("li",{className:"topNavLi"},r.a.createElement("a",{href:"/profile",className:"topNavLink"},r.a.createElement("img",{src:"./images/profileblank.png",alt:"profile"}),"Profile")),r.a.createElement("li",{className:"topNavLi"},r.a.createElement("a",{href:"/sheltr",className:"topNavLink"},r.a.createElement("img",{src:"./images/pawblank.png",alt:"sheltr"}),"Sheltr")),r.a.createElement("li",{className:"topNavLi"},r.a.createElement("a",{href:"/likes",className:"topNavLink"},r.a.createElement("img",{src:"./images/heartblank.png",alt:"heart"}),"Likes")),r.a.createElement("li",{className:"topNavLi"},r.a.createElement("a",{href:"/settings",className:"topNavLink"},r.a.createElement("img",{src:"./images/settingsblank.png",alt:"settings"}),"Settings"))))))}var O,x,_,S,I,C,z,F,L,$,P,D,T=n(225),U=n(22),A=n.n(U),B=n(34),q=n(124),W=n.n(q),Y=n(23),M=n(236),H=Object(M.a)(O||(O=Object(Y.a)(["\nquery me {\n    me{\n        username\n        email\n        password\n        pets {\n            _id\n            name\n            breed {\n            primary\n            secondary\n            mixed\n            unknown\n            }\n            age\n            size\n            gender\n            photo {\n            small\n            medium\n            large\n            full\n            }\n            url\n            location\n            description\n            spayed\n            house_trained\n            shots\n            organization\n        }\n    }\n}\n"]))),R=Object(M.a)(x||(x=Object(Y.a)(["\n    query getOneUser($id: ID!) {\n        user(_id: $id){\n            username\n            email\n            password\n            createdAt\n            location\n            pets {\n                _id\n                name\n                breed {\n                primary\n                secondary\n                mixed\n                unknown\n                }\n                age\n                size\n                gender\n                photo {\n                small\n                medium\n                large\n                full\n                }\n                url\n                location\n                description\n                spayed\n                house_trained\n                shots\n                organization\n            }\n        }\n    }\n"]))),J=Object(M.a)(_||(_=Object(Y.a)(["\n    query getAllDogs {\n        dogs{\n        _id\n        name\n        breed {\n        primary\n        secondary\n        mixed\n        unknown\n        }\n        age\n        gender\n        size\n        gender\n        photo {\n        small\n        medium\n        large\n        full\n        }\n        url\n        location\n        description\n        spayed\n        house_trained\n        shots\n        organization\n    }\n}\n"]))),X=Object(M.a)(S||(S=Object(Y.a)(["\n    query getSettings($userId: ID!) {\n        settings(userId: $userId) {\n        _id\n        userId{\n            username\n            pets {\n                _id\n                name\n                breed {\n                primary\n                secondary\n                mixed\n                unknown\n                }\n                age\n                gender\n                size\n                gender\n                photo {\n                small\n                medium\n                large\n                full\n                }\n                url\n                location\n                description\n                spayed\n                house_trained\n                shots\n                organization\n            }\n        }\n        age\n        size\n        house_trained\n        }\n    }\n"]))),V=(Object(M.a)(I||(I=Object(Y.a)(["\n    query allUsers {\n        _id\n        username\n        email\n    }\n"]))),Object(M.a)(C||(C=Object(Y.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])))),G=Object(M.a)(z||(z=Object(Y.a)(["\n  mutation addUser(\n    $username: String!\n    $email: String!\n    $password: String!\n    $location: String!\n  ) {\n    addUser(\n      username: $username\n      email: $email\n      password: $password\n      location: $location\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),K=(Object(M.a)(F||(F=Object(Y.a)(["\nmutation addSettings($userId: ID!, $age: String, $size: String, $house_trained: Boolean) {\n  addSettings(userId: $userId, age: $age, size:$size, house_trained:$house_trained) {\n    _id\n    userId {\n      username\n    }\n    age\n    size\n    house_trained\n  }\n}\n"]))),Object(M.a)(L||(L=Object(Y.a)(["\nmutation updateSettings($userId: ID!, $age:String, $size:String,$house_trained:Boolean) {\n  updateSettings(userId: $userId, age: $age, size: $size, house_trained: $house_trained) {\n    _id\n    userId {\n      username\n    }\n    age\n    size\n    house_trained\n  }\n}\n"])))),Q=Object(M.a)($||($=Object(Y.a)(["\n  mutation updateUserPets(\n    $_id: ID!\n    $dog: ID!\n  ) {\n      updateUserPets (\n          _id: $_id\n          dog: $dog\n      ) {\n        username\n        email\n        pets{\n          _id\n          name\n        }\n      }\n  }\n"]))),Z=Object(M.a)(P||(P=Object(Y.a)(["\n  mutation removeUser(\n    $_id: ID!\n  ) {\n    removeUser (\n      _id: $_id\n    ){\n      _id\n      username\n    }\n  }\n"]))),ee=Object(M.a)(D||(D=Object(Y.a)(["\n  mutation removeUserPets($userId: ID!, $dog: ID!) {\n    removeUserPets(userId: $userId, dog: $dog) {\n      username\n      email\n      password\n      pets {\n          name\n          breed {\n            primary\n            secondary\n            mixed\n            unknown\n          }\n          age\n          size\n          gender\n          photo {\n            small\n            medium\n            large\n            full\n          }\n          url\n          location\n          description\n          spayed\n          house_trained\n          shots\n          organization\n      }\n    }\n  }\n"]))),ae=n(226),ne=n(85),te=n(86),re=n(105),le=new(function(){function e(){Object(ne.a)(this,e)}return Object(te.a)(e,[{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/profile")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"checkTokenExpiration",value:function(e){try{return Object(re.a)(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getProfileToken",value:function(){return Object(re.a)(this.getToken())}},{key:"isLoggedIn",value:function(){var e=this.getToken();return!!e&&!this.checkTokenExpiration(e)}}]),e}());function ie(e){var a,n=Object(t.useState)(),l=Object(v.a)(n,2),i=l[0],o=l[1],s=e.settings,c=Object(T.a)(J),u=c.loading,m=c.data,d=Object(ae.a)(Q),g=Object(v.a)(d,1)[0],p=null===m||void 0===m?void 0:m.dogs;if(u)return r.a.createElement("div",null,"Loading cards...");if(console.log(e.settings),0!==(null===m||void 0===m?void 0:m.dogs.length))switch(!0){case null!==s.age&&null!==s.size&&null!==s.house_trained:console.log("age, size, houseTrained firing"),a=p.filter((function(e){return e.age===s.age&&e.size===s.size&&e.house_trained===s.house_trained}));break;case null!==s.age&&null!==s.size:console.log("age, size firing"),a=p.filter((function(e){return e.age===s.age&&e.size===s.size}));break;case null!==s.age&&null!==s.house_trained:console.log("age, houseTrained firing"),a=p.filter((function(e){return e.age===s.age&&e.house_trained===s.house_trained}));break;case null!==s.age:console.log("settings.age case firing"),a=p.filter((function(e){return e.age===s.age}));break;case null!==s.size&&null!==s.house_trained:console.log("size, houseTrained firing"),a=p.filter((function(e){return e.size===s.size&&e.house_trained===s.house_trained}));break;case null!==s.size:console.log("size firing"),a=p.filter((function(e){return e.size===s.size}));break;case null!==s.house_trained:console.log("houseTrained firing"),a=p.filter((function(e){return e.house_trained===s.house_trained}));break;case null===s.house_trained&&null===s.size&&null===s.age:console.log("default case firing"),a=p;break;default:console.error("Something went wrong")}var f=e.likedDogs.map((function(e){return e._id})),h=a.filter((function(e){return!f.includes(e._id)})),E=function(){var e=Object(B.a)(A.a.mark((function e(a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),b=function(){var e=Object(B.a)(A.a.mark((function e(a,n){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Dog id",n,"\nDirection",a),"right"!==a){e.next=10;break}return e.prev=2,e.next=5,g({variables:{_id:le.getProfileToken().data._id,dog:n}});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(a,n){return e.apply(this,arguments)}}();return 0===a.length?r.a.createElement("div",null,"No Dogs Found! Change your filter settings to get more dogs!"):r.a.createElement("div",{className:"tinderContainer"},h.map((function(e){return r.a.createElement(W.a,{className:"swipe",key:e._id,onSwipe:function(e){return E(e)},onCardLeftScreen:function(a){return b(a,e._id)}},r.a.createElement("img",{src:e.photo[0].medium,alt:e.name,className:"swipeImg"}),r.a.createElement("h2",{className:"swipeDogName"},e.name),r.a.createElement("p",{className:"swipeDogLocation"},e.location))})),i?r.a.createElement("h2",null,"You swiped ",i):r.a.createElement("div",null))}var oe=n(244);n(164);function se(){var e,a,n=Object(T.a)(X,{variables:{userId:le.getProfileToken().data._id}}),t=n.loading,l=n.data;if(t)return r.a.createElement("div",null,"Loading settings...");e=null===l||void 0===l?void 0:l.settings,a=null===l||void 0===l?void 0:l.settings.userId.pets;if(le.isLoggedIn())return r.a.createElement("div",{className:"tinderCards"},r.a.createElement(ie,{settings:e,likedDogs:a}));return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}},r.a.createElement("h1",null,"You are not logged in!!"),r.a.createElement(oe.a,{onClick:function(e){window.location.assign("/")}},"Login"))}var ce=n(245);n(165);function ue(){var e,a,n=Object(T.a)(R,{variables:{id:le.getProfileToken().data._id}}),t=n.loading,l=n.data,i=Object(T.a)(H);i.loading||console.log(null===(a=i.data)||void 0===a?void 0:a.me);var o,c=Date(null===l||void 0===l?void 0:l.user.createdAt),u=new Date(c),m=u.toLocaleString("default",{month:"long"}),d=u.toLocaleString("default",{year:"numeric"}),g=(null===(e=i.data)||void 0===e?void 0:e.me.pets)||[];t||(console.log(null===l||void 0===l?void 0:l.user.pets),o=g.slice(0,3));var p;if(le.isLoggedIn())return r.a.createElement("div",{className:"userProfile"},r.a.createElement("h1",null,null===(p=i.data)||void 0===p?void 0:p.me.username),r.a.createElement("div",{className:"avatar"},r.a.createElement(ce.a,{alt:"Avatar",src:"https://avatarfiles.alphacoders.com/170/thumb-1920-170799.jpg",sx:{width:156,height:156}}),r.a.createElement("ul",null,r.a.createElement("li",null,"Location: ",(null===l||void 0===l?void 0:l.user.location)||"N/A"),r.a.createElement("li",null,"Member Since: ",m," ",d))),r.a.createElement("div",{className:"profileDogs"},t?r.a.createElement(r.a.Fragment,null):o.map((function(e){return r.a.createElement("div",{key:e._id,container:!0,className:"dogCard"},r.a.createElement("img",{class:"dogImage",src:e.photo[0].small,alt:e.name}),r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.breed.primary),r.a.createElement("p",null,e.size," | ",e.gender," | ",e.age))}))),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/likes",underline:"none",className:"profileLink"},r.a.createElement(oe.a,{className:"profileBtn",style:{backgroundColor:"#F2F2F2",color:"#000"},variant:"contained"},"View all your liked dogs"))));return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}},r.a.createElement("h1",null,"You are not logged in!!"),r.a.createElement(oe.a,{className:"profileBtn",onClick:function(){window.location.assign("/")}},"Login"))}var me=n(6),de=n(255),ge=n(258),pe=n(257),fe=n(256),he=n(231);n(169);function Ee(e){var a=e.flipChange,n=Object(t.useState)({email:"",password:""}),l=Object(v.a)(n,2),i=l[0],s=l[1],c=Object(ae.a)(V),u=Object(v.a)(c,2),m=u[0],d=u[1],g=d.error,p=d.data,f=function(e){var a=e.target,n=a.name,t=a.value;s(Object(o.a)(Object(o.a)({},i),{},Object(me.a)({},n,t)))},h=function(){var e=Object(B.a)(A.a.mark((function e(a){var n,t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,m({variables:Object(o.a)({},i)});case 4:n=e.sent,t=n.data,le.login(t.login.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:s({email:"",password:""});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"front loginCard"},p?r.a.createElement("p",null,"Success!"):r.a.createElement(de.a,{className:"form-containerCustom"},r.a.createElement(he.a,{align:"center",fontFamily:"Source San Pro",fontStyle:"italic",className:"labelFont"},"Login to continue where you left off!"),r.a.createElement("div",{className:"emailCustom"},r.a.createElement(fe.a,{htmlFor:"my-input",className:"labelFont"},"Email"),r.a.createElement(pe.a,{id:"email","aria-describedby":"my-helper-text",name:"email",type:"email",value:i.email,onChange:f,className:"inputField"})),r.a.createElement("div",{className:"passwordCustom"},r.a.createElement(fe.a,{htmlFor:"my-input",className:"labelFont"},"Password"),r.a.createElement(pe.a,{id:"password",required:!0,"aria-describedby":"my-helper-text",name:"password",type:"password",onChange:f,value:i.password,className:"inputField"}),r.a.createElement(ge.a,{id:"password helper",className:"helperFont"},"Forgot your password?")),r.a.createElement(oe.a,{variant:"contained",type:"submit",onClick:h,style:{marginTop:"5vh",width:"35%",maxWidth:"175px",alignItems:"center"},className:"labelFont"},"Login"),r.a.createElement("p",{align:"center",className:"labelFont"},"Don't have an account?"," ",r.a.createElement(oe.a,{onClick:a,className:"labelFont"},"Sign Up"))),g&&r.a.createElement("div",{className:"my-3 p-3 bg-danger text-white"},g.message))}function be(e){var a=e.flipChange,n=Object(t.useState)({username:"",email:"",password:"",location:""}),l=Object(v.a)(n,2),i=l[0],s=l[1],c=Object(ae.a)(G),u=Object(v.a)(c,1)[0],m=function(){var e=Object(B.a)(A.a.mark((function e(a){var n,t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,u({variables:Object(o.a)({},i)});case 4:n=e.sent,t=n.data,le.login(t.addUser.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}(),d=function(e){var a=e.target,n=a.name,t=a.value;s(Object(o.a)(Object(o.a)({},i),{},Object(me.a)({},n,t))),console.log(i)};return r.a.createElement("div",{className:"back signupCard"},r.a.createElement(de.a,{className:"form-containerCustom"},r.a.createElement(he.a,{align:"center",fontFamily:"Source San Pro",fontStyle:"italic",className:"labelFont"},"Sign up to create a profile and start searching!"),r.a.createElement("div",{className:"emailCustom"},r.a.createElement(fe.a,{htmlFor:"my-input",className:"labelFont"},"Email"),r.a.createElement(pe.a,{id:"signUpEmail","aria-describedby":"my-helper-text",name:"email",type:"email",value:i.email,onChange:d,className:"inputField"}),r.a.createElement(ge.a,{id:"emailHelper",className:"helperFont"},"We'll never share your email.")),r.a.createElement("div",{className:"usernameCustom"},r.a.createElement(fe.a,{htmlFor:"my-input",className:"labelFont"},"Username"),r.a.createElement(pe.a,{id:"username",required:!0,"aria-describedby":"my-helper-text",name:"username",type:"text",onChange:d,value:i.username,className:"inputField"}),r.a.createElement(ge.a,{id:"username helper",className:"helperFont"},"Make your username something unique!")),r.a.createElement("div",{className:"passwordCustom"},r.a.createElement(fe.a,{htmlFor:"my-input",className:"labelFont"},"Password"),r.a.createElement(pe.a,{id:"signUpPassword",required:!0,"aria-describedby":"my-helper-text",name:"password",type:"password",onChange:d,value:i.password,className:"inputField"}),r.a.createElement(ge.a,{id:"password helper",className:"helperFont"},"Passwords must be at least 7 characters, alphanumeric only.")),r.a.createElement("div",{className:"locationCustom"},r.a.createElement(fe.a,{htmlFor:"my-input",className:"labelFont"},"Location"),r.a.createElement(pe.a,{id:"location",required:!0,"aria-describedby":"my-helper-text",name:"location",type:"text",onChange:d,value:i.location,className:"inputField"}),r.a.createElement(ge.a,{id:"location helper",className:"helperFont"},"Where would you like to find a dog?")),r.a.createElement(oe.a,{variant:"contained",type:"submit",onClick:m,style:{marginTop:"5vh",width:"35%",maxWidth:"175px",alignItems:"center"}},"Sign Up"),r.a.createElement("p",{align:"center",className:"labelFont"},"Already have an account?"," ",r.a.createElement(oe.a,{onClick:a,className:"labelFont"},"Log In"))))}var ve=n(246);n(170);function ye(){var e=Object(t.useState)("content"),a=Object(v.a)(e,2),n=a[0],l=a[1],i=function(e){l("content"===n?"content contentTwo":"content")};return le.isLoggedIn()?r.a.createElement(ue,null):r.a.createElement(h.a,{sx:{display:"grid",gridAutoColumns:"1fr",gap:3,alignItems:"center"}},r.a.createElement(ve.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center"},r.a.createElement(ve.a,{container:!0,className:"login-signupContainer"},r.a.createElement(N.a,{elevation:6,className:"login-signupCard"},r.a.createElement("h2",{align:"center",className:"titleFont"},"Search hundreds of animal rescue organizations to find your perfect rescue dog."),r.a.createElement(ve.a,{item:!0,className:"flippyCard"},r.a.createElement("div",{className:n},r.a.createElement(Ee,{flipChange:i}),r.a.createElement(be,{flipChange:i})))))))}var ke=n(239),we=n(240),Ne=n(235),je=n(242),Oe=n(241);n(171);function xe(){var e,a,n,l=Object(T.a)(X,{variables:{userId:le.getProfileToken().data._id}}),i=l.loading,o=l.data;i||(e=null===o||void 0===o?void 0:o.settings.age,a=null===o||void 0===o?void 0:o.settings.size,n=null===o||void 0===o?void 0:o.settings.house_trained),console.log("prevAge",e,"prevSize",a,"prevTrained",n);var s=Object(ae.a)(K),c=Object(v.a)(s,1)[0],u=Object(ae.a)(Z),m=Object(v.a)(u,1)[0],d=Object(t.useState)(null),g=Object(v.a)(d,2),p=g[0],f=g[1],E=Object(t.useState)(null),b=Object(v.a)(E,2),y=b[0],k=b[1],w=Object(t.useState)(null),j=Object(v.a)(w,2),O=j[0],x=j[1],_=Object(t.useState)(!1),S=Object(v.a)(_,2),I=S[0],C=S[1],z=Object(t.useState)(!1),F=Object(v.a)(z,2),L=F[0],$=F[1],P=Object(t.useState)(!1),D=Object(v.a)(P,2),U=D[0],q=D[1],W=Object(t.useRef)(!1);Object(t.useEffect)((function(){W.current?M():W.current=!0}),[p,y,O]);var Y=function(){var e=Object(B.a)(A.a.mark((function e(a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({variables:{_id:le.getProfileToken().data._id}});case 2:le.logout();case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),M=function(){var t=Object(B.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,t.t0=!0,t.next=t.t0===(I&&L&&U)?4:t.t0===(I&&U)?7:t.t0===(U&&L)?10:t.t0===(I&&L)?13:t.t0===I?16:t.t0===L?19:t.t0===U?22:25;break;case 4:return t.next=6,c({variables:{userId:le.getProfileToken().data._id,age:p,size:y,house_trained:O}});case 6:return t.abrupt("break",27);case 7:return t.next=9,c({variables:{userId:le.getProfileToken().data._id,age:p,size:a,house_trained:O}});case 9:return t.abrupt("break",27);case 10:return t.next=12,c({variables:{userId:le.getProfileToken().data._id,age:e,size:y,house_trained:O}});case 12:return t.abrupt("break",27);case 13:return t.next=15,c({variables:{userId:le.getProfileToken().data._id,age:p,size:y,house_trained:n}});case 15:return t.abrupt("break",27);case 16:return t.next=18,c({variables:{userId:le.getProfileToken().data._id,age:p,size:a,house_trained:n}});case 18:return t.abrupt("break",27);case 19:return t.next=21,c({variables:{userId:le.getProfileToken().data._id,age:e,size:y,house_trained:n}});case 21:return t.abrupt("break",27);case 22:return t.next=24,c({variables:{userId:le.getProfileToken().data._id,age:e,size:a,house_trained:O}});case 24:return t.abrupt("break",27);case 25:return console.error("default case firing"),t.abrupt("break",27);case 27:t.next=32;break;case 29:t.prev=29,t.t1=t.catch(0),console.log(t.t1);case 32:case"end":return t.stop()}}),t,null,[[0,29]])})));return function(){return t.apply(this,arguments)}}();if(le.isLoggedIn())return r.a.createElement(h.a,{sx:{display:"grid",gridAutoColumns:"1fr",gap:3,alignItems:"center",paddingBottom:7}}," ",i?r.a.createElement("div",null,"Loading settings..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{className:"settingsContainer",elevation:6},r.a.createElement("h2",{align:"center"},"User Settings"),r.a.createElement(we.a,{fullWidth:!0,style:{marginBottom:"20px"},className:"settingsForm"},r.a.createElement(fe.a,{id:"demo-simple-select-label"},"Age"),r.a.createElement(Ne.a,{labelId:"demo-simple-select-label",id:"demo-simple-select-label",value:e,label:"Age",type:"age",className:"settingsInput",onChange:function(a){console.log("ageflag = ",I),console.log("sizeFlag = ",L),console.log("trainedflag = ",U),C(!0),f(a.target.value),e=p}},r.a.createElement(ke.a,{value:null},"No Preference"),r.a.createElement(ke.a,{value:"Baby"},"Baby"),r.a.createElement(ke.a,{value:"Young"},"Young"),r.a.createElement(ke.a,{value:"Adult"},"Adult"),r.a.createElement(ke.a,{value:"Senior"},"Senior"))),r.a.createElement(we.a,{fullWidth:!0,style:{marginTop:"20px",marginBottom:"10px"},className:"settingsForm"},r.a.createElement(fe.a,{id:"size-select"},"Size"),r.a.createElement(Ne.a,{labelId:"size-select",id:"demo-simple-select",value:a,label:"Size",className:"settingsInput",onChange:function(e){console.log("ageflag = ",I),console.log("sizeFlag = ",L),console.log("trainedflag = ",U),$(!0),k(e.target.value),a=y}},r.a.createElement(ke.a,{value:null},"No Preference"),r.a.createElement(ke.a,{value:"Small"},"Small"),r.a.createElement(ke.a,{value:"Medium"},"Medium"),r.a.createElement(ke.a,{value:"Large"},"Large"),r.a.createElement(ke.a,{value:"Extra Large"},"Extra Large"))),r.a.createElement(we.a,{component:"fieldset"},r.a.createElement(he.a,{component:"legend"}),r.a.createElement(de.a,{"aria-label":"position",row:!0},r.a.createElement(Oe.a,{value:n,control:r.a.createElement(je.a,{color:"primary",checked:n}),label:"House-trained",labelPlacement:"start",className:"settingsInput",onChange:function(){console.log("ageflag = ",I),console.log("sizeFlag = ",L),console.log("trainedflag = ",U),q(!0),O?(x(null),n=O):(x(!0),n=O)}})))),r.a.createElement(oe.a,{variant:"outlined",color:"error",onClick:function(){le.logout()},className:"settingsLogout"},"Logout"),r.a.createElement(oe.a,{variant:"outlined",color:"error",onClick:Y,className:"settingsLogout"},"Delete Account")));return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}},r.a.createElement("h1",null,"You are not logged in!!"),r.a.createElement(oe.a,{onClick:function(e){window.location.assign("/")}},"Login"))}function _e(e){function a(e){return!0===e?"Yes":"No"}var n=function(){var a=Object(B.a)(A.a.mark((function a(n){return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.removeUserPets({variables:{userId:le.getProfileToken().data._id,dog:n}});case 2:window.location.reload();case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(N.a,{elevation:6,style:{borderRadius:15}},r.a.createElement(ve.a,{item:!0,xs:4,key:e.dog._id,container:!0,className:"likedDogsContainer",style:{marginBottom:15,maxWidth:"90vw",alignItems:"center",justifyContent:"center",fontFamily:"Oxygen"}},r.a.createElement("button",{className:"likesXBtn",onClick:function(){return n(e.dog._id)}},r.a.createElement("img",{src:"./images/x.png",className:"likesXImg",alt:"x-out"})),r.a.createElement("img",{src:e.dog.photo[0].medium,alt:"dog"}),r.a.createElement("div",{className:"likedDogsEx"},r.a.createElement("h2",null,e.dog.name),r.a.createElement("p",null,e.dog.breed.primary),r.a.createElement("p",null,e.dog.size," | ",e.dog.gender," | ",e.dog.age)),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,"Shelter/Organization: ",e.dog.organization),r.a.createElement("li",null,"Location: ",e.dog.location),r.a.createElement("li",null,"Spayed: ",a(e.dog.spayed)),r.a.createElement("li",null,"House Trained: ",a(e.dog.house_trained)),r.a.createElement("li",null,"Shots: ",a(e.dog.shots)))),r.a.createElement("div",{className:"likedDogsMeet"},r.a.createElement("h3",null,"Meet ",e.dog.name,"!")),r.a.createElement("p",null,e.dog.description),r.a.createElement("a",{href:e.dog.url,target:"_blank",rel:"noreferrer noopener"},"Learn more..."))))}n(172);function Se(){var e,a=Object(T.a)(H),n=Object(ae.a)(ee),t=Object(v.a)(n,1)[0],l=(null===(e=a.data)||void 0===e?void 0:e.me.pets)||[];if(le.isLoggedIn())return a.loading?r.a.createElement("div",null,"...loading"):l.length?(console.log(l),r.a.createElement(h.a,null,r.a.createElement("h2",{className:"likesHeader"},"Your Liked Dogs"),r.a.createElement(ve.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:2},r.a.createElement(ve.a,{item:!0},l.map((function(e){return r.a.createElement(_e,{dog:e,removeUserPets:t})})))))):r.a.createElement("h3",null,"No liked dogs yet!");return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}},r.a.createElement("h1",null,"You are not logged in!!"),r.a.createElement(oe.a,{onClick:function(e){window.location.assign("/")}},"Login"))}var Ie=n(129),Ce=n(247),ze=Object(u.a)({uri:"/graphql"}),Fe=Object(p.a)((function(e,a){var n=a.headers,t=localStorage.getItem("id_token");return{headers:Object(o.a)(Object(o.a)({},n),{},{authorization:t?"Bearer ".concat(t):""})}})),Le=new m.a({link:Fe.concat(ze),cache:new d.a}),$e=Object(Ie.a)((function(e){return{palette:{type:"light",primary:{main:"#fafafa"}},typography:{h1:{fontFamily:"Pacifico"},fontFamily:"Oxygen",h2:{fontFamily:"Source Sans Pro"}}}}));var Pe=function(){return r.a.createElement(Ce.a,{theme:$e},r.a.createElement(g.a,{client:Le},r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",null,r.a.createElement(c.a,{exact:!0,path:"/"},r.a.createElement(ye,null)),r.a.createElement(c.a,{exact:!0,path:"/sheltr"},r.a.createElement(se,null)),r.a.createElement(c.a,{exact:!0,path:"/profile"},r.a.createElement(ue,null)),r.a.createElement(c.a,{exact:!0,path:"/likes"},r.a.createElement(Se,null)),r.a.createElement(c.a,{exact:!0,path:"/settings"},r.a.createElement(xe,null))),le.isLoggedIn()&&r.a.createElement(j,null)))))},De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,259)).then((function(a){var n=a.getCLS,t=a.getFID,r=a.getFCP,l=a.getLCP,i=a.getTTFB;n(e),t(e),r(e),l(e),i(e)}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Pe,null)),document.getElementById("root")),De()}},[[146,1,2]]]);
//# sourceMappingURL=main.e005e83a.chunk.js.map