import ReactDOM from 'react-dom';

function PreviewDetailModalPortal({ children }) {
  const el = document.getElementById('preview-detail-modal');
  return ReactDOM.createPortal(children, el);
}

export default PreviewDetailModalPortal;
