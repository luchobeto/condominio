(this["webpackJsonpreact-redux-realworld-example-app"]=this["webpackJsonpreact-redux-realworld-example-app"]||[]).push([[3],{71:function(e,s,r){"use strict";r.r(s),r.d(s,"Profile",(function(){return x})),r.d(s,"mapStateToProps",(function(){return O}));var t=r(15),n=r(16),o=r(18),a=r(17),i=r(3),l=r(31),c=r(0),u=r.n(c),p=r(11),m=r(7),j=r(10),d=r(2),f=r(1),b=u.a.memo((function(e){return e.isUser?Object(f.jsxs)(p.a,{to:"/settings",className:"btn btn-sm btn-outline-secondary action-btn",children:[Object(f.jsx)("i",{className:"ion-gear-a"})," Cambiar tu perfil"]}):null})),h=u.a.memo((function(e){if(e.isUser)return null;var s="btn btn-sm action-btn";e.user.following?s+=" btn-secondary":s+=" btn-outline-secondary";return Object(f.jsxs)("button",{className:s,onClick:function(s){s.preventDefault(),e.user.following?e.unfollow(e.user.username):e.follow(e.user.username)},children:[Object(f.jsx)("i",{className:"ion-plus-round"}),"\xa0",e.user.following?"Unfollow":"Follow"," ",e.user.username]})})),O=function(e){return Object(i.a)(Object(i.a)({},e.articleList),{},{currentUser:e.common.currentUser,profile:e.profile})},x=function(e){Object(o.a)(r,e);var s=Object(a.a)(r);function r(){return Object(t.a)(this,r),s.apply(this,arguments)}return Object(n.a)(r,[{key:"componentDidMount",value:function(){this.props.onLoad(Promise.all([m.a.Profile.get(this.props.match.params.username),m.a.Articles.byAuthor(this.props.match.params.username)]))}},{key:"componentWillUnmount",value:function(){this.props.onUnload()}},{key:"renderTabs",value:function(){return Object(f.jsxs)("ul",{className:"nav nav-pills outline-active",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(p.a,{className:"nav-link active",to:"/@".concat(this.props.profile.username),children:"Mis Art\xedculos"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(p.a,{className:"nav-link",to:"/@".concat(this.props.profile.username,"/favorites"),children:"Art\xedculos favoritos"})})]})}},{key:"render",value:function(){var e=this.props.profile;if(!e)return null;var s=this.props.currentUser&&this.props.profile.username===this.props.currentUser.username;return Object(f.jsxs)("div",{className:"profile-page",children:[Object(f.jsx)("div",{className:"user-info",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[Object(f.jsx)("img",{src:e.image||"https://static.productionready.io/images/smiley-cyrus.jpg",className:"user-img",alt:e.username}),Object(f.jsx)("h4",{children:e.username}),Object(f.jsx)("p",{children:e.bio}),Object(f.jsx)(b,{isUser:s}),Object(f.jsx)(h,{isUser:s,user:e,follow:this.props.onFollow,unfollow:this.props.onUnfollow})]})})})}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[Object(f.jsx)("div",{className:"articles-toggle",children:this.renderTabs()}),Object(f.jsx)(l.a,{pager:this.props.pager,articles:this.props.articles,articlesCount:this.props.articlesCount,state:this.props.currentPage})]})})})]})}}]),r}(u.a.PureComponent);s.default=Object(j.c)(O,(function(e){return{onFollow:function(s){return e({type:d.q,payload:m.a.Profile.follow(s)})},onLoad:function(s){return e({type:d.y,payload:s})},onUnfollow:function(s){return e({type:d.H,payload:m.a.Profile.unfollow(s)})},onUnload:function(){return e({type:d.z})}}}))(x)}}]);
//# sourceMappingURL=Profile.3fb0d3f2.chunk.js.map