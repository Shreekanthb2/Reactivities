import { Spinner } from "react-bootstrap";

interface Props {
  loading: boolean;
  content: string;
}

export default function LoadingComponent({
  content = "Loading...",
  loading,
}: Props) {
  return (
    <>
      {loading && (
        <div className="activities-spinner">
          <Spinner animation="border" role="status"></Spinner>
          <br />
          <span className="visually-hidden">{content}</span>
        </div>
      )}
    </>
  );
}
