!function e(t,a,s){function r(i,o){if(!a[i]){if(!t[i]){var l="function"==typeof require&&require;if(!o&&l)return l(i,!0);if(n)return n(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var d=a[i]={exports:{}};t[i][0].call(d.exports,function(e){var a=t[i][1][e];return r(a?a:e)},d,d.exports,e,t,a,s)}return a[i].exports}for(var n="function"==typeof require&&require,i=0;i<s.length;i++)r(s[i]);return r}({"/home/travis/build/developmentseed/sense/app/assets/scripts/actions/action-creators.js":[function(e,t,a){"use strict";function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function n(e){return{type:c["REQUEST_SENSOR_DATA_"+e.toUpperCase()]}}function i(e,t){return{type:c["RECEIVE_SENSOR_DATA_"+e.toUpperCase()],data:t,receivedAt:Date.now()}}function o(e,t){return function(a){a(n(e));var s=f["default"].senseBox["sensorId--"+e];return(0,u["default"])(f["default"].api+"/boxes/"+f["default"].senseBox.id+"/data/"+s+"?from-date="+t).then(function(e){if(e.status>=400)throw new Error("Bad response");return e.json()}).then(function(t){a(i(e,t))},function(e){return console.log("e",e),a(i(null,null,"Data not available"))})}}Object.defineProperty(a,"__esModule",{value:!0}),a.fetchSensorData=o;var l=e("isomorphic-fetch"),u=r(l),d=e("./action-types"),c=s(d),p=e("../config"),f=r(p)},{"../config":"/home/travis/build/developmentseed/sense/app/assets/scripts/config.js","./action-types":"/home/travis/build/developmentseed/sense/app/assets/scripts/actions/action-types.js","isomorphic-fetch":"isomorphic-fetch"}],"/home/travis/build/developmentseed/sense/app/assets/scripts/actions/action-types.js":[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.REQUEST_SENSOR_DATA_TEMPERATURE="REQUEST_SENSOR_DATA_TEMPERATURE",a.RECEIVE_SENSOR_DATA_TEMPERATURE="RECEIVE_SENSOR_DATA_TEMPERATURE",a.REQUEST_SENSOR_DATA_PRESSURE="REQUEST_SENSOR_DATA_PRESSURE",a.RECEIVE_SENSOR_DATA_PRESSURE="RECEIVE_SENSOR_DATA_PRESSURE",a.REQUEST_SENSOR_DATA_LUMINOSITY="REQUEST_SENSOR_DATA_LUMINOSITY",a.RECEIVE_SENSOR_DATA_LUMINOSITY="RECEIVE_SENSOR_DATA_LUMINOSITY",a.REQUEST_SENSOR_DATA_UV="REQUEST_SENSOR_DATA_UV",a.RECEIVE_SENSOR_DATA_UV="RECEIVE_SENSOR_DATA_UV",a.REQUEST_SENSOR_DATA_HUMIDITY="REQUEST_SENSOR_DATA_HUMIDITY",a.RECEIVE_SENSOR_DATA_HUMIDITY="RECEIVE_SENSOR_DATA_HUMIDITY"},{}],"/home/travis/build/developmentseed/sense/app/assets/scripts/components/charts/chart-line.js":[function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var r=function(){function e(e,t){var a=[],s=!0,r=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(s=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);s=!0);}catch(l){r=!0,n=l}finally{try{!s&&o["return"]&&o["return"]()}finally{if(r)throw n}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=e("react"),i=s(n),o=e("d3"),l=s(o),u=e("lodash"),d=s(u),c=i["default"].createClass({displayName:"LineChart",propTypes:{className:i["default"].PropTypes.string,data:i["default"].PropTypes.array,axisLineVal:i["default"].PropTypes.number,axisLineMax:i["default"].PropTypes.number,axisLineMin:i["default"].PropTypes.number,dataUnitSuffix:i["default"].PropTypes.string},chart:null,onWindowResize:function(){this.chart.checkSize()},componentDidMount:function(){this.onWindowResize=d["default"].debounce(this.onWindowResize,200),window.addEventListener("resize",this.onWindowResize),this.chart=p(),l["default"].select(this.refs.container).call(this.chart.data(this.props.data).axisLineVal(this.props.axisLineVal).axisValueMax(this.props.axisLineMax).axisValueMin(this.props.axisLineMin).dataUnitSuffix(this.props.dataUnitSuffix))},componentWillUnmount:function(){window.removeEventListener("resize",this.onWindowResize),this.chart.destroy()},componentDidUpdate:function(e){console.log("LineChart componentDidUpdate"),this.chart.pauseUpdate(),e.data!==this.props.data&&this.chart.data(this.props.data),e.axisLineVal!==this.props.axisLineVal&&this.chart.axisLineVal(this.props.axisLineVal),e.axisLineMax!==this.props.axisLineMax&&this.chart.axisValueMax(this.props.axisLineMax),e.axisLineMin!==this.props.axisLineMin&&this.chart.axisValueMin(this.props.axisLineMin),e.dataUnitSuffix!==this.props.dataUnitSuffix&&this.chart.dataUnitSuffix(this.props.dataUnitSuffix),this.chart.continueUpdate()},render:function(){return i["default"].createElement("div",{className:this.props.className,ref:"container"})}});t.exports=c;var p=function(e){function t(){p=parseInt(u.style("width"),10)-g.left-g.right,f=parseInt(u.style("height"),10)-g.top-g.bottom}function a(e){u=e;var a={line:function(){var e=R.selectAll(".data-line").data([E]);e.enter().append("path").attr("clip-path","url(#clip)"),e.attr("d",function(e){return m(e)}).attr("class",function(e){return"data-line"}),e.exit().remove()},minMax:function(){var e=S.domain(),t=r(e,2),a=t[0],s=t[1],n=function(e){var t=e.timestep.getTime();return t>=a.getTime()&&t<=s.getTime()},i=(0,d["default"])(E).filter(n).sortBy("value").value();if(i.length){var l=i[0],u=d["default"].last(i),c=R.selectAll(".edges").data([0]).enter().append("g").attr("class","edges");c.append("text").attr("text-anchor","middle").attr("dy","-0.25em").attr("class","edge edge-max"),c.append("text").attr("text-anchor","middle").attr("dy","1em").attr("class","edge edge-min"),R.select(".edge.edge-max").datum(u).attr("x",function(e){return S(e.timestep)}).attr("y",function(e){return T(e.value)}).text(function(e){return e.value+o}),R.select(".edge.edge-min").datum(l).attr("x",function(e){return S(e.timestep)}).attr("y",function(e){return T(e.value)}).text(function(e){return e.value+o})}},xAxis:function(){var e=c.selectAll(".x.axis").data([0]);e.enter().append("g").attr("class","x axis").append("text").attr("class","label").attr("text-anchor","start"),e.attr("transform","translate("+g.left+","+(f+g.top+16)+")").call(D)},yAxis:function(){var e=c.selectAll(".y.axis").data([0]),t=e.enter().append("g").attr("class","y axis");t.append("text").attr("class","label").attr("text-anchor","end"),t.append("line").attr("class","line"),e.select(".label").attr("y",T(s)+g.top).attr("x",p+g.left+g.right).attr("dy","1em").text(s+o),e.select(".line").attr("x1",0).attr("y1",T(s)+g.top).attr("x2",p+g.left+g.right).attr("y2",T(s)+g.top)},days:function(){for(var e=function(e){var t=new Date(e.getTime());return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t},t=e(d["default"].last(E).timestep),a=e(E[0].timestep),s=[a];;)if(a=l["default"].time.day.offset(e(a),1),s.push(a),a.getTime()>=t.getTime())break;var r=R.selectAll(".days").data([0]);r.enter().append("g").attr("class","days");var n=r.selectAll(".day-tick").data(s);n.enter().append("text").attr("text-anchor","middle").attr("class","day-tick"),n.attr("x",function(e){return S(e)}).attr("y",f+g.top).text(function(e){return e.getDate()+" "+_[e.getMonth()]})}};v=function(){c.attr("width",p+g.left+g.right).attr("height",f+g.top+g.bottom),R.attr("width",p).attr("height",f),c.select("#clip rect").attr("width",p+g.left).attr("height",f),S.range([0,p]),T.range([f,0]),x=S(E[0].timestep),b.x(S),a.line(),a.minMax(),a.days(),a.xAxis(),a.yAxis()},h=function(){if(E&&!y){var e=d["default"].last(E).timestep,t=l["default"].time.day.offset(e,-1);S.domain([t,e]),T.domain([n,i]),x=S(E[0].timestep),b.x(S),a.line(),a.minMax(),a.days(),a.xAxis(),a.yAxis()}},c=u.append("svg").attr("class","chart").style("display","block");var R=c.append("g").attr("class","data-canvas").attr("transform","translate("+g.left+","+g.top+")");c.append("defs").append("clipPath").attr("id","clip").append("rect").attr("x",-g.left).attr("y",0),c.attr("cursor","move").call(b).on("mousewheel.zoom",null).on("DOMMouseScroll.zoom",null),b.on("zoom",function(){var e=b.translate(),t=r(e,2),s=t[0],n=t[1];s=Math.max(s,0),s=Math.min(s,Math.abs(x)-g.right),s=Math.round(s),b.translate([s,n]),a.line(),a.minMax(),a.days(),a.xAxis()}),t(),v(),h()}var s,n,i,o,u,c,p,f,m,h,v,x,E=null,y=!1,g={top:16,right:32,bottom:32,left:24},_=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],S=l["default"].time.scale(),T=l["default"].scale.linear(),b=l["default"].behavior.zoom().scaleExtent([1,1]);m=l["default"].svg.line().x(function(e){return S(e.timestep)}).y(function(e){return T(e.value)});var D=l["default"].svg.axis().scale(S).orient("bottom").tickSize(0).tickFormat(l["default"].time.format("%H:%M"));return a.checkSize=function(){return t(),v(),a},a.destroy=function(){},a.data=function(e){return arguments.length?(E=d["default"].cloneDeep(e),"function"==typeof h&&h(),a):E},a.axisLineVal=function(e){return arguments.length?(s=e,"function"==typeof h&&h(),a):s},a.axisValueMin=function(e){return arguments.length?(n=e,"function"==typeof h&&h(),a):n},a.axisValueMax=function(e){return arguments.length?(i=e,"function"==typeof h&&h(),a):i},a.dataUnitSuffix=function(e){return arguments.length?(o=e,"function"==typeof h&&h(),a):o},a.pauseUpdate=function(){return y=!0,a},a.continueUpdate=function(){return y=!1,"function"==typeof h&&h(),a},a}},{d3:"d3",lodash:"lodash",react:"react"}],"/home/travis/build/developmentseed/sense/app/assets/scripts/components/sensor-widget.js":[function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var r=e("react"),n=s(r),i=e("./charts/chart-line"),o=s(i),l=e("../utils/format"),u=n["default"].createClass({displayName:"SensorWidget",propTypes:{fetching:n["default"].PropTypes.bool,fetched:n["default"].PropTypes.bool,className:n["default"].PropTypes.string,title:n["default"].PropTypes.string,lastReading:n["default"].PropTypes.object,avgs:n["default"].PropTypes.object,plotData:n["default"].PropTypes.array,axisLineVal:n["default"].PropTypes.number,axisLineMax:n["default"].PropTypes.number,axisLineMin:n["default"].PropTypes.number,unit:n["default"].PropTypes.string},render:function(){var e=this.props,t=e.className,a=e.fetching,s=e.fetched,r=e.title,i=e.lastReading,u=e.avgs,d=e.plotData,c=e.axisLineVal,p=e.axisLineMax,f=e.axisLineMin,m=e.unit;return s||a?n["default"].createElement("article",{className:"card "+t},n["default"].createElement("header",{className:"card__header"},n["default"].createElement("div",{className:"card__headline"},n["default"].createElement("h1",{className:"card__title"},r," ",a?"...":null),n["default"].createElement("dl",{className:"stats"},n["default"].createElement("dd",{className:"stats__label"},"Last update"),n["default"].createElement("dt",{className:"stats__date"},null!==i?(0,l.formatDate)(i.timestep):"--"),n["default"].createElement("dd",{className:"stats__label"},"Current temperature"),n["default"].createElement("dt",{className:"stats__value"},null!==i?(0,l.numDisplay)(i.value,1):"--",m)))),n["default"].createElement("div",{className:"card__body"},n["default"].createElement("div",{className:"infographic"},d.length?n["default"].createElement("div",{className:"line-chart-wrapper"},n["default"].createElement(o["default"],{className:"line-chart",axisLineVal:c,axisLineMax:p,axisLineMin:f,dataUnitSuffix:m,data:d})):null,!d.length&&a?n["default"].createElement("p",{className:"card__loading"},"Loading Data..."):null),n["default"].createElement("div",{className:"metrics"},n["default"].createElement("ul",{className:"metrics__list"},n["default"].createElement("li",null,n["default"].createElement("strong",null,null!==u?(0,l.numDisplay)(u.today,1,m):"--")," avg today"),n["default"].createElement("li",null,n["default"].createElement("strong",null,null!==u?(0,l.numDisplay)(u.yesterday,1,m):"--")," avg yesterday"))))):null}});t.exports=u},{"../utils/format":"/home/travis/build/developmentseed/sense/app/assets/scripts/utils/format.js","./charts/chart-line":"/home/travis/build/developmentseed/sense/app/assets/scripts/components/charts/chart-line.js",react:"react"}],"/home/travis/build/developmentseed/sense/app/assets/scripts/config.js":[function(e,t,a){"use strict";var s=e("lodash"),r={local:e("./config/local.js"),production:e("./config/production.js"),staging:e("./config/staging.js")},n=r.local||{};s.defaultsDeep(n,r.production),t.exports=n},{"./config/local.js":"/home/travis/build/developmentseed/sense/app/assets/scripts/config/local.js","./config/production.js":"/home/travis/build/developmentseed/sense/app/assets/scripts/config/production.js","./config/staging.js":"/home/travis/build/developmentseed/sense/app/assets/scripts/config/staging.js",lodash:"lodash"}],"/home/travis/build/developmentseed/sense/app/assets/scripts/config/local.js":[function(e,t,a){"use strict";t.exports={}},{}],"/home/travis/build/developmentseed/sense/app/assets/scripts/config/production.js":[function(e,t,a){"use strict";t.exports={environment:"production",api:"http://opensensemap.org:8000",senseBox:{id:"570629b945fd40c8197462fb","sensorId--uv":"570629b945fd40c8197462fd","sensorId--luminosity":"570629b945fd40c8197462fe","sensorId--pressure":"570629b945fd40c8197462ff","sensorId--humidity":"570629b945fd40c819746300","sensorId--temperature":"570629b945fd40c819746301"}}},{}],"/home/travis/build/developmentseed/sense/app/assets/scripts/config/staging.js":[function(e,t,a){"use strict";t.exports={environment:"staging"}},{}],"/home/travis/build/developmentseed/sense/app/assets/scripts/main.js":[function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}e("babel-polyfill");var r=e("react"),n=s(r),i=e("react-dom"),o=e("react-redux"),l=e("react-router"),u=e("history"),d=e("redux"),c=e("redux-thunk"),p=s(c),f=e("react-router-redux"),m=e("./reducers/reducer"),h=s(m),v=e("./views/app"),x=s(v),E=e("./views/home"),y=s(E),g=(0,l.useRouterHistory)(u.createHashHistory)({queryKey:!1}),_=(0,f.syncHistory)(g),S=(0,d.compose)((0,d.applyMiddleware)(_,p["default"]))(d.createStore),T=S(h["default"]);(0,i.render)(n["default"].createElement(o.Provider,{store:T},n["default"].createElement(l.Router,{history:g},n["default"].createElement(l.Route,{path:"*",component:x["default"]},n["default"].createElement(l.IndexRoute,{component:y["default"]})))),document.querySelector("#site-canvas"))},{"./reducers/reducer":"/home/travis/build/developmentseed/sense/app/assets/scripts/reducers/reducer.js","./views/app":"/home/travis/build/developmentseed/sense/app/assets/scripts/views/app.js","./views/home":"/home/travis/build/developmentseed/sense/app/assets/scripts/views/home.js","babel-polyfill":"babel-polyfill",history:"history",react:"react","react-dom":"react-dom","react-redux":"react-redux","react-router":"react-router","react-router-redux":"react-router-redux",redux:"redux","redux-thunk":"redux-thunk"}],"/home/travis/build/developmentseed/sense/app/assets/scripts/reducers/reducer.js":[function(e,t,a){"use strict";function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var n=e("lodash"),i=r(n),o=e("redux"),l=e("react-router-redux"),u=e("../actions/action-types"),d=s(u),c=function(e){return function(){var t=arguments.length<=0||void 0===arguments[0]?{fetching:!1,fetched:!1,data:null}:arguments[0],a=arguments[1],s=e.toUpperCase();switch(a.type){case d["REQUEST_SENSOR_DATA_"+s]:console.log("REQUEST_SENSOR_DATA_"+s),t=i["default"].cloneDeep(t),t.fetching=!0;break;case d["RECEIVE_SENSOR_DATA_"+s]:console.log("RECEIVE_SENSOR_DATA_"+s),t=i["default"].cloneDeep(t),t.data=a.data,t.fetching=!1,t.fetched=!0}return t}},p=c("uv"),f=c("luminosity"),m=c("pressure"),h=c("humidity"),v=c("temperature");a["default"]=(0,o.combineReducers)({routing:l.routeReducer,sensorUv:p,sensorLuminosity:f,sensorPressure:m,sensorHumidity:h,sensorTemperature:v})},{"../actions/action-types":"/home/travis/build/developmentseed/sense/app/assets/scripts/actions/action-types.js",lodash:"lodash","react-router-redux":"react-router-redux",redux:"redux"}],"/home/travis/build/developmentseed/sense/app/assets/scripts/utils/format.js":[function(e,t,a){"use strict";t.exports.numDisplay=function(e){var t=arguments.length<=1||void 0===arguments[1]?2:arguments[1],a=arguments.length<=2||void 0===arguments[2]?"":arguments[2],s=arguments.length<=3||void 0===arguments[3]?"--":arguments[3];if(isNaN(e))return s;var r=e.toString();return r=-1===r.indexOf(".")?r:r.substr(0,r.indexOf(".")+t+1),r+a},t.exports.formatDate=function(e){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=e.getHours();a=10>a?"0"+a:a;var s=e.getMinutes();return s=10>s?"0"+s:s,t[e.getMonth()]+" "+e.getDate()+", "+a+":"+s},t.exports.round=function(e){var a=arguments.length<=1||void 0===arguments[1]?2:arguments[1];return+t.exports.numDisplay(e,a)}},{}],"/home/travis/build/developmentseed/sense/app/assets/scripts/views/app.js":[function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var r=e("react"),n=s(r),i=n["default"].createClass({displayName:"App",propTypes:{dispatch:n["default"].PropTypes.func,children:n["default"].PropTypes.object},render:function(){return n["default"].createElement("div",null,n["default"].createElement("header",{className:"site-header",role:"banner"},n["default"].createElement("div",{className:"inner"},n["default"].createElement("div",{className:"site-headline"},n["default"].createElement("h1",{className:"site-title"},"Devseed Sense Lisbon")))),n["default"].createElement("main",{className:"site-body",role:"main"},this.props.children))}});t.exports=i},{react:"react"}],"/home/travis/build/developmentseed/sense/app/assets/scripts/views/home.js":[function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function r(e){return{sensorUv:e.sensorUv,sensorLuminosity:e.sensorLuminosity,sensorPressure:e.sensorPressure,sensorHumidity:e.sensorHumidity,sensorTemperature:e.sensorTemperature}}function n(e){return{_requestSensorData:function(t,a){return e((0,f.fetchSensorData)(t,a))}}}var i=e("react"),o=s(i),l=e("react-redux"),u=e("lodash"),d=s(u),c=e("../components/sensor-widget"),p=s(c),f=e("../actions/action-creators"),m=e("../utils/format"),h=function(e){var t=new Date(e);return Math.floor(t.getTime()/1e3)},v=o["default"].PropTypes.shape({fetched:o["default"].PropTypes.bool,fetching:o["default"].PropTypes.bool,data:o["default"].PropTypes.array}),x=o["default"].createClass({displayName:"Home",propTypes:{_requestSensorData:o["default"].PropTypes.func,sensorUv:v,sensorLuminosity:v,sensorPressure:v,sensorHumidity:v,sensorTemperature:v},_mTimeThreshold:120,_mGroupSize:6,_fetchInterval:null,_fetchRate:300,prepareData:function(e){var t=null;if(e){t=[],e[0].value=+e[0].value;for(var a=[e[0]],s=1;s<e.length;s++){e[s].value=+e[s].value;var r=h(e[s-1].createdAt),n=h(e[s].createdAt);if(n-r>this._mTimeThreshold||a.length===this._mGroupSize){var i={createdAt:d["default"].last(a).createdAt,value:+(0,m.round)(d["default"].meanBy(a,"value"))};t.push(i),a=[]}a.push(e[s])}var o={createdAt:d["default"].last(a).createdAt,value:+(0,m.round)(d["default"].meanBy(a,"value"))};t.push(o)}var l=new Date;l.setHours(0),l.setMinutes(0),l.setSeconds(0),l=Math.floor(l.getTime()/1e3);var u=l-86400,c=[],p=[],f=[];d["default"].forEach(t,function(e){var t=new Date(e.createdAt),a=Math.floor(t.getTime()/1e3);c.push({timestep:t,value:+e.value}),a>=l&&p.push({timestep:t,value:+e.value}),l>a&&a>=u&&f.push({timestep:t,value:+e.value})});var v={today:d["default"].meanBy(p,"value"),yesterday:d["default"].meanBy(f,"value")},x=d["default"].last(c)||null;return{data:c,last:x,avgs:v}},fetchData:function(){var e=(new Date).getTime()-2592e5;e=new Date(e).toISOString(),this.props._requestSensorData("temperature",e),this.props._requestSensorData("humidity",e),this.props._requestSensorData("uv",e),this.props._requestSensorData("luminosity",e),this.props._requestSensorData("pressure",e)},componentDidMount:function(){var e=this;this.fetchData(),this._fetchInterval=setInterval(function(){e.fetchData()},1e3*this._fetchRate)},componentWillUnmount:function(){this._fetchInterval&&clearInterval(this._fetchInterval)},render:function(){var e=this.prepareData(this.props.sensorTemperature.data),t=this.prepareData(this.props.sensorHumidity.data),a=this.prepareData(this.props.sensorUv.data),s=this.prepareData(this.props.sensorLuminosity.data),r=this.prepareData(this.props.sensorPressure.data);return o["default"].createElement("section",{className:"page"},o["default"].createElement("header",{className:"page__header"},o["default"].createElement("div",{className:"inner"},o["default"].createElement("div",{className:"page__headline"},o["default"].createElement("h1",{className:"page__title"},"Sense Dashboard")))),o["default"].createElement("div",{className:"page__body"},o["default"].createElement("section",{className:"page__content"},o["default"].createElement("div",{className:"inner"},o["default"].createElement(p["default"],{className:"card--temp",fetching:this.props.sensorTemperature.fetching,fetched:this.props.sensorTemperature.fetched,title:"Temperature",lastReading:e.last,avgs:e.avgs,plotData:e.data,axisLineMax:35,axisLineVal:20,axisLineMin:4,unit:" ºC"}),o["default"].createElement(p["default"],{className:"card--hum",fetching:this.props.sensorHumidity.fetching,fetched:this.props.sensorHumidity.fetched,title:"Humidity",lastReading:t.last,avgs:t.avgs,plotData:t.data,axisLineMax:100,axisLineVal:50,axisLineMin:10,unit:" %"}),o["default"].createElement(p["default"],{className:"card--uv",fetching:this.props.sensorUv.fetching,fetched:this.props.sensorUv.fetched,title:"Uv light",lastReading:a.last,avgs:a.avgs,plotData:a.data,axisLineMax:5e3,axisLineVal:250,axisLineMin:0,unit:" μW/cm²"}),o["default"].createElement(p["default"],{className:"card--lux",fetching:this.props.sensorLuminosity.fetching,fetched:this.props.sensorLuminosity.fetched,title:"Luminosity",lastReading:s.last,avgs:s.avgs,plotData:s.data,axisLineMax:135e3,axisLineVal:5e4,axisLineMin:0,unit:" lx"}),o["default"].createElement(p["default"],{className:"card--press",fetching:this.props.sensorPressure.fetching,fetched:this.props.sensorPressure.fetched,title:"Air Pressure",lastReading:r.last,avgs:r.avgs,plotData:r.data,axisLineMax:1020,axisLineVal:1010,axisLineMin:1e3,unit:" hPa"})))))}});t.exports=(0,l.connect)(r,n)(x)},{"../actions/action-creators":"/home/travis/build/developmentseed/sense/app/assets/scripts/actions/action-creators.js","../components/sensor-widget":"/home/travis/build/developmentseed/sense/app/assets/scripts/components/sensor-widget.js","../utils/format":"/home/travis/build/developmentseed/sense/app/assets/scripts/utils/format.js",lodash:"lodash",react:"react","react-redux":"react-redux"}]},{},["/home/travis/build/developmentseed/sense/app/assets/scripts/main.js"]);