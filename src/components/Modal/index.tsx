import EventForm from "../agent-dashboard/events/EventForm";
import useModal from "./useModal";

export default function Modals() {
  const { Modal } = useModal();
  return (
    <>
      <Modal modalId="modal" openId="eventModal" bodyClassName="md:w-1/2">
        <EventForm />
      </Modal>
    </>
  );
}
