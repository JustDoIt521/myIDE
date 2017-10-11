var dom = document.getElementById("whole");
var num = 1;
var focus = 1; //光标所在的div记录
var lineValue = [];
var show = function(id) {
        focus = id;
        //console.log(m);
    }
    //调整光标位置
var focusOn = function() {
        var point = document.getElementById(focus);
        // focus = point.id;
        point.focus();
    }
    //更新该行数据
var refreshData = function() {
        var value = document.getElementById(focus).value;
        console.log(value);
        lineValue[focus] = value;
        //console.log(lineValue[m]);
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
        Input.onclick = function() {
            show(this.id);
            focusOn();
        }
    }
    //更新存储数据
var refreshLine = function() {
    for (var i = 1; i <= num; i++)
        console.log(lineValue[i] + "\n");
    for (var i = 1; i <= num; i++) {
        if (i < focus) {
            lineValue[i] = lineValue[i];
        } else {
            lineValue[i] = lineValue[i + 1];
        }
    }
    console.log("***" + num + "****\n");
    num--;
    dom.innerHTML = " ";
    for (var i = 1; i <= num; i++) {
        refreshInput(i);
        var Div = document.getElementById(i);
        Div.value = lineValue[i];
    }
    for (var i = 1; i <= num; i++)
        console.log(lineValue[i] + "\n");
    console.log("***" + num + "****\n");
}
var bindEvent = function() {
    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 8:
                var value = document.getElementById(focus).value;
                if (!value && !lineValue[focus]) {
                    // console.log(1);
                    refreshLine();
                    //focus--;
                }
                break;
            case 13: //回车生成新行
                // inputIn();
                num++;
                refreshInput(num);
                focus++;
                focusOn();
                break;
            case 38: //光标上移
                //inputIn();
                if (focus > 1) {
                    focus--;
                    focusOn();
                }
                break;
            case 40: //光标下移
                //inputIn();
                if (focus < num) {
                    focus++;
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
refreshInput(1);
bindEvent();