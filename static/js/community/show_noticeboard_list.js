community_num = 1;
// get noticeboard
fetch('http://127.0.0.1:8000/noticeboard/create/')
    .then((response) => response.json())
    .then((json) => {
        let noticeboard = [];
        for (i = 0; i < json.length; i++) {
            noticeboard.push(json[i]['name']);
        }

        let tag_area = document.getElementById('noticeboard_name');

        for (i = 0; i < noticeboard.length; i++) {
            let make_noticeboard = document.createElement('button');
            make_noticeboard.setAttribute('id', `noticeboard_name${i}`);
            make_noticeboard.setAttribute('onclick', `location.href="https://github.com/soiyo"`);
            make_noticeboard.innerHTML = noticeboard[i];
            tag_area.appendChild(make_noticeboard);
        }
    });

// post noticeboard
function new_noticeboard() {
    let noticeboard_form_data = document.getElementById('modal_input_text').value;

    fetch('http://127.0.0.1:8000/noticeboard/create/', {
        method: 'POST',
        body: JSON.stringify({
            community: community_num,
            name: noticeboard_form_data,
        }),
        headers: {
            //헤더 값 정의
            'content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            alert(noticeboard_form_data + ' 이 생성되었습니다.');
            location.reload();
        });
}
