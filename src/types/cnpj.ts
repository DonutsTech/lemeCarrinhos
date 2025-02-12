export interface CNPJData {
  company: {
    name: string;
    members: {
      person: {
        name: string;
      };
    }[];
  };
  alias: string;
  founded: string;
  status: {
    text: string;
  };
  statusDate: string;
  mainActivity: {
    text: string;
  };
}
