<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>Welcome,${user.name}</title>
</head>

<body>
<table border="1" cellpadding="0" cellspacing="0" id="table" name="table" align="center">
    <tr>
        <td colspan="2" align="center">注册</td>
    </tr>
    <tr>
        <td>用户名</td>
        <td>
            <input type="text" id="user" style="width:150px"/>
        </td>
    </tr>
    <tr>
        <td>密码</td>
        <td>
            <input type="password" id="password" style="width:150px"/>
        </td>
    </tr>
    <tr>
        <td>角色</td>
        <td>
            <select id="role">
                <option value="1">normal</option>
                <option value="2">basis</option>
                <option value="3">super</option>
                <option value="4">admin</option>
            </select>
        </td>
    </tr>
    <tr>
        <td>评价</td>
        <td>
            <input type="checkbox" name="comments" value="敬业"/>敬业
            <input type="checkbox" name="comments" value="文明"/>文明
            <br>
            <input type="checkbox" name="comments" value="自强"/>自强
            <input type="checkbox" name="comments" value="爱国"/>爱国
        </td>
    </tr>
    <tr>
        <td>性别</td>
        <td>
            <input type="radio" name="sexy"/>男
            <input type="radio" name="sexy"/>女
        </td>
    </tr>
    <tr>
        <td colspan="2" align="center">
            <input type="button" id="submit" value="提交"/>
            <input type="button" id="reset" value="重置"/>
        </td>
    </tr>
</table>
<br/><br/><br/><br/>
<div class="">
    <table border="1" cellspacing="0" cellpadding="0" id="listTable" align="center">
        <tr>
            <td colspan="7" align="center">
                <input type="button" value="刷新" onclick="refresh();"/>
            </td>
        </tr>
        <tr>
            <td>选中</td>
            <td>用户名</td>
            <td>密码</td>
            <td>角色</td>
            <td>评价</td>
            <td>性别</td>
            <td>操作</td>
        </tr>
        <tr>
            <td>
                <label>全选</label>
                <input type="checkbox" name="item" onclick="checkAll(this);"/>
            </td>
            <td colspan="6" align="center">
                <input type="button" value="选中删除" onclick="delRow();"/>
            </td>
        </tr>
        <%--        初始数据--%>
        <%--        <tr>--%>
        <%--            <td><input type="checkbox" name="item"/></td>--%>
        <%--            <td>007</td>--%>
        <%--            <td>123456</td>--%>
        <%--            <td>super</td>--%>
        <%--            <td>爱国</td>--%>
        <%--            <td>男</td>--%>
        <%--            <td>--%>
        <%--                <input type="button" value="删除" onclick="del(this);"/>--%>
        <%--                <input type="button" name="update" value="修改" onclick="modify(this)"/>--%>
        <%--            </td>--%>
        <%--        </tr>--%>
    </table>
</div>


<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
<script src="https://cdn.bootcss.com/jquery-validate/1.19.0/jquery.validate.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
<!--注意路径名前边有 ‘../’ -->
<script src="../statics/js/result.js"></script>

</body>

</html>
