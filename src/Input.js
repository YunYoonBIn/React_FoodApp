import {useState} from 'react';
import './Input.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'html-react-parser';

function Input() {

  const [foodContent, setfoodContent] = useState({
    title: '',
    content: ''
  })

  const [viewContent, setViewContent] = useState([]);

  const getValue = e => {
    const { name, value } = e.target;
    setfoodContent({
      ...foodContent,
      [name]: value
    })
  };

  return (

    <div className="App">
      <div className="Food">
        <h1>Food Review</h1>
        <div className='Food-container'>
          {viewContent.map(element => {
            <div>
              <h2>{element.title}</h2>
              <div>
                {ReactHtmlParser(element.content)}
              </div>
            </div>
          })}
        </div>
        <div className='form-wrapper'>
          <input className="title-input"
            type='text'
            placeholder='제목'
            onChange={getValue}
            name='title'
          />
          <CKEditor
            editor={ClassicEditor}
            data="<p></p>"
            onReady={editor => {

              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              setfoodContent({
                ...foodContent,
                content: data
              })
              console.log(foodContent);
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
        </div>
        <button className="submit-button" 
        onClick={() => {
          setViewContent(viewContent.concat({ ...foodContent }));
        }
        }>입력</button>
      </div>
    </div>
  );
}

export default Input;