
//1.����div
function addChild(top,snowShape) {
    var div = document.createElement("div");
    div.innerHTML = snowShape;
    div.className = "flake";
    div.style.position = 'absolute';
    div.style.color = 'white';
    div.style.opacity = 0.9;
    div.style.left = parseInt(Math.random() * window.innerWidth) + 'px';
    div.style.top = top + 'px';
    div.style.fontSize = parseInt(Math.random() * 50) + 'px';
    document.body.appendChild(div);
};
//2.ѩ���Զ�����
function autoWipe(snowSpeed,snowShape) {
    var flake = document.getElementsByClassName('flake');
    var timer = setInterval(function () {
        for (var i = 0; i < flake.length; i++) {
            var opacity = flake[i].style.opacity;
            var offsetTop = Number((flake[i].style.top).replace('px',''));
            if (offsetTop < window.innerHeight) {
                offsetTop = offsetTop + snowSpeed;
                opacity = opacity - 0.003;
                flake[i].style.top = offsetTop + 'px';
                flake[i].style.opacity = opacity;
            } else {
                document.body.removeChild(flake[i]);
                addChild(0,snowShape);
            }
        }
    }, 100);
};
//3.�γ����Ч��
function final(bigSnowParam,snowShape) {
    for (var i = 0; i < bigSnowParam.snowNum; i++) {
        addChild(parseInt(Math.random() * window.innerHeight),snowShape);
    }
    autoWipe(bigSnowParam.snowSpeed,snowShape);
};
//4.����ѡ��snowNum Ϊÿ����ѩ������snowSpeedΪÿ����ѩ�ٶȣ���λΪ��
//��ѩ�ο�ֵ
var bigSnowParam = {
       snowNum:242,
       snowSpeed:6
};
//��ѩ�ο�ֵ
var midSnowParam = {
    snowNum:242,
    snowSpeed:3
};
//Сѩ�ο�ֵ
var littleSnowParam = {
    snowNum:242,
    snowSpeed:1
};
//�Զ���ѩ�ο�ֵ
var selfSnowParam = {
    snowNum:300,//ֵΪnumber
    snowSpeed:3//ֵΪnumber
};
//ѩ����״�ο�
var snowShapeObj = {
    1:'?',
    2:'?',
    3:'?',
    4:'?',
    5:'?',
    6:'?',
    7:'?',
    8:'?',
    9:'?',
    10:'?',
    11:'?',
    12:'��'
};
//5.����
final(bigSnowParam,snowShapeObj[12]);