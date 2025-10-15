import EventForm from "../agent-dashboard/events/EventForm";
import useModal from "./useModal";

export default function Modals() {
  const { Modal } = useModal();
  return (
    <>
      <Modal modalId="modal" openId="eventModal">
        <EventForm />
      </Modal>
    </>
  );
}
