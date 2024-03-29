// 게시글 작성하는 부분 띄우기
function write_article(clicked_id) {
    try {
        let write_article_noticeboard_num = clicked_id.split('_', 5)[3];
        let write_article_noticeborad_name = clicked_id.split('_', 5)[4];

        let hide_display = document.getElementById('article_and_comment_display');
        hide_display.setAttribute('style', 'display:none');
        let hide_display_article = document.getElementById('right_side_item');
        hide_display_article.setAttribute('style', 'display:none');
        let show_display = document.getElementById('article_mod_wrap_area');
        show_display.setAttribute('style', 'display:flex');
        let hide_display_all_article = document.getElementById('noticeboard_all');
        hide_display_all_article.setAttribute('style', 'display:none');

        let article_mod_area = document.getElementById('article_mod_area');
        article_mod_area.innerHTML = `
        <div class="article_header">
            <h2 id="noticeboard">${write_article_noticeborad_name} 게시판</h2>
            <button id="wrtie_article_id_${write_article_noticeboard_num}" type="button" onclick="postArticle(this)" class="article_write_button">작성</button>
        </div>
        <hr />    
        <div class="article_mod_writearea">
            <input class="article_title" type="text" name="title" id="article_title" placeholder="제목을 입력해 주세요."></input>
        </div>
        <hr />
        <div class="article_mod_content">
            <div id = "article_content"></div>
        </div>
        <div class="article_mod_file_area">
            <input type="file" name="file" id="article_file"></input>
        </div>`;
        let toolbarOptions = [
            // [{font: ['Sans Serif', 'Serif', 'Monospace']}]
            [{header : [1, 2, false]}],
            [{ size: [ 'small', false, 'large', 'huge' ]}],
            ['bold', 'italic', 'underline', 'strike'],
            ['color', 'background'],
            ['script'],
            ['blockquote', 'code-block'],
            ['list', 'indent', 'align', 'direction'],
            ['link', 'image', 'video', 'formula']
        ];
        let quillEditor = new Quill(
            '#article_content',
            {
                modules: {
                    toolbar: toolbarOptions
                },
                theme:'snow'
            }
        );
    } catch (error) {
        console.error(error);
        alert('게시글 작성하는 부분 띄우기에서 오류가 발생했습니다!');
    }
}
