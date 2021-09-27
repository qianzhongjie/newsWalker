/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//$('.show_more_arrow').click()
var app = {
    //初始化
    initialize: function () {
        var url = decodeURI(window.location.href);

        var argsIndex = url.split("?id=");

        var urls = 'http://c.m.163.com/nc/article/' +argsIndex[1] + '/full.html';
        $.ajax({
            type: 'POST',
            url: urls,
            dataType: 'JSONP',
            success: function (data) {

                app.pushhtml(argsIndex[1],data);
            },
            error: function (data) {
                app.showtoast('Error updating status: ' + data.responseText, function () { });
            }
        });
        // $('#newinfo').attr('onload',"app.pushhtml('"+argsIndex[1]+"')");
        // $('#newinfo').attr('src',urls);
       
        // app.pushhtml(argsIndex[1]);
        
    },
    pushhtml : function(id,data){ 
        var content = data[id]['body'];
        for(var i =0;i<data[id]['img'].length;i++){
            var img =data[id]['img'][i];
            var reg = new RegExp(img['ref'] , "g" )
            content = content.replace(reg , '<img src="'+img['src']+'" width="100%"/>');
        }
        $('.app').append(content);

    },
   
    //弹窗
    showtoast: function (msg, callback) {
        var options = {
            buttonText: '确定',
            dismissCallback: callback,
            //buttonCallback : goToMainScreen,
            timeout: 4000
        };
        //blackberry.ui.toast.show(msg, options);
    }
};

