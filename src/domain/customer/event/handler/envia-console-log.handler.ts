import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerAddressChangedEvent from "../customer-address-changed.event";

export default class EnviaConsoleLogHandler
  implements EventHandlerInterface<CustomerAddressChangedEvent>
{
  handle({ eventData }: CustomerAddressChangedEvent): void {
    console.log(`Endereço do cliente: ${eventData.id}, ${eventData.nome} alterado para: ${eventData.endereco}`); 
  }
}
