window.onload = function () {

    var submits = document.getElementById("submit");
    //获取焦点
    document.getElementById('user').focus();
    document.getElementById('user').select();
    //增加
    submits.onclick = function () {
        //获取用户信息
        var user = document.getElementById("user").value;
        //获取密码
        var password = document.getElementById("password").value;
        //获取角色
        var role = document.getElementById("role");
        //获取索引
        var index = role.selectedIndex;
        //获取选中值
        var roleValue = role.options[index].text;
        //获取评价
        var comments = document.getElementsByName("comments");
        //获取value值
        var selectValue = "";
        for (var i = 0; i < comments.length; i++) {
            var comment = comments[i];
            if (comment.checked === true) {
                selectValue = selectValue + comment.value + ",";
            }
        }
        //获取文本值
        var selectedValue = "";
        for (var i = 0; i < comments.length; i++) {
            if (comments[i].checked) {
//			nextSibling是获得当前对象的下一个对象
//			nodeValue是返回一个节点的值
                selectedValue = selectedValue + comments[i].value + " ";
//				selectedValue=selectedValue+comments[i].nextSibling.nodeValue;
            }
        }
        selectedValue = selectedValue.replace(/(\s*$)/g, "");
        var radioValue = "";
        var sexy = document.getElementsByName("sexy");
        for (var i = 0; i < sexy.length; i++) {
            if (sexy[i].checked) {
                radioValue = radioValue + sexy[i].nextSibling.nodeValue;
            }
        }


        //增加
        add(user, password, roleValue, selectedValue, radioValue);
    }

    //重置
    document.getElementById('reset').onclick = function () {
        resets();
    };

    function add(username, password, role, comments, sexy) {

        if (username === "" || password === "" || role === "" || comments === "" || sexy === "") {
            alert("Each info must be not empty!");
            return;
        }

        var user = {};
        user.name = username;
        user.password = password;
        user.role = role;
        user.comments = comments;
        if (sexy.trim().indexOf("女") !== -1) {
            user.sexy = 0;
        } else if (sexy.trim().indexOf("男") !== -1) {
            user.sexy = 1;
        } else {
            user.sexy = 2;
        }

        $.ajax({

            //result 是控制器，注意控制器不要有Controll后缀,addUser 是控制器的方法
            //注意路径前面有 ../ 需要先跳出user controller再去result controller
            url: "../result/addUser",
            //数据的提交方式：get和post
            type: "POST",
            async: false,
            //需要提交的数据
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(user),
            //请求成功后的回调函数
            success: function (res) {

                if (res === "OK") {
                    add2Front(username, password, role, comments, sexy);
                } else {
                    alert(res);
                }

            },
            //请求失败后的回调函数
            error: function (xhr, textStatus, errorThrown) {
                // /*错误信息处理*/
                // alert("进入error---");
                // alert("状态码："+xhr.status);
                // //当前状态,0-未初始化，1-正在载入，2-已经载入，3-数据进行交互，4-完成。
                // alert("状态:"+xhr.readyState);
                // alert("错误信息:"+xhr.statusText );
                alert("系统繁忙,请稍后再试!\n" + xhr.responseText);
                // alert("请求状态："+textStatus);
                // alert(errorThrown);
            }
        });

        //重置（方法）
        resets();
    }


    //创建一个框架节点
    function add2Front(username, password, role, comments, sexy) {

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        var td6 = document.createElement("td");
        var td7 = document.createElement("td");

        //赋值
        //setAttribute：修改节点属性
        var input1 = document.createElement("input");
        input1.setAttribute('type', 'checkbox');
        input1.setAttribute('name', 'item');
        td1.appendChild(input1);
        //获取到的值进行赋值,innerHTML获取到的值会把标签同时获取
        td2.innerHTML = username;
        td3.innerHTML = password;
        td4.innerHTML = role;
        td5.innerHTML = comments;
        td6.innerHTML = sexy;
        //操作添加
        //创建一个input节点
        var input2 = document.createElement("input");
        input2.setAttribute('type', 'button');
        input2.setAttribute('value', '删除');
        input2.setAttribute('onclick', 'del(this)');
        //追加节点
        td7.appendChild(input2);

        var input3 = document.createElement("input");
        input3.setAttribute('type', 'button');
        input3.setAttribute('name', 'update');
        input3.setAttribute('value', '修改');
        //添加修改事件
        input3.setAttribute('onclick', 'modify(this)');
        td7.appendChild(input3);

        //将所有td标签对放入tr中
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        var table = document.getElementById('listTable');
        table.appendChild(tr);
    }

    refresh = function refresh() {

        //刷新前先看数据库有没有数据
        $.ajax({

            url: "../result/findAll",
            type: "POST",
            async: false,
            success: function (users) {

                if (users.length !== 0) {

                    //有的话先清空原有数据
                    var tb = document.getElementById('listTable');
                    var rowNum = tb.rows.length;
                    if (rowNum > 3) {
                        for (i = 3; i < rowNum; i++) {
                            tb.deleteRow(i);
                            rowNum = rowNum - 1;
                            i = i - 1;
                        }
                    }

                    //展示查询到的数据
                    var sexy = "other";
                    for (var i = 0; i < users.length; i++) {
                        if (users[i].sexy === 0) {
                            sexy = "女";
                        } else if (users[i].sexy === 1) {
                            sexy = "男";
                        } else {
                            sexy = "other";
                        }
                        add2Front(users[i].name,
                            users[i].password,
                            users[i].role,
                            users[i].comments,
                            sexy
                        );
                    }

                } else {
                    alert("No data found!");
                }


            },
            //请求失败后的回调函数
            error: function (xhr, textStatus, errorThrown) {
                alert("系统繁忙,请稍后再试!\n" + xhr.responseText);
            }
        });


    }

    //全选
    checkAll = function (obj) {
        var checked = obj.checked;
        var item = document.getElementsByName("item");
        for (var i = 0; i < item.length; i++) {
            if (item[i].checked) {
                item[i].checked = null;
            } else {
                item[i].checked = checked;
            }
            item[i].checked = checked;
        }
    }

    //删除单项
    del = function (obj) {

        var tr = obj.parentNode.parentNode; //获取当前对象的父节点的父节点（也就是tr）
        var name = tr.cells[1].innerText;

        $.ajax({

            url: "../result/deleteUserByName",
            type: "POST",
            async: false,
            data: {name: name},
            success: function (res) {

                if (res === "OK") {
                    var parentTr = obj.parentNode.parentNode;
                    var parentTable = parentTr.parentNode;
                    parentTable.removeChild(parentTr);
                } else {
                    alert(res);
                }

            },
            //请求失败后的回调函数
            error: function (xhr, textStatus, errorThrown) {
                alert("系统繁忙,请稍后再试!\n" + xhr.responseText);
            }
        });

    }
    //删除选中
    delRow = function () {
        var items = document.getElementsByName("item");
        for (var i = 1; i < items.length; i++) {
            if (items[i].checked) {
                var parentNode = items[i].parentNode.parentNode;
                var tables = parentNode.parentNode;

                var tr = items[i].parentNode.parentNode; //获取当前对象的父节点的父节点（也就是tr）
                var name = tr.cells[1].innerText;

                i--;

                $.ajax({

                    url: "../result/deleteUserByName",
                    type: "POST",
                    async: false,
                    data: {name: name},
                    success: function (res) {

                        if (res === "OK") {
                            tables.removeChild(parentNode);
                        } else {
                            alert(res);
                        }

                    },
                    //请求失败后的回调函数
                    error: function (xhr, textStatus, errorThrown) {
                        alert("系统繁忙,请稍后再试!\n" + xhr.responseText);
                    }
                });

            }
        }
    }
}


//修改回显
var rowIndex;

function modify(obj) {

    //重置
    resets();

    //获取
    var user = document.getElementById('user');
    var password = document.getElementById("password");
    var role = document.getElementById("role");
    var index = role.selectedIndex;
    var roleValue = role.options[index].text;
    //获取tr和td对，以及选中的下标
    var tr = obj.parentNode.parentNode;
    var td = tr.getElementsByTagName('td');
    rowIndex = obj.parentNode.parentNode.rowIndex;
    //赋值
    user.value = td[1].innerHTML;
    password.value = td[2].innerHTML;
    roleValue = td[3].innerHTML;

    for (var i = 0; i < role.options.length; i++) {
        var value = role.options[i].text;
        if (value === roleValue) {
            role.options[i].selected = true;
        }
    }
    var interValue = td[4].innerHTML;
    var str = interValue.split(" ");
    var comments = document.getElementsByName("comments");
    for (var i = 0; i < str.length; i++) {
        for (let j = 0; j < comments.length; j++) {
            if (comments[j].value == str[i]) {
                comments[j].checked = true;
            }
        }
    }
    var sexy = document.getElementsByName("sexy");

    //这里更新到的值会出现换行，造成字符串无法比较
    var identValue = td[5].innerText;
    identValue = identValue.replace(/[\r\n]/g, "");//去掉换行符
    if (identValue === "男") {
        sexy[0].checked = true;
    } else if (identValue === "女") {
        sexy[1].checked = true;
    } else if (identValue === "其他") {
        sexy[2].checked = true;
    }

    //回显完毕后，修改按钮事件
    var addButton = document.getElementById('submit');


    if (user.value === "" || password.value === "" || roleValue === "" || comments === "" || sexy === "") {
        alert("Each info must be not empty!");
        return;
    }

    try {
        if (addButton.getAttribute("value") === "提交") {
            addButton.setAttribute('value', '更新');
            addButton.setAttribute('id', 'update');
            addButton.setAttribute('onclick', 'update2front()');
        }
    } catch (e) {

    }
}


//修改
function update2front() {

    var User = {};

    //获取
    var table = document.getElementById('listTable');
    var user = document.getElementById('user');
    var password = document.getElementById("password");
    var role = document.getElementById("role");
    var index = role.selectedIndex;
    var roleValue = role.options[index].text;
    var comments = document.getElementsByName("comments");
    //获取文本值
    var selectedValue = "";
    for (var i = 0; i < comments.length; i++) {
        if (comments[i].checked) {
            selectedValue = selectedValue + comments[i].value + " ";
        }
    }
    //去掉末尾空格
    selectedValue = selectedValue.replace(/(\s*$)/g, "");
    var radioValue = "";
    var sexy = document.getElementsByName("sexy");
    for (var i = 0; i < sexy.length; i++) {
        if (sexy[i].checked) {
            radioValue = radioValue + sexy[i].nextSibling.nodeValue;
        }
    }


    User.name = user.value;
    User.password = password.value;
    if (radioValue.trim().indexOf("女") !== -1) {
        User.sexy = 0;
    } else if (radioValue.trim().indexOf("男") !== -1) {
        User.sexy = 1;
    } else {
        User.sexy = 2;
    }
    User.role = roleValue;
    User.comments = selectedValue;

    $.ajax({

        url: "../result/updateUser",
        type: "POST",
        async: false,
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(User),
        success: function (res) {

            if (res === "OK") {
                //赋值
                table.rows[rowIndex].cells[1].innerHTML = user.value;
                table.rows[rowIndex].cells[2].innerHTML = password.value;
                table.rows[rowIndex].cells[3].innerHTML = roleValue;
                table.rows[rowIndex].cells[4].innerHTML = selectedValue;
                table.rows[rowIndex].cells[5].innerText = radioValue;

                //更新成功后，将按钮改回原来按钮，同时重置
                var updateButton = document.getElementById('update');
                updateButton.setAttribute('value', '提交');
                updateButton.setAttribute('type', 'button');
                updateButton.setAttribute('id', 'submit');
                updateButton.setAttribute('onclick', 'add()');
            } else {
                alert(res);
            }

        },
        //请求失败后的回调函数
        error: function (xhr, textStatus, errorThrown) {
            alert("系统繁忙,请稍后再试!\n" + xhr.responseText);
        }
    });

    resets();
}


//重置
function resets() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'text') {
            inputs[i].value = "";
        } else if (inputs[i].type === 'password') {
            inputs[i].value = "";
        } else if (inputs[i].type === 'checkbox') {
            if (inputs[i].checked) {
                inputs[i].checked = false;
            }
        } else if (inputs[i].type === 'radio') {
            inputs[0].checked = false;
        }
    }
    //重置下拉框
    var role = document.getElementById('role');
    role.selectedIndex = 0;
    //获取焦点
    document.getElementById('user').focus();
}

