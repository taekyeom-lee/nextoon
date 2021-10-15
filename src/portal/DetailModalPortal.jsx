import ReactDOM from 'react-dom';

function DetailModalPortal({ children }) {
  const el = document.getElementById('detail-modal');
  return ReactDOM.createPortal(children, el);
}

export default DetailModalPortal;
