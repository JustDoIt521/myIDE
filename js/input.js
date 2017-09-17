var dom = document.getElementById("whole");
var i = 1;
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
var bindEvent = function() {
    document.onkeydown = function(e) {
        //console.log(e);
        switch (e.keyCode) {
            case 13:
                inputIn();
                i++;
                var Input = document.createElement("input");
                Input.type = "text";
                Input.id = i;
                dom.appendChild(Input);
                Input = document.getElementById(i);
                Input.onfocus = function() { show(this.id); }
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
                if (m < i) {
                    m++;
                    focusOn();
                }
                break;
            default:
                //console.log(e.keyCode);
        }
        // console.log(lineValue[m - 1]);
        //console.log("m value is " + m);
    }
}
bindEvent();