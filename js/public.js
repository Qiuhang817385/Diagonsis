(function () {
  var $ = {};
  //事件绑定封装
  function addEvent (params) {
    try {
      if (typeof params.elem == "object" && params.elem != undefined) {
        if (window.addEventListener) {
          params.elem.addEventListener(params.eventType, params.func);
        } else {
          params.elem.attachEvent("on" + params.eventType, function () {
            params.func.call(params.elem);
          });
        }
      } else {
        throw new Error("不是对象或对象为空");
      }
    } catch (ex) {
      alert(ex.message);
    }
  }

  //ajax封装
  function ajax (params) {
    try {

      if (typeof params == "object" && params != undefined) {
        //1.创建ajax对象
        if (window.XMLHttpRequest) {
          var xmlHttp = new XMLHttpRequest();
        } else {
          //ie6
          var xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //2.设置请求方法和接口地址
        //2.1.get 带参数请求
        if (params.method == "GET" && params.data != undefined) {
          xmlHttp.open(params.method, params.url + "?" + params.data)
        } else {
          //2.2.其他情况请求 
          xmlHttp.open(params.method, params.url);
        }
        //全局事件:
        xmlHttp.onloadend = function () {
          // 如果未定义,那么不调用
          if (params.complete) {
            params.complete();
          }
        }
        //3.设置请求参数的数据编码:
        if (params.data != undefined) {
          if (params.method == "GET") {
            xmlHttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
          }
          switch (params.header) {
            case 'urlencoded':
              xmlHttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
              break;
            case 'json':
              xmlHttp.setRequestHeader("content-type", "application/json");
              break;
          }
        }
        //4.绑定事件监控ajax 请求过程
        xmlHttp.onreadystatechange = function () {
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var data = xmlHttp.responseText;
            switch (params.dataType) {
              case 'json':
                data = JSON.parse(xmlHttp.responseText);
                break;
              case 'xml':
                data = xmlHttp.responseXML;//xml字符串转换为xml对象-->document代表整个xml文档
                break;
            }
            params.success(data);
          }
        };
        //5.send 发送请求
        if (params.method == "POST" && params.data != undefined) {
          xmlHttp.send(params.data);
        } else {
          xmlHttp.send();
        }

      } else {
        throw new Error("参数为空或不是对象");
      }
    } catch (ex) {
      alert(ex.message);
    }

  }
  $.ajax = ajax;
  $.addEvent = addEvent;
  window.$ = $;
})();