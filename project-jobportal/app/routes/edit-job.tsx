import { useParams } from "react-router";
import FormJob from "~/components/form-job";

export default function EditJob() {
  const { id } = useParams();
  return <>
    <FormJob jobId={parseInt(id || '-1')} />
  </>
}