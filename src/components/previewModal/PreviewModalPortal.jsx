import ReactDOM from 'react-dom';

function PreviewModalPortal({ children }) {
  const el = document.getElementById('preview-modal');
  return ReactDOM.createPortal(children, el);
}

export default PreviewModalPortal;
