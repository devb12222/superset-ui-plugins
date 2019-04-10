(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1540:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var a,reactify=__webpack_require__(669),src=__webpack_require__(94),d3_hierarchy_src=__webpack_require__(979),prop_types=__webpack_require__(0),prop_types_default=__webpack_require__.n(prop_types),esm=__webpack_require__(136),NumberFormatterRegistrySingleton=__webpack_require__(135),_arguments=arguments,leafType=prop_types_default.a.shape({name:prop_types_default.a.string,value:prop_types_default.a.number.isRequired}),parentShape={name:prop_types_default.a.string,children:prop_types_default.a.arrayOf(prop_types_default.a.oneOfType([prop_types_default.a.shape((a=function(){return parentShape},function(){return a().apply(void 0,_arguments)})),leafType]))},nodeType=prop_types_default.a.oneOfType([prop_types_default.a.shape(parentShape),leafType]),propTypes={data:prop_types_default.a.arrayOf(nodeType),width:prop_types_default.a.number,height:prop_types_default.a.number,colorScheme:prop_types_default.a.string,margin:prop_types_default.a.shape({top:prop_types_default.a.number,right:prop_types_default.a.number,bottom:prop_types_default.a.number,left:prop_types_default.a.number}),numberFormat:prop_types_default.a.string,treemapRatio:prop_types_default.a.number};function hovered(a){return function(b){Object(src.b)(b.ancestors().map(function(a){return a.node})).classed("node--hover",a).select("rect").attr("width",function(b){return b.x1-b.x0-a}).attr("height",function(b){return b.y1-b.y0-a})}}function Treemap(a,b){var c=b.data,d=b.width,e=b.height,f=b.numberFormat,g=b.colorScheme,h=b.treemapRatio,i=Object(src.a)(a);i.classed("superset-legacy-chart-treemap",!0);var j=Object(NumberFormatterRegistrySingleton.b)(f),k=esm.b.getScale(g),l=c;if(i.selectAll("*").remove(),0<l.length){var m=l[0],o=Object(d3_hierarchy_src.b)().size([d,e]).paddingOuter(3).paddingTop(19).paddingInner(1).tile(d3_hierarchy_src.c.ratio(h)).round(!0)(Object(d3_hierarchy_src.a)(m).sum(function(a){return a.value}).sort(function(c,a){return a.height-c.height||a.value-c.value})),q=i.append("svg").attr("class","treemap").attr("width",d).attr("height",e).selectAll(".node").data(o.descendants()).enter().append("g").attr("transform",function(a){return"translate("+a.x0+","+a.y0+")"}).attr("class","node").each(function(a){a.node=this}).on("mouseover",hovered(!0)).on("mouseout",hovered(!1));q.append("rect").attr("id",function(a){return"rect-"+a.data.name}).attr("width",function(a){return a.x1-a.x0}).attr("height",function(a){return a.y1-a.y0}).style("fill",function(a){return k(a.depth)}),q.append("clipPath").attr("id",function(a){return"clip-"+a.data.name}).append("use").attr("xlink:href",function(a){return"#rect-"+a.data.name});var r=q.append("text").attr("clip-path",function(a){return"url(#clip-"+a.data.name+")"});r.filter(function(a){return a.children}).selectAll("tspan").data(function(a){return a.data.name.substring(a.data.name.lastIndexOf(".")+1).split(/(?=[A-Z][^A-Z])/g).concat(" "+j(a.value))}).enter().append("tspan").attr("x",function(a,b){return b?null:4}).attr("y",13).text(function(a){return a}),r.filter(function(a){return!a.children}).selectAll("tspan").data(function(a){return a.data.name.substring(a.data.name.lastIndexOf(".")+1).split(/(?=[A-Z][^A-Z])/g).concat(j(a.value))}).enter().append("tspan").attr("x",4).attr("y",function(a,b){return 13+10*b}).text(function(a){return a}),q.append("title").text(function(a){return a.data.name+"\n"+j(a.value)})}}Treemap.displayName="Treemap",Treemap.propTypes=propTypes;var esm_Treemap=Treemap;__webpack_exports__.default=Object(reactify.a)(esm_Treemap)}}]);
//# sourceMappingURL=38.a34332b3283d2d02af46.bundle.js.map