class TicketsModel {
  ticketsData: any = {};
  ticketQueryParameters: any = {
    page: 1,
    limit: 50,
    totalPages: 1
  }
}

class ReducersModal {
   TicketsReducer: TicketsModel = new TicketsModel();
  }

export {
  ReducersModal,
   TicketsModel
};
