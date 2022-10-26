import { AngularEditorConfig } from '@kolkov/angular-editor';

const commonConfigs: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: 'auto',
  maxHeight: 'auto',
  width: 'auto',
  minWidth: '0',
  translate: 'yes',
  enableToolbar: true,
  showToolbar: true,
  defaultParagraphSeparator: '',
  defaultFontName: '',
  defaultFontSize: '',
  fonts: [
    { class: 'arial', name: 'Arial' },
    { class: 'times-new-roman', name: 'Times New Roman' },
    { class: 'calibri', name: 'Calibri' },
    { class: 'comic-sans-ms', name: 'Comic Sans MS' },
  ],
  customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText',
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ],
  uploadUrl: 'v1/image',
  uploadWithCredentials: false,
  sanitize: true,
  toolbarPosition: 'top',
};

export const titleEditorConfig: AngularEditorConfig = {
  ...commonConfigs,
  placeholder: 'Add post title here...',
  minHeight: '30px',
};

export const contentEditorConfig: AngularEditorConfig = {
  ...commonConfigs,
  placeholder: 'Add post body here...',
  minHeight: '200px',
};
