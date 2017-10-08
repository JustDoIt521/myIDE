var dom = document.getElementById("whole");
var num = 1;
var m = 1; //光标所在的div记录
var lineValue = [];
var show = function(id) {
        m = id;
        //console.log(m);
    }
    //将该行数值写入
var inputIn = function() {
        if (document.getElementById(m).value) {
            lineValue[m] = document.getElementById(m).value;
        } else {
            lineValue[m] = 1;
        }
    }
    //调整光标位置
var focusOn = function() {
        var point = document.getElementById(m);
        point.focus();
    }
    //更新该行数据
var refreshData = function() {
        // console.log(document.getElementById(m).value);
        lineValue[m] = document.getElementById(m).value;
    }
    //更新input数据
var refreshInput = function(i) {
        var Input = document.createElement("input");
        Input.type = "text";
        Input.id = i;
        dom.appendChild(Input);
        Input = document.getElementById(i);
        Input.oninput = function() { refreshData(); }
        Input.onfocus = function() { show(this.id); }
    }
    //更新存储数据
var refreshLine = function() {
    for (var i = m; i < lineValue.length; i++) {
        lineValue[i] = lineValue[i + 1];
    }
    num--;
    dom.innerHTML = " ";
    for (var i = 1; i <= lineValue.length; i++) {
        refreshInput(i);
        var Div = document.getElementById(i);
        Div.value = lineValue[i];
    }
}
var Delete = function() {
    var value = document.getElementById(m).value;
    if (!value) {
        refreshLine();
    } else {
        lineValue[m] = value.substring(0, value.length - 1);
        console.log(lineValue[m]);
        //console.log(value + "    " + value.substring(0, value.length - 1));
        // if (lineValue[m].length == 0) {
        //     refreshLine();
        // }
    }
}
var bindEvent = function() {
    document.onkeydown = function(e) {
        //console.log(e);
        // var value = document.getElementById(m).value;
        // console.log(value);
        switch (e.keyCode) {
            case 8:
                Delete();
                break;
            case 13:
                inputIn();
                num++;
                refreshInput(num);
                m++;
                focusOn();
                break;
            case 38: //光标上移
                inputIn();
                if (m > 1) {
                    m--;
                    focusOn();
                }
                break;
            case 40: //光标下移
                inputIn();
                if (m < num) {
                    m++;
                    focusOn();
                }
                break;
            default:
                // console.log(document.getElementById(m).value.length);
        }
        // console.log(lineValue[m - 1]);
        //console.log("m value is " + m);
    }
}
bindEvent();