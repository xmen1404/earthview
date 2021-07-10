import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Editor from  'ckeditor5-custom-build/build/ckeditor';
import React , {useState, useEffect} from 'react';
// import {CKEditor} from 'ckeditor4-react';
// import CKEditor from 'ckeditor4-react-advanced';
// import CKEDITOR from 'ckeditor4-react-advanced';
import {apiUrl, LOCAL_STORAGE_TOKEN_NAME} from '../../contexts/constants';
import "../../styles/ckeditor/ckeditor.css";

const Ckeditor = (props) => {

    const editorConfiguration = {
        toolbar: {
            items: [ 
                'Heading', '|',
                'Undo', 'Redo', '|',
                'HorizontalLine', 'Strikethrough', '|',
                'Bold', 'Italic', 'Underline', '|',
                'FontFamily', 'FontColor', 'FontSize', 'FontBackgroundColor', '|',
                'Highlight', '|',
                'Subscript', 'Superscript', '|',
                'Outdent', 'Indent', 'Alignment' ,'|',
                'BulletedList', 'NumberedList', '|',
                'BlockQuote', '|',
                'uploadImage', 'Link', '|',
                'InsertTable', 'TodoList', '|',
                'Code', 'CodeBlock', '|',
                'ImageCaption'
            ],

            shouldNotGroupWhenFull: true,
        },

        image: {
            // Configure the available styles.
            styles: [
                'alignLeft', 'alignCenter', 'alignRight', 'side'
            ],

            // Configure the available image resize options.
            resizeOptions: [
                {
                    name: 'resizeImage:original',
                    label: 'Original',
                    value: null
                },
                {
                    name: 'resizeImage:25',
                    label: '25%',
                    value: '25'
                },
                {
                    name: 'resizeImage:50',
                    label: '50%',
                    value: '50'
                },
                {
                    name: 'resizeImage:75',
                    label: '75%',
                    value: '75'
                },
                {
                    name: 'resizeImage:100',
                    label: '100%',
                    value: '100'
                }
            ],

            // You need to configure the image toolbar, too, so it shows the new style
            // buttons as well as the resize buttons.
            toolbar: [
                'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight', 'imageStyle:side',
                '|',
                'resizeImage',
                '|',
                'imageTextAlternative'
            ]
        },

        fontSize: {
            options: [
                // Numerical values.
                9,10,11,12,13,14,15,16,17,18,19,20,
                21,'default',23,24,25,26,27,28,29,30,
                31,32,33,34,35,36,37,38,39,40,
                41,42,43,44,45,46,47,48,49,50,
                51,52,53,54,55,56,57,58,59,60,
                65,70,75,80,85,90,95,100    
               
            ],
            // supportAllValues: true
        },

        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                
            ]
        },

        // simpleUpload:{
        //     uploadUrl: apiUrl + '/uploads',
        //     headers: {
        //         // 'X-CSRF-TOKEN': 'CSRF-Token',
        //         'Content-Type': 'application/json',
        //         'Authorization': "Bearer " + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME),
        //     }
            
        // },

        // uploadImage:{
        //     uploadUrl: apiUrl + '/uploads',
        //     headers: {
        //         // 'X-CSRF-TOKEN': 'CSRF-Token',
        //         Authorization: "Bearer " + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)
        //     },
        // },

        ckfinder:{
            uploadUrl: apiUrl + '/uploads',
            headers: {
                // 'X-CSRF-TOKEN': 'CSRF-Token',
                Authorization: "Bearer " + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)
            }
        }

    };

    return <div className = "ckeditor">
        <CKEditor
            editor={ Editor }
            config={ editorConfiguration }
            data={props.initialData}
            onChange = {(event, editor)=> props.handleChange(event,props.state, editor)}
        />
    </div>
}

export default Ckeditor;