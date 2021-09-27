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
    initialize: function () {
        // app.showtoast('start', function () { });
        $.ajax({
            type: 'POST',
            url: 'http://c.3g.163.com/nc/article/list/T1467284926140/0-20.html',//'http://47.98.203.177:809/api/news/getlist',
            dataType: 'JSON',
            // data: datas,
            beforeSend: function(xhr) {
                xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36");
            },
            success: function (data) {
                // app.showtoast(typeof(data), function () { });
                app.pushhtml(data);
            },
            error: function (data) {
                app.showtoast('Error updating status: ' + data.responseText, function () { });
            }
        });
    },

    pushhtml: function (newsdata) {
        try {
            for (var i = 0; i < newsdata['T1467284926140'].length; i++) {
                var obj = newsdata['T1467284926140'][i];
                var str = '<li><a href="'+ obj['url'] + '"><img src="'+ obj['imgsrc'] + '" alt="" width="100%" /><br><span><h5><b>'+ obj['title'] + '</b></h5></span> </a></li><br>';
                $("#newlist").append(str);
            };
            app.showtoast('数据加载完成', function () { });
        } catch (err) {
            app.showtoast(err, function () { });
        }
    },

    showtoast: function (msg, callback) {
        var options = {
            buttonText: '确定',
            dismissCallback: callback,
            //buttonCallback : goToMainScreen,
            timeout: 4000
        };
        blackberry.ui.toast.show(msg, options);
    }
};

