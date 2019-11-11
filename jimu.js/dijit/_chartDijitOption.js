// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dijit/_WidgetBase","dojo/_base/lang","jimu/clientStatisticsUtils","jimu/_chartHelpUtils"],function(h,k,d,f,l){return h([k],{postMixInProperties:function(){this.nls=window.jimuNls.statisticsChart},constructor:function(b){this.map=b.map;this.chartHelpUtils=new l({map:this.map,clientStatisticsUtils:f})},init:function(b,a,c,e,d){this.chartHelpUtils.setLayerFeatureLayer(b);this.chartHelpUtils.setSymbolLayer(a);this.chartHelpUtils.setPopupInfo(c);this.chartHelpUtils.setMap(e);
this.chartHelpUtils.setLayerObject(d)},getClientStatisticsData:function(b){var a=f.getClietStatisticsData(b),a=f.sortClientStatisticsData(a,b),a=f.getDataForMaxLabels(a,b.maxLabels);return a=this.chartHelpUtils.keepStatisticsDataBestDecimalPlace(b,a,b.mode)},bindChartEvent:function(b,a,c){this.chartHelpUtils.bindChartEvent(b,a,c)},getChartOptionSeries:function(b,a){return this._createOptionSeries(b,a)},updateChartOptionDisplay:function(b,a,c){this._assigneeSettingColorToSeries(b,a,c);this.chartHelpUtils.updateChartSeriesDisplayName(b,
a,c);return this._mapSettingConfigToChartOption(b,a,c)},_assigneeSettingColorToSeries:function(b,a,c){if(!b||!b.series)return b;this.chartHelpUtils.assigneeSettingColor(a,b.series,c)},_createOptionSeries:function(b,a){var c=b.type,e=b.mode;b=b.valueFields;var f=[],f="count"===e?[""]:"field"===e?[""]:d.clone(b),g=null,g={type:c,labels:[],series:[]};g.series=f.map(d.hitch(this,function(a){return{name:a,type:c,data:[]}}));a.forEach(d.hitch(this,function(a){var b=a.label;g.labels.push(b);for(var c=0;c<
a.values.length;c++){var d={value:a.values[c],name:b,unit:a.unit};"feature"===e&&(d.originValue=a.originalValues[c]);g.series[c].data.push(d)}}));return g},_mapSettingConfigToChartOption:function(b,a,c){var e=c.type;this._settingColorArrayForPie(b,a,e,c.mode);this._settingAxisDisplay(b,a,e);b.type=e;b.dataZoom=["inside","slider"];b.confine=!0;b.backgroundColor=a.backgroundColor;b.tooltip=a.tooltip?d.clone(a.tooltip):{confine:!0,trigger:"radar"===e||"pie"===e?"item":"axis",axisPointer:"pie"!==e?{type:"line"===
e?"cross":"shadow",snap:!0}:{type:""}};a.marks&&a.marks.markLine&&(b.markLine=d.clone(a.marks.markLine));a.marks&&a.marks.markArea&&(b.markArea=d.clone(a.marks.markArea));a.legend&&(b.legend=d.clone(a.legend));a.xAxis&&(b.xAxis=d.clone(a.xAxis));a.yAxis&&(b.yAxis=d.clone(a.yAxis));a.dataLabel&&(b.dataLabel=d.clone(a.dataLabel));"pie"===e&&(b.innerRadius=a.innerRadius);b.theme=a.theme||"light";return b},_settingColorArrayForPie:function(b,a,c,e){"pie"===c&&"field"!==e&&(a=a.seriesStyle)&&a.styles&&
a.styles[0]&&(a=a.styles[0].style)&&Array.isArray(a.color)&&(c=d.clone(a.color),2===c.length&&(c=this.chartHelpUtils.getColors(d.clone(a.color),6)),b.color=c)},_settingAxisDisplay:function(b,a,c){if(!(0>["column","bar","line"].indexOf(c))){a.stack||(a.stack=!1);if("column"===c||"bar"===c||"line"===c&&a.area)b.stack=a.stack;"line"!==c||a.area||(a.area=!1);"line"===c&&(b.area=a.area);b.scale=!1}}})});