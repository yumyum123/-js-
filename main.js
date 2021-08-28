//btnUp, btnDown, panel, panel>li의 DONM 변수에 저장
//패널의 갯수 변수에 저장
//btnUp 클릭시 moveUp함수 호출
//moveUp함수 정의
// --현재 on이 붙어잇는 패널을 찾음 (활성화되어 잇는 패널)
// -- 활성화 되어 있는 패널이 data-index값을 구해서 해당 패널의 순번을 변수에 저장
//moveUp함수가 실행이 될때마다 현재 순번을 계속 증가시킴
//현재 패널의 순번이 마지막패널 순번이면 증가가 아닌 0으로 초기화

//현재 활성화 있는 패널의 on을 순간적으로 지우고
//해당 패널에 다시 top클래스를 추가

const btnUp = document.querySelector(".btnUp");
const pannel_li = document.querySelectorAll(".panel li");
const len = pannel_li.length-1;

btnUp.addEventListener("click",e=>{
    e.preventDefault();

    //현재 활성화된 패널을 찾아서 on 을 지우고 top을 붙여서 사라지는 모션적용
    //클래스 on이 있는 활성화 패널을 변수에 저장
    let current_item = panel.querySelector(".on");
    //활성화된 패널의 datd-index속성값을 구해서 현재 순번을 저장
    let current_index = parseInt(current_item.getAttribute("data-index"));
    //다음패널의 순번이 저장될 변수를 미리 생성
    let next_index;

    //현재 패널의 순번이 마지막패널순번이 아니면 1을 증가
    //현재 패널의 순번이 마지막패널순번이면 0을 변수에 저장
    (current_index != len) ? next_index = current_index+1 : next_index = 0;

    //현재 활성화된 패널의 on을 지우고 top을 붙여서
    //기존 활성화 패널이 위로 회전하며 사라지게 설정
    current_item.classList.remove("on");
    current_item.classList.add("top");

    //다음순번의 패널을 선택해서 일단 bottom클래스를 붙여서
    //아래쪽에 회전된 상태로 대기시킴
    pannel_li[next_index].classList.add("bottom");

    //0.5초 뒤에
    setTimeout(()=>{
        //다음 패널이 bottom클래스를 지우면서 on을 추가해서
        //위로 회전하며 활성화되는 모션추가
        pannel_li[next_index].classList.remove("bottom");
        pannel_li[next_index].classList.remove("on");
        panel.querySelector(".top").classList.remove("top");
    },500);

});
