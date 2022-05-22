import Toast from "react-bootstrap/Toast";

const ToastCustom = ({ variant, message = null }) => {
  return (
    <Toast className="d-inline-block m-1" bg={variant.toString().toLowerCase()}>
      <Toast.Body style={{ fontSize: 20 }} className={"text-white"}>
        {message}
      </Toast.Body>
    </Toast>
  );
};
export default ToastCustom;
