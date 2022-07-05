import { useState } from 'react';
import { Toast } from 'react-bootstrap';
function Notification({ msg, resmsg }) {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  return (
    <Toast show={showA} onClose={toggleShowA} id="toast">
      <Toast.Header>
        <strong className="me-auto">{'Authetication Error'}</strong>
        {/* <small>11 mins ago</small> */}
      </Toast.Header>
      <Toast.Body>{msg}</Toast.Body>
    </Toast>
  );
}

export default Notification;
