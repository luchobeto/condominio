(this["webpackJsonpreact-redux-realworld-example-app"]=this["webpackJsonpreact-redux-realworld-example-app"]||[]).push([[6],{70:function(e,t,r){"use strict";var a=r(15),s=r(16),n=r(18),o=r(17),c=r(0),i=r.n(c),l=r(1),u=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){var e=this.props.errors;return e?Object(l.jsx)("ul",{className:"error-messages",children:Object.keys(e).map((function(t){return Object(l.jsxs)("li",{children:[t," ",e[t]]},t)}))}):null}}]),r}(i.a.PureComponent);t.a=u},77:function(e,t,r){"use strict";r.r(t);var a=r(3),s=r(15),n=r(16),o=r(18),c=r(17),i=r(70),l=r(0),u=r.n(l),p=r(7),m=r(10),j=r(2),b=r(1),d=function(e){Object(o.a)(r,e);var t=Object(c.a)(r);function r(e){var a;Object(s.a)(this,r),a=t.call(this,e);var n=e.currentUser;return a.state={image:n&&n.image||"https://static.productionready.io/images/smiley-cyrus.jpg",username:n&&n.username||"",bio:n&&n.bio||"",email:n&&n.email||"",password:n&&n.password||""},a.updateState=function(e){return function(t){var r=a.state,s=Object.assign({},r,{[e]:t.target.value});a.setState(s)}},a.submitForm=function(e){e.preventDefault();var t=Object.assign({},a.state);t.password||delete t.password,a.props.onSubmitForm(t)},a}return Object(n.a)(r,[{key:"render",value:function(){var e=this.state,t=e.image,r=e.username,a=e.bio,s=e.email;return Object(b.jsx)("form",{onSubmit:this.submitForm,children:Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("fieldset",{className:"form-group",children:Object(b.jsx)("input",{className:"form-control",type:"text",placeholder:"URL de tu Foto",value:t||"",onChange:this.updateState("image")})}),Object(b.jsx)("fieldset",{className:"form-group",children:Object(b.jsx)("input",{className:"form-control form-control-lg",type:"text",placeholder:"Usuario",value:r||"",onChange:this.updateState("username")})}),Object(b.jsx)("fieldset",{className:"form-group",children:Object(b.jsx)("textarea",{className:"form-control form-control-lg",rows:"8",placeholder:"Breve biograf\xeda sobre ti",value:a||"",onChange:this.updateState("bio")})}),Object(b.jsx)("fieldset",{className:"form-group",children:Object(b.jsx)("input",{className:"form-control form-control-lg",autoComplete:"username",type:"email",placeholder:"Email",value:s||"",onChange:this.updateState("email")})}),Object(b.jsx)("fieldset",{className:"form-group",children:Object(b.jsx)("input",{className:"form-control form-control-lg",type:"password",autoComplete:"current-password",placeholder:"Nuevo Password",value:this.state.password,onChange:this.updateState("password")})}),Object(b.jsx)("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit",disabled:this.state.inProgress,children:"Modificar"})]})})}}]),r}(u.a.PureComponent),h=function(e){Object(o.a)(r,e);var t=Object(c.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"settings-page",children:Object(b.jsx)("div",{className:"container page",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[Object(b.jsx)("h1",{className:"text-xs-center",children:"Tu configuraci\xf3n"}),Object(b.jsx)(i.a,{errors:this.props.errors}),Object(b.jsx)(d,{currentUser:this.props.currentUser,onSubmitForm:this.props.onSubmitForm}),Object(b.jsx)("hr",{}),Object(b.jsx)("button",{className:"btn btn-outline-danger",onClick:this.props.onClickLogout,children:"O haga click para cerrar sesi\xf3n."})]})})})})}}]),r}(u.a.PureComponent);t.default=Object(m.c)((function(e){return Object(a.a)(Object(a.a)({},e.settings),{},{currentUser:e.common.currentUser})}),(function(e){return{onClickLogout:function(){return e({type:j.v})},onSubmitForm:function(t){return e({type:j.F,payload:p.a.Auth.save(t)})},onUnload:function(){return e({type:j.E})}}}))(h)}}]);
//# sourceMappingURL=Settings.65f795c8.chunk.js.map